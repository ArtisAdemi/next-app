"use client";
import React from "react";
import servicesData from "../../../../public/services"; // Adjust the import path as necessary
import { useParams } from "next/navigation";
import EpoxyGallery from "@/components/EpoxyGallery";
import Space from "@/components/globals/Space";
import Navbar from "@/components/globals/Navbar";
import Image from "next/image";
import hero from "../../../../public/images/background-hero.jpg";
import Link from "next/link";
import EpoxyFaq from "@/components/EpoxyFaq";
import { Cta } from "@/components/globals/Cta";
import { GiFactory, GiFamilyHouse } from "react-icons/gi";
import { MdApartment } from "react-icons/md";

const iconsData = [
  {
    type: "Residential",
    icon: <GiFamilyHouse />,
    description: "Transform your home with our expert epoxy coatings.",
  },
  {
    type: "Commercial",
    icon: <MdApartment />,
    description:
      "Enhance your business space with high-quality epoxy flooring.",
  },
  {
    type: "Industrial",
    icon: <GiFactory />,
    description: "Rely on our heavy-duty epoxy coatings.",
  },
];

const SingleService = () => {
  const { servicesSlug } = useParams();

  const service = servicesData.services.find((s) => s.slug === servicesSlug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className=" bg-gray-100 rounded-lg shadow-lg">
      <div className="bg-[#333333] px-[4%]">
        <Navbar />
      </div>

      <div
        className={`flex flex-col lg:flex-row justify-between lg:pt-28 items-center gap-y-4`}
      >
        <div
          className={`w-full lg:w-1/2 lg:pr-12 py-12 lg:py-0 text-left px-[4%]`}
        >
          <h2
            className={`text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6`}
          >
            {service.title}
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold text-[#FF8C00] mb-3 sm:mb-4">
            {service.description}
          </h3>
          <p className={`text-base sm:text-lg leading-relaxed mb-6`}>
            {service.content}
          </p>
          <div className="flex justify-start">
            <Link
              href={`/bookings`}
              className="group cursor-pointer w-1/2 lg:w-1/3 text-center relative px-4 sm:px-6 py-3 sm:py-4 text-white bg-[#FF8C00] font-semibold transition-transform duration-300 hover:scale-105"
            >
              Book Now
              {/* Bottom line */}
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-400 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 group-hover:delay-0"></span>
              {/* Right line */}
              <span className="absolute top-0 -right-2 w-0.5 h-full bg-orange-400 transition-transform duration-300 origin-top scale-y-0 group-hover:scale-y-100 group-hover:delay-150"></span>
            </Link>
          </div>
        </div>
        <div className={`w-full lg:w-1/2 mx-auto `}>
          <Image
            src={
              service.images && service.images.length > 0
                ? service.images[0]
                : hero
            }
            alt={service.title}
            placeholder="blur"
            priority
            className="object-cover w-full max-h-[600px]"
          />
        </div>
      </div>

      {/* benefits */}

      <div className="bg-[#333333] text-white py-28 w-full">
        <div className="flex flex-col md:justify-between md:flex-col xl:flex-row-reverse">
          {/* First column: Benefits and Title */}
          <div className="xl:max-w-[45%] xl:pr-[8%] pl-[4%] xl:pl-0">
            {service.why && (
              <h2 className="text-4xl font-semibold mb-4">{service.why}</h2>
            )}

            {service.benefits && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
                <ul className="list-disc pl-5">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-300 text-xl mb-4">
                      {/* Benefit Title and Text */}
                      <div>
                        <p className="font-semibold">{benefit.title}</p>
                        <p className="text-white text-sm mb-2">
                          {benefit.text}
                        </p>
                        {/* Static Progress Bar */}
                        <div className="w-1/2  rounded-full h-2">
                          <div
                            className="bg-[#FF8C00] h-1  rounded-full"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Second column: Placeholder for Image (40% width) */}
          <div className="md:w-1/2 relative bg-gray-700 rounded-lg">
            <Image
              src={
                service.images && service.images.length > 0
                  ? service.images[1]
                  : hero
              }
              alt={service.title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>

      {service.typesIntro && (
        <div className="mt-4 py-28 px-[4%]">
          <h3 className="text-3xl font-bold  text-center">
            {service.typesIntro}
          </h3>
          <div className="flex flex-col  lg:items-center gap-6 mt-6">
            {/* First row with 2 items */}
            <div className="flex flex-col lg:flex-row gap-6">
              {service.types.slice(0, 2).map((type, index) => (
                <div
                  key={index}
                  className="lg:w-[300px] lg:h-[220px] border rounded-2xl p-4 shadow-md bg-white flex flex-col justify-center items-center text-gray-600"
                >
                  <h4 className="font-bold text-lg text-center text-black mb-2">
                    {type.title}
                  </h4>
                  <p className="text-center">{type.text}</p>
                </div>
              ))}
            </div>

            {/* Second row with 3 items */}
            <div className="flex flex-col lg:flex-row gap-6">
              {service.types.slice(2, 5).map((type, index) => (
                <div
                  key={index}
                  className="lg:w-[300px] lg:h-[220px] border rounded-2xl p-4 shadow-md bg-white flex flex-col justify-center items-center text-gray-600"
                >
                  <h4 className="font-bold text-lg text-black text-center mb-2">
                    {type.title}
                  </h4>
                  <p className="text-center">{type.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {service.space && (
        <div className="w-full bg-white  gap-x-16  py-28">
          <div className="mb-16 pl-[4%]">
            <h5 className="font-semibold text-xl text-[#FF8C00]">
              {service.space.split(" ", 1)[0]}
            </h5>
            <h1 className="text-5xl font-bold text-black leading-tight">
              {service.space.split(" ", 2)[1]} {service.space.split(" ", 3)[2]}{" "}
              {service.space.split(" ", 4)[3]}
            </h1>
          </div>
          <div className="lg:pl-[12%] pl-[4%]">
            <div className="flex flex-col lg:flex-row">
              {service.spaceTypes.map((spaceType, index) => (
                <div
                  key={index}
                  className={`p-6 cursor-pointer flex-1 h-[350px]`}
                  style={{
                    backgroundColor:
                      index === 0
                        ? "#272727"
                        : index === 1
                        ? "#949494"
                        : "#EEEEEE",
                    color:
                      index === 0 ? "white" : index === 1 ? "white" : "black",
                  }}
                >
                  <div className="text-6xl">
                    {
                      iconsData.find((icon) => icon.type === spaceType.type)
                        ?.icon
                    }
                  </div>
                  <Space title={spaceType.type} description={spaceType.text} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {servicesSlug === "epoxy-flooring" && (
        <div>
          <EpoxyGallery />
          <EpoxyFaq />
        </div>
      )}
      {service.installationIntro && (
        <div className="border-b-2 bg-white py-28 px-[4%]">
          <h3 className="text-3xl font-bold text-center text-black mb-10">
            {service.installationIntro}
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 ">
            {service.installationSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <p className="text-black text-xl font-semibold">
                    {step.step}
                  </p>
                  <p className="text-gray-600 text-base mt-1">{step.text}</p>
                </div>
                {index < service.installationSteps.length - 1 && (
                  <div className="lg:h-10 lg:w-[1px] w-20 h-[1px] bg-gray-600"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {service.maintenance && service.maintenance.intro && (
        <div className="mb-8 py-28 bg-gray-100 px-[4%]">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            {service.maintenance.intro}
          </h3>
          <div className="justify-center flex flex-col lg:flex-row gap-8 ">
            {service.maintenance.steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-lg flex items-center justify-center text-center"
              >
                <p className="text-gray-600 text-base leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {service.servicesIntro && service.servicesDescription && (
        <div className="mb-4 px-[4%] py-28">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-3">
            {service.servicesIntro}
          </h3>
          <h3 className="text-lg font-medium text-center">
            {service.servicesDescription}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-6 w-full lg:max-w-4xl mx-auto">
            {service.services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className="w-full lg:w-96 p-6 bg-white shadow-md rounded-lg text-center "
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {service.finishesIntro && (
        <div className="mb-4 py-28 bg-white px-[4%]">
          <h3 className="text-3xl font-bold text-center text-black mb-10">
            {service.finishesIntro}
          </h3>
          <div className="flex flex-wrap justify-between gap-6">
            {service.finishes.map((finish, index) => (
              <div
                key={index}
                className="bg-[#333333] border shadow-md rounded-lg p-6 text-white w-full lg:w-[23%]"
              >
                <h4 className="font-semibold text-xl mb-2">{finish.title}</h4>
                <p>{finish.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* // tar glue // */}
      {service.removalIntro && (
        <div className="py-28 bg-black">
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            {service.removalIntro}
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
            {service.removalSteps.map((removal, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <p className="text-white text-xl font-semibold">
                    {removal.step}
                  </p>
                  <p className="text-gray-200 text-base mt-1">{removal.text}</p>
                </div>
                {index < service.removalSteps.length - 1 && (
                  <div className="h-10 w-[1px] bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {service.whyUs && (
        <div className="mt-4 px-[4%] py-28">
          <h3 className="text-3xl font-bold text-center">{service.whyUs}</h3>
          <div className="flex flex-col items-center gap-6 mt-6">
            {/* First row with 2 items */}
            <div className="flex flex-col lg:flex-row gap-6">
              {service.whyUsSteps.slice(0, 2).map((whyUsStep, index) => (
                <div
                  key={index}
                  className="lg:w-80 lg:h-40 border  p-4  flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ease-in-out text-gray-600"
                >
                  <h4 className="font-bold text-lg text-center text-black mb-2">
                    {whyUsStep.step}
                  </h4>
                  <p className="text-center">{whyUsStep.text}</p>
                </div>
              ))}
            </div>

            {/* Second row with 3 items */}
            <div className="flex flex-col lg:flex-row gap-6">
              {service.whyUsSteps.slice(2, 5).map((whyUsStep, index) => (
                <div
                  key={index}
                  className="lg:w-80 lg:h-40 border  p-4  flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ease-in-out text-gray-600"
                >
                  <h4 className="font-bold text-lg text-center text-black mb-2">
                    {whyUsStep.step}
                  </h4>
                  <p className="text-center">{whyUsStep.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* // tar glue // */}
      {service.upgrade && (
        <div className="relative bg-cover bg-center text-white py-28 flex items-center justify-center">
          {/* Image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center brightness-[0.65]"
            style={{
              backgroundImage: `url(${service.upgradeImage?.[0]?.src})`,
            }}
          ></div>

          {/* Text content */}
          <div className="relative text-center max-w-2xl">
            <h3 className="text-4xl font-bold mb-4">{service.upgrade.intro}</h3>
            <p className="text-lg">{service.upgrade.text}</p>
          </div>

          {/* Optional button */}
          {/* <div>
      <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white text-base px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
        Contact Us
      </button>
    </div> */}
        </div>
      )}

      {/* ///CHECK/// */}
      {service.expertiseIntro && service.expertiseDescription && (
        <div className="mb-4 text-center py-28 bg-gradient-to-b px-[4%] from-gray-100 via-white to-gray-100">
          <h3 className="text-2xl font-bold text-black mb-6">
            {service.finishesIntro}
          </h3>
          <p className="mb-8 text-gray-700 text-lg max-w-2xl mx-auto">
            {service.expertiseDescription}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.expertise.map((expertise, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6"
              >
                <h4 className="text-lg font-semibold text-black mb-2">
                  {expertise.title}
                </h4>
                <p className="text-gray-600">{expertise.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ///CHECK/// */}
      {service.workIntro && (
        <div className="py-28 px-[4%] bg-[#333333]">
          <h3 className="text-3xl font-bold text-center text-white">
            {service.workIntro}
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.work.map((work, index) => (
              <div
                key={index}
                className="border p-6 h-full flex flex-col transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg ease-in-out"
              >
                <h4 className="text-lg text-white font-semibold">
                  {work.title}
                </h4>
                <p className="text-white mt-2 flex-grow">{work.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <Cta />
    </div>
  );
};

export default SingleService;
