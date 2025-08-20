import { Header, Home, Skills, About, Projects, Contact, Blog, Footer } from "./components";


import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layout/RootLayout";
export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )
  return (
    
     <RouterProvider router={router} />


  );
}
