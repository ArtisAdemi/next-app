"use server";

import { cookies } from "next/headers";
import { connectToDatabase } from "../../../server/db";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";

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
      .find({ status: "pending" })
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
}) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection("bookings").insertOne({
      ...formData,
      status: "pending",
      createdAt: new Date(),
    });

    return { 
      success: true, 
      data: { bookingId: result.insertedId.toString() } 
    };
  } catch (error) {
    console.error("Create booking error:", error);
    return { success: false, message: "Internal server error" };
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
