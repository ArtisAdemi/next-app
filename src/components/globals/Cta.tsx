import Link from "next/link";

export const Cta = () => {
  return (
    <div className="px-[4%] py-16 lg:py-28 bg-white text-black">
      <div className="flex px-[4%] lg:px-0 flex-col lg:flex-row justify-evenly items-center bg-gray-100 lg:items-start shadow-md rounded-lg py-20 gap-12">
        {/* Left Section: Title, Description, Button */}
        <div className="lg:max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact us today
          </h1>
          <p className="text-gray-600 mb-6">
            For a consultation and let us bring your concrete back to life with
            professional precision and care.
          </p>
          <Link href={"/bookings"}>
            <button className="group relative px-6 py-4  text-white bg-[#FF8C00] w-1/2 md:w-1/3 lg:w-1/3  font-semibold transition-transform duration-300 hover:scale-105">
              Book Now
              {/* Bottom line */}
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
              {/* Right line */}
              <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:w-full lg:w-1/4 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#272727] transition-transform duration-500 hover:scale-105 ease-in-out p-6 rounded-lg text-center">
            <p className="text-white text-2xl font-bold">23+</p>
            <p className="text-gray-100">Years of Experience</p>
          </div>
          <div className="bg-[#949494] p-6 rounded-lg text-center transition-transform duration-500 hover:scale-105 ease-in-out">
            <p className="text-white text-2xl font-bold">183+</p>
            <p className="text-gray-100">Happy Clients</p>
          </div>
          <div className="bg-[#EEEEEE] p-6 rounded-lg text-center transition-transform duration-500 hover:scale-105 ease-in-out col-span-2">
            <p className="text-black text-2xl font-bold">315+</p>
            <p className="text-black">Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};
