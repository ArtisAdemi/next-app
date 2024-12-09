import Image from "next/image";

export const Aboutus = () => {
  return (
    <div className="flex  w-full py-28">
      <div className="w-2/4 relative  h-96">
        <Image
          src="/images/img1.jpg" // Path to your image in the public folder
          alt="About Us Image"
          layout="fill"
          objectFit="cover"
          className="  shadow-lg"
        />
      </div>
      <div className="w-2/4 flex flex-col justify-center items-start  px-8 md:px-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-[#171717] font-semibold mb-4">
          About Us
        </h1>

        {/* Description */}
        <p className="text-lg font-light md:text-md text-[#171717] max-w-lg mb-6">
          We are passionate about creating innovative designs and experiences
          that transform spaces. Our team works with precision and creativity to
          bring your vision to life.
        </p>

        {/* Button */}
        <button className=" bg-[#FF8C00] font-semibold  px-6 py-3 rounded-md  text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};
