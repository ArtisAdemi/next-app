import { connectToDatabase } from "../db";
import { ObjectId } from "mongodb";
import { sendBookingNotification } from "../utils/emailService";

export type CreateBookingRequest = {
  body: {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    message: string;
    info: string;
  };
};

export type BookingResponse =
  | Response
  | {
      success: boolean;
      message?: string;
      data?: Record<string, unknown>;
    };

export const bookingController = {
  async createBooking(
    req: CreateBookingRequest,
    res: {
      status: (code: number) => {
        json: (data: BookingResponse) => BookingResponse;
      };
    }
  ): Promise<BookingResponse> {
    try {
      const { email, phoneNumber, address, message, name, info } = req.body;

      if (!email || !phoneNumber || !address || !message || !name || !info) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      const { db } = await connectToDatabase();

      const newBooking = {
        email,
        phoneNumber,
        address,
        message,
        name,
        info,
        status: "pending",
        createdAt: new Date(),
      };
      
      const result = await db.collection("bookings").insertOne(newBooking);
      
      // Send email notification with booking details
      try {
        const emailSent = await sendBookingNotification({
          ...newBooking,
          _id: result.insertedId,
          // Add required Document methods to satisfy IBooking interface
          toObject: () => newBooking,
          $isDeleted: () => false,
          $isNew: () => true,
          $isValid: () => true
        } as any);
        
        if (!emailSent) {
          console.warn('Failed to send booking notification email, but booking was created successfully');
        }
      } catch (emailError) {
        console.error('Error in email notification process:', emailError);
        // We don't want to fail the booking creation if email fails
        // So we just log the error and continue
      }

      return res.status(201).json({
        success: true,
        data: { bookingId: result.insertedId },
      });
    } catch (error) {
      console.error("Error in createBooking:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  async getBookings(
    req: object,
    res: {
      status: (code: number) => {
        json: (data: BookingResponse) => BookingResponse;
      };
    }
  ): Promise<BookingResponse> {
    try {
      const { db } = await connectToDatabase();
      const bookings = await db
        .collection("bookings")
        .find()
        .sort({ createdAt: -1 })
        .toArray();

      return res.status(200).json({
        success: true,
        data: { bookings },
      });
    } catch (error) {
      console.error("Error in getBookings:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  async updateBookingStatus(
    req: {
      params: { id: string };
      body: { status: string };
    },
    res: {
      status: (code: number) => {
        json: (data: BookingResponse) => BookingResponse;
      };
    }
  ): Promise<BookingResponse> {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const { db } = await connectToDatabase();
      const result = await db
        .collection("bookings")
        .updateOne({ _id: new ObjectId(id) }, { $set: { status } });

      if (result.matchedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Booking status updated successfully",
      });
    } catch (error) {
      console.error("Error in updateBookingStatus:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  async removeBooking(
    req: {
      params: { id: string };
    },
    res: {
      status: (code: number) => {
        json: (data: BookingResponse) => BookingResponse;
      };
    }
  ): Promise<BookingResponse> {
    try {
      const { id } = req.params;
      const { db } = await connectToDatabase();
      const result = await db
        .collection("bookings")
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Booking removed successfully",
      });
    } catch (error) {
      console.error("Error removing booking:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};
