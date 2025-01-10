"use client";
import { Cta } from "@/components/globals/Cta";
import hero from "../../../public/images/hero.jpg";
import Hero from "@/components/homepage/Hero";
import Faq from "@/components/homepage/Faq";

export default function About() {
  return (
    <div>
      <Hero
        title="Palushi Epoxy Coatings"
        description="Your trusted partner for high-quality epoxy coatings and concrete polishing solutions."
      />
      <div className="px-[4%] py-28 flex justify-between bg-gray-50">
        <div className="mt-10 ">
          <h1 className="text-5xl font-bold text-black leading-tight">
            About Us
          </h1>

          <p className="text-xl font-md text-black leading-7 w-3/5 mt-4">
            {" "}
            Welcome to Palushaj Epoxy Coatings, where quality craftsmanship and
            dedication to excellence are the foundation of everything we do
            <br />
            <br />
            Founded in 1998, our family-owned business has proudly served
            residential, commercial, and industrial clients for over two
            decades. Our journey began in the Balkans, where we grew up valuing
            hard work, integrity, and perseverance. We started this company with
            a dream for a better future. It wasn’t easy, but we embraced the
            challenges, pouring our hearts into building a business that
            reflects our values and commitment to quality.
            <br />
            <br />
            Starting with just a few tools and a lot of determination, we
            quickly earned a reputation for our meticulous attention to detail,
            reliability, and customer-focused approach. Today, we specialize in
            epoxy flooring, concrete polishing, glue and tar removal, and
            professional painting. Whether transforming residential spaces or
            tackling large-scale industrial projects, we take pride in exceeding
            expectations and delivering stunning results.
          </p>

          <button className="group relative px-6 py-4 mt-4 text-white bg-[#FF8C00] lg:w-1/5  font-semibold transition-transform duration-300 hover:scale-105">
            Book Now
            {/* Bottom line */}
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
            {/* Right line */}
            <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-row gap-4 justify-end">
            <img
              src={hero.src}
              alt="Image 1"
              className="rounded-lg shadow-md object-cover w-[70%] rounded-tl-full "
            />
            <img
              src={hero.src}
              alt="Image 1"
              className="rounded-lg shadow-md object-cover w-[70%] rounded-tr-full "
            />
            <div className=" flex flex-col gap-4">
              <img
                src={hero.src}
                alt="Image 2"
                className="rounded-lg shadow-md object-cover w-96 "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-28 px-[4%]  text-center ">
        <h1 className="text-5xl font-bold text-black leading-tight ">
          Our team
        </h1>
        <p className="text-xl font-md text-black leading-7 text-center px-96 mt-4">
          {" "}
          Our team is passionate about what we do and dedicated to bringing your
          vision to life with precision and care. We believe that no project is
          too big or small—our goal is to provide top-notch service that leaves
          a lasting impression. As a family business, we understand the value of
          trust and long-term relationships. That’s why most of our work comes
          from referrals, a testament to the loyalty and satisfaction of our
          clients. Now, with a new generation stepping in, we’re blending the
          experience of the past with innovative ideas for the future to grow
          and serve our community even better.
        </p>
        <img
          src={hero.src}
          alt=""
          className="w-full h-[600px] mt-20 rounded-lg shadow-md object-cove"
        />
      </div>
      <Faq />
      <Cta />
    </div>
  );
}
