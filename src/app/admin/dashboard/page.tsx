"use client";
import { useEffect, useState } from "react";
import {
  getBookingsAction,
  updateBookingStatusAction,
} from "@/app/actions/bookings";

interface Booking {
  _id: string;
  email: string;
  phoneNumber: string;
  address: string;
  message: string;
  status: string;
  name: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updateLoading, setUpdateLoading] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookingsAction();
        if (response.success) {
          setBookings(response.data as unknown as Booking[]);
        } else {
          setError(response.message || "Failed to fetch bookings");
        }
      } catch {
        setError("Failed to fetch bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    setUpdateLoading(bookingId);
    try {
      const response = await updateBookingStatusAction(bookingId, newStatus);
      if (response.success) {
        setBookings(
          bookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, status: newStatus }
              : booking
          )
        );
      } else {
        throw new Error(response.message || "Failed to update status");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update booking status");
    } finally {
      setUpdateLoading(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      <div className="grid gap-4">
        {bookings.map((booking: Booking) => (
          <div key={booking._id} className="border p-4 rounded-lg">
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.phoneNumber}
            </p>
            <p>
              <strong>Location:</strong> {booking.address}
            </p>
            <p>
              <strong>Message:</strong> {booking.message}
            </p>
            <div className="flex items-center gap-2">
              <strong>Status:</strong>
              <select
                value={booking.status}
                onChange={(e) =>
                  handleStatusChange(booking._id, e.target.value)
                }
                disabled={updateLoading === booking._id}
                className="border rounded p-1"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              {updateLoading === booking._id && (
                <span className="text-sm text-gray-500">Updating...</span>
              )}
            </div>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(booking.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
