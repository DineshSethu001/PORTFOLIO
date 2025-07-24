import React from 'react';
import Typewriter from 'typewriter-effect';
import Spline from '@splinetool/react-spline';

const Blog = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center w-full h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800 overflow-hidden">
      
      {/* Left Content */}
      <div className="z-10 text-center md:text-left p-6 md:p-10 max-w-xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          I am working on{' '}
          <span className="inline-block">
            <Typewriter
              options={{
                strings: [
                  `<span class='text-red-500'>B</span><span class='text-orange-500'>l</span><span class='text-yellow-500'>o</span><span class='text-green-500'>g</span> <span class='text-blue-500'>P</span><span class='text-indigo-500'>a</span><span class='text-purple-500'>g</span><span class='text-pink-500'>e</span><span class='text-red-700'>!</span>`
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 75,
                pauseFor: 4000,
              }}
            />
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600">
          Please come and check back after some time
        </h2>
      </div>

      {/* Spline 3D Model */}
      <div className="absolute md:static top-0 left-0 w-full h-full md:h-[500px] md:w-[500px] z-50">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/9wHae5c3goPR2Lsu/scene.splinecode"
        />
      </div>
    </section>
  );
};

export default Blog;
