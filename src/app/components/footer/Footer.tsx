"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-8 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Logo & Description */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Dream<span className="text-orange-500">Coder</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-sm max-w-xl mx-auto"
        >
          Abu Dhabi, United Arab Emirates. Proudly Emirati: A homegrown AI company, innovating in Abu Dhabi with passion and dedication. 🚡❤️
        </motion.p>

        {/* Grid Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-sm text-gray-300 text-left md:text-center"
        >
          {[
            {
              title: "Services",
              items: [
                "Generative AI",
                "AI & ML",
                "Data Engineering",
                "Custom Software",
                "Hire Developers",
              ],
            },
            {
              title: "Careers",
              items: [
                "Full Stack Dev",
                "React / React Native",
                "JavaScript Dev",
                "Flutter Dev",
              ],
            },
            {
              title: "Success",
              items: ["Mobile Apps", "UI/UX Design"],
            },
            {
              title: "Contact",
              items: ["Ram Hospital, 2nd Right", "Merta City"],
              button: true,
            },
          ].map((col, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <h3 className="text-orange-500 font-semibold mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
                {col.button && (
                  <li className="mt-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
                    >
                      Speak to our Consultants
                    </motion.button>
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-gray-600 text-xs"
        >
          © {new Date().getFullYear()} DreamCoder. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};
