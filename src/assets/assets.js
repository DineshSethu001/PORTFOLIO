import spotify from "../assets/img/spotify.png";
import hotel from "../assets/img/hotel.png";
import news from "../assets/img/news.png";
import blog from "../assets/img/blog.png";

import facebook_icon from "./facebook_icon.svg";
import googleplus_icon from "./googleplus_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import logo from "./logo.png";
import arrow from "./arrow.svg";
import logo_light from "./logo_light.svg";
import blog_icon from "./blog_icon.png";
import add_icon from "./add_icon.svg";
import list_icon from "./list_icon.svg";
import email_icon from "./email_icon.png";
import upload_area from "./upload_area.svg";
import user_icon from "./user_icon.svg";
import bin_icon from "./bin_icon.svg";
import comment_icon from "./comment_icon.svg";
import tick_icon from "./tick_icon.svg";
import star_icon from "./star_icon.svg";
import cross_icon from "./cross_icon.svg";
import home_icon from "./home_icon.svg";
import gradientBackground from "./gradientBackground.png";
import dashboard_icon_1 from "./dashboard_icon_1.svg";
import dashboard_icon_2 from "./dashboard_icon_2.svg";
import dashboard_icon_3 from "./dashboard_icon_3.svg";
import dashboard_icon_4 from "./dashboard_icon_4.svg";

export const assets = {
  facebook_icon,
  googleplus_icon,
  twitter_icon,
  logo,
  arrow,
  logo_light,
  blog_icon,
  add_icon,
  email_icon,
  upload_area,
  user_icon,
  bin_icon,
  comment_icon,
  tick_icon,
  star_icon,
  home_icon,
  gradientBackground,
  list_icon,
  cross_icon,
  dashboard_icon_1,
  dashboard_icon_2,
  dashboard_icon_3,
  dashboard_icon_4,
};



export const footer_data = [
  {
    title: "Quick Links",
    links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"],
  },
  {
    title: "Need Help?",
    links: [
      "Delivery Information",
      "Return & Refund Policy",
      "Payment Methods",
      "Track your Order",
      "Contact Us",
    ],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "Twitter", "Facebook", "YouTube"],
  },
];

// Skills section

export const skillsWithColors = [
  { name: "HTML5", color: "bg-orange-500 text-white" },
  { name: "CSS3", color: "bg-blue-500 text-white" },
  { name: "JavaScript", color: "bg-yellow-300 text-black" },
  { name: "React", color: "bg-cyan-400 text-white" },
  { name: "Tailwind CSS", color: "bg-teal-300 text-black" },
  { name: "Git & GitHub", color: "bg-gray-800 text-white" },
  { name: "Figma", color: "bg-pink-500 text-white" },
  { name: "Responsive Design", color: "bg-green-400 text-white" },
  { name: "REST APIs", color: "bg-indigo-400 text-white" },
];

//   project section

// export const projects = [
//   {
//     title: "Spotify Clone",
//     description:
//       "A responsive music app clone using React, Tailwind CSS, and React Bootstrap.",
//     techStack: ["React", "Tailwind CSS", "JavaScript"],
//     link: "https://golden-dieffenbachia-bc9f37.netlify.app/",
//     image: spotify, // Replace with your image URL or import
//   },
//   {
//     title: "Hotel Booking App",
//     description:
//       "Integrated user authentication using Clerk, leveraging its built-in APIs for a seamless sign-up and login experience. For UI components, particularly forms, used PrebuiltUI to ensure clean and responsive design with minimal custom styling.",
//     techStack: ["React", "Vite", "CSS"],
//     link: "https://ornate-bienenstitch-310b43.netlify.app/",
//     image: hotel,
//   },
//   {
//     title: "Blog Website",
//     description: "A dynamic blog platform built with React and Vite.",
//     techStack: ["React", "Vite", "CSS"],
//     link: "",
//     image: blog,
//   },
//   {
//     title: "Ecommerce application",
//     description:
//       "A responsive web application built with React that fetches and displays the latest news articles from various categories using the [News API](https://newsapi.org)",

//     techStack: ["React", "Vite", "Bootstrap"],
//     link: "https://super-vacherin-38881e.netlify.app/",
//     image: news,
//   },
//   // Add more projects here
// ];
// src/assets/assets.js
export const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing skills, experience, and projects.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    link: "https://yourportfolio.com",
    techStack: ["React", "TailwindCSS", "AOS"]
  },
  {
    title: "E-commerce App",
    description: "A full-stack ecommerce app with authentication, product management, and payments.",
    image: "https://via.placeholder.com/600x400?text=E-commerce+App",
    link: "https://myecommerce.com",
    techStack: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using socket.io with typing indicators and rooms.",
    image: "https://via.placeholder.com/600x400?text=Chat+App",
    link: "https://chatapp.com",
    techStack: ["React", "Socket.io", "Express"]
  },
  {
    title: "Crypto Tracker",
    description: "Crypto price tracker with CoinAPI integration and live charts.",
    image: "https://via.placeholder.com/600x400?text=Crypto+Tracker",
    link: "https://cryptotracker.com",
    techStack: ["React", "Chart.js", "CoinAPI"]
  },
  {
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support.",
    image: "https://via.placeholder.com/600x400?text=Blog+CMS",
    link: "https://blogcms.com",
    techStack: ["Next.js", "Prisma", "PostgreSQL"]
  },
];
