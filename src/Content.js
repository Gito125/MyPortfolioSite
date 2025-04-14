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
import project4 from "./assets/images/projects/img4.png";
import project5 from "./assets/images/projects/img5.png";
import project6 from "./assets/images/projects/img6.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";

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
    LastName: "GIFT GIDEON",
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
        para: "Sleek frontend development ⚛️",
        details: [
          "⚡ Your users get lightning-fast performance.",
          "🎯 Clean, modern designs that boost trust.",
          "📱 Apps look great on mobile and desktop.",
          "🧠 Easy to scale and maintain as you grow.",
          "🤩 Better UI = happier, more loyal customers.",
        ],
        logo: reactjs,
      },
      {
        name: "Vite",
        para: "Super-fast project setup 🚀",
        details: [
          "⏱️ Your project gets delivered faster.",
          "🔄 Real-time updates speed up feedback cycles.",
          "🧠 Saves you time = saves you money.",
          "🚀 Boosts developer productivity for quicker changes.",
          "🎉 Minimal setup, so we focus on what matters: your product.",
        ],
        logo: vite,
      },
      {
        name: "Node js",
        para: "Backend that scales 🌐",
        details: [
          "💡 Your app runs smoothly, even with many users.",
          "⚡ Real-time features (chat, updates) work instantly.",
          "🛠️ Scalable backend means you're ready for growth.",
          "🔄 One language = faster development = lower cost.",
          "🔒 Secure and efficient = peace of mind for you.",
        ],
        logo: nodejs,
      },
      {
        name: "Python",
        para: "Versatile coding tool 🐍",
        details: [
          "🤖 Tedious tasks get automated — saving you hours.",
          "📈 Data becomes insights — helping smarter decisions.",
          "⚡ Quick to build MVPs and test ideas.",
          "💼 Ideal for both simple and complex business needs.",
          "🧠 Clean, readable code keeps future costs low.",
        ],
        logo: python,
      },
      {
        name: "Adobe Photoshop",
        para: "Creative image edits 🎨",
        details: [
          "📸 Your brand visuals stand out and attract attention.",
          "✨ Boosts engagement with stunning social media content.",
          "🧼 Professional look builds trust with customers.",
          "🎯 Tailored visuals to match your brand identity.",
          "🚀 Graphics that convert views into action.",
        ],
        logo: ps,
      },
      {
        name: "Adobe Illustrator",
        para: "Scalable vector graphics 🖌️",
        details: [
          "📐 Crisp, high-quality logos that scale perfectly.",
          "🧠 Visual consistency across print and digital platforms.",
          "🎨 Custom icons and designs that reflect your identity.",
          "💼 Polished branding that makes you look legit.",
          "🚀 Helps your business leave a lasting impression.",
        ],
        logo: adobe_ai,
      },
      {
        name: "Django",
        para: "Powerful backend framework 🦾",
        details: [
          "⚡ Faster to build = quicker time-to-market for you.",
          "🔒 Secure by design — your users’ data is safe.",
          "🧠 Includes admin panel to save on dev costs.",
          "📈 Easy to scale as your business expands.",
          "💼 Built to handle complex needs without complexity.",
        ],
        logo: python,
      },
      {
        name: "Git",
        para: "Project version control 🧠",
        details: [
          "🛡️ Your work is backed up and protected always.",
          "🔍 Full history of changes = easy to manage progress.",
          "🤝 Makes team collaboration smoother and faster.",
          "🔁 Rollbacks prevent costly mistakes.",
          "🧰 Keeps everything organized, even as projects grow.",
        ],
        logo: git,
      },
    ],    
    icon: MdArrowForward,
  },
  services: [
    {
      title: "Web Development",
      para: "💻 We build sleek, high-performing websites that don’t just look good—they work hard too. From responsive design to blazing-fast performance, your online presence is in expert hands.",
      logo: services_logo1,
    },
    {
      title: "UI / UX Designing",
      para: "🎨 Design isn’t just how it looks—it’s how it *feels*. We craft intuitive user experiences that your audience will actually enjoy using. Eye candy + brain-friendly = design done right.",
      logo: services_logo2,
    },
    {
      title: "Graphics Editing",
      para: "🖼️ We enhance your visuals to speak louder than words. From polished diagrams to scroll-stopping content, we tailor every graphic to match your brand and wow your audience—online or in print.",
      logo: services_logo3,
    },
  ],
  Projects: {
    title: "Projects",
    subtitle: "MY CREATIONS",
    image: person_project,
    project_content: [
      {
        title: "Sunny Side Creative Agency",
        image: project1,
        link: 'https://gito125.github.io/Sunnyside-Agenccy-Website/'
      },
      {
        title: "Faijoma Komagum Investments Ltd business profile",
        image: project2,
        link: "https://drive.google.com/file/d/1S-ArboHrpfZP3KvDSH6otkll7eTLipDT/view?usp=sharing"
      },
      {
        title: "Insure Landing Page",
        image: project3,
        link: "https://gito125.github.io/Insure-landing-page/index.html"
      },
      {
        title: 'Advice Generator App',
        image: project4,
        link: "https://advice-app-generator.web.app/"
      },
      {
        title: 'Clipboard Master',
        image: project5,
        link: "https://gito125.github.io/clipboard-landing-page-master/"
      },
      {
        title: 'Potra Security Services Limited',
        image: project6,
        link: "https://drive.google.com/file/d/1nGX0AwzsyViBbW39zIJZNwe0a8eSNUhU/view?usp=sharing"
      }
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Gideon has helped to promote our company by enabling us reach more clients effectively and efficienly”",
        img: avatar1,
        name: "ALOBO DAPHINE",
        role: "Cheif Administrator"
      },
      {
        review:
          "“Mr Ogwang is one of a kind. He can turn a simple idea into something truly amazing and profitable to the company in the long term”",
        img: avatar2,
        name: "MILTON EBONG",
        role: "Cheif Executive Officer"
      },
      {
        review:
          "“Humble and diligent on completing his tasks on time. Truly, he's someone worht working with”",
        img: avatar3,
        name: " AKENA RICHARD",
        role: "Director"
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
    name: 'OGWANG Gift Gideon',
    text: "© Copy Right Reserved 2025",
  }
};
