import spotify from '../assets/img/spotify.png'
import hotel from '../assets/img/hotel.png'
import news from '../assets/img/news.png'
 

// Skills section

export const skillsWithColors = [
    { name: "HTML5", color: "bg-orange-500 text-white" },
    { name: "CSS3", color: "bg-blue-500 text-white" },
    { name: "JavaScript", color: "bg-yellow-300 text-black" },
    { name: "React", color: "bg-cyan-400 text-white" },
    { name: "Tailwind CSS", color: "bg-teal-300 text-black" },
    { name: "Git & GitHub", color: "bg-gray-800 text-white" },
    { name: "Figma" , color: "bg-pink-500 text-white" },
    { name: "Responsive Design", color: "bg-green-400 text-white" },
    { name: "REST APIs", color: "bg-indigo-400 text-white" },
  ];

//   project section

export const projects = [
    {
      title: 'Spotify Clone',
      description: 'A responsive music app clone using React, Tailwind CSS, and React Bootstrap.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      link: 'https://golden-dieffenbachia-bc9f37.netlify.app/',
      image: spotify, // Replace with your image URL or import
    },
    {
      title: 'Hotel Booking App',
      description: 'Integrated user authentication using Clerk, leveraging its built-in APIs for a seamless sign-up and login experience. For UI components, particularly forms, used PrebuiltUI to ensure clean and responsive design with minimal custom styling.',
      techStack: ['React', 'Vite', 'CSS'],
      link: 'https://your-project-link.com',
      image:  hotel,
    },
    {
      title: 'Blog Website',
      description: 'A dynamic blog platform built with React and Vite.',
      techStack: ['React', 'Vite', 'CSS'],
      link: 'https://your-project-link.com',
      image: 'https://via.placeholder.com/400x200',
    },
     {
      title: 'News Application',
      description: 'A responsive web application built with React that fetches and displays the latest news articles from various categories using the [News API](https://newsapi.org)',

      techStack: ['React', 'Vite', 'Bootstrap'],
      link: 'https://your-project-link.com',
      image: news,
    },
    // Add more projects here
  ];