export const OurServices = () => {
  return (
    <div className="px-[4%] py-28 bg-white">
      {/* Section Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold  mb-12">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
        {/* Service Card 1 */}
        <div className="p-8 bg-white shadow-md rounded-lg hover:shadow-lg border transition-shadow">
          <div className="flex items-center justify-center h-16 w-16 bg-[#EAEAEA] rounded-full mb-6">
            <svg
              className="h-8 w-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Project Planning</h2>
          <p className="text-gray-600">
            Comprehensive strategies to bring your ideas to life with precision
            and efficiency.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="p-8 bg-white border shadow-md rounded-lg hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center h-16 w-16 bg-[#EAEAEA] rounded-full mb-6">
            <svg
              className="h-8 w-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16.88 3.549a9.953 9.953 0 00-4.09-1.12M12 7V3m0 4a10.002 10.002 0 0110 10h-4m-6 4h-2a10.002 10.002 0 01-9.33-13.09"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Project Management</h2>
          <p className="text-gray-600">
            Expert oversight from inception to completion ensuring seamless
            execution.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="p-8 bg-white shadow-md border rounded-lg hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center h-16 w-16 bg-[#EAEAEA] rounded-full mb-6">
            <svg
              className="h-8 w-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c1.657 0 3-1.343 3-3m0 6c-1.657 0-3-1.343-3-3m-6 6c0-1.657 1.343-3 3-3m6 3c1.657 0 3-1.343 3-3"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Interior Design</h2>
          <p className="text-gray-600">
            Transforming spaces into aesthetically pleasing and functional
            environments.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="p-8 bg-white shadow-md border rounded-lg hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center h-16 w-16 bg-[#EAEAEA] rounded-full mb-6">
            <svg
              className="h-8 w-8 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21H4a1 1 0 01-1-1v-5a1 1 0 011-1h5v5m10-5h-5v5a1 1 0 001 1h4a1 1 0 001-1v-5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Exterior Design</h2>
          <p className="text-gray-600">
            Crafting elegant outdoor spaces that harmonize with nature and
            architecture.
          </p>
        </div>
      </div>
    </div>
  );
};
