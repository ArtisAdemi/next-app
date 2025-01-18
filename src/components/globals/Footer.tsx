"use client";
import { usePathname } from "next/navigation";
import logo from "../../../public/testtest.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  const pathname = usePathname();

  console.log(pathname);

  if (pathname === "/login") {
    return null;
  }

  return (
    <footer className="px-[4%] py-28 bg-[#333333] text-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <Link href="/" className="font-bold text-xl top-8 left-8 z-20">
            <Image src={logo.src} width={100} height={100} alt="" />
          </Link>
          <p className="text-white w-3/4">
            Founded in 1998, our family-owned business has proudly served
            residential, commercial, and industrial clients for over two
            decades.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                href={"/"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href={"/bookings"}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <div className="mb-5">
            <h3 className="text-lg font-semibold">Follow Us</h3>
          </div>
          <div className="space-y-6 w-[40%] lg:w-[70%] xl:w-[40%]">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61569789103538&mibextid=wwXIfr&rdid=Fzt40pmlW2uSMyQ2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15nPDwRk7E%2F%3Fmibextid%3DwwXIfr#"
              className="flex gap-x-2 border rounded-lg px-4 py-4 lg:py-3 hover:translate-x-1 duration-300 cursor-pointer"
            >
              <FaFacebook size={24} />
              <h1>Facebook</h1>
            </a>
            <a
              href="https://www.instagram.com/palushiepoxy"
              target="_blank"
              className="flex gap-x-2 border rounded-lg px-4 py-4 lg:py-3  hover:translate-x-1 duration-300 cursor-pointer"
            >
              <FaInstagram size={24} />
              <h1>Instagram</h1>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/@PalushiEpoxy"
              className="flex gap-x-2 border rounded-lg px-4 py-4 lg:py-3  hover:translate-x-1 duration-300 cursor-pointer"
            >
              <FaYoutube size={24} />
              <h1>Youtube</h1>
            </a>
          </div>
        </div>
        <div className="">
          <p className="text-lg font-semibold">Contact Us</p>
          <div className="flex flex-col text-[#545454] space-y-4 mt-4">
            <p className="text-gray-400 hover:text-white transition-colors">
              Shelby Twp, MI
            </p>
            <p className="text-gray-400 hover:text-white transition-colors">
              palushajepoxy@gmail.com
            </p>
            <p className="text-gray-400 hover:text-white transition-colors">
              +1 586-453-3121
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 -mb-24 text-center text-white border-t border-white pt-6">
        <p>
          © {new Date().getFullYear()} Palushi Epoxy Inc. All Rights Reserved.
        </p>
        <a
          className="hover:underline hover:text-[#0B63E5]  duration-300"
          target="_blank"
          href="https://www.influxo.dev"
        >
          Made by Influxo
        </a>
      </div>
    </footer>
  );
};
