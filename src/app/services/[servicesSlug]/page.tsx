"use client";
import React from "react";
import servicesData from "../../../../public/services.json"; // Adjust the import path as necessary
import { useParams } from "next/navigation";

const SingleService = () => {
  const { servicesSlug } = useParams(); // Use useParams to get the slug

  // Find the service based on the slug
  const service = servicesData.services.find((s) => s.slug === servicesSlug);

  if (!service) {
    return <div>Service not found</div>; // Handle case where service is not found
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p>{service.description}</p>
      <div>{service.content}</div>
      {/* Add more service details as needed */}
    </div>
  );
};

export default SingleService;
