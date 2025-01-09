import React from "react";
import Image from "next/image";
import hero from "../../../public/images/hero.jpg";

const WhyUs: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#D3D3D3] items-center gap-12 px-[4%] py-28 ">
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Why Choose Us
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to Palushaj Epoxy Coatings, where quality craftsmanship and
          dedication to excellence are the foundation of everything we do.
          Founded in 1998, our family-owned business has proudly served
          residential, commercial, and industrial clients for over two decades.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Today, we specialize in epoxy flooring, concrete polishing, glue and
          tar removal, and professional painting. Whether transforming
          residential spaces or tackling large-scale industrial projects, we
          take pride in exceeding expectations and delivering stunning results.
        </p>
        <button className="group relative px-6 py-3 text-white bg-[#FF8C00] lg:w-1/4 rounded-md font-semibold transition-transform duration-300 hover:scale-105">
          Learn More
          {/* Bottom line */}
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
          {/* Right line */}
          <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
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
