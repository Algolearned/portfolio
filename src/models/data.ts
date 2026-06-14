import type {
    PersonalInfo, SocialLink, Skill, Project,
    WorkExperience, Education, Certification, NavItem
} from "./types";

export const personalInfo: PersonalInfo = {
    name: "Russel Jean",
    title: "Developer",
    subtitle: "I build elegant solutions to complex problems",
    bio: `I'm a BSIT student passionate about web development, software engineering, and UI/UX design. I enjoy building modern, responsive web applications using React, Node.js, Tailwind CSS, and Figma to create intuitive and user-friendly digital experiences. Through academic projects and continuous learning, I am developing my skills in both front-end and back-end development while striving to create innovative and impactful technology solutions.`,
    email: "russeljean528@gmail.com",
    phone: "09817838894",
    location: "Davao City, Philippines",
    avatar: "/images/russel.jpeg",
    resumeUrl: "/resume.pdf",
    projectsCompleted: 9,

};

export const socialLinks: SocialLink[] = [
    { id: "1", platform: "GitHub", url: "https://github.com/Algolearned", icon: "Github" },
    { id: "2", platform: "LinkedIn", url: "https://www.linkedin.com/in/russel-jean-sua-934ab9413/", icon: "Linkedin" },
    { id: "3", platform: "Email", url: "mailto:russeljean528@gmail.com", icon: "Mail" },
];

