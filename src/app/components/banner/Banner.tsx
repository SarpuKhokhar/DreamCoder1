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
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="flex justify-center md:justify-start items-center h-full text-center md:text-left text-white px-4 md:px-8">
        <div className="z-10 max-w-full md:max-w-2xl">
          {/* Main Heading with Orange Highlight */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            We're your go-to experts for{' '}
            <span className="text-orange-500">top-notch mobile and web solutions</span>.
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            We help businesses thrive by creating top-notch digital products, platforms, and experiences that supercharge their growth journey.
          </p>

          {/* Button */}
          <a
            href="#"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
