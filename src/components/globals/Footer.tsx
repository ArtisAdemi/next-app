export const Footer = () => {
  return (
    <footer className="px-[4%] py-28 bg-[#333333] text-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">YourLogo</h2>
          <p className="text-gray-400">
            Founded in 1998, our family-owned business has proudly served
            residential, commercial, and industrial clients for over two
            decades.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 -mb-24 text-center text-white border-t border-gray-600 pt-6">
        <p>© {new Date().getFullYear()} Influxo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
