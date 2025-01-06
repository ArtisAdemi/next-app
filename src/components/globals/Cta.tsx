import Link from "next/link";

export const Cta = () => {
  return (
    <div className="px-[4%] py-28 bg-[#D3D3D3] text-black">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold lg:text-start mb-4">
          Let’s work together. <br /> Contact us today.
        </h1>
        <hr className="border-[#C0C0C0]  mx-auto" />
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
        {/* Description */}
        <p className="text-gray-800 max-w-lg text-center lg:text-left">
          Whether you’re looking to enhance your home, office, or industrial
          space, we’re here to help every step of the way. Let’s build something
          extraordinary together.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 ">
          <Link
            href="/bookings"
            className="bg-[#FF8C00] hover:bg-[#FF8C00] text-center text-white text-base px-6 py-3 rounded-lg shadow-lg flex-1 whitespace-nowrap transition-all duration-300"
          >
            Book Now
          </Link>
          <Link
            href="/services"
            className="border border-[#FF8C00] text-[#FF8C00] text-center hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-lg shadow-lg flex-1 whitespace-nowrap transition-all duration-300"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};
