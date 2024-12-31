import hero from "../../../public/images/hero.jpg";
import { Footer } from "@/components/globals/Footer";

export default function About() {
  return (
    <div className="">
      {/* Hero Section */}

      <div className="py-28 px-[4%] ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-6">
          About Us
        </h1>
        <p className="text-lg  leading-relaxed mb-6 text-center px-60 mt-4 ">
          Welcome to Palushaj Epoxy Coatings, where quality craftsmanship and
          dedication to excellence are the foundation of everything we do.
        </p>
        <br />
        <p className=" text-lg  leading-relaxed mb-6 text-center px-60 ">
          Founded in 1998, our family-owned business has proudly served
          residential, commercial, and industrial clients for over two decades.
          Our journey began in the Balkans, where we grew up valuing hard work,
          integrity, and perseverance. We started this company with a dream for
          a better future. It wasn’t easy, but we embraced the challenges,
          pouring our hearts into building a business that reflects our values
          and commitment to quality.
        </p>
      </div>
      <div className="flex justify-center py-28 items-center -mt-44 gap-4">
        <img
          src={hero.src}
          alt=""
          className="object-cover shadow-lg h-[600px] lg:h-[600px] rounded-l-full  "
        />
        <img
          src={hero.src}
          alt=""
          className="object-cover shadow-lg h-[400px] lg:h-[700px] rounded-r-full  "
        />
      </div>
      <div>
        {" "}
        <p className="text-lg  leading-relaxed mb-6 text-center px-60 mt-4 ">
          Starting with just a few tools and a lot of determination, we quickly
          earned a reputation for our meticulous attention to detail,
          reliability, and customer-focused approach. Today, we specialize in
          epoxy flooring, concrete polishing, glue and tar removal, and
          professional painting. Whether transforming residential spaces or
          tackling large-scale industrial projects, we take pride in exceeding
          expectations and delivering stunning results. At Palushaj Epoxy
          Coatings, we treat every project as an opportunity to create something
          lasting and beautiful. Our team is passionate about what we do and
          dedicated to bringing your vision to life with precision and care. We
          believe that no project is too big or small—our goal is to provide
          top-notch service that leaves a lasting impression.
        </p>
      </div>
      <div className="py-28">
        <img
          src={hero.src}
          alt=""
          className="w-full object-cover shadow-lg h-[400px]"
        />
        <p className="text-lg  leading-relaxed  text-center px-60 mt-10 ">
          At Palushaj Epoxy Coatings, we treat every project as an opportunity
          to create something lasting and beautiful. Our team is passionate
          about what we do and dedicated to bringing your vision to life with
          precision and care. We believe that no project is too big or small—our
          goal is to provide top-notch service that leaves a lasting impression.
          <br />
          <br />
          As a family business, we understand the value of trust and long-term
          relationships. That’s why most of our work comes from referrals, a
          testament to the loyalty and satisfaction of our clients. Now, with a
          new generation stepping in, we’re blending the experience of the past
          with innovative ideas for the future to grow and serve our community
          even better.
        </p>
      </div>
      <div>
        <div className="px-[4%] py-28 bg-[#D3D3D3] text-black">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-start mb-4">
              Thank you for trusting us with <br /> your projects.
            </h1>
            <hr className="border-[#C0C0C0]  mx-auto" />
          </div>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Description */}
            <p className="text-gray-800 max-w-lg text-center lg:text-left">
              Whether you’re looking to enhance your home, office, or industrial
              space, we’re here to help every step of the way. Let’s build
              something extraordinary together.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white text-base px-6 py-3 rounded-lg shadow-lg flex-1 whitespace-nowrap transition-all duration-300">
                Book Now
              </button>
              <button className="border border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-lg shadow-lg flex-1 whitespace-nowrap transition-all duration-300">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
