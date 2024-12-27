export const Cta = () => {
  return (
    <div className="px-[4%] py-28 bg-[#D3D3D3] text-black">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-start mb-4">
          Let’s work together. <br /> Contact us today.
        </h1>
        <hr className="border-[#C0C0C0]  mx-auto" />
      </div>

      {/* Content Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Description */}
        <p className="text-gray-800 max-w-lg text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur nisi semper magnis porta nibh
          in morbi sit magna ultricies porta semper lectus et sollicitudin nam
          sapien mollis duis elementum sed dui faucibus.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 ">
          <button className="bg-[#FF8C00] hover:bg-[#FF8C00] text-white text-base px-6 py-3 rounded-lg shadow-lg flex-1 whitespace-nowrap transition-all duration-300">
            Book Now
          </button>
          <button className="border border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white px-6 py-3 rounded-lg shadow-lg flex-1 whitespace-nowrap transition-all duration-300">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};
