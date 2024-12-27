import hero from "../../../public/images/hero.jpg";
import Image from "next/image";

export const About = () => {
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
          Who We Are
        </h1>
        <p className="text-lg text-black leading-relaxed mb-6">
          Welcome to our world of innovation and dedication! Our mission is to
          craft impactful digital experiences, blending creativity with
          technology. We focus on creating solutions that not only meet but
          exceed expectations, delivering value that stands the test of time.
        </p>
        <p className="text-lg text-black leading-relaxed mb-6">
          With a team of passionate professionals, we specialize in web design,
          development, and tailored solutions for businesses of all sizes. Your
          vision, our expertise—together, we create something remarkable.
        </p>
        <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg shadow-lg w-1/4 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};
