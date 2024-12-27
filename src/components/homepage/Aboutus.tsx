import hero from "../../../public/images/hero.jpg";
import Image from "next/image";

export const Aboutus = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 px-[4%] py-28 ">
      <div className="relative w-full lg:w-2/4">
        <div className=" overflow-hidden rounded-xl shadow-lg h-[400px] lg:h-[500px]">
          <Image
            className="object-cover"
            fill
            quality={100}
            src={hero.src}
            alt="About Us"
          />
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Who We Are{" "}
        </h1>
        <h1 className="text-xs md:text-2xl font-bold ">
          Building Your Dream Floors Together{" "}
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to your trusted partner in epoxy flooring and concrete
          polishing. We’re dedicated to bringing your vision to life with
          precision and expertise, ensuring that each project stands out for its
          durability and beauty. Let us help you create floors that elevate your
          space from the ground up.
        </p>

        <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg shadow-lg lg:w-1/4 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};
