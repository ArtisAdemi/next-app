import { About } from "@/components/homepage/Aboutus";
import Hero from "@/components/homepage/Hero";
import { OurServices } from "@/components/homepage/Ourservices";
import WhyUs from "@/components/homepage/WhyUs";
import { WorkProcess } from "@/components/homepage/WorkProcess";
import { Cta } from "@/components/globals/Cta";
import { Footer } from "@/components/globals/Footer";

export default function Home() {
  return (
    <div className="">
      <div>
        <Hero
          title="Welcome to Palushaj Epoxy Coatings"
          description="Your trusted partner for high-quality epoxy coatings and concrete polishing solutions."
        />
        <About />
        <WhyUs />
        <WorkProcess />
        <OurServices />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
