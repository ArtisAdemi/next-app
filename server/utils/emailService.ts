import nodemailer from "nodemailer";
import { IBooking } from "../models/Booking";

// Email configuration
const createTransporter = () => {
  // Log environment variables (without exposing sensitive data)
  console.log('Email configuration:', {
    userConfigured: !!process.env.EMAIL_USER,
    passConfigured: !!process.env.EMAIL_PASS,
    userValue: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}...` : 'not set'
  });
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email environment variables (EMAIL_USER, EMAIL_PASS) are not properly configured');
  }
  
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const sendBookingNotification = async (
  booking: IBooking
): Promise<boolean> => {
  try {
    // Create transporter inside the function to ensure env vars are loaded
    const transporter = createTransporter();
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
};
