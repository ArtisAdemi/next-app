import React from "react";

import hero from "../../../public/images/hero.jpg";

const WhyUs: React.FC = () => {
  return (
    <div className="py-28 px-[4%] lg:text-center bg-gray-100 w-full">
      <div>
        <h5 className="font-semibold mb-4 text-xl text-[#FF8C00]">
          Why Choose Us
        </h5>
        <h1 className="text-5xl font-bold text-black leading-tight">
          Welcome to Palushaj Epoxy Coatings.
        </h1>
        <p className="text-xl font-md text-black leading-snug mt-4  ">
          {" "}
          Founded in 1998, our family-owned business has proudly served
          residential, commercial, and industrial clients for over two decades.
          <br />
          Our journey began in the Balkans, where we grew up valuing hard work,
          integrity, and perseverance. <br /> <br /> We started this company
          with a dream for a better future. <br /> It wasn’t easy, but we
          embraced the challenges, pouring our hearts into building a business
          that reflects our values and commitment to quality.
        </p>
      </div>
      <div className="mt-10">
        <img
          src={hero.src}
          alt=""
          className="w-full h-[600px] rounded-lg shadow-md object-cove"
        />
      </div>
    </div>
  );
};

export default WhyUs;
