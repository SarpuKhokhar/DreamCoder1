"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4">
      <motion.div
        className="bg-gray-100 rounded-2xl shadow-xl max-w-xl w-full p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
        </div>

        <form className="space-y-4">
          <Input
            type="text"
            placeholder="Your Name"
            className="rounded-xl bg-white"
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="rounded-xl bg-white"
          />
          <Textarea
            placeholder="Your Message"
            className="rounded-xl bg-white"
            rows={4}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2"
          >
            Send Message <Send size={18} />
          </Button>
        </form>
      </motion.div>
    </div>
  );
}
