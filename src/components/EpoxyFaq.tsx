"use client";

import React, { useState } from "react";
import hero from "../../public/images/epoxy5.webp";
import Image from "next/image";
const EpoxyFaq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the benefits of epoxy flooring?",
      answer:
        "Highly durable and resistant to wear. Easy to clean and maintain. Chemical and stain-resistant. Available in a variety of colors and finishes, including metallic and flake designs",
    },
    {
      question: "How long does the installation process take?",
      answer:
        "The time frame depends on the size and condition of the space, but most residential projects are completed within 2-3 days, vehicles cannot be driven onto residential floors for a minimum of 5 days. Larger commercial or industrial projects may take longer.",
    },
    {
      question: "How long does epoxy flooring last?",
      answer:
        "With proper care and maintenance, epoxy flooring can last 10-20 years, depending on usage and traffic. We've had customers from 20 years ago come back to us to redo a garage that only became discolored and some chipping from 20 years of abuse.",
    },
    {
      question: "How do I maintain my epoxy floors?",
      answer:
        "Sweep and mop regularly with a mild detergent. Avoid using abrasive cleaners or tools.",
    },
    {
      question: "Can damaged epoxy flooring be repaired?",
      answer:
        "Yes, we offer repair services to fix cracks, chips, or other issues. Contact us for an assessment.",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center py-16 xl:py-0 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center justify-items-center pr-[4%] xl:pr-0 pl-[4%]">
        {/* Left Side: Title and FAQ */}
        <div className="">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Epoxy Questions, Answered!
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Have questions about epoxy flooring? We’ve got you covered. From
            installation to maintenance, find everything you need to know right
            here.
          </p>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all ${
                  activeIndex === index
                    ? "bg-blue-50 border-l-4 border-[#FF8C00]"
                    : "bg-white shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center py-5 px-6 text-left text-gray-800 focus:outline-none"
                >
                  <span
                    className={`text-lg font-medium ${
                      activeIndex === index ? "text-black" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl transform ${
                      activeIndex === index ? "rotate-45" : ""
                    } transition-transform`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-300`}
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0",
                  }}
                  ref={(el) => {
                    if (activeIndex === index && el) {
                      el.style.maxHeight = `${el.scrollHeight}px`;
                    }
                  }}
                >
                  <div className="px-6 pb-5 text-gray-700 text-md leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full hidden xl:block overflow-hidden">
          <div
            className="clip-image"
            style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              alt="image"
              src={hero}
              quality={100}
              loading="lazy"
              className="w-[100%] max-h-[800px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpoxyFaq;
