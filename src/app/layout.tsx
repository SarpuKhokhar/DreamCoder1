// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/footer/Footer";
import { LanguageScroller } from "./components/LanguageScroller/LanguageScroller";

export const metadata: Metadata = {
  title: "DreamCoder - Digital Solutions",
  description: "Your premier choice for digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">
        <Header />
        <main className="pt-16">
          {children}
          <LanguageScroller />
        </main>
        <Footer />
      </body>
    </html>
  );
}
