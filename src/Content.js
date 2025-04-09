// import images
import Hero_person from "./assets/images/Hero/person.png";

import vite from "./assets/images/Skills/Vite.js.png";
import adobe_ai from "./assets/images/Skills/Adobe Illustrator.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import git from "./assets/images/Skills/Git.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

import { BsWhatsapp } from "react-icons/bs";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "OGWANG",
    LastName: "GIDEON",
    btnText: "Contact Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "Makes building frontend applications look amazing!",
        logo: reactjs,
      },
      {
        name: "Vite",
        para: "Speeds up development environment. Your project will be done in 2/3 of the time.",
        logo: vite,
      },
      {
        name: "Node js",
        para: "Great for building backend application systems.",
        logo: nodejs,
      },
      {
        name: "Python",
        para: "Automate tasks, analyze data, develop web applications.",
        logo: python,
      },
      {
        name: "Adobe Photoshop",
        para: "Making interesting picture edits.",
        logo: ps,
      },
      {
        name: "Adobe Illustrator",
        para: "Designing graphics for your brand.",
        logo: adobe_ai,
      },
      {
        name: "Django",
        para: "Lightweight and powerful for backend development.",
        logo: python,
      },
      {
        name: "Git",
        para: "Manage all projects effectively.",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: [
    {
      title: "Web Development",
      para: "We build sleek, high-performing websites that don’t just look good—they work hard too. From responsive design to blazing-fast performance, your online presence is in expert hands.",
      logo: services_logo1,
    },
    {
      title: "UI / UX Designing",
      para: "Design isn’t just how it looks—it’s how it *feels*. We craft intuitive user experiences that your audience will actually enjoy using. Eye candy + brain-friendly = design done right.",
      logo: services_logo2,
    },
    {
      title: "Photoshop Editing",
      para: "From jaw-dropping photo transformations to pixel-perfect touch-ups, we breathe life into every image. Whether it’s for social media or print, your visuals will pop like never before.",
      logo: services_logo3,
    },
  ],  
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Whether you're an individual or an organization, I offer reliable, high-quality solutions to bring your ideas to life. Let’s build something great together.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "iamgideon125@gmail.com",
        icon: GrMail,
        link: "mailto:iamgideon125@gmail.com",
      },
      {
        text: "+256 709 906163",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "Chat on Whatsapp",
        icon: BsWhatsapp,
        link: "https://wa.link/1dd8i2",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
