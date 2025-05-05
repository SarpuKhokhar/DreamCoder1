'use client';
import { useState } from 'react';

export default function Portfolio() {
  const categories = [
    "Mobile Application",
    "Web Development",
    "Design",
    "SEO",
    "PPC"
  ];
  const [active, setActive] = useState("Mobile Application");

  return (
    <section className="py-16 px-6 md:px-20 bg-white p-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-500">Portfolio</h1>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-33 mb-16 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200
                ${
                  active === category
                    ? 'bg-[#EC5B35] text-white shadow-sm'
                    : 'bg-[#f5f5f5] text-[#EC5B35]'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
