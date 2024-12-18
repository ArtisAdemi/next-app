import Hero from "@/components/homepage/Hero";
import hero from "../../../public/images/hero.jpg";
import { Footer } from "@/components/globals/Footer";
import { Cta } from "@/components/globals/Cta";

export default function About() {
  return (
    <div className="">
      {/* Hero Section */}
      <Hero />
      <div className="py-28 px-[4%] ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-6">
          About Us
        </h1>
        <p className="text-lg  leading-relaxed mb-6 text-center px-60 mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          consectetur dolor, autem animi quas asperiores. Modi blanditiis, est
          tenetur necessitatibus sunt vel. Delectus voluptas eum numquam in
          exercitationem sit fugiat!
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
      <div className="py-28 bg-[#333333] mt-12 px-[4%]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mt-6">
          Our Mission
        </h1>
        <p className="text-lg leading-relaxed text-center px-60 mt-4 text-white mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          consectetur dolor, autem animi quas asperiores. Modi blanditiis, est
          tenetur necessitatibus sunt vel. Delectus voluptas eum numquam in
          exercitationem sit fugiat!
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovative Solutions",
                description:
                  "Deliver innovative and sustainable solutions for our clients.",
              },
              {
                title: "Empowering Communities",
                description:
                  "Empower communities through impactful design and technology.",
              },
              {
                title: "Commitment to Excellence",
                description:
                  "Maintain a commitment to quality, integrity, and excellence.",
              },
              {
                title: "Fostering Collaboration",
                description:
                  "Foster creativity and collaboration in all aspects of our work.",
              },
              {
                title: "Cutting-Edge Tools",
                description:
                  "Embrace cutting-edge tools and methodologies for continuous improvement.",
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Ensure customer satisfaction by exceeding expectations consistently.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg shadow-md p-6 text-center w-[300px] h-[200px] mx-auto"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Cta />
      <Footer />
    </div>
  );
}
