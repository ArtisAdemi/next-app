"use client";
import React from "react";
import servicesData from "../../../../public/services.json"; // Adjust the import path as necessary
import { useParams } from "next/navigation";
import EpoxyGallery from "@/components/EpoxyGallery";
import Space from "@/components/globals/Space";

const SingleService = () => {
  const { servicesSlug } = useParams();

  const service = servicesData.services.find((s) => s.slug === servicesSlug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className=" bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-10">{service.title}</h1>
      <div className="flex flex-wrap  text-black py-28 bg-[#D3D3D3] px-6">
        {/* Left Section */}
        <div className="w-full  sm:w-1/2 flex flex-wrap gap-4">
          <div className="w-full sm:w-[48%] h-80 bg-gray-600"></div>
          <div
            className="w-full sm:w-[48%] h-80
           bg-gray-500"
          ></div>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 mt-20 space-y-6 sm:mt-0 sm:pl-10">
          <div className="mb-6">
            <p className="text-2xl font-bold ">{service.description}</p>
          </div>
          <div className="mb-6 text-black">{service.content}</div>

          <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg shadow-lg w-full lg:w-1/4 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-[#333333] text-white py-28 px-6">
        <div className="flex flex-col md:flex-row">
          {/* First column: Benefits and Title */}
          <div className="md:w-3/5">
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
                        <div className="w-1/3  rounded-full h-2">
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
          <div className="md:w-2/5 max-h-screen bg-gray-700 rounded-lg"></div>
        </div>
      </div>
      {/* ///CHECK/// */}
      {service.expertiseIntro && service.expertiseDescription && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-red-900">
            {service.finishesIntro}
          </h3>
          <p>{service.expertiseDescription}</p>
          <ul className="list-disc pl-5">
            {service.expertise.map((expertise, index) => (
              <li key={index} className="text-red-900">
                {expertise.title}: {expertise.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.typesIntro && (
        <div className="mt-4 py-28">
          <h3 className="text-3xl font-bold  text-center">
            {service.typesIntro}
          </h3>
          <div className="flex flex-col items-center gap-6 mt-6">
            {/* First row with 2 items */}
            <div className="flex flex-col lg:flex-row gap-6">
              {service.types.slice(0, 2).map((type, index) => (
                <div
                  key={index}
                  className="w-80 h-40 border rounded-lg p-4 shadow-sm  flex flex-col justify-center items-center text-gray-600"
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
                  className="w-80 h-40 border rounded-lg p-4 shadow-sm  flex flex-col justify-center items-center text-gray-600"
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
        // <div className="py-28 px-[4%] bg-[#333333]">
        //   <h3 className="text-3xl font-bold  text-center text-white">
        //     {service.space}
        //   </h3>
        //   <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //     {service.spaceTypes.map((spaceType, index) => (
        //       <div
        //         key={index}
        //         className="border p-6 h-full flex flex-col transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ease-in-out"
        //       >
        //         <h4 className="text-lg text-white font-semibold">
        //           {spaceType.type}
        //         </h4>
        //         <p className="text-white mt-2 flex-grow">{spaceType.text}</p>
        //       </div>
        //     ))}
        //   </div>
        // </div>
        <div className="w-full bg-white px-[4%] gap-x-16  py-28">
          <div className="mb-16 ">
            <h5 className="font-semibold text-xl text-[#FF8C00]">
              {service.space.split(" ", 1)[0]}
            </h5>
            <h1 className="text-5xl font-bold text-black leading-tight">
              {service.space.split(" ", 2)[1]} {service.space.split(" ", 3)[2]}{" "}
              {service.space.split(" ", 4)[3]}
            </h1>
          </div>
          <div className="">
            <div className="flex">
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
                  {/* <span className="text-6xl">{spaceType.icon}</span> */}
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
        </div>
      )}
      {service.installationIntro && (
        <div className=" py-28 bg-black">
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            {service.installationIntro}
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
            {service.installationSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <p className="text-white text-xl font-semibold">
                    {step.step}
                  </p>
                  <p className="text-gray-200 text-base mt-1">{step.text}</p>
                </div>
                {index < service.installationSteps.length - 1 && (
                  <div className="h-10 w-[1px] bg-gray-300"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {service.maintenance && service.maintenance.intro && (
        <div className="mb-8 py-16 bg-gray-100">
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
        <div className="mb-4 py-28">
          <h3 className="text-3xl font-bold text-center text-black mb-10">
            {service.finishesIntro}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {service.finishes.map((finish, index) => (
              <div
                key={index}
                className="bg-[#333333] border shadow-md rounded-lg p-6 text-white w-72"
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
        <div className="mt-4 py-28">
          <h3 className="text-3xl font-bold text-center">{service.whyUs}</h3>
          <div className="flex flex-col items-center gap-6 mt-6">
            {/* First row with 2 items */}
            <div className="flex flex-col lg:flex-row gap-6">
              {service.whyUsSteps.slice(0, 2).map((whyUsStep, index) => (
                <div
                  key={index}
                  className="w-80 h-40 border  p-4  flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ease-in-out text-gray-600"
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
                  className="w-80 h-40 border  p-4  flex flex-col justify-center items-center transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ease-in-out text-gray-600"
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
        <div
          className=" bg-cover bg-center bg-gray-300 py-28 text-white relative flex items-center justify-center"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1920x400")', // Placeholder image
          }}
        >
          <div className="text-center max-w-2xl ">
            <h3 className="text-4xl font-bold mb-4">{service.upgrade.intro}</h3>
            <p className="text-lg">{service.upgrade.text}</p>
          </div>

          {/* <div>
            <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white text-base px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
              Contact Us
            </button>
          </div> */}
        </div>
      )}

      {/* ///CHECK/// */}
      {service.expertiseIntro && service.expertiseDescription && (
        <div className="mb-4 text-center py-28 bg-gradient-to-b from-gray-100 via-white to-gray-100">
          <h3 className="text-2xl font-bold text-black mb-6">
            {service.finishesIntro}
          </h3>
          <p className="mb-8 text-gray-700 text-lg max-w-2xl mx-auto">
            {service.expertiseDescription}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto">
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
                className="border p-6 h-full flex flex-col transition-transform duration-500 hover:scale-105 rounded-lg shadow-lg ease-in-out"
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
      {service.contactText && (
        <div className="px-[4%] py-28 bg-[#D3D3D3] text-black flex gap-y-5 lg:gap-y-0 flex-col lg:flex-row lg:items-center justify-between">
          {/* Title Section */}
          <h3 className="text-2xl font-extrabold text-center lg:text-start lg:w-1/3">
            {service.contactText}
          </h3>

          {/* Button Section */}
          <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white text-base px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleService;
