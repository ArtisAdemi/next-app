"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import bgImage from "../../../public/images/background-hero.jpg";
import logo from "../../../public/Logo-black-bg.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="text-white">
        <div className="mt-3 -mb-8 px-[8%]">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="font-bold text-xl top-8 left-8 z-20">
              <Image src={logo.src} width={50} height={50} alt="" />
            </Link>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col space-y-1.5 z-50"
              >
                {!isMenuOpen ? (
                  <RxHamburgerMenu size={30} />
                ) : (
                  <MdOutlineCancel size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full screen menu overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Image
          width={1000}
          height={1000}
          className="w-full h-screen object-cover absolute"
          quality={100}
          src={bgImage.src}
          alt=""
        />
        <div>
          <Link
            href="/"
            className="font-bold text-xl absolute top-8 left-8 z-20"
          >
            <Image src={logo.src} width={50} height={50} alt="" />
          </Link>
        </div>
        <div className="h-full flex flex-col items-center justify-center space-y-8 text-white text-2xl relative z-10">
          <Link
            href="/"
            className="text-[#545454] hover:text-white duration-300 text-6xl md:text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[#545454] hover:text-white duration-300 text-6xl md:text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[#545454] hover:text-white duration-300 text-6xl md:text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/bookings"
            className="text-[#545454] hover:text-white duration-300 text-6xl md:text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
        <div className="absolute z-10 bottom-12 right-8 md:right-32">
          <p className="font-bold text-2xl md:text-3xl text-white">
            Contact Us
          </p>
          <div className="flex flex-col text-[#545454] space-y-4 mt-4">
            <p className="hover:text-white duration-300 cursor-pointer">
              Shelby Twp, MI
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              palushajepoxy@gmail.com
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              +1 586-453-3121
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
