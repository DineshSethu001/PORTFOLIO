import Header from "./components/Header";
import Footer from './components/Footer'
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import './App.css'
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-[#3A0519]">
      <Header />
     <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}
