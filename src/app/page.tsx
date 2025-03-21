"use client";
import React, { useRef } from "react";
import { About } from "@/components/homepage/Aboutus";
import Hero from "@/components/homepage/Hero";
import { OurServices } from "@/components/homepage/Ourservices";
import WhyUs from "@/components/homepage/WhyUs";
import { WorkProcess } from "@/components/homepage/WorkProcess";
import { Cta } from "@/components/globals/Cta";
import ProjectGallery from "@/components/homepage/ProjectGallery";
import Faq from "@/components/homepage/Faq";

export default function Home() {
  const projectGalleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <div>
        <Hero
          ref={projectGalleryRef}
          title="Palushi Epoxy Coatings"
          description="Your trusted partner for high-quality epoxy coatings and concrete polishing solutions."
        />
        <About />
        <WhyUs />
        <WorkProcess />
        <OurServices />

        <ProjectGallery ref={projectGalleryRef} />

        <Faq />

        <Cta />
      </div>
    </div>
  );
}
