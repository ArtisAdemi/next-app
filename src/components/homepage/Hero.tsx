import React, { forwardRef } from "react";
import bgImage from "../../../public/images/background-hero.jpg";
import hero from "../../../public/images/home1.webp";
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
      <div className="flex flex-col lg:flex-row lg:justify-between h-screen">
        <div className="w-full xl:w-[45%] relative flex flex-col justify-between">
          <div className="w-full h-screen">
            <Image
              className="object-cover"
              fill
              quality={90}
              src={bgImage.src}
              alt=""
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 flex flex-col">
            <div className="lg:px-8">
              <div className="px-[8%] lg:px-[4%]">
                <Navbar />
              </div>
            </div>
            <div className="px-4 lg:px-8 py-10 flex-1 flex flex-col justify-evenly">
              <p className="text-lg px-[4%] md:pl-[8%] lg:pl-[8%] md:text-2xl lg:text-4xl xl:text-2xl text-white text-start">
                {description}
              </p>
              <h1 className="text-4xl md:text-6xl px-4 lg:px-[4%] xl:px-[4%] lg:text-7xl font-bold text-white ">
                {title}
              </h1>
              <div className="lg:flex px-4 md:pl-[8%] lg:pl-[8%] lg:pr-[8%] xl:pr-0 space-y-8 md:space-y-8 lg:space-y-0 xl:space-y-0 lg:space-x-4 justify-between ">
                <div className="flex items-center md:space-x-4 space-x-2">
                  <div className="rounded-full p-4 bg-[#2B2B2B]">
                    <IoCheckmark
                      color="#C0C0C0"
                      size={30}
                      className="md:size-14 lg:size-11"
                    />
                  </div>
                  <div className="space-y-1 lg:space-y-2">
                    <h1 className="font-semibold text-white text-3xl">
                      Trusted
                    </h1>
                    <p className="text-white">
                      Over 4000 projects all over Michigan
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:space-x-4 space-x-2">
                  <div className="rounded-full p-4 bg-[#2B2B2B]">
                    <FaRegStar
                      color="#C0C0C0"
                      size={30}
                      className="md:size-14 lg:size-11"
                    />
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
            <div className="absolute xl:hidden text-end px-[4%] bottom-8 right-0 left-0 transform ">
              <button
                className="text-white text-lg px-6 py-3 font-medium hover:underline hover:duration-300"
                onClick={() => {
                  if (typeof ref === "object" && ref?.current) {
                    const yOffset = 100;
                    const element = ref.current;
                    const y =
                      element.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                View Project Gallery
              </button>
            </div>
          </div>
        </div>
        <div className="w-full hidden xl:block xl:w-[55%] relative">
          <div className="w-full h-full">
            <Image
              className="object-cover"
              fill
              src={hero}
              quality={100}
              alt=""
              priority
              placeholder="blur"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          <div className="absolute bottom-8 right-8">
            <button
              className="text-white text-xl px-6 py-3 font-semibold hover:underline hover:duration-300"
              onClick={() => {
                if (typeof ref === "object" && ref?.current) {
                  const yOffset = 100;
                  const element = ref.current;
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              View Project Gallery
            </button>
          </div>
        </div>
      </div>
    );
  }
);

// Add display name for the component
Hero.displayName = "Hero";

export default Hero;
