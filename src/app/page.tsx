import { Aboutus } from "@/components/homepage/Aboutus";
import Hero from "@/components/homepage/Hero";
import { WorkProcess } from "@/components/homepage/WorkProcess";

export default function Home() {
  return (
    <div className="">
      <div>
        <Hero />
        <Aboutus />
        <WorkProcess />
      </div>
    </div>
  );
}
