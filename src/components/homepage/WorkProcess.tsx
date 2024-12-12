"use client";
import React, { useState } from "react";

export const WorkProcess = () => {
  const [activeTab, setActiveTab] = useState(1); // Default first tab selected

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
    <div className="w-full py-28 text-white bg-[#333333]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white font-semibold mb-12 text-center">
          Construction We Serve
        </h1>
        <div className="flex justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`cursor-pointer flex flex-col items-center ${
                activeTab === step.id ? "text-white" : "text-white"
              }`}
              onClick={() => setActiveTab(step.id)}
            >
              <div
                className={`flex items-center justify-center shadow-2xl w-40 h-40 border border-[#C0C0C0] rounded-full ${
                  activeTab === step.id ? "bg-[#D3D3D3]" : "bg-[#333333]"
                } hover:bg-[#A9A9A9] transition-colors duration-300`}
              >
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h2 className="text-lg font-medium mt-4">{step.title}</h2>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-white max-w-3xl mx-auto">
            {steps.find((step) => step.id === activeTab)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
