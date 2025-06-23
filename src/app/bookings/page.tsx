"use client";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState, useTransition, useEffect } from "react";
import { createBookingAction } from "../actions/bookings";
import Navbar from "@/components/globals/Navbar";

// Define error interface
interface FormErrors {
  location?: string;
  garageSize?: string;
  selectedService?: string;
  selectedOption?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  message?: string;
  info?: string;
  [key: string]: string | undefined;
}

// Define service types and their options with pricing (copied from calculator)
const serviceOptions = {
  Flakes: [
    { name: "Basic Flake - Base Topcoat", minPrice: 4, maxPrice: 5.5 },
    { name: "Basic Flake - Polyaspartic Topcoat", minPrice: 4.5, maxPrice: 6 },
    { name: "Full Broadcast Flake - Base Topcoat", minPrice: 4.5, maxPrice: 6 },
    {
      name: "Full Broadcast Flake - Polyaspartic Topcoat",
      minPrice: 5.5,
      maxPrice: 7,
    },
    {
      name: "Full Broadcast Designer Flake - Base Topcoat",
      minPrice: 5,
      maxPrice: 7,
    },
    {
      name: "Full Broadcast Designer - Polyaspartic Topcoat",
      minPrice: 6,
      maxPrice: 8,
    },
  ],
  "Quartz Sand": [
    { name: "Quartz Sand - Base Topcoat", minPrice: 8, maxPrice: 9 },
    { name: "Quartz Sand - Polyaspartic Topcoat", minPrice: 9, maxPrice: 10 },
  ],
  "Solid Color": [
    { name: "Solid Color - No Topcoat", minPrice: 4, maxPrice: 6 },
    { name: "Solid color - Base Topcoat", minPrice: 4.5, maxPrice: 6.5 },
    { name: "Solid Color - Polyaspartic Topcoat", minPrice: 5, maxPrice: 7 },
  ],
  Metallic: [
    { name: "Single Tone", minPrice: 8, maxPrice: 11 },
    { name: "Two Tone", minPrice: 12, maxPrice: 15 },
    { name: "Three Tone", minPrice: 16, maxPrice: 19 },
    { name: "Four Tone +", minPrice: 20, maxPrice: 27 },
  ],
  "Concrete Polishing": [
    { name: "Cream Polish", minPrice: 8, maxPrice: 9 },
    { name: "Standard Polish", minPrice: 7, maxPrice: 8 },
    { name: "Full Aggregate", minPrice: 6, maxPrice: 7 },
  ],
  Removal: [
    {
      name: "Glue, Grout, Tile, Tar, Thinset Removal",
      minPrice: 2,
      maxPrice: 4,
    },
  ],
  "COMMERCIAL/INDUSTRIAL PAINTING": [
    { name: "Block/Drywall", minPrice: 3.5, maxPrice: 5.5 },
    { name: "Steel Ceilings", minPrice: 4, maxPrice: 5 },
  ],
};

