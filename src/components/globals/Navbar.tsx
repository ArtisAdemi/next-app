"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import bgImage from "../../../public/images/background-hero.jpg";
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
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl">
              Logo
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
        className={`fixed inset-0 bg-black z-40 transition-transform duration-300 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Image
          width={1000}
          height={1000}
          className="w-full h-screen object-cover absolute"
          src={bgImage.src}
          alt=""
        />
        <div>
          <Link
            href="/"
            className="font-bold text-xl absolute top-8 left-8 z-20"
          >
            Logo
          </Link>
        </div>
        <div className="h-full flex flex-col items-center justify-center space-y-8 text-white text-2xl relative z-10">
          <Link
            href="/"
            className="text-[#545454] hover:text-white duration-300 text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#545454] hover:text-white duration-300 text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[#545454] hover:text-white duration-300 text-8xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div className="absolute z-10 bottom-12 right-32">
          <p className="font-bold text-3xl text-white">Contact Us</p>
          <div className="flex flex-col text-[#545454] space-y-4 mt-4">
            <p className="hover:text-white duration-300 cursor-pointer">
              3022 Main Street Detroid Michigan
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              palushajepoxyflooring@gmail.com
            </p>
            <p className="hover:text-white duration-300 cursor-pointer">
              +1 234 567 8900
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
