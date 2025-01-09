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
    <div className="pl-[4%] pr-[12%] py-28 bg-white">
      {/* Section Title */}
      <div className=" mb-12">
        <h5 className="font-semibold mb-4 text-xl text-[#FF8C00]">Services</h5>
        <h1 className="text-5xl font-bold text-black leading-tight">
          Explore our specialized services <br /> designed to meet your needs.
        </h1>
      </div>

      <div className="flex justify-between">
        <div className="w-full">
          {/* <img className="w-[80%] h-[600px]" src={hero.src} alt="" /> */}
          <Image
            alt="blla"
            src={hero}
            quality={100}
            className="w-[80%] h-[600px]"
          />
        </div>
        {/* Services List */}
        <div className="w-[55%] flex flex-col justify-evenly">
          {services.map((service, index) => (
            <div
              key={service?.slug}
              className="flex justify-between items-center bg-white border-b-2 hover:border-b-4 hover:border-[#FF8C00] pb-6 cursor-pointer hover:-translate-y-1 duration-300 mb-2"
              onClick={() => handleServiceClick(service?.slug)}
            >
              <span className="text-2xl font-semibold text-black">
                {String(index + 1).padStart(2, "0")}{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {service?.title}
              </span>
              <IoIosArrowRoundForward size={40} color="#FF8C00" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
