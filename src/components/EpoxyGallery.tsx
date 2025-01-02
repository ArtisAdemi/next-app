import React from "react";

const EpoxyGallery: React.FC = () => {
  return (
    <div className="bg-slate-200 py-28">
      <div className="">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-16">
          Epoxy Color Guide
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-around mt-10">
        <div className="card-content border border-black p-8 rounded-lg">
          <a
            href="https://drive.google.com/file/d/1bpynfswCP3t2riIaa3R9gn6Zj3c9njgZ/view"
            className="card"
            target="_blank"
          >
            1100 SL Color Guide
          </a>
        </div>
        <div className="card-content border border-black p-8 rounded-lg">
          <a
            href="https://drive.google.com/file/d/176qkNz-_huZVbViFJVDu2UsrHMg7HckB/view"
            className="card"
            target="_blank"
          >
            Metalic Color Guide
          </a>
        </div>
        <div className="card-content border border-black p-8 rounded-lg">
          <a
            href="https://drive.google.com/file/d/1b7-zrAwjoCu7txH8GtqZVz_ZpNS9ZRjE/view"
            className="card"
            target="_blank"
          >
            Simiron Chips Color Guide
          </a>
        </div>
        <div className="card-content border border-black p-8 rounded-lg">
          <a
            href="https://drive.google.com/file/d/1OwszyT4X-z_wmGpvHdZdHyyJJBLfgMPR/view"
            className="card"
            target="_blank"
          >
            Torginal Chip Color Guide
          </a>
        </div>
      </div>
    </div>
  );
};

export default EpoxyGallery;
