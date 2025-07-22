import { Header, Home, Skills, About, Projects, Contact, Blog, Footer } from "./components";
import { Routes, Route } from "react-router-dom";

import "./App.css";
export default function App() {
  return (
<div className="h-screen">
  <Header />

  {/* Main content area */}
<div className="mt-4 rounded-2xl flex justify-center items-center w-full h-[80vh] overflow-hidden"> 
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  </div>
</div>


  );
}
