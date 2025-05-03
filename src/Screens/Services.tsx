'use client';

import React from 'react';

const services = [
  {
    title: 'Website Design',
    image: '/assets/image1.webp',
    description: 'We create modern, responsive websites tailored to your business needs.',
  },
  {
    title: 'Digital Marketing',
    image: '/assets/image2.webp',
    description:
      'Strategies including SEO, PPC, social media, and content marketing to boost visibility.',
  },
  {
    title: 'App Development',
    image: '/assets/image3.webp',
    description:
      'Custom mobile app solutions for Android & iOS to enhance your business reach.',
  },
  {
    title: 'UI/UX Design',
    image: '/assets/image4.webp',
    description:
      'Creative and intuitive UI/UX designs that deliver a seamless user experience.',
  },
];

const Services = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      {/* Top Heading */}
      <h4 className="text-orange-600 font-semibold uppercase tracking-widest mb-2">Service</h4>
      <h2 className="text-4xl font-bold mb-4">Our Services</h2>
      <p className="max-w-4xl mx-auto text-gray-700 text-lg mb-10">
        Empowering Businesses with Comprehensive Mobile Applications, Web Development,
        Web Designing & Digital Marketing Solutions
      </p>

      {/* Scrollable Services */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max px-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-80 h-96 flex-shrink-0 group overflow-hidden rounded-xl shadow-lg bg-gray-100"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-0"
              />

              {/* Overlay Title */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
                <h3 className="text-white text-xl font-semibold">{service.title}</h3>
              </div>

              {/* Hover Details Box */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-orange-600 text-white p-4 text-center z-20">
                <h4 className="text-lg font-bold mb-2">{service.title}</h4>
                <p className="text-sm mb-3">{service.description}</p>
                <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-orange-600 transition">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
