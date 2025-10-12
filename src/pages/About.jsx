// src/pages/About.jsx
export default function About() {
  return (
    <>
    <section id="about" className="w-full bg-white px-4 py-2 overflow-hidden overflow-y-auto ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-gray-400 text-white text-center py-4 rounded-md shadow">
            <h1 className="text-2xl font-bold">About Me</h1>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>REST API Integration</li>
              <li>Git & GitHub</li>
              <li>MERN Stack (Learning)</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 bg-yellow-100 p-6 rounded-md shadow space-y-4">
          <p>
            Hi, I'm <strong>Dinesh Thanigaivel</strong> — a passionate Front-End Developer
            with a focus on building responsive and modern web applications.
          </p>
          <p>
            I specialize in <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Bootstrap</strong>,
            turning UI/UX designs into clean, real-world applications.
          </p>

          <div>
            <h3 className="font-semibold">🛠️ Projects:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>🎵 Spotify clone</li>
              <li>📰 Dynamic blog platform</li>
              <li>🛒 Functional e-commerce site</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">💼 Practical Skills:</h3>
            <ul className="list-disc list-inside ml-4">
              <li>Frontend development</li>
              <li>REST API integration</li>
              <li>Git and team collaboration</li>
            </ul>
          </div>

     <p>
  🌱 Upskilled in <strong>MERN Stack Full-Stack Development</strong>, building scalable web applications
  from frontend to backend with practical experience.
</p>

          <p>
            💡 Always curious and open to new technologies, challenges, and learning opportunities
            in the web development world.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
