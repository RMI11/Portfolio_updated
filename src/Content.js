// import images
import Hero_person from "./assets/images/Hero/personNew.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import next from "./assets/images/Skills/next.jpeg";
import saas from "./assets/images/Skills/saas.png";
import sc from "./assets/images/Skills/sc.svg";
import tailwind from "./assets/images/Skills/tailwind.png";
import vite from "./assets/images/Skills/vite.png";
import git from "./assets/images/Skills/git.svg";
import node from "./assets/images/Skills/node.png";
import express from "./assets/images/Skills/express.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import person_project from "./assets/images/projects/person.png";

import bank_reactapp from "./assets/images/projects/bank_reactapp.png";
import weather_app from "./assets/images/projects/weather_app.png";
import video_tube from "./assets/images/projects/video_tube.png";
import tesla_clone from "./assets/images/projects/tesla_clone.png";
import netflix_clone from "./assets/images/projects/netflix_clone.png";
import restate from "./assets/images/projects/restate.png";
import developedia from "./assets/images/projects/developedia.png";
import rawvegan from "./assets/images/projects/rawvegan.jpg";
import visitserbia from "./assets/images/projects/visitserbia.png";
import empltaskapp from "./assets/images/projects/empltaskapp.png";
import sersha from "./assets/images/projects/sersha.jpg";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

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
    title: "Front-End Web Developer",
    firstName: "RAJKO",
    LastName: "RADOJKOVIC",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Web Development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "",
        logo: html,
      },
      {
        name: "JavaScript",
        para: "",
        logo: js,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Next 13",
        para: "",
        logo: next,
      },
      {
        name: "Vite js",
        para: "",
        logo: vite,
      },
      {
        name: "Node Js",
        para: "",
        logo: node,
      },
      {
        name: "Express Js",
        para: "",
        logo: express,
      },
      {
        name: "Styled Components",
        para: "",
        logo: sc,
      },
      {
        name: "CSS",
        para: "",
        logo: css,
      },
      {
        name: "Sass",
        para: "",
        logo: saas,
      },
      {
        name: "Tailwind CSS",
        para: "",
        logo: tailwind,
      },
      {
        name: "Git",
        para: "",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I specialize in delivering a comprehensive range of web development services tailored to your unique business needs. By leveraging the latest technologies and industry best practices, I create highly functional, interactive, and secure websites that not only look great but also deliver exceptional performance.Your vision is my priority—I'll take the time to deeply understand your requirements, ensuring the final product reflects your brand and exceeds your expectations. Whether you’re looking to enhance user experience, drive engagement, or boost conversions, I am committed to crafting a website that helps your business stand out in the digital world.Let’s collaborate to turn your ideas into a website that inspires trust, attracts customers, and drives results.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "My team also specializes in delivering high-quality UI/UX design services, focusing on creating visually appealing, user-friendly, and intuitive experiences. We believe great design goes beyond aesthetics—it’s about crafting seamless interactions that engage users and align with your brand. Using modern design techniques, we ensure your website or app is not only attractive but also functional and easy to navigate. By understanding your goals and audience, we create designs that resonate with users while enhancing usability across all devices. From wireframes to polished designs, we work collaboratively to ensure your digital product captivates and delivers a seamless experience that drives engagement.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Sersha The Fox",
        image: sersha,
        demo: "https://game.sersha.ai/",
        code: "",
      },
      {
        title: "Raw Vegan Cakes",
        image: rawvegan,
        demo: "https://rawvegancakes.co.uk/",
        code: "https://github.com/RMI11/rawVeganCakes_Next13-Sanity-Stripe",
      },
      {
        title: "Visit Serbia",
        image: visitserbia,
        demo: "http://posetisrbiju.net/",
        code: "https://github.com/RMI11/Visit_Serbia_Vite_Tailwind",
      },
      {
        title: "Employee-Task app",
        image: empltaskapp,
        demo: "https://employee-task-app.netlify.app/",
        code: "https://github.com/RMI11/React_Node_CRUD_app",
      },
      {
        title: "Developedia",
        image: developedia,
        demo: "https://unique-genie-a7df49.netlify.app/",
        code: "https://github.com/RMI11/Developedia_MERNstack_SocialMedia",
      },
      {
        title: "Modern Bank App",
        image: bank_reactapp,
        demo: "https://calm-lamington-13488f.netlify.app",
        code: "https://github.com/RMI11/Bank_Modern_App_ReactJS/tree/main/bank_modern_app",
      },
      {
        title: "Weather App",
        image: weather_app,
        demo: "https://silver-bublanina-9fccd2.netlify.app/",
        code: "https://github.com/RMI11/Weather-App",
      },
      {
        title: "Video Tube",
        image: video_tube,
        demo: "https://eclectic-bunny-bfd181.netlify.app",
        code: "https://github.com/RMI11/VideoTube_ReactJS/tree/main/video_tube",
      },
      {
        title: "Tesla Clone",
        image: tesla_clone,
        demo: "https://visionary-pixie-f26c55.netlify.app",
        code: "https://github.com/RMI11/Tesla-Clone",
      },
      {
        title: "Netflix Clone",
        image: netflix_clone,
        demo: "https://netflix-react-clone-803f3.web.app/",
        code: "https://github.com/RMI11/Netflix-Clone_ReactJS",
      },
      {
        title: "Real Estate",
        image: restate,
        demo: "https://silly-rolypoly-303c4d.netlify.app/",
        code: "https://github.com/RMI11/Real-Estate-WebPage",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“I have been looking for a web development service for a while and had no luck because of the high price. I found this site and decided to give it a try. I am very happy with the service I received. From the web developer, we got the site designed and developed in two weeks.”",
        img: avatar1,
        name: "Seth Robinson",
      },
      {
        review:
          "“I wanted to create a website that was clean and clear. When I first reached out to this company to discuss my ideas, they were very clear about what I wanted in a website and how I wanted it to look”",
        img: avatar2,
        name: "Harvey Russell",
      },
      {
        review:
          "“I wanted to make my website better. I had it done in the beginning, but I wanted to make sure that I was doing it right, and that my website was optimized for usability. I contacted RR-Development and they were able to help me make the necessary changes. I am currently so happy with the website I have now.”",
        img: avatar3,
        name: "Antonio Cooper",
      },
      {
        review:
          "“The web design and development services I've received from RR-Development have helped increase my business, professionally and personally. I've received great feedback from my clients, as well as from my peers, and they've recommended me to others. ”",
        img: avatar4,
        name: "Nathaniel Parks",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "As a professional web developer, I offer a comprehensive suite of services, from consulting and planning to development, testing, implementation, and ongoing support. I specialize in creating websites that are not only functional and visually appealing but also user-friendly and optimized for performance. My clients trust me to deliver tailored web solutions that perfectly align with their business goals. Additionally, I prioritize creating websites that are easy to maintain, ensuring long-term success and efficiency.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "NextDot",
        link: "",
        icon: BsGlobe,
      },
      {
        text: "rajko.fed@gmail.com",
        icon: GrMail,
        link: "mailto:rajko.fed@gmail.com",
      },
      {
        text: "+381 61 117 4218",
        icon: MdCall,
        link: "https://wa.me/+381616287766",
      },
      {
        text: "Rajko Radojkovic",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/rajkoradojkovic",
      },
      {
        text: "RMI11",
        icon: BsGithub,
        link: "https://github.com/rmi11",
      },
    ],
  },
  Footer: {
    text: "All © CopyRight Reserved 2022",
  },
};
