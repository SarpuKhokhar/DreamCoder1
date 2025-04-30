'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="bg-[#f9f9f9] py-16 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h4 className="text-orange-500 text-sm font-semibold mb-2">About Us</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            We are Driven to <span className="text-orange-500">Propel Business Growth</span> Beyond Limits.
          </h2>
          <p className="text-gray-600 text-base mb-4">
            We are all about helping businesses grow faster than ever. With smart strategies and cutting-edge
            solutions, we are dedicated to taking your success to new heights. Join us as we work together to
            make your business thrive like never before.
          </p>
          <p className="text-gray-600 text-base mb-6">
            With innovative strategies and leading-edge solutions, we are committed to elevating your success.
            Let's embark on this journey together and propel your business to new heights.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-md">
            Read More
          </button>
        </div>

        {/* Right Video with Play Button */}
        <div className="w-full md:w-1/2 flex justify-center">
          {isPlaying ? (
            <video
              src="/assets/video.mp4"
              controls
              autoPlay
              className="rounded-lg shadow-lg w-full h-auto max-w-md"
            />
          ) : (
            <div
              className="relative cursor-pointer w-full max-w-md"
              onClick={() => setIsPlaying(true)}
            >
              <Image
                src="/assets/image.png"
                alt="Video Thumbnail"
                width={700}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
