import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="w-full contact text-gray-800 py-12 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8 text-sm md:text-base">
          Have a question or want to work together? Send me a message and I’ll get back to you soon.
        </p>

        <form className="flex flex-col gap-6 items-center">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full md:w-3/4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full md:w-3/4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full md:w-3/4 px-4 py-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
