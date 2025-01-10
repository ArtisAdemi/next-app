"use client";
import { usePathname } from "next/navigation";
import logo from "../../../public/logoo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer = () => {
  const pathname = usePathname();

  console.log(pathname);

  if (pathname === "/login") {
    return null;
  }

  return (
    <footer className="px-[4%] py-28 bg-[#333333] text-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <div className="space-y-6">
            <div className="flex gap-x-2 border rounded-lg px-4 py-2 w-1/3 lg:w-1/4 hover:translate-x-1 duration-300 cursor-pointer">
              <FaFacebook size={24} />
              <h1>Facebook</h1>
            </div>
            <div className="flex gap-x-2 border rounded-lg px-4 py-2 w-1/3 lg:w-1/4 hover:translate-x-1 duration-300 cursor-pointer">
              <FaInstagram size={24} />
              <h1>Instagram</h1>
            </div>
            <div className="flex gap-x-2 border rounded-lg px-4 py-2 w-1/3 lg:w-1/4 hover:translate-x-1 duration-300 cursor-pointer">
              <FaTiktok size={24} />
              <h1>TikTok</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 -mb-24 text-center text-white border-t border-gray-600 pt-6">
        <p>© {new Date().getFullYear()} Influxo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
