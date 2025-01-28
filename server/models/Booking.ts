import { Schema, model, Document } from "mongoose";

export interface IBooking extends Document {
  email: string;
  phoneNumber: string;
  address: string;
  name: string;
  message: string;
  info: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  info: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now },
});

export const Booking = model<IBooking>("Booking", bookingSchema);
