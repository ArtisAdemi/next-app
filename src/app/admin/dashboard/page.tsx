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
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        const updatedBookings = bookings.map((booking) =>
          booking._id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        );
        setBookings(updatedBookings);
        
        // Update the selected booking if it's the same as the updated booking
        if (selectedBooking && selectedBooking._id === bookingId) {
          setSelectedBooking({
            ...selectedBooking,
            status: newStatus
          });
        }
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

  const openBookingModal = (booking: Booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center text-red-500 text-2xl">
      Error: {error}
    </div>
  );

  return (
    <div className="px-[4%] py-12 bg-gray-white min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-12 text-[#FF8C00] text-center">
        Booking Management Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bookings.map((booking: Booking) => (
          <div 
            key={booking._id} 
            className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden 
                      transform transition-all duration-300 hover:shadow-2xl"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[#FF8C00] font-semibold text-xl truncate">
                  {booking.name || 'Anonymous Booking'}
                </h2>
                <span 
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase
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
                <div className="flex items-center text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FF8C00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#333333]">
                  {booking.email}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center space-x-2">
                <button 
                  onClick={() => openBookingModal(booking)}
                  className="bg-transparent border border-[#FF8C00] text-[#FF8C00] px-4 py-2 rounded-lg 
                             hover:bg-[#FF8C00] hover:text-white transition-colors flex-grow text-center"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Details Modal */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-[#333333] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#FF8C00]">
                Booking Details
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    value={selectedBooking.name || 'N/A'} 
                    readOnly 
                    className="w-full bg-gray-100 text-black rounded-lg p-2 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input 
                    type="text" 
                    value={selectedBooking.email} 
                    readOnly 
                    className="w-full bg-gray-100 text-black rounded-lg p-2 border border-gray-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                  <input 
                    type="text" 
                    value={selectedBooking.phoneNumber} 
                    readOnly 
                    className="w-full bg-gray-100 text-black rounded-lg p-2 border border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Status</label>
                  <select
                    value={selectedBooking.status}
                    onChange={(e) => handleStatusChange(selectedBooking._id, e.target.value)}
                    disabled={updateLoading === selectedBooking._id}
                    className="w-full bg-gray-100 text-black rounded-lg p-2 border border-gray-600"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
                <textarea 
                  value={selectedBooking.address} 
                  readOnly 
                  className="w-full bg-gray-100 text-black rounded-lg p-2 border border-gray-600 min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea 
                  value={selectedBooking.message || 'No additional message'} 
                  readOnly 
                  className="w-full bg-gray-100 text-black rounded-lg p-2 border border-gray-600 min-h-[100px]"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button 
                  onClick={closeModal}
                  className="border border-[#FF8C00] hover:bg-[#FF8C00] hover:text-white text-[#FF8C00] px-4 py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
                {updateLoading === selectedBooking._id ? (
                  <div className="border border-[#FF8C00] hover:bg-[#FF8C00] hover:text-white text-[#FF8C00]px-4 py-2 rounded-lg opacity-50 cursor-not-allowed">
                    Updating...
                  </div>
                ) : (
                  <button 
                    onClick={() => handleStatusChange(selectedBooking._id, selectedBooking.status)}
                    className="border border-[#FF8C00] hover:bg-[#FF8C00] hover:text-white text-[#FF8C00] px-4 py-2 rounded-lg transition-colors"
                  >
                    Update Status
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
