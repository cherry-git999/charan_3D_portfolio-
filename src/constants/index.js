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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Creative Visual Editing",
    icon: mobile,
  },
  {
    title: "Event & Engagement Leader",
    icon: backend,
  },
  {
    title: "Social Media Management",
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
    title: "Social Media Lead",
    company_name: "AUe4 Club, Andhra University", 
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2024 - May 2025",
    points: [
      "Designed posters and digital creatives for an entrepreneurship-focused student club, enhancing event visibility.",
      "Edited reels and video content to drive engagement across social platforms.",
      "Managed end-to-end social media presence, including content planning and strategy.",
      "Offered technical support during club events, including AV setup and live coordination.",
    ],
  },
  {
    title: "Core Organizer",
    company_name: "Hult Prize 2025  a Andhra University Event",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2024 - February 2025",
    points: [
      "Played a key role in organizing the campus-level Hult Prize 2025 event, coordinating with team leads and ensuring smooth execution of all event segments.",
      "Designed visually impactful posters and promotional materials to enhance event branding and participant engagement.",
      "Managed event logistics including venue setup, registration support, and real-time coordination during sessions.",
      "Provided technical assistance for presentations, audio-visual setup, and digital tools used throughout the event.",
    ],
  },
  {
    title: "Core Organizing Member",
    company_name: " Build Bharat Through AI",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Served as a Core Organizer for Build Bharat Through AI, a national-level hackathon hosted at Andhra University, actively contributing to event design, social media, and outreach.",
      "Led campaigning efforts by visiting university branches and other colleges, successfully promoting the event and encouraging participation from students across India.",
      "Managed critical event-day responsibilities, including registration desk support, technical coordination, and logistics to ensure a smooth experience for all attendees.",
      "Developed key skills in public speaking, leadership, and teamwork, while gaining real-world experience in managing high-impact, large-scale events.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Aegion Dynamic Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developed responsive and accessible UI components using React and the ShadCN UI library to ensure clean design and usability.",
      "Integrated frontend and backend systems, managing smooth data communication and user interaction.",
      "Handled SQL dump integration by writing queries and connecting data to the frontend for live updates and insights.",
      "Built interactive data dashboards with Python Streamlit and documented reusable components using Storybook for team-wide consistency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DashXcel",
    description:
      "Developed DashXcel using Python— a data visualization tool that enables non-technical users to analyze Excel data through smart detection, interactive dashboards, and exportable charts.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "plotly",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/cherry-git999/DashXcel.git",
  },
  {
    name: "Bunk Manager",
    description:
      "Bunk Manager is a web-based attendance calculator that helps students easily track individual or entire class attendance, featuring user-friendly input, accurate percentage computation, and a clean interface.",
    tags: [
      {
        name: "HTML",
        color: "pink-text-gradient",
      }
      ,{
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/cherry-git999/Bunk_-Manger.git",
  },
  {
    name: "HealEats",
    description:
      "Developed a prototype website for HealEats—a platform offering healthy, flavorful meals for students—combining nutrition-focused innovation with user-centric design.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/cherry-git999/healeatsmain.git",
  },
];

export { services, technologies, experiences, testimonials, projects };