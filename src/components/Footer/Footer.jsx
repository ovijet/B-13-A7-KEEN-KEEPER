import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244d3f] text-white mt-16">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-10 text-center space-y-4">
        
        <h1 className="text-3xl md:text-4xl font-bold">KeenKeeper</h1>

        <p className="text-gray-300 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 text-xl mt-4">
          <span className="bg-white p-2 rounded-full text-black hover:scale-110 transition">
            <FaInstagram />
          </span>
          <span className="bg-white p-2 rounded-full text-black hover:scale-110 transition">
            <FaFacebook />
          </span>
          <span className="bg-white p-2 rounded-full text-black hover:scale-110 transition">
            <FaTwitter />
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-500 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-2">
          
          <p>© {new Date().getFullYear()} KeenKeeper — All rights reserved</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;