'use client';
import { useState } from 'react';

export default function Portfolio() {
  const categories = [
    "Mobile Apps",
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Digital Marketing"
  ];

  const [active, setActive] = useState("Mobile Apps");

  const mockProjects = {
    "Mobile Apps": ["App 1", "App 2", "App 3"],
    "Web Development": ["Website 1", "Website 2"],
    "UI/UX Design": ["Design 1", "Design 2", "Design 3"],
    "SEO Optimization": ["SEO Campaign 1"],
    "Digital Marketing": ["Campaign 1", "Campaign 2"]
  };

  return (
    <section className="py-20 px-6 md:px-24 bg-white text-black">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold underline underline-offset-8 decoration-gray-300">Our Portfolio</h1>
          <p className="mt-4 text-gray-500 text-lg">Explore our expertise across multiple domains</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium text-sm
                ${active === category
                  ? 'bg-black text-white shadow-md scale-105'
                  : 'bg-white text-black border-gray-300 hover:bg-black hover:text-white'}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {(mockProjects[active] || []).map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-2xl">
                📦 {item}
              </div>
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-sm text-gray-500 mt-2">Project description goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
