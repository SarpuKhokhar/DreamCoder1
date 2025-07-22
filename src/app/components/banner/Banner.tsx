'use client';
import React, { useEffect, useState } from 'react';

const images = [
  "/assets/bgimage.png",
  "/assets/image5.png",
  "/assets/image7.png",
];

const animatedText = "DreamCoder";
const learnCodingText = "Learn Coding";

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4 text-white">
      {/* Background Image - Slideshow */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`bg-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Centered Content */}
      <div className="z-20 text-center max-w-4xl px-4">
        <div className="text-5xl md:text-7xl font-extrabold mb-8 underline decoration-dotted">
          {animatedText.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
          We're your go-to place to{' '}
          <span className="underline decoration-dotted wave-animation whitespace-nowrap">
            {learnCodingText.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>{' '}
          the right way.
        </h2>

        <p className="text-lg md:text-2xl mt-6 font-medium">
          Master web & mobile development with hands-on projects.
        </p>

        <a
          href="#"
          className="mt-10 inline-block bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold shadow-lg border border-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-gray-200 hover:scale-105"
        >
          🚀 Get Started
        </a>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(5px); }
        }
        .wave-animation span {
          display: inline-block;
          animation: wave 1.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
