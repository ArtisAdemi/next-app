import React from "react";
import Image from "next/image";
import hero from "../../../public/images/hero.jpg";

const WhyUs: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 px-[4%] py-28 ">
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4682B4] mb-6">
          Why Choose Us
        </h1>
        <p className="text-lg text-[#4682B4] leading-relaxed mb-6">
          Welcome to Palushaj Epoxy Coatings, where quality craftsmanship and
          dedication to excellence are the foundation of everything we do.
          Founded in 1998, our family-owned business has proudly served
          residential, commercial, and industrial clients for over two decades.
        </p>
        <p className="text-lg text-[#4682B4] leading-relaxed mb-6">
          Today, we specialize in epoxy flooring, concrete polishing, glue and
          tar removal, and professional painting. Whether transforming
          residential spaces or tackling large-scale industrial projects, we
          take pride in exceeding expectations and delivering stunning results.
        </p>
        <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg shadow-lg lg:w-1/4 transition-all duration-300">
          Learn More
        </button>
      </div>
      <div className="relative w-full lg:w-2/4">
        <div className=" overflow-hidden rounded-xl shadow-lg h-[400px] lg:h-[500px]">
          <Image
            className="object-cover"
            fill
            quality={100}
            src={hero.src}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
