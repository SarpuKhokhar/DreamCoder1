'use client';
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollPosition = window.scrollY;
      setScrollWidth(scrollPosition);
      setScrolling(scrollPosition > 0);
    }
  };

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const maxScrollWidth = isClient ? window.innerWidth : 0;
  const lineWidth = Math.min(scrollWidth, maxScrollWidth);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 scroll-smooth">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-black">
          Dream<span className="text-orange-500">Coder</span>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-sm">
          <a href="#" className="hover:text-orange-500 text-black">Home</a>
          <a href="#about" className="hover:text-orange-500 text-black">About Us</a>
          <a href="#" className="hover:text-orange-500 text-black">Services</a>
          <a href="#" className="hover:text-orange-500 text-black">Packages</a>
          <a href="#" className="hover:text-orange-500 text-black">Portfolio</a>
          <a href="#" className="hover:text-orange-500 text-black">Contact</a>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-black">
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div
        className="transition-all duration-300 ease-in-out border-b-4 border-orange-700"
        style={{ width: `${lineWidth}px` }}
      ></div>

      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4 font-medium text-sm">
            <a href="#" onClick={toggleNav} className="hover:text-orange-500 text-black">Home</a>
            <a href="#about" onClick={toggleNav} className="hover:text-orange-500 text-black">About Us</a>
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
