"use client";

import { Link } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black-400 text-white p-8 font-sans  ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* Left Info */}
        <div className="bg-white text-gray-800 p-6 rounded-[30px] mb-6 md:mb-0 md:mr-8 w-full md:w-1/3">
          <div className="flex items-center mb-2">
          <div className="text-2xl font-bold text-black">   Dream<span className="text-orange-500">Coder</span></div>
         
        
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-.028-3.15-1.919-3.15-1.922 0-2.216 1.5-2.216 3.05v5.6h-3v-10h2.881v1.366h.041c.401-.761 1.381-1.566 2.841-1.566 3.041 0 3.603 2 3.603 4.584v5.616z" />
              </svg>
            </a>
          </div>
          <p className="text-sm mb-1">Abu Dhabi, United Arab Emirates.</p>
          <p className="text-sm">
            Proudly Emirati: A homegrown AI company, innovating in Abu Dhabi with passion and dedication. 🚡❤️
          </p>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="font-bold mb-4 uppercase">Services</h2>
              <ul className="space-y-2 text-sm">
                <li>Generative AI</li>
                <li>Artificial Intelligence & ML</li>
                <li>Data Engineering</li>
                <li>Custom Software Development</li>
                <li>Hire Birbal’s Developers</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4 uppercase">Success Stories</h2>
              <ul className="space-y-2 text-sm">
                <li>Enterprise Applications</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4 uppercase">Career</h2>
              <ul className="space-y-2 text-sm">
                <li>Full Stack Developer</li>
                <li>React Js Developer</li>
                <li>NFT Developer</li>
                <li>Metaverse Developer</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6"></div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">©2025 Birbal AI, All Rights Reserved.</p>
            </div>
            <div>
              <button className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors flex items-center">
                Speak to our Consultants
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
