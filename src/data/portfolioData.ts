import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiOpencv,
  SiTensorflow,
  SiYolo,
  SiRedux,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";

export const skills = [
  {
    name: "React.js",
    icon: FaReact,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
  },
  {
    name: "HTML",
    icon: FaHtml5,
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    category: "Frontend",
  },
  {
    name: "SCSS",
    icon: BsFiletypeScss,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: SiRedux,
    category: "Frontend",
  },
  {
    name: "Java",
    icon: FaJava,
    category: "Programming",
  },
  {
    name: "Python",
    icon: FaPython,
    category: "Programming",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    category: "Programming",
  },
  {
    name: "ASP.NET Core",
    icon: SiDotnet,
    category: "Backend",
  },
  {
    name: "REST APIs",
    icon: FaDatabase,
    category: "Backend",
  },
  {
    name: "MSSQL",
    icon: DiMsqlServer ,
    category: "Database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
  },
  {
    name: "YOLOv8",
    icon: SiYolo,
    category: "AI / ML",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    category: "AI / ML",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    category: "AI / ML",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
  },
];

export const projects = [
  {
    title: "AI-Powered Fabric Defect Detection System",
    description:
      "A final-year research project focused on detecting fabric defects using artificial intelligence and computer vision. The system addresses defects such as holes, broken yarns, dirt, stains, and colour variations, with a focus on developing an efficient automated inspection approach for single-colour fabrics.",
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "TensorFlow",
      "CNN",
    ],
    icon: SiYolo,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Reservation Management System",
    description:
      "A web-based reservation management system designed for large organizations with multiple companies. The system is operated by staff who enter reservations made by customers through telephone or in-person visits. I developed the Customer Management and Reservation Overview parts of the system.",
    technologies: [
      "React.js",
      "Redux",
      "ASP.NET Core",
      "MSSQL",
    ],
    icon: FaReact,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Message Sharing System",
    description:
      "A Level 1 Hardware Project that allows users to send and receive messages between users. The system demonstrates the integration of hardware and software components to provide a basic communication platform.",
    technologies: [
      "Atmega 32",
      "C",
      "PHP",
      "HTML",
      "CSS",
      "JavaScript",
      "Blender",
      "MySQL",
    ],
    icon: FaDatabase,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Resume Management System",
    description:
      "An ongoing individual full-stack project designed to provide a user-friendly and seamless resume management experience for recruiters. The system is currently under development.",
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "MSSQL",
    ],
    icon: FaReact,
    gradient: "from-blue-500 to-cyan-500",
  },
];