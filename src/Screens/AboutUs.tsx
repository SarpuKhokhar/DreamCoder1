'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const AboutUs = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* === ABOUT US SECTION === */}
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

      {/* === HOW WE WORK SECTION === */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-orange-500 text-sm font-semibold mb-2">HOW WE WORK</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-12">
            TeqExpert's Method: <span className="text-orange-500">Crafting Success</span> Through <span className="text-black">Collaboration.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-5">
            {/* Research Card */}
            <div className="bg-orange-400 text-white p-6 rounded-md flex-1 shadow-md">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="text-sm leading-relaxed">
                In the research phase, we meticulously analyze your business landscape, industry trends, and target
                audience behaviors. Armed with valuable insights, we craft a strategic roadmap that sets the foundation
                for success.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block h-full w-px bg-black opacity-20"></div>

            {/* Design Card */}
            <div className="bg-orange-400 text-white p-6 rounded-md flex-1 shadow-md">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586 2.742a1 1 0 01-1.5-.866V7.956a1 1 0 011.5-.866l4.586 2.742a1 1 0 010 1.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-sm leading-relaxed">
                Our creative team merges aesthetics with functionality, designing immersive experiences that
                captivate your audience. From wireframes to polished mockups, every detail is meticulously crafted
                to ensure seamless interaction and engagement.
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center max-w-[300px] mx-auto">
            <div className="h-px bg-black w-1/3"></div>
            <div className="w-2/3"></div>
            <div className="h-px bg-black w-1/3"></div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/assets/logo.png"
              alt="TeqExpert Icon"
              width={60}
              height={60}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-10">
            {/* Development Card */}
            <div className="bg-orange-400 text-white p-6 rounded-md flex-1 shadow-md">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h8M4 6h16M4 6v12M20 6v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-sm leading-relaxed">
                In the development phase, our expert developers bring your vision to life using cutting-edge technologies and best practices.
                With a focus on scalability and performance, we build robust solutions that evolve with your business needs.
              </p>
            </div>

            {/* Launch Card */}
            <div className="bg-orange-400 text-white p-6 rounded-md flex-1 shadow-md">
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m-8 4h8M4 6h16M4 6v12M20 6v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-sm leading-relaxed">
                With careful planning and attention to detail, we unveil your project to the world, celebrating your success and marking the beginning of a new chapter.
                From concept to launch, we are with you every step of the way, ensuring a seamless and memorable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE TEQEXPERT SECTION === */}
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/image.png"
              alt="Why Choose TeqExpert"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <h4 className="text-orange-500 text-sm font-semibold mb-2">WHY CHOOSE US</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Explore the <span className="text-orange-500">Distinction</span> of Our Services
            </h2>
            <p className="text-gray-600 text-base mb-6">
              TeqExpert stands out as your premier choice for digital solutions. With a blend of expertise, innovation, and customer-centricity, we are poised to drive your success. Our collaborative approach ensures your vision is realized with precision and excellence.
            </p>
            <p className="text-gray-600 text-base mb-8">
              Count on us for top-notch quality, reliability, and a commitment to exceeding your expectations. Choose TeqExpert for a partnership that propels your business forward with confidence and distinction.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-md">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;