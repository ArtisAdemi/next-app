import React from "react";

const Secondcta: React.FC = () => {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Your Compelling Headline
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl">
          This is your engaging description, providing context, inspiration, or
          a call to action. Tailor it to your audience and ensure it resonates
          with your goals.
        </p>
      </div>
    </div>
  );
};

export default Secondcta;
