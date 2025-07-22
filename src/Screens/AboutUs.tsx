'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* === ABOUT US SECTION === */}
      <section id="about" className="bg-white py-16 px-6 md:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <h4 className="text-black text-xl font-medium mb-4">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              We are Driven to <span className="text-gray-700">Propel Business Growth</span> Beyond Limits.
            </h2>
            <p className="text-gray-600 text-base mb-4">
              We help businesses grow with smart strategies and cutting-edge solutions.
              Join us as we take your success to new heights.
            </p>
            <p className="text-gray-600 text-base mb-6">
              Our commitment lies in elevating your brand using innovation and teamwork. Let’s grow, together.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-md transition-all duration-300">
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
                      className="h-10 w-10 text-black"
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

      {/* === HOW WE WORK SECTION === */}
      <section className="bg-gray-100 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-black text-sm font-semibold mb-2">HOW WE WORK</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight mb-12">
            TeqExpert's Method: <span className="text-gray-700">Crafting Success</span> Through Collaboration.
          </h2>

          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-5">
            {/* Research Card */}
            <div className="bg-white text-black p-6 rounded-md flex-1 shadow-md border border-gray-200">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We analyze your market and audience to create a roadmap built for growth and scalability.
              </p>
            </div>

            {/* Design Card */}
            <div className="bg-white text-black p-6 rounded-md flex-1 shadow-md border border-gray-200">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586 2.742a1 1 0 01-1.5-.866V7.956a1 1 0 011.5-.866l4.586 2.742a1 1 0 010 1.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our team blends creativity and usability to design interfaces that engage and convert.
              </p>
            </div>
          </div>

          {/* Divider Logo */}
          <div className="mt-12 mb-10 flex flex-col items-center">
            <div className="h-px bg-black w-1/2 opacity-10 mb-4"></div>
            <Image
              src="/assets/logo.png"
              alt="TeqExpert Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
            <div className="h-px bg-black w-1/2 opacity-10 mt-4"></div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-10">
            {/* Development Card */}
            <div className="bg-white text-black p-6 rounded-md flex-1 shadow-md border border-gray-200">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h8M4 6h16M4 6v12M20 6v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use modern technologies to build scalable solutions tailored to your business.
              </p>
            </div>

            {/* Launch Card */}
            <div className="bg-white text-black p-6 rounded-md flex-1 shadow-md border border-gray-200">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We launch your product smoothly and strategically, celebrating success with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US SECTION === */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/image.png"
              alt="Why Choose Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2">
            <h4 className="text-black text-sm font-semibold mb-2">WHY CHOOSE US</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 leading-snug">
              Explore the <span className="text-gray-700">Distinction</span> of Our Services
            </h2>
            <p className="text-gray-600 text-base mb-6">
              We blend expertise, innovation, and reliability to craft custom digital solutions. Our process is
              collaborative, ensuring your goals are achieved with precision.
            </p>
            <p className="text-gray-600 text-base mb-8">
              Partner with us for quality, dependability, and a vision-aligned approach that fuels real growth.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white font-medium px-8 py-3 rounded-md transition-all duration-300">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
