import React from "react";

const EpoxyGallery: React.FC = () => {
  const guides = [
    {
      title: "1100 SL Color Guide",
      link: "/docs/1100SLColorGuide.pdf",
    },
    {
      title: "Metalic Color Guide",
      link: "/docs/MetallicColorGuide.pdf",
    },
    {
      title: "Simiron Flakes Color Guide",
      link: "/docs/SimironChipsColorGuide.pdf",
    },
    {
      title: "Torginol Flakes Color Guide",
      link: "/docs/TorginolChipColorGuide.pdf",
    },
  ];

  return (
    <div className="py-28 px-[4%] bg-[#333333]">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-white">
        Epoxy Color Guide
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8">
        {guides.map((guide, index) => (
          <a
            key={index}
            href={guide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-1/2 lg:w-1/4 border border-black p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-lg font-bold text-black text-center">
              {guide.title}
            </h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EpoxyGallery;
