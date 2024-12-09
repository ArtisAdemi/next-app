"use client";
import React, { useState } from "react";

export const WorkProcess = () => {
  const [activeTab, setActiveTab] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Consultation",
      icon: "💡",
      description:
        "Nous prenons le temps d'écouter vos besoins, vos idées et vos envies. Cette étape est cruciale pour comprendre vos attentes et définir ensemble le cadre du projet.",
    },
    {
      id: 2,
      title: "Preparation",
      icon: "💵",
      description:
        "Analyse des besoins, estimation des coûts et présentation d'un devis détaillé.",
    },
    {
      id: 3,
      title: "Application",
      icon: "📦",
      description:
        "Création du concept et des maquettes en ligne avec vos objectifs.",
    },
    {
      id: 4,
      title: "Inspection",
      icon: "🎨",
      description:
        "Mise en œuvre et finalisation du projet conformément aux attentes.",
    },
  ];

  return (
    <div className="w-full py-28  text-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
          Our Work Process
        </h1>
        <div className="flex justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`cursor-pointer flex flex-col items-center ${
                activeTab === step.id ? "text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(step.id)}
            >
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full ${
                  activeTab === step.id ? "black text-black" : "bg-gray-800"
                }`}
              >
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h2 className="text-lg font-medium mt-4">{step.title}</h2>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {steps.find((step) => step.id === activeTab)?.description}
          </p>
        </div>
      </div>
    </div>
  );
};
