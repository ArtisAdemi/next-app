import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-[8%] md:px-[16%]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Logo
          </Link>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
