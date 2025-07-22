'use client';
import Image from 'next/image';
import React from 'react';

const languages = [
  { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", url: "https://www.w3schools.com/js/" },
  { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", url: "https://www.w3schools.com/python/" },
  { name: "Java", src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", url: "https://www.w3schools.com/java/" },
  { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", url: "https://www.w3schools.com/html/" },
  { name: "C++", src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", url: "https://www.w3schools.com/cpp/" },
  { name: "C#", src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg", url: "https://www.w3schools.com/cs/" },
  { name: "React Native", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", url: "https://www.w3schools.com/react/default.asp" },
  { name: "PHP", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", url: "https://www.w3schools.com/php/" },
  { name: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", url: "https://www.w3schools.com/typescript/" },
  { name: "Ruby", src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg", url: "https://www.w3schools.com/ruby/" },
  { name: "Swift", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg", url: "https://www.w3schools.com/swift/" },
  { name: "Kotlin", src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png", url: "https://www.w3schools.com/kotlin/" },
  { name: "Go", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", url: "https://www.w3schools.com/go/" },
  { name: "Rust", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg", url: "https://www.w3schools.com/rust/" },
  { name: "Dart", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png", url: "https://www.w3schools.com/dart/" },
  { name: "Scala", src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg", url: "https://www.w3schools.com/scala/" },
  { name: "Haskell", src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg", url: "https://www.w3schools.com/haskell/" },
  { name: "R", src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", url: "https://www.w3schools.com/r/" },
  { name: "Matlab", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", url: "https://www.w3schools.com/matlab/" },
  { name: "Shell Script", src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg", url: "https://www.w3schools.com/bash/" },
  { name: "Flutter", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", url: "https://www.w3schools.com/flutter/" },
  { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", url: "https://www.w3schools.com/css/" },
  { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", url: "https://www.w3schools.com/nextjs/" },
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 bg-white border-t-4 border-black rounded-xl p-4 items-center shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all duration-300">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Languages We Serve</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {languages.map((lang, index) => (
          <a
            key={index}
            href={lang.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border-t-4 rounded-xl p-4 flex flex-col items-center shadow-md hover:shadow-xl hover:scale-105 hover:bg-black transition-all duration-300 transform-gpu ease-out"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white p-2 rounded-full shadow-lg hover:scale-110 transform transition-all duration-300">
              <Image src={lang.src} alt={lang.name} width={50} height={50} className="object-contain" />
            </div>
            <p className="mt-2 font-bold text-center text-sm text-black group-hover:text-white">
              {lang.name}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
