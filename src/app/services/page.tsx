"use client";
import Navbar from "@/components/globals/Navbar";
import React from "react";
import Image from "next/image";
import servicesData from "../../../public/services.json";
import hero from "../../../public/images/hero.jpg";
import { Cta } from "@/components/globals/Cta";
import Link from "next/link";

export default function Services() {
  return (
    <div>
      <div className="bg-[#333333]">
        <Navbar />
      </div>

      <div className="services">
        <div className="pt-16 sm:pt-20 lg:pt-28">
          <div className="text-center mb-12 sm:mb-16">
            <h5 className="font-semibold mb-2 sm:mb-4 text-base sm:text-xl text-[#FF8C00]">
              Our Services
            </h5>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Transforming Spaces, <br /> Elevating Experiences
            </h1>
          </div>

          {servicesData.services.map((service, index) => (
            <div
              key={service.slug}
              className={`
                flex flex-col lg:flex-row 
                justify-between 
                items-center 
                gap-y-4
                ${
                  index % 2 === 0
                    ? "lg:flex-row bg-gray-100"
                    : "lg:flex-row-reverse bg-[#333333]"
                }
              `}
            >
              <div
                className={`w-full lg:w-1/2 lg:pr-12 py-12 lg:py-0 text-left px-[4%]`}
              >
                <h2
                  className={`text-2xl sm:text-3xl lg:text-3xl font-bold ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  } mb-4 sm:mb-6`}
                >
                  {service.title}
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-[#FF8C00] mb-3 sm:mb-4">
                  {service.description}
                </h3>
                <p
                  className={`text-base sm:text-lg ${
                    index % 2 === 0 ? "text-black" : "text-white"
                  } leading-relaxed mb-6`}
                >
                  {service.content}
                </p>
                <div className="flex justify-start">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group cursor-pointer w-1/2 lg:w-1/3 text-center relative px-4 sm:px-6 py-3 sm:py-4 text-white bg-[#FF8C00] font-semibold transition-transform duration-300 hover:scale-105"
                  >
                    Learn More
                    {/* Bottom line */}
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
                    {/* Right line */}
                    <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
                  </Link>
                </div>
              </div>
              <div
                className={`w-full lg:w-1/2 mx-auto ${
                  index % 2 === 0 ? "" : "bg-[#333333]"
                }`}
              >
                <Image
                  src={hero}
                  alt={service.title}
                  className="object-cover w-full max-h-[600px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cta />
    </div>
  );
}
