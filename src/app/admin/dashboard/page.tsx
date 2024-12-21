"use client";
import { useEffect, useState } from "react";
import { getBookingsAction } from "@/app/actions/bookings";

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>
      <div className="grid gap-4">
        {bookings.map((booking: Booking) => (
          <div key={booking._id} className="border p-4 rounded-lg">
            <p>
              <strong>Name:</strong> {booking.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.phoneNumber}
            </p>
            <p>
              <strong>Address:</strong> {booking.address}
            </p>
            <p>
              <strong>Message:</strong> {booking.message}
            </p>
            <p>
              <strong>Status:</strong> {booking.status}
            </p>
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
