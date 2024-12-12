import React from "react";
import bgImage from "../../../public/images/background-hero.jpg";
import hero from "../../../public/images/hero.jpg";
import { IoCheckmark } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Navbar from "../globals/Navbar";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="w-full lg:w-[45%] relative">
        <img
          className="w-full h-screen object-cover"
          src={bgImage.src}
          alt=""
        />
        <div className="absolute inset-0 flex flex-col">
          <Navbar />
          <div className="px-4 lg:px-8 py-56 flex-1 flex flex-col justify-between">
            <p className="font-bold px-4 lg:px-32 text-white mb-4 text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis aliquid at earum sed dignissimos veniam natus officiis
              quam fugit
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
              Palushaj Epoxy Flooring
            </h1>
            <div className="lg:flex px-4 space-y-8 lg:space-y-0 justify-between mt-5">
              <div className="flex items-center space-x-2">
                <div className="rounded-full p-4 bg-[#2B2B2B]">
                  <IoCheckmark color="#C0C0C0" size={40} />
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <h1 className="font-semibold text-white text-3xl">Trusted</h1>
                  <p className="text-white">
                    Over 400 clients all over the U.S
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="rounded-full p-4 bg-[#2B2B2B]">
                  <FaRegStar color="#C0C0C0" size={40} />
                </div>
                <div className="space-y-1 lg:space-y-2">
                  <h1 className="font-semibold text-white text-3xl">Quality</h1>
                  <p className="text-white">
                    We pay attention to every single detail
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[55%] relative">
        <img className="w-full h-screen object-cover" src={hero.src} alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        <div className="absolute bottom-8 right-8">
          <button className="text-white px-6 py-3 font-semibold hover:underline hover:duration-300">
            View Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
