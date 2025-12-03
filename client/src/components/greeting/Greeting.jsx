import React, { useState, useEffect } from "react";

function Greeting({ onDone }) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(true);

  const currentTime = new Date();
  const hours = currentTime.getHours();

  let greeting;
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 20) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }

  // When name is submitted, show greeting then hide
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setVisible(false);
        onDone(name); // Pass name back to RootLayout
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, name, onDone]);

  if (!visible) return null;

  return (
    <div className="greeting fixed inset-0 z-50 flex items-center justify-center bg-[#E7D4B5] bg-opacity-100 text-white text-xl font-bold">
      {!submitted ? (
        <div className="flex flex-col items-center space-y-4">
     <div className="ml-8 flex justify-center items-center w-full mt-10">
  <p className="text-[#0D1164] text-3xl mr-4">Please enter your name:</p>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="p-2 text-3xl rounded text-black border-none outline-none"
    placeholder="Enter Your Name Here"
  />
</div>

          <button
            onClick={() => name && setSubmitted(true)}
            className="tracking-widest bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      ) : (
       <div className="text-4xl text-[#3D74B6]">
  {greeting}, <span className="text-[#657C6A]">{name}</span>! 👋
  <br />
  Thanks for visiting my work.
</div>

      )}
    </div>
  );
}

export default Greeting;
