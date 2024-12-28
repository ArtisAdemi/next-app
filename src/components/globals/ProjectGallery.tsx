"use client";

import Image from "next/image";
import { useState } from "react";

const ProjectGallery = () => {
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
    <div className="px-[4%] pb-28">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Before and After Comparisons
      </h1>
      <div className="w-full relative flex flex-col lg:flex-row space-y-10 md:space-y-0 space-x-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-comparison flex-shrink-0 min-w-[300px]"
          >
            <div
              className="relative w-full aspect-[70/45] overflow-hidden select-none"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onTouchMove={(e) => handleTouchMove(e, index)}
              onMouseDown={() => setIsDraggingIndex(index)}
              onTouchStart={() => setIsDraggingIndex(index)}
              onMouseUp={() => setIsDraggingIndex(null)}
              onTouchEnd={() => setIsDraggingIndex(null)}
            >
              <Image alt="" fill priority src={project.heroImage} />
              <div
                className="absolute top-0 left-0 right-0 w-full aspect-[70/45] m-auto overflow-hidden select-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPositions[index]}% 0 0)`,
                }}
              >
                <Image fill priority alt="" src={project.backgroundImage} />
              </div>
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{
                  left: `calc(${sliderPositions[index]}% - 1px)`,
                }}
              >
                <div className="bg-white absolute rounded-full h-3 w-3 -left-1 top-[calc(50%-5px)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectGallery;
