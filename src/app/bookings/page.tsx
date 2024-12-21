"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { createBookingAction } from "../actions/bookings";

export default function Bookings() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<{
    email?: string;
    name?: string;
    address?: string;
    phoneNumber?: string;
    message?: string;
  }>({});

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        const response = await createBookingAction({
          email: formData.get("email") as string,
          phoneNumber: formData.get("phoneNumber") as string,
          address: formData.get("address") as string,
          name: formData.get("name") as string,
          message: formData.get("message") as string,
        });
        if (response?.success) {
          Swal.fire("Success", "Booking created successfully", "success");
          router.push("/");
        } else {
          setErrors({
            email: response?.message || "Email is required",
            name: response?.message || "Name is required",
            address: response?.message || "Address is required",
            phoneNumber: response?.message || "Phone number is required",
            message: response?.message || "Message is required",
          });
        }
      } catch (error) {
        Swal.fire("Error", "Failed to create booking", "error");
        console.error("Create booking error:", error);
      }
    });
  };

  return (
    <div className="grid bg-gray-900 grid-rows-[1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-white text-center">Book Now</h1>

        <form
          action={handleSubmit}
          className="w-full space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Address"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-12"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-white mb-4">
            Other Ways to Reach Us
          </h2>
          <div className="space-y-2 text-sm text-gray-300">
            <p>Email: contact@example.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Web Dev Street, Digital City, 12345</p>
          </div>
        </div>
      </main>
    </div>
  );
}
