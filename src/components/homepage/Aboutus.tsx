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
        <button className="group relative px-6 py-3 text-white bg-[#FF8C00] lg:w-1/4 rounded-md font-semibold transition-transform duration-300 hover:scale-105">
          Learn More
          {/* Bottom line */}
          <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
          {/* Right line */}
          <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
        </button>
      </div>
    </div>
  );
};