export const navItems: NavItem[] = [
    { id: "1", label: "Home", href: "#home" },
    { id: "2", label: "About", href: "#about" },
    { id: "3", label: "Skills", href: "#skills" },
    { id: "4", label: "Projects", href: "#projects" },
    { id: "5", label: "Experience", href: "#experience" },
    { id: "6", label: "Education", href: "#education" },
    { id: "7", label: "Certifications", href: "#certifications" },
    { id: "8", label: "Services", href: "#services" },
    { id: "9", label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
    // Frontend
    { id: "1", name: "React", level: 70, category: "frontend" },
    { id: "2", name: "TypeScript", level: 70, category: "frontend" },
    { id: "3", name: "Next.js", level: 60, category: "frontend" },
    { id: "4", name: "Tailwind CSS", level: 94, category: "frontend" },
    { id: "5", name: "Vue.js", level: 60, category: "frontend" },
    { id: "6", name: "CSS", level: 90, category: "frontend" },

    // Backend
    { id: "7", name: "Node.js", level: 80, category: "backend" },
    { id: "8", name: "Express", level: 75, category: "backend" },
    { id: "9", name: "Python", level: 50, category: "backend" },
    { id: "10", name: "JavaScript", level: 50, category: "backend" },

    // Database
    { id: "11", name: "PostgreSQL", level: 50, category: "database" },

    // Tools
    { id: "12", name: "Git", level: 95, category: "tools" },
    { id: "13", name: "Figma", level: 90, category: "tools" },

];
// Projects

export const projects: Project[] = [
    {
        id: "1",
        title: "Radiant Splendid",
        description: "A foundational web development project that showcases the application of HTML, CSS, and JavaScript in designing and developing  web experiences.",
        image: "/images/radiantSplendid.png",
        tags: ["HTML", "CSS", "JS"],
        githubUrl: "https://github.com/",
        liveUrl: "",
        featured: true,
        category: "FRONTEND",
        year: 2023,
    },
    {
        id: "2",
        title: "SHRS Platform",
        description: "A Student Health Record System (SHRS) developed to digitize and manage student medical information efficiently. Built using Laravel, Bootstrap, and MySQL.",
        image: "/images/shs.png",
        tags: ["Bootstrap", "Laravel", "MySQL"],
        githubUrl: "https://github.com/",
        featured: true,
        category: "fullstack",
        year: 2024,
    },
    {
        id: "3",
        title: "DeJeanVer Online Bikeshop",
        description: "A modern bicycle shop management system that automates sales processing, inventory tracking, and performance monitoring using Bootstrap, Native PHP, and Chart.js.",
        image: "/images/denjeavier.png",
        tags: ["BOOTSTRAP", "NATIVE PHP", "CHART.JS"],
        githubUrl: "https://github.com/LorinsSabyir/DeJeanVer-online-bike-shop-System",
        liveUrl: "https://github.com/LorinsSabyir/DeJeanVer-online-bike-shop-System",
        featured: true,
        category: "",
        year: 2023,
    },
    {
        id: "4",
        title: "Minecraft Prototype",
        description: "A UI/UX design prototype that recreates the official Minecraft website using Figma, focusing on layout design, visual consistency, and user interface design principles.",
        longDescription: "A comprehensive DevOps monitoring solution that tracks server health, application performance, and triggers intelligent alerts. Features a Grafana-like interface with custom dashboards.",
        image: "/images/minecraft.png",
        tags: ["FIGMA"],
        githubUrl: "https://www.figma.com/proto/qF52fGrcOApreXwDQxkb9M/Minecraft?node-id=434-18930&p=f&viewport=310%2C73%2C0.08&t=uL20bUKPLFbbIn7i-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        featured: false,
        category: "UI/UX",
        year: 2023,
    },
    {
        id: "5",
        title: "DISKUBRE",
        description: "A mobile application that serves as a two-sided marketplace connecting clients and workers, enabling seamless job posting, talent discovery, and professional networking within a skill-based service ecosystem.",
        image: "/images/diskubre.png",
        tags: ["FIGMA"],
        githubUrl: "https://www.figma.com/proto/aFCgyKSNysjAF3WFZdq0RL/Techno-Prototype?node-id=45-424&p=f&viewport=98%2C86%2C0.08&t=CYCbFPVrVrbyzG7k-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=45%3A424&show-proto-sidebar=1&page-id=0%3A1",
        liveUrl: "https://www.figma.com/proto/aFCgyKSNysjAF3WFZdq0RL/Techno-Prototype?node-id=45-424&p=f&viewport=98%2C86%2C0.08&t=CYCbFPVrVrbyzG7k-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=45%3A424&show-proto-sidebar=1&page-id=0%3A1",
        featured: false,
        category: "UI/UX",
        year: 2023,
    },
    {
        id: "6",
        title: "ROADWATCH UI",
        description: "A UI application for RoadWatch, a smart traffic citation and monitoring system that enables digital ticketing, violation tracking, and data visualization for efficient traffic management.",
        image: "/images/capstoneui.png",
        tags: ["FIGMA"],
        githubUrl: "https://www.figma.com/design/fZSebcBNZvpQ9YXXyTnki3/HCI2---MODULE-2-ASSESSMENT?node-id=69-472&t=1rsb6ep3JS24IPDP-1",
        liveUrl: "https://www.figma.com/design/fZSebcBNZvpQ9YXXyTnki3/HCI2---MODULE-2-ASSESSMENT?node-id=69-472&t=1rsb6ep3JS24IPDP-1",
        featured: false,
        category: "UI/UX",
        year: 2025,
    },

    {
        id: "7",
        title: "DPWH",
        description: "A modern UI redesign of the DPWH website that enhances usability, accessibility, and visual hierarchy through improved layout structure and user-centered design principles.",
        image: "/images/dpwh.png",
        tags: ["FIGMA"],
        githubUrl: "https://www.figma.com/proto/rdvVvcWZ2JOAU2cUj00Qxt/DPWH-HCI1?node-id=3-2&viewport=63%2C218%2C0.12&t=4SZcEfVxbAL1ABbb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        liveUrl: "https://www.figma.com/proto/rdvVvcWZ2JOAU2cUj00Qxt/DPWH-HCI1?node-id=3-2&viewport=63%2C218%2C0.12&t=4SZcEfVxbAL1ABbb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        featured: false,
        category: "FIGMA",
        year: 2025,
    },
    {
        id: "8",
        title: "ROADWATCH",
        description: "A BSIT capstone project developed using Flutter for a smart traffic citation and monitoring system.",
        image: "/images/roadwatch.png",
        tags: ["Flutter", "Dart", "Firebase"],
        githubUrl: "https://github.com/LorinsSabyir/RoadWatch_Mobile_Ticketing",
        liveUrl: "https://drive.google.com/drive/u/0/folders/1Kz_vaceFmgaNrSc2UusdCQcqYsW1cPU4?fbclid=IwY2xjawSYlpFleHRuA2FlbQMxMDAAYnJpZBExUGhHMmV4VmJtWlZ1SEhocXNydGMGYXBwX2lkATAAAR5lsCfGp_oeiIkj9Ed9iLYsGaLWn9wMZNQaPdKrMEZ1b3cUDgMhv7c_VLxNSQ_aem_ta3DZZF1VWUUHihl8V4H9Q",
        featured: false,
        category: "FIGMA",
        year: 2025,
    },

    {
        id: "9",
        title: "Universal System Survey",
        description: "A web-based survey system developed under the LODIxR project, designed to collect, manage, and analyze user responses in a structured and efficient way.",
        image: "/images/uss.png",
        tags: ["React", "Node.js", "Redux", "Tailwind CSS", "PostgreSQL", "TypeScript"],
        githubUrl: "https://www.figma.com/proto/rdvVvcWZ2JOAU2cUj00Qxt/DPWH-HCI1?node-id=3-2&viewport=63%2C218%2C0.12&t=4SZcEfVxbAL1ABbb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        liveUrl: "https://www.figma.com/proto/rdvVvcWZ2JOAU2cUj00Qxt/DPWH-HCI1?node-id=3-2&viewport=63%2C218%2C0.12&t=4SZcEfVxbAL1ABbb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        featured: false,
        category: "React, Node.js, Redux, Tailwind CSS, PostgreSQL, TypeScript",
        year: 2025,
    },
];

// Work Experience

export const workExperiences: WorkExperience[] = [
    {
        id: "1",
        company: "Depatment of Science and Technology",
        role: "FrontEnd Developer",
        period: "February - May 2026",
        location: "Davao del Norte, Philippines",
        description: "Intern in the DOST, Davao del Norte, and as one also a frontend developer in the Project League of Developer Initiatives by the Regoins or Project LODIxR ",
        achievements: [
            "Conducted Knowledge Transfer sessions on Redux",
            "Served as Front-End Developer in the League of Developer Initiatives by the Regions (LODIxR) Project",
            "Applied Clean Architecture and MVVM (Model-View-ViewModel) Architecture in project development",
            "Successfully completed and submitted 6 assigned project tasks"
        ],
        technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redux", "Tailwind CSS"],
        current: false,
    },
]

// Education

export const educations: Education[] = [
    {
        id: "1",
        institution: "DAVAO NORTE STATE COLLEGE (DNSC)",
        degree: "Bachelor of Science ",
        field: "Information Technology",
        period: "2022 – Present",
        description: "Focused on information technology, software development, networking, and database management. Earned a 4-year BSIT degree",
    },
    {
        id: "2",
        institution: "Compostela National High School",
        degree: "High School Diploma and Senior High School Diploma",
        field: "CSS Strand",
        period: "2017-2022",
        description: "Focused on Computer Systems Servicing (CSS), covering computer hardware, software installation, networking, and technical support. Earned High School and Senior High School diplomas.",
    },
];

//Certifications

export const certifications: Certification[] = [

    {
        id: "1",
        name: "Capstone Exhibit",
        issuer: "DNSC",
        date: "2026-06-01",
        image: "/images/exhibitCert.png",
    },
    {
        id: "2",
        name: "BINHI",
        issuer: "DNSC",
        date: "2026-06-11",
        image: "/images/binhi.jpg",
    },
    {
        id: "3",
        name: "User Experience Questionnaire Instrument",
        issuer: "Universitas Trilogi",
        date: "2026-04-24",
        image: "/images/TrilogiCert.jpg",
    },
    {
        id: "4",
        name: "CL SEAMS TRAINING",
        issuer: "DOST",
        date: "2026-03-03",
        image: "/images/clSeamsTraining.png",
    },
    {
        id: "5",
        name: "Packet Tracer",
        issuer: "CISCO",
        date: "2024-01-24",
        image: "/images/cisco.png",
    },
    {
        id: "6",
        name: "BUGSAI TBI",
        issuer: "BUGSAI",
        date: "2025-02-25",
        image: "/images/bugsaicert.png",
    },
    {
        id: "7",
        name: "ADVANCE SEMINAR",
        issuer: "DNSC",
        date: "2025-10-17",
        image: "/images/suacert2.png",
    },
    {
        id: "8",
        name: "ADVANCE SEMINAR",
        issuer: "DNSC",
        date: "2025-11-05",
        image: "/images/suacert3.png",
    },
    {
        id: "9",
        name: "On the Job Training",
        issuer: "DOST",
        date: "2026-05-26",
        image: "/images/ojt.png",
    },
    {
        id: "10",
        name: "TOPCIT",
        issuer: "IITP",
        date: "2025-01-02",
        image: "/images/suacert1.png",
    },
];

