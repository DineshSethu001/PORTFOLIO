import React from 'react'
import Typewriter from 'typewriter-effect';


const Blog = () => {
  return (
    <section className="flex flex-row md:flex-col items-center justify-center w-full h-screen bg-gray-100 text-gray-800 p-4 transition-all duration-700 ease-in-out overflow-hidden">
      <div className="mb-4">      
        <h1 className='text-6xl font-medium'>I am working on <span className='inline-block'>
          
                <Typewriter
              options={{
                strings: [
      `<span class='text-red-500'>B</span>
      <span class='text-orange-500'>l</span>
      <span class='text-yellow-500'>o</span>
      <span class='text-green-500'>g</span> 
       <span class='text-blue-500'>P</span>
       <span class='text-indigo-500'>a</span>
       <span class='text-purple-500'>g</span>
       <span class='text-pink-500'>e</span>
             <span class='text-red-700'>!</span>
`
    ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 75,
                pauseFor: 5000,
              }}
            /></span></h1>
      </div>
      <div className="">     
         <h1 className='text-4xl font-medium'>Please come and check after some time</h1>
      </div>
    </section>
  )
}

export default Blog