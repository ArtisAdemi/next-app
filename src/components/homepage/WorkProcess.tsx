"use client";
import React from "react";
import Space from "../globals/Space";

export const WorkProcess = () => {
  const steps = [
    {
      id: 1, // Make sure this is the first tab
      title: "Residential",
      icon: "💵",
      description:
        "Transform your home with our expert epoxy coatings, and concrete polishing (indoors only). Whether its garage floors, basements, or patios, we create beautiful durable surfaces tailored to your lifestyle.",
    },
    {
      id: 2,
      title: "Commercial",
      icon: "📦",
      description:
        "Enhance your business space with high-quality epoxy flooring, polished concrete, and custom finishes. We provide durable, low-maintenance solutions ideal for offices, retail environments, and more",
    },
    {
      id: 3,
      title: "Industrial",
      icon: "🎨",
      description:
        "Rely on our heavy-duty epoxy coatings, concrete polishing, and surface preparation solutions designed for industrial demands. We focus on safety and durability, ensuring your floors withstand high traffic and heavy equipment, keeping your facility compliant and professional",
    },
  ];

  return (
    <div className="w-full flex gap-x-16 lg:pl-[4%] py-28">
      <h5 className="font-semibold text-xl text-[#FF8C00]">Construction</h5>
      <div>
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black leading-tight">
            CONSTRUCTION WE SERVE
          </h1>
        </div>

        <div className="flex">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`p-6 cursor-pointer flex-1 h-[350px] text-${
                step.id === 1 ? "white" : step.id === 2 ? "white" : "black"
              } bg-[${
                step.id === 1
                  ? "#272727"
                  : step.id === 2
                  ? "#949494"
                  : "#EEEEEE"
              }]`}
            >
              <span className="text-6xl">{step.icon}</span>
              <Space title={step.title} description={step.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
