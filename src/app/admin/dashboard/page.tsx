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
    <div className="p-8 bg-[#333333] min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-[#4682B4] text-center">Booking Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bookings.map((booking: Booking) => (
          <div 
            key={booking._id} 
            className="bg-[#D3D3D3] text-[#333333] rounded-xl shadow-lg overflow-hidden 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#4682B4] font-semibold text-lg truncate">
                  {booking.name || 'Anonymous Booking'}
                </h2>
                <span 
                  className={`px-2 py-1 rounded-full text-xs font-bold uppercase
                    ${
                      booking.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                      booking.status === 'confirmed' ? 'bg-green-200 text-green-800' :
                      booking.status === 'completed' ? 'bg-blue-200 text-blue-800' :
                      'bg-red-200 text-red-800'
                    }`}
                >
                  {booking.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#4682B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {booking.email}
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#4682B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {booking.phoneNumber}
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#4682B4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {booking.address}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <select
                  value={booking.status}
                  onChange={(e) =>
                    handleStatusChange(booking._id, e.target.value)
                  }
                  disabled={updateLoading === booking._id}
                  className="border border-[#4682B4] rounded p-1 bg-white text-[#333333] 
                             focus:outline-none focus:ring-2 focus:ring-[#FF8C00] w-full mr-2"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                {updateLoading === booking._id ? (
                  <span className="text-[#FF8C00] text-sm">Updating...</span>
                ) : (
                  <button
                    onClick={() => handleStatusChange(booking._id, booking.status)}
                    className="bg-[#FF8C00] text-white px-3 py-1 rounded 
                               hover:bg-opacity-90 transition-colors"
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
