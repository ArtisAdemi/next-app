import React from "react";

const EpoxyGallery: React.FC = () => {
  const guides = [
    {
      title: "1100 SL Color Guide",
      link: "https://drive.google.com/file/d/1bpynfswCP3t2riIaa3R9gn6Zj3c9njgZ/view",
    },
    {
      title: "Metalic Color Guide",
      link: "https://drive.google.com/file/d/176qkNz-_huZVbViFJVDu2UsrHMg7HckB/view",
    },
    {
      title: "Simiron Chips Color Guide",
      link: "https://drive.google.com/file/d/1b7-zrAwjoCu7txH8GtqZVz_ZpNS9ZRjE/view",
    },
    {
      title: "Torginal Chip Color Guide",
      link: "https://drive.google.com/file/d/1OwszyT4X-z_wmGpvHdZdHyyJJBLfgMPR/view",
    },
  ];

  return (
    <div className="bg-slate-200 py-28">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
        Epoxy Color Guide
      </h1>
      <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8">
        {guides.map((guide, index) => (
          <a
            key={index}
            href={guide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full md:w-1/2 lg:w-1/4 border border-black p-8 rounded-lg bg-white shadow-lg hover:shadow-2xl hover:bg-orange-50 hover:text-[#ff8c00] hover:border-[#FF8C00] transition duration-300 transform hover:-translate-y-1"
          >
            <h2 className="text-lg font-bold text-center">{guide.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EpoxyGallery;