export default function Bookings() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    address: "",
    message: "",
    info: "",
    location: "",
    garageSize: 0,
    selectedService: "Flakes",
    selectedOption: "",
  });

  // Service calculation state
  const [selectedService, setSelectedService] = useState<string>("Flakes");
  const [garageSize, setGarageSize] = useState<number>(0);
  const [calculations, setCalculations] = useState<
    Array<{ name: string; minPrice: number; maxPrice: number }>
  >([]);
  const [selectedOptionDetails, setSelectedOptionDetails] = useState<{
    name: string;
    minPrice: number;
    maxPrice: number;
  } | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});

  // Calculate costs when service or square feet changes
  useEffect(() => {
    if (selectedService && garageSize > 0) {
      const options =
        serviceOptions[selectedService as keyof typeof serviceOptions] || [];
      const results = options.map((option) => ({
        name: option.name,
        minPrice: option.minPrice * garageSize,
        maxPrice: option.maxPrice * garageSize,
      }));
      setCalculations(results);
    } else {
      setCalculations([]);
    }
  }, [selectedService, garageSize]);

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setFormData((prev) => ({
      ...prev,
      selectedService: service,
    }));
  };

  const handleOptionSelection = (option: {
    name: string;
    minPrice: number;
    maxPrice: number;
  }) => {
    setSelectedOptionDetails(option);
    setFormData((prev) => ({
      ...prev,
      selectedOption: option.name,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "garageSize") {
      const numValue = parseInt(value) || 0;
      setGarageSize(numValue);
      setFormData((prev) => ({
        ...prev,
        garageSize: numValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const nextStep = () => {
    // Validate first step
    if (currentStep === 1) {
      const stepErrors: FormErrors = {};

      if (!formData.location.trim()) {
        stepErrors.location = "Location is required";
      }

      if (!formData.garageSize || formData.garageSize <= 0) {
        stepErrors.garageSize = "Garage size must be greater than 0";
      }

      if (!formData.selectedService) {
        stepErrors.selectedService = "Please select a service";
      }

      if (!formData.selectedOption) {
        stepErrors.selectedOption = "Please select a service option";
      }

      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
    }

    setCurrentStep(2);
    setErrors({});
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate second step
    const stepErrors: FormErrors = {};

    if (!formData.name.trim()) {
      stepErrors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      stepErrors.phoneNumber = "Phone number is required";
    }

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    startTransition(async () => {
      try {
        const response = await createBookingAction({
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          address: formData.address,
          name: formData.name,
          message: formData.message,
          info: formData.info,
          location: formData.location,
          garageSize: formData.garageSize,
          selectedService: formData.selectedService,
          selectedOption: formData.selectedOption,
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
            info: response?.message || "This field is required",
          });
        }
      } catch (error) {
        Swal.fire("Error", "Failed to create booking", "error");
        console.error("Create booking error:", error);
      }
    });
  };

  return (
    <div className="bg-[#333333] min-h-screen border border-t-0 border-l-0 border-r-0 border-b-[#FFF] px-[4%]">
      <div className="border border-t-0 border-l-0 border-r-0 border-b-[#FFF]">
        <Navbar />
      </div>
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-[#2B2B2B] rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-12">
              <h5 className="font-semibold mb-2 text-4xl text-[#FF8C00]">
                Get a free floor quote
              </h5>
              <h1 className="text-xl font-bold text-white">
                Takes less than 60 seconds. We&apos;ll contact you within a day!
              </h1>
            </div>

            {currentStep === 1 && (
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-[#C0C0C0] mb-2"
                  >
                    Where are you located?
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Your Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#444] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="garageSize"
                    className="block text-sm font-medium text-[#C0C0C0] mb-2"
                  >
                    How big is your floor? (sq ft)
                  </label>
                  <input
                    type="number"
                    id="garageSize"
                    name="garageSize"
                    placeholder="Size in square feet"
                    value={formData.garageSize || ""}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#444] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                  />
                  {errors.garageSize && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.garageSize}
                    </p>
                  )}
                </div>

                <div>
                  <h1 className="w-full text-center rounded-lg text-2xl font-bold text-white mt-8 mb-4">
                    Get My Estimate
                  </h1>

                  <label
                    htmlFor="selectedService"
                    className="block text-sm font-medium text-[#C0C0C0] mb-2"
                  >
                    Select a Service
                  </label>
                  <select
                    id="selectedService"
                    name="selectedService"
                    value={selectedService}
                    className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#444] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                    onChange={(e) => handleServiceSelection(e.target.value)}
                  >
                    <option value="">Select a Service</option>
                    {Object.keys(serviceOptions).map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.selectedService && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.selectedService}
                    </p>
                  )}
                </div>

                {calculations.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4 text-white">
                      Service Options
                    </h3>
                    <div className="space-y-3">
                      {calculations.map((option) => (
                        <div
                          key={option.name}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            formData.selectedOption === option.name
                              ? "border-[#FF8C00] bg-[#2A2A2A]"
                              : "border-gray-700 bg-[#1E1E1E] hover:border-gray-500"
                          }`}
                          onClick={() => handleOptionSelection(option)}
                        >
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium text-sm text-white">
                                {option.name}
                              </h4>
                              <p className="text-lg text-gray-400">
                                $
                                {option.minPrice.toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}{" "}
                                - $
                                {option.maxPrice.toLocaleString("en-US", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}{" "}
                                estimated
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  formData.selectedOption === option.name
                                    ? "border-[#FF8C00]"
                                    : "border-gray-600"
                                }`}
                              >
                                {formData.selectedOption === option.name && (
                                  <div className="w-3 h-3 rounded-full bg-[#FF8C00]"></div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  className="group w-full rounded-lg bg-[#FF8C00] text-white font-semibold py-3 px-6 transition-transform duration-300 hover:scale-105 relative overflow-hidden"
                  onClick={nextStep}
                >
                  Continue
                  {/* Bottom line */}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
                  {/* Right line */}
                  <span className="absolute top-0 -right-1 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
                </button>
              </form>
            )}

            {currentStep === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  {
                    name: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Your Full Name",
                  },
                  {
                    name: "email",
                    label: "Email Address (optional)",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                  {
                    name: "phoneNumber",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "(555) 123-4567",
                  },
                  {
                    name: "address",
                    label: "Address",
                    type: "text",
                    placeholder: "Your Address",
                  },
                  {
                    name: "info",
                    label: "How did you hear about us?",
                    type: "text",
                    placeholder: "e.g Instagram, Google, Referral",
                  },
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
                      value={
                        formData[field.name as keyof typeof formData] as string
                      }
                      onChange={handleInputChange}
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
                    placeholder="Tell us about your project... Cracks? Peeling? Moisture? Salt Damag? New build or renovation? DIY job gone wrong? Tell us what you're seeing."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] border border-[#444] text-white placeholder-[#888] focus:outline-none focus:ring-2 focus:ring-[#FF8C00]"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Order summary */}

                {/* Order summary */}
                <div className="p-4 border border-[#444] rounded-lg mt-6 bg-[#1E1E1E]">
                  <h3 className="font-semibold text-lg text-[#FF8C00] mb-4">
                    Your Custom Estimate
                  </h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#C0C0C0]">Service:</span>
                    <span className="text-white">
                      {formData.selectedService}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#C0C0C0]">Option:</span>
                    <span className="text-white">
                      {formData.selectedOption}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[#C0C0C0]">Size:</span>
                    <span className="text-white">
                      {formData.garageSize} sq ft
                    </span>
                  </div>
                  {selectedOptionDetails && (
                    <div className="flex justify-between pt-2 border-t border-[#444] mt-2">
                      <span className="text-[#C0C0C0]">
                        Estimated Price Range:
                      </span>
                      <span className="text-xl font-bold text-[#FF8C00]">
                        ${selectedOptionDetails.minPrice.toFixed(2)} - $
                        {selectedOptionDetails.maxPrice.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    className="group flex-1 rounded-lg bg-[#333] text-white font-semibold py-3 px-6 transition-transform duration-300 hover:scale-105 relative overflow-hidden"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="group flex-1 rounded-lg bg-[#FF8C00] text-white font-semibold py-3 px-6 transition-transform duration-300 hover:scale-105 relative overflow-hidden"
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Get my Quote"}
                    {/* Bottom line */}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
                    {/* Right line */}
                    <span className="absolute top-0 -right-1 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8 bg-[#2B2B2B] rounded-lg shadow-lg p-6">
          <h2 className="text-xl text-center font-semibold text-[#FF8C00] mb-4">
            Don&apos;t want to fill this out? Just text or call us - we&apos;ll
            get you a quote fast!
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
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Shelby Twp, MI</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
