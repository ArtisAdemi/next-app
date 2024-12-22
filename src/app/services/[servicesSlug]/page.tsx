"use client";
import React from "react";
import servicesData from "../../../../public/services.json"; // Adjust the import path as necessary
import { useParams } from "next/navigation";
import Hero from "@/components/homepage/Hero";

const SingleService = () => {
  const { servicesSlug } = useParams();

  const service = servicesData.services.find((s) => s.slug === servicesSlug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-4">{service.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{service.description}</p>
      <div className="mb-6">{service.content}</div>

      {/* Dynamically display all service details */}
      {service.why && <h2 className="text-2xl font-semibold">{service.why}</h2>}
      {service.benefits && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Benefits:</h3>
          <ul className="list-disc pl-5">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-600">
                {benefit.title}: {benefit.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.maintenance && service.maintenance.intro && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.maintenance.intro}</h3>
          <ul className="list-disc pl-5">
            {service.maintenance.steps.map((step, index) => (
              <li key={index} className="text-gray-600">
                {step}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.servicesIntro && service.servicesDescription && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.servicesIntro}</h3>
          <h3 className="text-lg font-semibold">
            {service.servicesDescription}
          </h3>
          <ul className="list-disc pl-5">
            {service.services.map((service, index) => (
              <li key={index} className="text-gray-600">
                {service.title}: {service.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.installationIntro && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.installationIntro}</h3>
          <ul className="list-disc pl-5">
            {service.installationSteps.map((step, index) => (
              <li key={index} className="text-gray-600">
                {step.step}: {step.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.finishesIntro && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.finishesIntro}</h3>
          <ul className="list-disc pl-5">
            {service.finishes.map((finish, index) => (
              <li key={index} className="text-gray-600">
                {finish.title}: {finish.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.removalIntro && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.removalIntro}</h3>
          <ul className="list-disc pl-5">
            {service.removalSteps.map((removal, index) => (
              <li key={index} className="text-gray-600">
                {removal.step}: {removal.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.whyUs && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.whyUs}</h3>
          <ul className="list-disc pl-5">
            {service.whyUsSteps.map((whyUsStep, index) => (
              <li key={index} className="text-gray-600">
                {whyUsStep.step}: {whyUsStep.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.upgrade && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{service.upgrade.intro}</h3>
          <p className="text-gray-600">{service.upgrade.text}</p>
        </div>
      )}
      {service.contactText && (
        <div>
          <h3 className="text-xl font-semibold">{service.contactText}</h3>
          <button className="border p-2">Contact Us</button>
        </div>
      )}
      {service.expertiseIntro && service.expertiseDescription && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold">{service.finishesIntro}</h3>
          <p>{service.expertiseDescription}</p>
          <ul className="list-disc pl-5">
            {service.expertise.map((expertise, index) => (
              <li key={index} className="text-gray-600">
                {expertise.title}: {expertise.text}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.workIntro && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{service.workIntro}</h3>
          <p className="text-gray-600">
            {service.work.map((work, index) => (
              <span key={index}>
                {work.title}: {work.text}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
      {service.space && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{service.space}</h3>
          <p className="text-gray-600">
            {service.spaceTypes.map((spaceType, index) => (
              <span key={index}>
                {spaceType.type}: {spaceType.text}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
      {service.typesIntro && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">{service.typesIntro}</h3>
          <ul className="list-disc pl-5">
            {service.types.map((type, index) => (
              <li key={index} className="text-gray-600">
                {type.title}: {type.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleService;
