"use client";

import { useEffect, useRef } from "react";

export const LanguageScroller = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollPosition -= scrollSpeed;
        if (scrollPosition <= -scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(autoScroll);
      }
    };

    requestAnimationFrame(autoScroll);

    return () => {};
  }, []);
  const languages = [
    { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Java", src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "C++", src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
    { name: "C#", src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg" },
    { name: "React Native", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "PHP", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" },
    { name: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "Ruby", src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" },
    { name: "Swift", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" },
    { name: "Kotlin", src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" },
    { name: "Go", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" },
    { name: "Rust", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" },
    { name: "Dart", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" },
    { name: "Scala", src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" },
    { name: "Haskell", src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg" },
    { name: "R", src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
    { name: "Matlab", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
    { name: "Shell Script", src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" },
    { name: "Flutter", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
    { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" }
  ];
  
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f3f4f6",
        padding: "30px 0",
      }}
    >
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
        {[...languages, ...languages].map((lang, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 20px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#333",
                marginBottom: "5px",
                textAlign: "center",
              }}
            >
              {lang.name}
            </span>
            <img
              src={lang.src}
              alt={lang.name}
              style={{
                width: "50px",
                height: "50px",
                objectFit: "contain",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
