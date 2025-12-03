import React, { useState } from "react";
import { FaUser, FaCommentDots } from "react-icons/fa";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [message, setMessage] = useState("");
  const maxWords = 5;

  const handleMessageChange = (e) => {
    let inputText = e.target.value;

    // Split into words
    let words = inputText.trim().split(/\s+/);

    if (words.length > maxWords) {
      // restrict to 50 words
      words = words.slice(0, maxWords);
      inputText = words.join(" ");
    }

    setMessage(inputText);
  };

  const wordCount =
    message.trim() === "" ? 0 : message.trim().split(/\s+/).length;

  return (  
    <section
      id="contact"
      className="contact w-full contact text-gray-800 p-4 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>

        {/* Moving Text Marquee */}
        <div className="flex items-center overflow-hidden whitespace-nowrap w-full border-l-4 border-r-4 border-red-200 py-2">
          <div className="animate-marquee flex">
            <p className="text-sm md:text-base px-4">
              Have a question or want to work together? Send me a message and
              I’ll get back to you soon.
            </p>
            <p className="text-sm md:text-base px-4">
              Have a question or want to work together? Send me a message and
              I’ll get back to you soon.
            </p>
            <p className="text-sm md:text-base px-4">
              Have a question or want to work together? Send me a message and
              I’ll get back to you soon.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col space-y-6 items-center w-full">
          {/* Name Input */}
          <div className="relative w-full md:w-3/4">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="relative w-full md:w-3/4">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message Input with Word Limit */}
          <div className="relative w-full md:w-3/4">
            <FaCommentDots className="absolute left-3 top-4 text-gray-400" />
            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Your Message (max 50 words)"
              rows="3"
              required
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {/* Word Counter */}
            <p className="text-sm text-gray-500 mt-1 text-right">
              {wordCount}/{maxWords} words
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-12 mt-8">
        <a
          href="mailto:dineshsethu15981@gmail.com"
          className="text-red-500 hover:text-red-600 text-3xl transition transform hover:scale-110"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/7339572897"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-3xl transition transform hover:scale-110"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 text-3xl transition transform hover:scale-110"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/dineshseth87125"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 text-3xl transition transform hover:scale-110"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/dinesh-thanigai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 text-3xl transition transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
