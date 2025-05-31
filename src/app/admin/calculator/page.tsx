"use client";

import Navbar from "@/components/globals/Navbar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Define service types and their options with pricing
const serviceOptions = {
  "Metal Coating": [
    { name: "Standard Metal Coating", pricePerSqFt: 4.5 },
    { name: "Premium Metal Coating", pricePerSqFt: 5.0 },
    { name: "Deluxe Metal Coating", pricePerSqFt: 6.0 },
  ],
  Flakes: [
    { name: "Small Flakes", pricePerSqFt: 3.5 },
    { name: "Medium Flakes", pricePerSqFt: 4.0 },
    { name: "Large Flakes", pricePerSqFt: 4.5 },
  ],
  "Solid Color": [
    { name: "Basic Solid Color", pricePerSqFt: 3.0 },
    { name: "Premium Solid Color", pricePerSqFt: 3.75 },
  ],
  Metallic: [
    { name: "Standard Metallic", pricePerSqFt: 5.0 },
    { name: "Premium Metallic", pricePerSqFt: 6.5 },
  ],
};

export default function Calculator() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string>("");
  const [squareFeet, setSquareFeet] = useState<number>(1);
  const [calculations, setCalculations] = useState<
    Array<{ name: string; price: number }>
  >([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate costs when service or square feet changes
  useEffect(() => {
    if (selectedService && squareFeet > 0) {
      setIsAnimating(true);
      const options =
        serviceOptions[selectedService as keyof typeof serviceOptions] || [];
      const results = options.map((option) => ({
        name: option.name,
        price: option.pricePerSqFt * squareFeet,
      }));

      // Add a slight delay for animation effect
      setTimeout(() => {
        setCalculations(results);
        setIsAnimating(false);
      }, 300);
    } else {
      setCalculations([]);
    }
  }, [selectedService, squareFeet]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header with decorative elements */}
      <div className="bg-black px-[4%] lg:px-[8%]">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="mx-auto px-[8%] py-12">
        <button
          style={{ width: "200px" }}
          className="mb-6  bg-transparent border border-[#FF8C00] text-[#FF8C00] px-4 py-2 rounded-sm hover:bg-[#FF8C00] hover:text-white transition-colors"
          onClick={() => router.back()}
        >
          Back to Dashboard
        </button>
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/* Input section */}{" "}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl overflow-hidden mb-6 lg:mb-0">
            <div className="bg-gradient-to-r from-amber-600 to-orange-500 py-4 px-6">
              <h2 className="text-xl font-semibold text-white">
                Project Details
              </h2>
            </div>
            <div className="p-6">
              <div className="mb-8">
                <label
                  htmlFor="service"
                  className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider"
                >
                  Select Service Type
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 appearance-none bg-white text-gray-800 font-medium"
                  >
                    <option value="">-- Select a Service --</option>
                    {Object.keys(serviceOptions).map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="squareFeet"
                  className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider"
                >
                  Square Footage
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    id="squareFeet"
                    type="number"
                    min="1"
                    value={squareFeet}
                    onChange={(e) => setSquareFeet(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-800 font-medium"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">sq ft</span>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Enter the total area you need to cover
                </p>
              </div>

              {selectedService && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center text-amber-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium">
                      Selected: {selectedService}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-amber-700 pl-7">
                    {selectedService === "Metal Coating" &&
                      "Our metal coating options provide durability and a modern aesthetic."}
                    {selectedService === "Flakes" &&
                      "Flake systems offer decorative appeal with excellent slip resistance."}
                    {selectedService === "Solid Color" &&
                      "Solid color epoxy provides a clean, uniform appearance."}
                    {selectedService === "Metallic" &&
                      "Metallic epoxy creates stunning 3D effects and depth."}
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Results section */}
          <div className="w-full lg:w-1/2">
            {calculations.length > 0 ? (
              <div
                className={`bg-white rounded-xl shadow-xl overflow-hidden transition-opacity duration-300 ${
                  isAnimating ? "opacity-50" : "opacity-100"
                }`}
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-4 px-6 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-white">
                    Cost Estimates
                  </h2>
                  <div className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {squareFeet} sq ft
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      {selectedService} Options
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Pricing breakdown for your {squareFeet} square foot
                      project:
                    </p>
                  </div>

                  <div className="space-y-4">
                    {calculations.map((calc, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {calc.name}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              ${(calc.price / squareFeet).toFixed(2)} per sq ft
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-amber-600">
                              ${calc.price.toFixed(2)}
                            </div>
                            <div className="text-xs text-gray-500">
                              Total Cost
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-blue-700">
                            These estimates include materials and standard
                            installation. Prices may vary based on specific
                            project requirements, surface preparation needs, and
                            customization options.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-xl overflow-hidden h-full flex flex-col justify-center items-center p-12 text-center">
                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Your Estimate Results Will Appear Here
                </h3>
                <p className="text-gray-600 max-w-md">
                  Select a service type and enter the square footage to see
                  detailed cost estimates for your flooring project.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
