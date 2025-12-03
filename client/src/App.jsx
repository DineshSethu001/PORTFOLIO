import {Home, Skills, About, Projects, Contact, Blog} from "./pages";

import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layout/RootLayout";
import { CreatePost, PageNotFound } from "./pages/BlogPages";
import AdminLogin from "./AdminLogin/AdminLogin";
import { AuthProvider } from "./contexts/AuthContext";
export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        {/* Blog related */}
        <Route path="blog" element={<Blog/>}/>
        <Route path="create" element={<CreatePost/>}/>
        {/* Admin routes */}
        <Route path="admin" element={<AdminLogin/>}/>
        <Route path="*" element={<PageNotFound/>}/>

      </Route>
    )
  )
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
