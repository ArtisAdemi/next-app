"use client";

import Image from "next/image";
import React, { useState, forwardRef } from "react";

const ProjectGallery = forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {
      id: 1,
      heroImage: "/images/hero.jpg",
      backgroundImage: "/images/background-hero.jpg",
    },
    {
      id: 2,
      heroImage: "/images/hero.jpg",
      backgroundImage: "/images/hero.jpg",
    },
    {
      id: 3,
      heroImage: "/images/hero.jpg",
      backgroundImage: "/images/hero.jpg",
    },
    {
      id: 4,
      heroImage: "/images/hero.jpg",
      backgroundImage: "/images/hero.jpg",
    },
    {
      id: 5,
      heroImage: "/images/hero.jpg",
      backgroundImage: "/images/hero.jpg",
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
    <div ref={ref} className="px-[4%] lg:px-[12%] py-28">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-gray-800">
        Before and After Comparisons
      </h1>

      {/* Display Selected Project with Comparison */}
      {selectedProjectIndex !== null && (
        <div className="mt-10 w-full relative">
          <div
            className="relative w-full  mx-auto aspect-[70/60] lg:aspect-[20/10] overflow-hidden select-none rounded-xl shadow-lg"
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
              priority
              src={projects[selectedProjectIndex].heroImage}
              className="object-cover rounded-xl"
            />
            <div
              className="absolute top-0 left-0 right-0 w-full aspect-[70/60] lg:aspect-[20/10] m-auto overflow-hidden select-none"
              style={{
                clipPath: `inset(0 ${
                  100 - sliderPositions[selectedProjectIndex]
                }% 0 0)`,
              }}
            >
              <Image
                alt={`Background image of Project ${selectedProjectIndex + 1}`}
                fill
                priority
                quality={100}
                src={projects[selectedProjectIndex].backgroundImage}
                className="object-cover rounded-xl"
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

      <div className="w-full mt-12 flex flex-wrap gap-y-6 justify-between">
        {/* Display Thumbnails */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-comparison relative w-[150px] xl:w-[200px] h-[150px] xl:h-[200px] cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
            onClick={() => setSelectedProjectIndex(index)}
          >
            <Image
              alt={`Project ${project.id}`}
              className="object-cover rounded-lg shadow-md"
              src={project.heroImage}
              quality={100}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
});

ProjectGallery.displayName = "Hero";

export default ProjectGallery;
