import Image from "next/image";
import bgImage from "../../../public/images/background-hero.jpg";
import hero from "../../../public/images/hero.jpg";

export const OurServices = () => {
  return (
    <div className="px-[4%] py-20 bg-[#D3D3D3]">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        We provide various best services to transform your ideas
      </h1>

      <div className="grid grid-cols-1 gap-8 ">
        {/* Service 1 */}
        <div className="flex flex-col md:flex-row items-start bg-[#333333] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <div className="w-full md:w-1/3">
            <img className="h-[400px] w-full p-10" src={hero.src} alt="" />
          </div>
          <div className="p-12 w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">EPOXY</h2>
              <p className="text-lg mb-4">
                Epoxy Flooring: Durable, Stylish, and Built to Last Epoxy
                flooring is the ultimate solution for those seeking a durable,
                versatile, and visually stunning surface for their space.
                Created by combining resin and hardener, epoxy forms a strong
                bond with concrete, resulting in a sleek, resilient finish
                perfect for residential, commercial, and industrial
                applications.
              </p>
            </div>
            <div className="mt-auto flex justify-end">
              <button className="flex items-center justify-center w-24 h-24 mt-20 rounded-full bg-white text-black shadow-md hover:bg-gray-300 transition-all">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start bg-[#333333] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <div className="w-full md:w-1/3">
            <img className="h-[400px] w-full p-10" src={hero.src} alt="" />
          </div>
          <div className="p-12 w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">CONCRETE POLISHING</h2>
              <p className="text-lg mb-4">
                Epoxy Flooring: Durable, Stylish, and Built to Last Epoxy
                flooring is the ultimate solution for those seeking a durable,
                versatile, and visually stunning surface for their space.
                Created by combining resin and hardener, epoxy forms a strong
                bond with concrete, resulting in a sleek, resilient finish
                perfect for residential, commercial, and industrial
                applications.
              </p>
            </div>
            <div className="mt-auto flex justify-end">
              <button className="flex items-center justify-center w-24 h-24 mt-20 rounded-full bg-white text-black shadow-md hover:bg-gray-300 transition-all">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start bg-[#333333] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <div className="w-full md:w-1/3">
            <img className="h-[400px] w-full p-10" src={hero.src} alt="" />
          </div>
          <div className="p-12 w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                COMMERCIAL/INDUSTRIAL PAINTING
              </h2>
              <p className="text-lg mb-4">
                Epoxy Flooring: Durable, Stylish, and Built to Last Epoxy
                flooring is the ultimate solution for those seeking a durable,
                versatile, and visually stunning surface for their space.
                Created by combining resin and hardener, epoxy forms a strong
                bond with concrete, resulting in a sleek, resilient finish
                perfect for residential, commercial, and industrial
                applications.
              </p>
            </div>
            <div className="mt-auto flex justify-end">
              <button className="flex items-center justify-center w-24 h-24 mt-20 rounded-full bg-white text-black shadow-md hover:bg-gray-300 transition-all">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start bg-[#333333] text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
          <div className="w-full md:w-1/3">
            <img className="h-[400px] w-full p-10" src={hero.src} alt="" />
          </div>
          <div className="p-12 w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                TAR, GLUE AND GROUT REMOVAL
              </h2>
              <p className="text-lg mb-4">
                Epoxy Flooring: Durable, Stylish, and Built to Last Epoxy
                flooring is the ultimate solution for those seeking a durable,
                versatile, and visually stunning surface for their space.
                Created by combining resin and hardener, epoxy forms a strong
                bond with concrete, resulting in a sleek, resilient finish
                perfect for residential, commercial, and industrial
                applications.
              </p>
            </div>
            <div className="mt-auto flex justify-end">
              <button className="flex items-center justify-center w-24 h-24 mt-20 rounded-full bg-white text-black shadow-md hover:bg-gray-300 transition-all">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
