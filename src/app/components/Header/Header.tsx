'use client';
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMobileAlt, FaReact, FaNodeJs, FaLaptopCode, FaPalette, FaBullhorn, FaFileAlt, FaShoppingCart } from "react-icons/fa";
import { SiKotlin, SiSwift, SiAndroid, SiApple } from "react-icons/si";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0); // Track the scroll width
  const [isClient, setIsClient] = useState(false); // Flag to check if it's client-side

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollPosition = window.scrollY;
      setScrollWidth(scrollPosition); // Set scroll position as width for the line

      if (scrollPosition > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
  };

  useEffect(() => {
    // Set isClient to true once we are on the client-side
    setIsClient(true);

    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Calculate width based on scroll position, only if on client side
  const maxScrollWidth = isClient ? window.innerWidth : 0; // Ensure window is defined
  const lineWidth = Math.min(scrollWidth, maxScrollWidth);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          Dream<span className="text-orange-500">Coder</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#" className="hover:text-orange-500 text-black">Home</a>
          <a href="#" className="hover:text-orange-500 text-black">About Us</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-orange-500 flex items-center text-black">
              Services <span className="ml-1 text-xs">▼</span>
            </button>

            {/* Full Width Mega Menu for Services */}
            <div className="hidden group-hover:flex fixed left-0 right-0 bg-white shadow-lg mt-4 p-25 z-40">
              <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10">
                {/* Mobile Development */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Mobile Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <SiKotlin className="text-orange-200" /> Kotlin Mobile App Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <SiSwift className="text-orange-200" /> Swift UI
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaReact className="text-orange-200" /> React Native Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaMobileAlt className="text-orange-200" /> Flutter Development
                    </li>
                  </ul>
                </div>

                {/* Website Development */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Website Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaReact className="text-orange-200" /> Next.js Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaNodeJs className="text-orange-200" /> Node.js Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaLaptopCode className="text-orange-200" /> Frontend Web Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaLaptopCode className="text-orange-200" /> Tailored Web Solutions
                    </li>
                  </ul>
                </div>

                {/* Website Design */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Website Design</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaPalette className="text-orange-200" /> Dark Mode Design
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaPalette className="text-orange-200" /> Responsive Design
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaPalette className="text-orange-200" /> Web Designing
                    </li>
                  </ul>
                </div>

                {/* Digital Marketing */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Digital Marketing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaBullhorn className="text-orange-200" /> Visual Storytelling
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaFileAlt className="text-orange-200" /> Content Marketing
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaBullhorn className="text-orange-200" /> Digital Marketing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Packages Dropdown */}
          <div className="relative group">
            <button className="hover:text-orange-500 flex items-center text-black">
              Packages <span className="ml-1 text-xs">▼</span>
            </button>

            <div className="hidden group-hover:flex fixed left-0 right-0 bg-white shadow-lg mt-4 p-25 z-40">
              <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10">
                {/* Mobile Application */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Mobile Application</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaReact className="text-orange-200" /> Hybrid App Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <SiAndroid className="text-orange-200" /> Android Native Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <SiApple className="text-orange-200" /> iOS Native Development
                    </li>
                  </ul>
                </div>

                {/* Website Development */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Website Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaLaptopCode className="text-orange-200" /> CMS Development
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaShoppingCart className="text-orange-200" /> E-Commerce Development
                    </li>
                  </ul>
                </div>

                {/* Website Design */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Website Design</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaPalette className="text-orange-200" /> Website Design
                    </li>
                  </ul>
                </div>

                {/* Digital Marketing */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-red-300 font-bold mb-4">Digital Marketing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaBullhorn className="text-orange-200" /> PPC (Pay-Per-Click) Services
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 text-sm">
                      <FaBullhorn className="text-orange-200" /> SEM (Search Engine Marketing) Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-orange-500 text-black">Portfolio</a>
          <a href="#" className="hover:text-orange-500 text-black">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-black">
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Gradual expanding border */}
      <div
        className={`transition-all duration-300 ease-in-out border-b-4 border-orange-700`}
        style={{ width: `${lineWidth}px` }}
      ></div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4 font-medium text-sm">
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">Home</a>
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">About Us</a>
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">Services</a>
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">Packages</a>
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">Portfolio</a>
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
