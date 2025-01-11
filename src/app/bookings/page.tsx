"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { createBookingAction } from "../actions/bookings";
import Navbar from "@/components/globals/Navbar";

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
    <div className="bg-[#333333] min-h-screen border border-t-0 border-l-0 border-r-0 border-b-[#FFF]">
      <div className="border border-t-0 border-l-0 border-r-0 border-b-[#FFF]">
      <Navbar />
      </div>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-[#2B2B2B] rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-12">
              <h5 className="font-semibold mb-2 text-xl text-[#FF8C00]">Book Your Service</h5>
              <h1 className="text-4xl font-bold text-white">Schedule a Consultation</h1>
            </div>

            <form action={handleSubmit} className="space-y-6">
              {[{
                name: "name",
                label: "Full Name",
                type: "text",
                placeholder: "Your Full Name"
              },
              {
                name: "email",
                label: "Email Address",
                type: "email",
                placeholder: "your@email.com"
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "tel",
                placeholder: "(555) 123-4567"
              },
              {
                name: "address",
                label: "Service Location",
                type: "text",
                placeholder: "Your Address"
              }
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-[#C0C0C0] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#444] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                  />
                  {errors[field.name as keyof typeof errors] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name as keyof typeof errors]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#C0C0C0] mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#444] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group w-full rounded-lg bg-[#FF8C00] text-white font-semibold py-3 px-6 transition-transform duration-300 hover:scale-105 relative overflow-hidden"
              >
                {isPending ? "Submitting..." : "Book Consultation"}
                {/* Bottom line */}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
                {/* Right line */}
                <span className="absolute top-0 -right-1 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8 bg-[#2B2B2B] rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-[#FF8C00] mb-4">
            Alternative Contact Methods
          </h2>
          <div className="space-y-2 text-[#C0C0C0]">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF8C00]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <p>palushajepoxy@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF8C00]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>+1 586-453-3121</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#FF8C00]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p>Shelby Twp, MI</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
