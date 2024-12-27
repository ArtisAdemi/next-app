import { Aboutus } from "@/components/homepage/Aboutus";
import Hero from "@/components/homepage/Hero";
import { OurServices } from "@/components/homepage/Ourservices";
import WhyUs from "@/components/homepage/WhyUs";
import { WorkProcess } from "@/components/homepage/WorkProcess";

export default function Home() {
  return (
    <div className="">
      <div>
        <Hero
          title="Welcome to Palushaj Epoxy Coatings"
          description="Your trusted partner for high-quality epoxy coatings and concrete polishing solutions."
        />
        <Aboutus />
        <WhyUs />
        <WorkProcess />
        <OurServices />
      </div>
    </div>
  );
}
