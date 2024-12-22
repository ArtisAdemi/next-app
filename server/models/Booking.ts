import { Schema, model, Document } from 'mongoose';

export interface IBooking extends Document {
    email: string;
    phoneNumber: string;
    location: string;
    message: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
    createdAt: Date;
}

const bookingSchema = new Schema<IBooking>({
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    location: { type: String, required: true },
    message: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

export const Booking = model<IBooking>('Booking', bookingSchema); 