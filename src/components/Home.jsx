import React from 'react'
import author from "../assets/img/author.png"
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <section
        className="flex flex-col items-center md:flex-row w-full  text-gray-800 py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#f6f5ee] to-[#e9dfc3]"
      >

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-purple-600">Dinesh</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Full Stack MERN Developer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            I specialize in building responsive, high-performance web applications using MongoDB, Express, React, and Node.js. I’m passionate about clean code, intuitive UI, and scalable backend solutions.
          </p>
          <button onClick={()=>navigate('/contact')}
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition-colors duration-300"
          >
            Let’s Connect
          </button>

        </div>
        {/* Author Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center pb-8 md:pb-0">
          <img
            src={author}
            alt="author"
            className="w-40 h-40 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-full object-cover shadow-lg border-4 border-white transition-all duration-500 ease-in-out"
          />

        </div>
      </section>
    </>
  )
}
