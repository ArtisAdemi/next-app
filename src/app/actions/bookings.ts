"use server";

import { cookies } from "next/headers";
import { connectToDatabase } from "../../../server/db";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

const JWT_SECRET = process.env.JWT_SECRET || "your-default-secret-key";

export async function getBookingsAction() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return { success: false, message: "Not authenticated" };
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { role: string };

    if (decoded.role !== "admin") {
      return { success: false, message: "Not authorized" };
    }

    const { db } = await connectToDatabase();
    const bookings = await db
      .collection("bookings")
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    // Serialize the MongoDB documents
    const serializedBookings = bookings.map((booking) => ({
      ...booking,
      _id: booking._id.toString(),
      createdAt: booking.createdAt.toISOString(),
    }));

    return { success: true, data: serializedBookings };
  } catch (error) {
    console.error("Get bookings error:", error);
    return { success: false, message: "Internal server error" };
  }
}

export async function createBookingAction(formData: {
  email: string;
  phoneNumber: string;
  address: string;
  name: string;
  message: string;
  info: string;
}) {
  try {
    // Create booking in database
    const { db } = await connectToDatabase();
    const newBooking = {
      ...formData,
      status: "pending",
      createdAt: new Date(),
    };
    
    const result = await db.collection("bookings").insertOne(newBooking);
    console.log("Booking created with ID:", result.insertedId.toString());
    
    // Send email notification
    await sendBookingEmail({
      ...newBooking,
      _id: result.insertedId
    });
    
    return {
      success: true,
      data: { bookingId: result.insertedId.toString() },
    };
  } catch (error) {
    console.error("Create booking error:", error);
    return { success: false, message: "Internal server error" };
  }
}

// Email notification function
async function sendBookingEmail(booking: any): Promise<boolean> {
  console.log("Starting email notification process...");
  
  try {
    // Log environment variables (without exposing sensitive data)
    console.log('Email configuration:', {
      userConfigured: !!process.env.EMAIL_USER,
      passConfigured: !!process.env.EMAIL_PASS,
      userValue: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}...` : 'not set'
    });
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables (EMAIL_USER, EMAIL_PASS) are not properly configured');
      return false;
    }
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    // Format the date
    const formattedDate = new Date(booking.createdAt).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    
    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // The email where you want to receive notifications
      subject: `New Booking Request from ${booking.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Name:</strong> ${booking.name}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phoneNumber}</p>
        <p><strong>Address:</strong> ${booking.address}</p>
        <p><strong>Service Info:</strong> ${booking.info}</p>
        <p><strong>Message:</strong> ${booking.message}</p>
        <p><strong>Status:</strong> ${booking.status}</p>
        <hr>
        <p>Please log in to your admin dashboard to manage this booking.</p>
      `,
    };
    
    // Send email
    console.log(`Attempting to send email from ${mailOptions.from} to ${mailOptions.to}`);
    const info = await transporter.sendMail(mailOptions);
    console.log("Booking notification email sent successfully:", {
      messageId: info.messageId,
      response: info.response
    });
    return true;
  } catch (error) {
    console.error("Error sending booking notification email:", error);
    return false;
  }
}

export async function updateBookingStatusAction(
  bookingId: string,
  status: string
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return { success: false, message: "Not authenticated" };
    }

    const decoded = jwt.verify(token, JWT_SECRET) as { role: string };

    if (decoded.role !== "admin") {
      return { success: false, message: "Not authorized" };
    }

    const { db } = await connectToDatabase();

    const result = await db
      .collection("bookings")
      .updateOne({ _id: new ObjectId(bookingId) }, { $set: { status } });

    if (result.matchedCount === 0) {
      return { success: false, message: "Booking not found" };
    }

    return { success: true, message: "Booking status updated successfully" };
  } catch (error) {
    console.error("Update booking status error:", error);
    return { success: false, message: "Internal server error" };
  }
}

export const removeBooking = async (bookingId: string) => {
  try {
    const { db } = await connectToDatabase();
    const result = await db
      .collection("bookings")
      .deleteOne({ _id: new ObjectId(bookingId) });

    if (result.deletedCount === 0) {
      return { success: false, message: "Booking not found" };
    }

    return { success: true, message: "Booking removed successfully" };
  } catch (error) {
    console.error("Error removing booking:", error);
    return { success: false, message: "Internal server error" };
  }
};
