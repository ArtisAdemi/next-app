"use client";
import Navbar from "@/components/globals/Navbar";
import { Service } from "public/serviceTypes";
import servicesData from "../../../public/services.json";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const router = useRouter();

  useEffect(() => {
    setServices(servicesData.services as Service[]);
  }, []);

  return (
    <div>
      <div className="bg-[#333333]">
        <Navbar />
      </div>

      <div className="services"></div>
    </div>
  );
}
