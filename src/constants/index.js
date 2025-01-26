import project3 from "../assets/projects/project-3.jpg";
import fitnessTrackerImg from '../assets/fitnessTracker.jpg'
import mazeGame from '../assets/mazeGame.png'
import sortingVisualizerImg from '../assets/sortingVisualizer.png' 

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2.5 years of hands-on experience, I am skilled at various technologies like React, Angular, Guidewire Jutro, Node.js, Spring Boot and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023-Present",
    role: "Guidewire Portal Developer",
    company: "Capgemini",
    description: `Developed custom event tracking using Google Tag Manager and Google Analytics to track specific user interactions and fixed accessibility issues to ensure our application inclusivity. Ensured quick turnaround times and maintained
    high quality in deliverables.`,
    technologies: ["Javascript", "React.js", "React Redux"],
  },
  {
    year: "Jul 2023 - Oct 2023",
    role: "React Developer",
    company: "Capgemini",
    description: `Implemented Redux in a template designer app for storing an API response in the store using actions, reducers and stored the response in local using states.`,
    technologies: ["Javascript", "React.js", "React Redux"],
  },
  {
    year: "Jan 2022 - Jun 2023",
    role: "UI Developer",
    company: "Capgemini",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Oracle-JET", "Knockout JS", "Kibana", "ALM"],
  },
  
];

export const PROJECTS = [
  {
    title: "Fitness Tracker",
    image: fitnessTrackerImg,
    description:
      "A fitness tracker website allows users to track their daily activities, set their diet plans and visualize their reports.",
    technologies: ["React JS", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer motion"],
  },
  {
    title: "Maze Game",
    image: mazeGame,
    description:
      "Designed a webpage where user can play this game by moving the ball from start to end point passing through obstacles finding a path .",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Sorting Visualizer",
    image: sortingVisualizerImg,
    description:
      "Designed a webpage where user can set array lengths and visualize how fast each individual algorithms work such as Bubble Sort, Quick Sort and Merge Sort.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana, IN 500074 ",
  phoneNo: "+91 6300617225",
  email: "rakeshvaranasishanmukha@gmail.com",
};
