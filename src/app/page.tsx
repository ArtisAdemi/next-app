import { About } from "@/components/homepage/Aboutus";
import Hero from "@/components/homepage/Hero";
import { OurServices } from "@/components/homepage/Ourservices";
import { WorkProcess } from "@/components/homepage/WorkProcess";
import { Cta } from "@/components/globals/Cta";
import { Footer } from "@/components/globals/Footer";

export default function Home() {
  return (
    <div className="">
      <div>
        <Hero />
        <About />
        <WorkProcess />
        <OurServices />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
