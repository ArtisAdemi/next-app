"use client";

import Image from "next/image";
import React, { useState, forwardRef } from "react";

const ProjectGallery = forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {
      id: 1,
      backgroundImage: "/images/before1.webp",
      heroImage: "/images/after1.webp",
    },
    {
      id: 2,
      backgroundImage: "/images/before2.webp",
      heroImage: "/images/after2.webp",
    },
    {
      id: 3,
      backgroundImage: "/images/before3.webp",
      heroImage: "/images/after3.webp",
    },
    {
      id: 4,
      backgroundImage: "/images/before4.webp",
      heroImage: "/images/after4.webp",
    },
    // Add more projects as needed
  ];

  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | 0>(
    0
  );
  const [sliderPositions, setSliderPositions] = useState<number[]>(
    Array(projects.length).fill(50)
  );
  const [isDraggingIndex, setIsDraggingIndex] = useState<number | null>(null);

  const handleMove = (clientX: number, rect: DOMRect, index: number) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPositions((prev) => {
      const newPositions = [...prev];
      newPositions[index] = percent;
      return newPositions;
    });
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (isDraggingIndex !== index) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect, index);
  };

  const handleTouchMove = (
    event: React.TouchEvent<HTMLDivElement>,
    index: number
  ) => {
    if (isDraggingIndex !== index) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      handleMove(touch.clientX, rect, index);
    }
  };

  return (
    <div ref={ref} className="px-[4%] py-16 lg:py-28">
      <div className="">
        <h5 className="font-semibold mb-4 text-xl text-[#FF8C00]">Projects</h5>
        <h1 className="text-5xl font-bold text-black leading-tight">
          Before and After Comparison
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-10 mt-12">
        <div className="flex lg:flex-col justify-between lg:flex-wrap gap-x-2 lg:gap-x-0 gap-y-6 mb-6 lg:mb-0">
          {/* Display Thumbnails */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-comparison relative w-[80px] md:w-[110px] md:h-[110px] xl:w-[120px] h-[80px] xl:h-[100px] border rounded-lg border-black  cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => setSelectedProjectIndex(index)}
            >
              <Image
                alt={`Project ${project.id}`}
                className="object-cover rounded-lg shadow-md"
                src={project.heroImage}
                quality={100}
                fill
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Display Selected Project with Comparison */}
        {selectedProjectIndex !== null && (
          <div className="w-full relative">
            <div
              className="relative w-full h-full aspect-[70/60] lg:aspect-[20/9] overflow-hidden select-none rounded-xl shadow-lg"
              onMouseMove={(e) => handleMouseMove(e, selectedProjectIndex)}
              onTouchMove={(e) => handleTouchMove(e, selectedProjectIndex)}
              onMouseDown={() => setIsDraggingIndex(selectedProjectIndex)}
              onTouchStart={() => setIsDraggingIndex(selectedProjectIndex)}
              onMouseUp={() => setIsDraggingIndex(null)}
              onTouchEnd={() => setIsDraggingIndex(null)}
            >
              <Image
                alt={`Hero image of Project ${selectedProjectIndex + 1}`}
                fill
                quality={100}
                src={projects[selectedProjectIndex].heroImage}
                className="object-cover rounded-xl"
                loading="lazy"
                placeholder="blur"
                //className="lg:w-[60%] h-[500px] lg:h-[400px]"
              />
              <div
                className="absolute top-0 left-0 right-0 w-full h-full aspect-[70/60] lg:aspect-[20/9] m-auto overflow-hidden select-none"
                style={{
                  clipPath: `inset(0 ${
                    100 - sliderPositions[selectedProjectIndex]
                  }% 0 0)`,
                }}
              >
                <Image
                  alt={`Background image of Project ${
                    selectedProjectIndex + 1
                  }`}
                  fill
                  loading="lazy"
                  quality={100}
                  placeholder="blur"
                  src={projects[selectedProjectIndex].backgroundImage}
                  className="object-cover rounded-xl"
                  //className="lg:w-[60%] h-[500px] lg:h-[400px]"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{
                  left: `calc(${sliderPositions[selectedProjectIndex]}% - 1px)`,
                }}
              >
                <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)] shadow-lg" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

ProjectGallery.displayName = "Hero";

export default ProjectGallery;
