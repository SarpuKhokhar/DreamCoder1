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
    { name: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", url: "https://www.w3schools.com/js/" },
    { name: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", url: "https://www.w3schools.com/python/" },
    { name: "Java", src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", url: "https://www.w3schools.com/java/" },
    { name: "HTML", src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg", url: "https://www.w3schools.com/html/" },
    { name: "C++", src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", url: "https://www.w3schools.com/cpp/" },
    { name: "C#", src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg", url: "https://www.w3schools.com/cs/" },
    { name: "React Native", src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", url: "https://www.w3schools.com/react/" },
    { name: "PHP", src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", url: "https://www.w3schools.com/php/" },
    { name: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", url: "https://www.w3schools.com/typescript/index.php" },
    { name: "Ruby", src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg", url: "https://www.w3schools.com/ruby/index.php" },
    { name: "Swift", src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg", url: "https://www.w3schools.io/learn/swift/" },
    { name: "Kotlin", src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png", url: "https://www.w3schools.io/learn/kotlin/" },
    { name: "Go", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg", url: "https://www.w3schools.io/learn/golang/" },
    { name: "Rust", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg", url: "https://www.w3schools.io/learn/rust/" },
    { name: "Dart", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png", url: "https://www.w3schools.io/learn/dart/" },
    { name: "Scala", src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg", url: "https://www.w3schools.io/learn/scala/" },
    { name: "Haskell", src: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg", url: "https://www.w3schools.io/learn/haskell/" },
    { name: "R", src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", url: "https://www.w3schools.io/learn/r/" },
    { name: "Matlab", src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", url: "https://www.w3schools.io/learn/matlab/" },
    { name: "Shell Script", src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg", url: "https://www.w3schools.io/learn/linux-shell/" },
    { name: "Flutter", src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png", url: "https://www.w3schools.io/learn/flutter/" },
    { name: "CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", url: "https://www.w3schools.com/css/" },
    { name: "Next.js", src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg", url: "https://www.w3schools.io/learn/nextjs/" }
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
            <a href={lang.url} target="_blank" rel="noopener noreferrer">
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
