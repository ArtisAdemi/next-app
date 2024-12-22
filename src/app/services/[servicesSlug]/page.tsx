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
    <div>
      <Hero />

      <h1 className="text-3xl px-[4%] py-28 font-bold">{service.title}</h1>
      {service.description && (
        <div>
          <p>{service.description}</p>
        </div>
      )}
      <div>{service.content}</div>
    </div>
  );
};

export default SingleService;
