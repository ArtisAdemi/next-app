"use client";
import React, { useEffect, useState } from "react";
import servicesData from "../../../public/services.json"; // Adjust the import path as necessary
import { useRouter } from "next/navigation"; // Import useRouter
import { Service } from "public/serviceTypes";

export const OurServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Fetch services from the JSON data
    setServices(servicesData.services as Service[]);
  }, []);

  const handleServiceClick = (slug: string) => {
    // Redirect to the single service page using the slug
    router.push(`/services/${slug}`);
  };

  return (
    <div className="px-[4%] py-20 bg-[#D3D3D3]">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
        {services.map((service: any) => (
          <div
            key={service?.slug}
            className="flex flex-col justify-start items-start bg-white shadow-md rounded-lg p-4 cursor-pointer"
            onClick={() => handleServiceClick(service?.slug)}
          >
            <div className="p-4 text-white rounded-full flex items-center justify-center mb-3">
              <span className="text-4xl">🛠️</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
              {service?.title}
            </h2>
            {service.maintenance?.intro && <p>{service.maintenance.intro}</p>}
            <p className="text-sm text-gray-600 text-start">
              {service?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
