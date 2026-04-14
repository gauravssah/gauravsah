export type SkillCategory = {
  title: string;
  items: string[];
  progress: number;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
};

export type Certificate = {
  title: string;
  image: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  year: string;
  detail: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type PortfolioData = {
  hero: {
    name: string;
    role: string;
    intro: string;
    highlights: string[];
  };
  media: {
    profileImage: string;
    profileAlt: string;
    certificateFallbackImage: string;
  };
  navigation: {
    subtitle: string;
    links: { label: string; href: string }[];
  };
  heroUi: {
    badgeText: string;
    typedLines: string[];
    movingSkills: string[];
    movingSkillsReverse: string[];
    focusLine: string;
    floatingSkills: string[];
    primaryButtonLabel: string;
    secondaryButtonLabel: string;
    resumeButtonLabel: string;
  };
  about: {
    bio: string[];
    headline: string;
    locationLabel: string;
    highlights: string[];
  };
  skills: SkillCategory[];
  softSkills: string[];
  projects: Project[];
  experience: ExperienceItem[];
  experienceHighlights: {
    value: string;
    label: string;
  }[];
  experienceFocusTags: string[];
  education: EducationItem[];
  certificates: Certificate[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  chatbotUi: {
    welcomeMessage: string;
    quickPrompts: string[];
    panelEyebrow: string;
    panelTitle: string;
    inputPlaceholder: string;
    closedButtonLabel: string;
  };
  resumeSection: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
  };
  socials: SocialLink[];
  resumeUrl: string;
  footerNote: string;
};

export const chatbotKnowledge = {
  name: "Gaurav Kumar Sah",
  role: "Full-Stack Developer",
  headline:
    "MERN Stack Developer focused on scalable frontend and backend delivery",
  location: "Muzaffarpur, Bihar, India",
  email: "gauravssah01@gmail.com",
  phone: "+91 6201219705",
  availability:
    "Open to software engineering and full-stack developer opportunities.",
  skills: [
    "MERN Stack",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Java",
    "AWS Cloud",
    "Tailwind CSS",
  ],
  strengths: [
    "Reusable component architecture",
    "Responsive UI engineering",
    "REST API development",
    "Performance optimization",
    "Product-focused execution",
  ],
  experience:
    "4 internships across startup product engineering, government digitization, and Salesforce workflows",
  education: "B.Tech CSE (AI), Bihar Engineering University (CGPA 8.68)",
  internshipHighlights: [
    "Revenue Digitization Intern at Revenue and Land Reforms Department, Government of Bihar",
    "Web Developer Intern (2nd Term) at Animalslover focused on scalable pages and reusable React components",
    "Web Developer Intern (1st Term) at Animalslover focused on website development from scratch and Figma-to-code implementation",
    "Salesforce Developer Internship",
  ],
  projects: [
    "GoalTrackr",
    "TicketFlix",
    "Animalslover Website",
    "HealthVision AI",
  ],
  projectHighlights: {
    "HealthVision AI":
      "AI-powered multi-disease screening web app using TensorFlow, Flask, and OpenCV with eye, skin, and nail detection modules plus a health assistant flow.",
    GoalTrackr:
      "Full-stack productivity workspace with tasks, goal tracking, journal, job tracking, and JWT-based auth.",
    TicketFlix:
      "Movie ticket booking platform with seat selection, Stripe checkout, PDF tickets, and email confirmations.",
    Animalslover:
      "Official startup website with reusable modules, responsive pages, and continuous UI/performance improvements.",
  },
  codingPractice:
    "Actively practices DSA on LeetCode, GeeksforGeeks, and HackerRank.",
  focusAreas: [
    "Full-stack product development",
    "Performance-focused frontend engineering",
    "Scalable API and backend architecture",
    "Real-world workflow problem solving",
  ],
  achievements: [
    "Built and shipped production-ready website modules across multiple internships",
    "Built multiple production-ready projects with end-to-end full-stack flows",
    "Maintains strong academic record with B.Tech CGPA 8.68",
  ],
  languages: ["Hindi", "English"],
  learningNow: ["System design", "Advanced DSA", "Cloud-ready architecture"],
};

export const defaultPortfolio: PortfolioData = {
  hero: {
    name: "Gaurav Kumar Sah",
    role: "Full-Stack Developer | MERN Stack | AI/ML | Computer Vision | AWS Cloud",
    intro:
      "Turning ideas into scalable web applications, one clean line of code at a time. I build fast, user-focused digital products with React, Next.js, Node.js, and MongoDB, while strengthening software engineering depth through DSA and system design.",
    highlights: [
      "Built and improved production websites through startup internships",
      "Worked on government digitization workflows for land and revenue systems",
      "Focused on scalable full-stack architecture and cloud-ready engineering",
      "Actively preparing for software engineering roles through DSA practice",
    ],
  },
  media: {
    profileImage: "/images/profile-portrait.jpg",
    profileAlt: "Gaurav Kumar Sah",
    certificateFallbackImage: "/images/profile-portrait.jpg",
  },
  navigation: {
    subtitle: "Full-Stack Developer | MERN + AI/ML",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Certificates", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ],
  },
  heroUi: {
    badgeText: "Gaurav Kumar Sah portfolio",
    typedLines: [
      "Building scalable web applications and AI-powered health solutions.",
      "MERN stack, Flask APIs, and TensorFlow-based workflows.",
      "Fast UI, robust APIs, computer vision, and strong DSA mindset.",
      "Focused on real product impact through full-stack + AI delivery.",
    ],
    movingSkills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Computer Vision",
      "JavaScript",
      "Java",
      "AWS Cloud",
      "DSA",
      "OS",
      "DBMS",
      "CN",
    ],
    movingSkillsReverse: [
      "Problem Solving",
      "System Design",
      "UI/UX",
      "Performance",
      "Scalability",
      "GitHub Workflow",
      "Testing",
      "Collaboration",
      "API Integration",
      "Cloud Ready",
      "Transfer Learning",
      "Medical Image Classification",
      "Flask + TensorFlow",
      "AI Model Integration",
    ],
    focusLine: "Focused on scalable full-stack delivery",
    floatingSkills: [
      "React + Next.js",
      "Node + Express",
      "MongoDB + APIs",
      "AI + ML Workflows",
      "System Design",
      "TensorFlow + OpenCV",
    ],
    primaryButtonLabel: "View Projects",
    secondaryButtonLabel: "Contact Me",
    resumeButtonLabel: "Download Resume",
  },
  about: {
    headline: "Full-Stack Developer | Software Engineer | AI/ML Enthusiast",
    locationLabel: "India",
    highlights: [
      "Full-stack internship delivery",
      "B.Tech CSE (AI) + Diploma CSE",
      "MERN + REST API architecture",
      "Scalable UI + clean UX execution",
    ],
    bio: [
      "I am a passionate Full-Stack Developer specializing in the MERN stack and Java, currently pursuing B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence.",
      "My journey started with a 3-year Diploma in Computer Science where I discovered how software can solve real-world problems when it is built with clarity, speed, and purpose.",
      "Today, I work across the full development lifecycle: designing responsive front-ends in React and Next.js, engineering robust backend APIs with Node.js and Express.js, and managing scalable data flows with MongoDB.",
      "Through internships, I developed and improved production-ready platforms, including startup websites with reusable UI architecture, better performance metrics, and cleaner developer workflows.",
      "I also gained practical exposure to e-governance systems by contributing to the digitization of land and revenue records, where I worked with verification pipelines, portal workflows, and process analysis.",
      "Alongside development, I continuously strengthen Data Structures and Algorithms through coding platforms like LeetCode, GeeksforGeeks, and HackerRank to grow as a strong Software Engineer.",
      "I am actively looking for opportunities where I can collaborate with engineering teams, build impactful products, and solve meaningful problems through technology.",
    ],
  },
  skills: [
    {
      title: "Frontend Engineering",
      items: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "JavaScript (ES6+)",
      ],
      progress: 94,
    },
    {
      title: "Backend & APIs",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Mongoose",
        "Flask",
        "Flask-CORS",
      ],
      progress: 90,
    },
    {
      title: "AI/ML & Computer Vision",
      items: [
        "TensorFlow",
        "Keras",
        "Transfer Learning",
        "OpenCV",
        "Image Preprocessing (CLAHE, Bilateral Filter)",
        "Medical Image Classification",
      ],
      progress: 86,
    },
    {
      title: "Cloud, Deployment & DevOps",
      items: [
        "AWS Cloud",
        "Render",
        "Gunicorn",
        "Vercel",
        "GitHub Actions (Basics)",
        "Environment Config",
      ],
      progress: 84,
    },
    {
      title: "Languages & Core CS",
      items: [
        "JavaScript",
        "TypeScript",
        "Java",
        "Python",
        "C",
        "C++",
        "Data Structures & Algorithms",
        "Operating Systems (OS)",
        "Database Management System (DBMS)",
        "Computer Networks (CN)",
      ],
      progress: 92,
    },
    {
      title: "Tools & Workflow",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Figma to Code",
        "Responsive UI Testing",
      ],
      progress: 90,
    },
  ],
  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Communication Skills",
    "Time Management",
    "Adaptability",
    "Continuous Learning",
  ],
  projects: [
    {
      title: "Animalslover Official Website",
      description:
        "Developed and maintained the official startup website with reusable architecture, responsive layouts, and performance-focused UI updates for production use.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Component Architecture"],
      github: "https://github.com/gauravssah",
      live: "https://www.animalslover.in",
      image: "/images/projects-ss/AnimalsLover-Project-ss.png",
    },
    {
      title: "GoalTrackr",
      description:
        "A full-stack productivity and life-planning workspace for tasks, goal tracking, job applications, journaling, search, and profile management. Built with a modern frontend, Express API, MongoDB, JWT auth, and responsive dashboard flows.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: "https://github.com/gauravssah/GoalTrackr",
      live: "https://goaltrackr-theta.vercel.app",
      image: "/images/projects-ss/GoalTracker-Project-ss.png",
    },
    {
      title: "TicketFlix",
      description:
        "A production-style movie ticket booking system with seat selection, tier-based pricing, Stripe Checkout, PDF tickets, email confirmations, and role-based admin workflows connected to TMDB movie data.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "Clerk",
        "Inngest",
      ],
      github: "https://github.com/gauravssah/TicketFlix",
      live: "https://ticketflix-eight.vercel.app",
      image: "/images/projects-ss/TicketFlix-Project-ss.png",
    },
    {
      title: "HealthVision AI",
      description:
        "AI-powered multi-disease health detection system with Eye/Jaundice, Face/Skin, and Nail analysis modules using deep learning + computer vision. Includes upload/camera workflows, confidence-based predictions, detailed health insights, AI assistant support, and Render-ready deployment hardening.",
      tech: [
        "Python",
        "Flask",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "HTML/CSS/JavaScript",
        "Gunicorn",
        "Render",
      ],
      github: "https://github.com/gauravssah/HealthVision-AI",
      live: "https://healthvision-ai-1enh.onrender.com/",
      image: "/images/projects-ss/HealthVision_Project-ss.png",
    },
  ],
  experience: [
    {
      title: "Revenue Digitization Intern",
      company: "Revenue and Land Reforms Department, Government of Bihar",
      period: "Dec 2025 - Jan 2026",
      points: [
        "Supported digitization of revenue services, mutation workflows, and land ownership records.",
        "Worked with Parimarjan Plus, Online Lagaan Payment, E-Mapi, and login-based land records portals.",
        "Performed scanning, verification, and quality checks for records and reports.",
        "Observed workflow issues including OTP/login delays and approval bottlenecks in real systems.",
        "Prepared internship analysis and conceptually designed a task tracker workflow prototype.",
      ],
    },
    {
      title: "Web Developer Intern (2nd Term)",
      company: "Animalslover",
      period: "May 2025 - Jun 2025",
      points: [
        "Built 10+ new pages and reusable components using React.js, Next.js, and Tailwind CSS.",
        "Reduced page build turnaround time by approximately 25% through reusable component-driven development.",
        "Improved navigation structure and UI layouts to increase UX consistency across the live platform (animalslover.in).",
        "Worked on existing modules and new feature pages while maintaining design consistency and clean code quality.",
        "Collaborated with the team for iterative updates and production releases.",
      ],
    },
    {
      title: "Web Developer Intern (1st Term)",
      company: "Animalslover",
      period: "May 2024 - Jul 2024",
      points: [
        "Designed and developed the company website from scratch using React.js and Next.js.",
        "Converted 10+ Figma designs into pixel-perfect, responsive web interfaces.",
        "Built 15+ reusable UI components, reducing future development time by approximately 30%.",
        "Implemented responsive layouts and reusable frontend structure for faster feature development.",
        "Followed collaborative workflows with version control and regular development iterations.",
      ],
    },
    {
      title: "Salesforce Developer Intern",
      company: "Salesforce",
      period: "Dec 2023 - Jan 2024",
      points: [
        "Learned Salesforce fundamentals, organization setup, automation, and security concepts.",
        "Practiced Apex, debugging, testing, Lightning components, and API usage.",
        "Completed structured learning tracks such as Apex Specialist and Process Automation Specialist.",
      ],
    },
  ],
  experienceHighlights: [
    {
      value: "4",
      label: "internships completed",
    },
    {
      value: "3",
      label: "domains explored",
    },
    {
      value: "1",
      label: "clear focus on delivery",
    },
  ],
  experienceFocusTags: [
    "Product delivery",
    "Government workflows",
    "React",
    "Next.js",
  ],
  education: [
    {
      title: "B.Tech - Computer Science and Engineering (AI)",
      institution: "Bihar Engineering University, Patna",
      year: "2023 - 2026",
      detail: "Current CGPA: 8.57",
    },
    {
      title: "Diploma - Computer Science and Engineering",
      institution: "State Board of Technical Education, Bihar",
      year: "2019 - 2022",
      detail: "CGPA: 8.55",
    },
    {
      title: "Intermediate (10+2) Science (PCM)",
      institution: "Ram Dayalu Singh College, Muzaffarpur",
      year: "2017 - 2019",
      detail: "69%",
    },
    {
      title: "Matriculation",
      institution: "Board Exam",
      year: "2015 - 2017",
      detail: "76.6%",
    },
  ],

  certificates: [
    {
      title:
        "NPTEL Online Certification – Introduction to Operating Systems (Elite Top 5%)",
      image:
        "/images/certificates/NPTEL Online Certification – Introduction to Operating Systems.png",
    },
    {
      title: "Computer Networks – takeUforward",
      image: "/images/certificates/Certificate Computer Networks tuf.png",
    },
    {
      title: "Operating System – takeUforward",
      image: "/images/certificates/Operating System TUF.png",
    },
    {
      title: "NPTEL Online Certification – Cloud Computing",
      image:
        "/images/certificates/NPTEL Online Certification – Cloud Computing.png",
    },

    // Linux Essentials (2 files)
    {
      title: "Linux Essentials Certification – Cisco Networking Academy",
      image:
        "/images/certificates/Linux Essentials Certification Certificates.png",
    },
    {
      title: "Linux Essentials – Statement of Achievement",
      image:
        "/images/certificates/Linux Essentials Certification Statement of achivement.png",
    },

    // Linux Unhatched (2 files)
    {
      title: "Linux Unhatched – Cisco Networking Academy",
      image: "/images/certificates/Linux Unhatched Certificate.png",
    },
    {
      title: "Linux Unhatched – Statement of Achievement",
      image: "/images/certificates/Statement of Achievement.png",
    },

    {
      title: "Startup India Learning Program – Invest India",
      image: "/images/certificates/Startup India Learning Program.png",
    },
    {
      title: "Contentstack for Developers + Launch Certification",
      image: "/images/certificates/Contentstack for Developers + Launch.png",
    },
    {
      title: "Cisco Cybersecurity Essentials (AICTE Internship)",
      image:
        "/images/certificates/AICTE-CISCO INTERNSHIP_DST BIHAR_CYBERSECURITY ESSENTIALS.png",
    },

    // AWS (2 files)
    {
      title: "Cloud Computing with AWS – Internshala",
      image: "/images/certificates/Cloud computing with AWS.png",
    },
    {
      title: "Cloud Computing with AWS Training",
      image: "/images/certificates/Cloud computing with AWS Training.png",
    },

    {
      title: "What Is Generative AI? – LinkedIn Learning",
      image: "/images/certificates/What Is Generative AI Linkedin.png",
    },

    // Udemy Courses
    {
      title: "Learn Complete Front-End Web Development Course (2022)",
      image:
        "/images/certificates/Learn Complete Front-End Web Development Course Udemy.png",
    },
    {
      title: "Advanced Web Developer Course – Beginner to Advanced",
      image:
        "/images/certificates/Advanced Web Developer Course - Beginner to Advanced.png",
    },
    {
      title: "The Complete ReactJs Course – Basics to Advanced",
      image:
        "/images/certificates/The Complete ReactJs Course - Basics to Advanced Udemy.png",
    },
    {
      title: "JavaScript – Basics to Advanced Step by Step",
      image:
        "/images/certificates/JavaScript - Basics to Advanced step by step udemy.png",
    },
    {
      title: "Modern JavaScript for Beginners + Projects",
      image:
        "/images/certificates/Modern Javascript for Beginners  Javascript Projects udemy.png",
    },
  ],

  contact: {
    email: "gauravssah01@gmail.com",
    phone: "+91 6201219705",
    location: "Muzaffarpur, Bihar, India",
  },
  chatbotUi: {
    welcomeMessage:
      "Ask anything about Gaurav: skills, projects, internships, education, contact details, or resume.",
    quickPrompts: [
      "What are Gaurav's main skills?",
      "Tell me about GoalTrackr and TicketFlix.",
      "What internships has Gaurav done?",
      "How can I contact Gaurav?",
    ],
    panelEyebrow: "Ask about Gaurav",
    panelTitle: "AI Assistant",
    inputPlaceholder: "Type a question...",
    closedButtonLabel: "Open assistant",
  },
  resumeSection: {
    eyebrow: "Resume PDF",
    title: "Download My Resume",
    description:
      "Use this resume to review my professional summary, technical skills, certifications, key projects, and complete internship experience.",
    buttonLabel: "Download Resume",
  },
  socials: [
    { label: "GitHub", url: "https://github.com/gauravssah" },
    { label: "LinkedIn", url: "https://linkedin.com/in/gauravssah" },
    { label: "Medium", url: "https://gauravssah.medium.com" },
    { label: "X", url: "https://x.com/gauravssah" },
  ],
  resumeUrl: "/Gaurav_Resume.pdf",
  footerNote: "All rights reserved. Developed with ❤️",
};
