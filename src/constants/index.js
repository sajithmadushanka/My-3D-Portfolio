
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    machine_learning,
    portfolio,
    ecommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js",
      company_name: "Client project",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2021 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Flutter",
      company_name: "Freelance project",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "March 2021 - Jun 2021",
      points: [
        "🚀 Flutter Chat App: Instant Messaging, Effortless Connections!",
        "Experience seamless conversations with my Flutter Chat App. It offers real-time messaging, an intuitive interface, and cross-platform convenience. Elevate your chat experience with Flutter's simplicity and efficiency."
        ," Chat Smarter with Flutter! 💬📱"
      ],
    },
    {
      title: "Angular.js",
      company_name: "own project",
      icon: typescript,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
       "🚀 Angular Wonders: My Own Projects!",
       "Explore a collection of my own Angular apps, where intuitive design meets robust functionality for a seamless user experience.",
       "Angular Excellence Unveiled! 💻✨",
      ],
    },
    {
      title: "Full stack",
      company_name: "Own project",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
       "🌟 Innovation in Progress: My Cutting-Edge Project!",
      "Currently developing a groundbreaking project using React, Node, Mongoose, and more, blending cutting-edge technologies to create something truly innovative. Stay tuned for the unveiling of this tech marvel! 💡🚀"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sanjani Perera",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Lusi Zhao",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "John Doe",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce Store",
      description:
        "Discover a seamless shopping experience with my E-commerce Flutter app. Browse, shop, and checkout effortlessly with a user-friendly interface designed for convenience and efficiency.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "provider",
          color: "green-text-gradient",
        },
        {
          name: "responsive",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/sajithmadushanka/ecommerce-app",
    },
    {
      name: "Portfolio Website",
      description:
        " This Python library makes building interactive web apps a breeze. It's fast, intuitive, and incredibly easy to manipulate. Excited to explore more possibilities with Streamlit!",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "Animations",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/sajithmadushanka/web-app-using-streamlit-py-library",
    },
    {
      name: "Machine-Learning",
      description:
        "Experience the magic of machine learning using Numpy in Python. This straightforward project showcases the simplicity and effectiveness of Numpy for creating intelligent solutions",
      tags: [
        {
          name: "Angualr",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: machine_learning,
      source_code_link: "https://github.com/sajithmadushanka/AI---Machine-learning-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };