'use client';

import { useState, useEffect, ReactNode } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  FaMobileAlt, FaReact, FaNodeJs, FaLaptopCode, FaPalette,
  FaBullhorn, FaFileAlt, FaShoppingCart, FaEnvelope, FaPhoneAlt
} from 'react-icons/fa';
import { SiKotlin, SiSwift, SiAndroid, SiApple } from 'react-icons/si';
import Link from 'next/link';

type NavLinkProps = { href: string; label: string; };
type NavLinkMobileProps = { href: string; label: string; toggleNav: () => void; };
type DropdownSectionType = { title: string; items: [ReactNode, string][]; };
type DropdownProps = { label: string; sections: DropdownSectionType[]; };

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

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
    setShowContactModal(true);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4 ">
          <Link href="/" className="text-2xl font-bold text-black hover:text-gray-500 ">
            DreamCoder
          </Link>

          <nav className="hidden md:flex space-x-6 font-medium text-sm items-center">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About Us" />
            <Dropdown label="Services" sections={servicesSections} />
            <Dropdown label="Packages" sections={packagesSections} />
            <NavLink href="/portfolio" label="Portfolio" />
            <button
              onClick={handleContactClick}
              className="bg-black hover:bg-gray-500 text-white px-4 py-2 rounded transition-all duration-300"
            >
              Contact
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="text-black">
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-200 h-1">
          <div
            className="bg-black h-full transition-all duration-300 ease-out"
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
              <button
                onClick={handleContactClick}
                className="bg-black hover:bg-gray-900 text-white text-center px-4 py-2 rounded transition-all duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {showContactModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white max-w-5xl w-full rounded-lg shadow-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2 space-y-5">
                <h4 className="text-sm uppercase text-gray-500">Contact Us</h4>
                <h2 className="text-3xl font-bold text-gray-600">Get in touch today</h2>
                <p className="text-gray-600">
                  We love questions and feedback — and we're always happy to help! Here’s how you can reach us...
                </p>
                <div className="bg-gray-100 p-4 rounded flex items-center gap-3">
                  <FaEnvelope className="text-gray-700" />
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    className="bg-transparent w-full placeholder:text-gray-800 placeholder:font-medium focus:outline-none"
                  />
                </div>
                <div className="bg-gray-100 p-4 rounded flex items-center gap-3">
                  <FaPhoneAlt className="text-gray-700" />
                  <input
                    type="text"
                    placeholder="(123) 123-1233-21"
                    className="bg-transparent w-full placeholder:text-gray-800 placeholder:font-medium focus:outline-none"
                  />
                </div>
              </div>

              <div className="md:w-1/2 space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-800 placeholder:font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-800 placeholder:font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">Company (optional)</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-800 placeholder:font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    placeholder="Leave us a message"
                    className="w-full border border-gray-300 p-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-800 placeholder:font-medium"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="not-robot" />
                  <label htmlFor="not-robot" className="text-sm text-gray-600">I’m not a robot</label>
                </div>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link href={href} className="hover:text-gray-600 text-black transition-colors duration-300">
      {label}
    </Link>
  );
}

function NavLinkMobile({ href, label, toggleNav }: NavLinkMobileProps) {
  return (
    <Link
      href={href}
      onClick={toggleNav}
      className="hover:text-gray-600 text-black transition-colors duration-300"
    >
      {label}
    </Link>
  );
}

function Dropdown({ label, sections }: DropdownProps) {
  return (
    <div className="relative group">
      <button className="hover:text-gray-600 flex items-center text-black transition-colors duration-300">
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

function DropdownSection({ title, items }: DropdownSectionType) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-gray-700 font-bold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map(([icon, label], i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700 text-sm hover:text-gray-600 transition-colors">
            <span className="text-gray-600">{icon}</span> {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

const servicesSections: DropdownSectionType[] = [
  {
    title: 'Mobile Development',
    items: [
      [<SiKotlin key="kotlin" />, 'Kotlin Mobile App Development'],
      [<SiSwift key="swift" />, 'Swift UI'],
      [<FaReact key="react-native" />, 'React Native Development'],
      [<FaMobileAlt key="flutter" />, 'Flutter Development']
    ]
  },
  {
    title: 'Website Development',
    items: [
      [<FaReact key="nextjs" />, 'Next.js Development'],
      [<FaNodeJs key="nodejs" />, 'Node.js Development'],
      [<FaLaptopCode key="frontend" />, 'Frontend Web Development'],
      [<FaLaptopCode key="solutions" />, 'Tailored Web Solutions']
    ]
  },
  {
    title: 'Website Design',
    items: [
      [<FaPalette key="darkmode" />, 'Dark Mode Design'],
      [<FaPalette key="responsive" />, 'Responsive Design'],
      [<FaPalette key="designing" />, 'Web Designing']
    ]
  },
  {
    title: 'Digital Marketing',
    items: [
      [<FaBullhorn key="storytelling" />, 'Visual Storytelling'],
      [<FaFileAlt key="content" />, 'Content Marketing'],
      [<FaBullhorn key="marketing" />, 'Digital Marketing']
    ]
  }
];

const packagesSections: DropdownSectionType[] = [
  {
    title: 'Mobile Application',
    items: [
      [<FaReact key="hybrid" />, 'Hybrid App Development'],
      [<SiAndroid key="android" />, 'Android Native Development'],
      [<SiApple key="ios" />, 'iOS Native Development']
    ]
  },
  {
    title: 'Website Development',
    items: [
      [<FaLaptopCode key="cms" />, 'CMS Development'],
      [<FaShoppingCart key="ecommerce" />, 'E-Commerce Development']
    ]
  },
  {
    title: 'Website Design',
    items: [[<FaPalette key="webdesign" />, 'Website Design']]
  },
  {
    title: 'Digital Marketing',
    items: [
      [<FaBullhorn key="ppc" />, 'PPC Services'],
      [<FaBullhorn key="sem" />, 'SEM Services']
    ]
  }
];
