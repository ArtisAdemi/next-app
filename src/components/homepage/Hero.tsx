import React, { forwardRef } from "react";
import bgImage from "../../../public/images/background-hero.jpg";
import hero from "../../../public/images/hero.jpg";
import { IoCheckmark } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import Navbar from "../globals/Navbar";
import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(
  ({ title, description }, ref) => {
    return (
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-[45%] relative">
          <div className="w-full h-screen">
            <Image
              className="object-cover"
              fill
              quality={100}
              src={bgImage.src}
              alt=""
            />
          </div>
          <div className="absolute inset-0 flex flex-col">
            <Navbar />
            <div className="px-4 lg:px-8 py-56 flex-1 flex flex-col justify-between">
              <p className="font-bold px-4 lg:px-32 text-white mb-4 text-center lg:text-left">
                {description}
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
                {title}
              </h1>
              <div className="lg:flex px-4 space-y-8 lg:space-y-0 justify-between mt-5">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full p-4 bg-[#2B2B2B]">
                    <IoCheckmark color="#C0C0C0" size={40} />
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <h1 className="font-semibold text-white text-3xl">
                      Trusted
                    </h1>
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
                    <h1 className="font-semibold text-white text-3xl">
                      Quality
                    </h1>
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
          <div className="w-full h-screen">
            <Image
              className=" object-cover"
              fill
              src={hero.src}
              quality={100}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          <div className="absolute bottom-8 right-8">
            <button
              className="text-white px-6 py-3 font-semibold hover:underline hover:duration-300"
              onClick={() => {
                if (typeof ref === "object" && ref?.current) {
                  ref.current.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Collections
            </button>
          </div>
        </div>
      </div>
    );
  }
);

export default Hero;
