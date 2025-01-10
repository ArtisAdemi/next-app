"use client";
import React, { useEffect, useState } from "react";
import servicesData from "../../../public/services.json"; // Adjust the import path as necessary
import { useRouter } from "next/navigation"; // Import useRouter
import { Service } from "public/serviceTypes";
import hero from "../../../public/images/hero.jpg";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

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
    <div className="px-[4%] lg:pl-[4%] lg:pr-[12%] py-28 bg-white">
      {/* Section Title */}
      <div className=" mb-12">
        <h5 className="font-semibold mb-4 text-xl text-[#FF8C00]">Services</h5>
        <h1 className="text-5xl font-bold text-black leading-tight">
          Explore our specialized services <br /> designed to meet your needs.
        </h1>
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
          {services.map((service, index) => (
            <div
              key={service?.slug}
              className="flex justify-between items-center bg-white border-b-2 hover:border-b-4 hover:border-[#FF8C00] py-6 pb-6 cursor-pointer hover:-translate-y-1 duration-300 mb-2"
              onClick={() => handleServiceClick(service?.slug)}
            >
              <span className="text-2xl flex items-center space-x-8 font-semibold text-black">
                <span>{String(index + 1).padStart(2, "0")} </span>
                <span>{service?.title}</span>
              </span>
              <IoIosArrowRoundForward size={40} color="#FF8C00" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
