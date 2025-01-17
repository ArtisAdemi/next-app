"use client";

import React, { useState } from "react";
import hero from "../../../public/images/epoxy4.webp";
import Image from "next/image";
const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve southeast Michigan for residential projects and offer statewide coverage for commercial and industrial work. If you’re located out of state, don’t hesitate to reach out! We’re more than willing to travel. If you’re unsure whether we cover your area, feel free to contact us—we’d be happy to assist you.",
    },
    {
      question: "Are your services environmentally friendly?",
      answer:
        "Yes, we use eco-friendly materials and techniques whenever possible. Our epoxy coatings are low in volatile organic compounds (VOCs), ensuring a safer environment for you and your family.",
    },
    {
      question: "Do you offer free consultations or quotes?",
      answer:
        "Yes, we provide free consultations and detailed quotes to help you decide on the best solution for your flooring needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, checks, and digital payments.",
    },
    {
      question: "How far in advance should I book your services?",
      answer:
        "We recommend booking at least 2-4 weeks in advance, especially during peak seasons, to secure your preferred dates.",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center py-16 xl:py-0 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center justify-items-center pr-[4%] xl:pr-0 pl-[4%]">
        {/* Left Side: Title and FAQ */}
        <div className="">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Relax, we’re always here for you!
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Whether it’s flooring solutions, expert advice, or reliable
            services, we’re dedicated to making your experience seamless and
            stress-free. Let’s bring your vision to life!
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
              placeholder="blur"
              className="w-[100%] max-h-[800px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
