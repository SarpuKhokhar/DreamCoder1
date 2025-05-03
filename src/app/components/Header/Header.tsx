'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaMobileAlt, FaReact, FaNodeJs, FaLaptopCode, FaPalette,
  FaBullhorn, FaFileAlt, FaShoppingCart
} from 'react-icons/fa';
import { SiKotlin, SiSwift, SiAndroid, SiApple } from 'react-icons/si';
import Link from 'next/link';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = Math.min(scrollPosition / (docHeight - windowHeight), 1);
      setScrollProgress(progress);
      setScrolling(scrollPosition > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setNavOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-black">
          Dream<span className="text-orange-500">Coder</span>
        </Link>

        <nav className="hidden md:flex space-x-6 font-medium text-sm items-center">
          <NavLink href="/" label="Home" />
          <NavLink href="/about" label="About Us" />
          <Dropdown label="Services" sections={servicesSections} />
          <Dropdown label="Packages" sections={packagesSections} />
          <NavLink href="/portfolio" label="Portfolio" />
          <Link
            href="/contact"
            onClick={handleContactClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-black">
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <div className="w-full bg-gray-200 h-1">
        <div
          className="bg-orange-700 h-full transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 p-4 font-medium text-sm">
            <NavLinkMobile href="/" label="Home" toggleNav={toggleNav} />
            <NavLinkMobile href="/about" label="About Us" toggleNav={toggleNav} />
            <NavLinkMobile href="/services" label="Services" toggleNav={toggleNav} />
            <NavLinkMobile href="/packages" label="Packages" toggleNav={toggleNav} />
            <NavLinkMobile href="/portfolio" label="Portfolio" toggleNav={toggleNav} />
            <Link
              href="/contact"
              onClick={handleContactClick}
              className="bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-2 rounded transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <Link href={href} className="hover:text-orange-500 text-black transition-colors duration-300">
      {label}
    </Link>
  );
}

function NavLinkMobile({ href, label, toggleNav }) {
  return (
    <Link href={href} onClick={toggleNav} className="hover:text-orange-500 text-black transition-colors duration-300">
      {label}
    </Link>
  );
}

function Dropdown({ label, sections }) {
  return (
    <div className="relative group">
      <button className="hover:text-orange-500 flex items-center text-black transition-colors duration-300">
        {label} <span className="ml-1 text-xs">▼</span>
      </button>
      <div className="hidden group-hover:flex fixed left-0 right-0 bg-white shadow-lg mt-4 p-25 z-40">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-10">
          {sections.map((section, i) => (
            <DropdownSection key={i} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DropdownSection({ title, items }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-orange-500 font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map(([icon, label], i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700 text-sm hover:text-orange-500 transition-colors">
            <span className="text-orange-400">{icon}</span> {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const servicesSections = [
  {
    title: 'Mobile Development',
    items: [
      [<SiKotlin />, 'Kotlin Mobile App Development'],
      [<SiSwift />, 'Swift UI'],
      [<FaReact />, 'React Native Development'],
      [<FaMobileAlt />, 'Flutter Development']
    ]
  },
  {
    title: 'Website Development',
    items: [
      [<FaReact />, 'Next.js Development'],
      [<FaNodeJs />, 'Node.js Development'],
      [<FaLaptopCode />, 'Frontend Web Development'],
      [<FaLaptopCode />, 'Tailored Web Solutions']
    ]
  },
  {
    title: 'Website Design',
    items: [
      [<FaPalette />, 'Dark Mode Design'],
      [<FaPalette />, 'Responsive Design'],
      [<FaPalette />, 'Web Designing']
    ]
  },
  {
    title: 'Digital Marketing',
    items: [
      [<FaBullhorn />, 'Visual Storytelling'],
      [<FaFileAlt />, 'Content Marketing'],
      [<FaBullhorn />, 'Digital Marketing']
    ]
  }
];

const packagesSections = [
  {
    title: 'Mobile Application',
    items: [
      [<FaReact />, 'Hybrid App Development'],
      [<SiAndroid />, 'Android Native Development'],
      [<SiApple />, 'iOS Native Development']
    ]
  },
  {
    title: 'Website Development',
    items: [
      [<FaLaptopCode />, 'CMS Development'],
      [<FaShoppingCart />, 'E-Commerce Development']
    ]
  },
  {
    title: 'Website Design',
    items: [
      [<FaPalette />, 'Website Design']
    ]
  },
  {
    title: 'Digital Marketing',
    items: [
      [<FaBullhorn />, 'PPC Services'],
      [<FaBullhorn />, 'SEM Services']
    ]
  }
];
