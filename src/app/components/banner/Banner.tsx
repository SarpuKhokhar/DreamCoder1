'use client';

const animatedText = "DreamCoder";
const learnCodingText = "Learn Coding";

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
          {/* DreamCoder animation */}
          <div className="text-5xl md:text-6xl font-extrabold mb-8 text-orange-400 underline decoration-dotted">
            {animatedText.split('').map((char, i) => (
              <span
                key={i}
                className="inline-block bounce-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Main content with new Learn Coding animation */}
          <div className="fade-in-up-delayed">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-snug">
              We're your go-to place to{' '}
              <span className="text-orange-500 underline decoration-dotted whitespace-nowrap">
                <span className="wave-animation">
                  {learnCodingText.split('').map((char, i) => (
                    <span
                      key={i}
                      className="inline-block"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>{' '}
              the right way.
            </h2>

            <p className="text-orange-300 text-2xl md:text-3xl mt-4">
              Master web & mobile development with hands-on projects.
            </p>

            <a
              href="#"
              className="mt-8 inline-block bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
            >
              🚀 Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          25% {
            transform: translateY(-10px);
          }
          50% {
            transform: translateY(0);
          }
          75% {
            transform: translateY(5px);
          }
        }
        .wave-animation span {
          display: inline-block;
          animation: wave 1.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}