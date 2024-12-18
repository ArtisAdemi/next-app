export const Footer = () => {
  return (
    <footer className="px-[4%] py-28 bg-[#333333] text-white">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">YourLogo</h2>
          <p className="text-gray-400">
            Empowering your business with innovative digital solutions. Let's
            build the future together.
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
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 -mb-24 text-center text-gray-500 border-t border-gray-600 pt-6">
        <p>© {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
