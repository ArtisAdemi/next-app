import hero from "../../../public/images/hero.jpg";

export const OurServices = () => {
  return (
    <div className="px-[4%] py-20 bg-[#D3D3D3]">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
        {/* Service 1 */}

        {/* Service 2 */}

        {/* Service 3 */}
        <div className="flex flex-col justify-start items-start bg-white shadow-md rounded-lg p-4">
          <div className="p-4  text-white rounded-full flex items-center justify-center mb-3">
            <span className="text-4xl">🛠️</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
            Service Two
          </h2>
          <p className="text-sm text-gray-600 text-start">
            A brief description of Service Two. Showcase how it solves problems
            or adds value.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start bg-white shadow-md rounded-lg p-4">
          <div className="p-4  text-white rounded-full flex items-center justify-center mb-3">
            <span className="text-4xl">🛠️</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
            Service Two
          </h2>
          <p className="text-sm text-gray-600 text-start">
            A brief description of Service Two. Showcase how it solves problems
            or adds value.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start bg-white shadow-md rounded-lg p-4">
          <div className="p-4  text-white rounded-full flex items-center justify-center mb-3">
            <span className="text-4xl">🛠️</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
            Service Two
          </h2>
          <p className="text-sm text-gray-600 text-start">
            A brief description of Service Two. Showcase how it solves problems
            or adds value.
          </p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col justify-start items-start bg-white shadow-md rounded-lg p-4">
          <div className="p-4  text-white rounded-full flex items-center justify-center mb-3">
            <span className="text-4xl">🛠️</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">
            Service Two
          </h2>
          <p className="text-sm text-gray-600 text-start">
            A brief description of Service Two. Showcase how it solves problems
            or adds value.
          </p>
        </div>
      </div>
    </div>
  );
};
