"use client";

import React, { useState } from "react";
import hero from "../../../public/images/hero.jpg";
import Image from "next/image";
const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Morbi fringilla metus ac lacus dapibus.",
      answer: "This is the answer to the first question.",
    },
    {
      question: "What we like to do & what we don’t like to do.",
      answer:
        "Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti.",
    },
    {
      question: "Aliquam fermentum odio nec gravida varius.",
      answer: "This is the answer to the third question.",
    },
    {
      question: "Quisque quis ex eleifend dolor maximus lacinia.",
      answer: "This is the answer to the fourth question.",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center pl-[4%]">
        {/* Left Side: Title and FAQ */}
        <div className="">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Relax, we’re always here for you!
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Nam sit amet neque auctor, dignissim augue eu, condimentum justo.
            Fusce fermentum tempus sapien, sagittis tellus mattis id. Cras et
            enim ex. Suspendisse potenti.
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
                {activeIndex === index && (
                  <div className="px-6 pb-5  text-gray-700 text-md leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full overflow-hidden">
          <div
            className="clip-image"
            style={{ clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <Image
              alt="image"
              src={hero}
              quality={100}
              className="w-[100%] max-h-[800px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
