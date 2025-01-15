"use client";
import React, { useEffect, useState } from "react";
import servicesData from "../../../public/services.ts"; // Adjust the import path as necessary
import { useRouter } from "next/navigation"; // Import useRouter
import { Service } from "public/serviceTypes";
import hero from "../../../public/images/home2.jpeg";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

export const OurServices: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    // Fetch services from the JSON data
    setServices((servicesData.services as Service[]) || []);
  }, []);

  const handleServiceClick = (slug: string) => {
    // Redirect to the single service page using the slug
    router.push(`/services/${slug}`);
  };

  const servicesClick = (url: string) => {
    router.push(url);
  };

  return (
    <div className="px-[4%] lg:pl-[4%] lg:pr-[12%] py-16 lg:py-28 bg-gray-100">
      {/* Section Title */}
      <div className="flex flex-col xl:flex-row justify-between xl:items-end mb-12">
        <div>
          <h5 className="font-semibold mb-4 text-xl text-[#FF8C00]">
            Services
          </h5>
          <h1 className="text-5xl font-bold text-black leading-tight">
            Explore our specialized services <br /> designed to meet your needs.
          </h1>
        </div>
        <button
          onClick={() => servicesClick("/services")}
          className="group relative px-6 py-4 mt-4 text-[#FF8C00] border-2 border-[#FF8C00] w-1/2 xl:w-1/6  font-semibold transition-transform duration-300 hover:scale-105"
        >
          View Services
          {/* Bottom line */}
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
          {/* Right line */}
          <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          {/* <img className="w-[80%] h-[600px]" src={hero.src} alt="" /> */}
          <Image
            alt="blla"
            src={hero}
            quality={100}
            className="lg:w-[80%] h-[500px] lg:h-[600px]"
          />
        </div>
        {/* Services List */}
        <div className="lg:w-[55%] mt-12 lg:mt-0 flex flex-col justify-evenly">
          {services.length > 0 ? (
            services.map((service, index) => (
              <div
                key={service?.slug}
                className="flex justify-between items-center bg-gray-100 border-b-2 hover:border-b-4 hover:border-[#FF8C00] py-6 pb-6 cursor-pointer hover:-translate-y-1 duration-300 mb-2"
                onClick={() => handleServiceClick(service?.slug)}
              >
                <span className="text-2xl flex items-center space-x-8 font-semibold text-black">
                  <span>{String(index + 1).padStart(2, "0")} </span>
                  <span>{service?.title}</span>
                </span>
                <IoIosArrowRoundForward size={40} color="#FF8C00" />
              </div>
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
      </div>
    </div>
  );
};
