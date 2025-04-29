'use client';

export default function Banner() {
  return (
    <section
      className="relative bg-cover bg-center h-screen bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/bgimage.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Content */}
      <div className="flex justify-center items-center h-full text-center px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Animated Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-snug transition duration-300 hover:scale-105 hover:text-orange-400">
            We're your go-to place to{' '}
            <span className="text-orange-500 underline decoration-dotted hover:text-white transition duration-300">
              Learn Coding
            </span>{' '}
            the right way.
            <br />
            <span className="text-orange-400 text-2xl md:text-3xl block mt-2">
              Master web & mobile development with hands-on projects.
            </span>
          </h2>

          {/* Animated Button */}
          <a
            href="#"
            className="mt-8 inline-block bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
          >
            🚀 Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
