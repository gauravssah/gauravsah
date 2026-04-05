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
  about: {
    bio: string[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certificates: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  socials: SocialLink[];
  resumeUrl: string;
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
    "5 internships across startup product engineering and government digitization workflows",
  education: "B.Tech CSE (AI), Bihar Engineering University (CGPA 8.68)",
  internshipHighlights: [
    "Revenue Digitization Intern at Revenue and Land Reforms Department, Government of Bihar",
    "Web Developer internships at Animalslover with performance and architecture improvements",
    "Web Development and Designing Internship at Oasis Infobyte",
    "Salesforce Developer Virtual Internship",
  ],
  projects: ["GoalTrackr", "TicketFlix", "Animalslover Website"],
  projectHighlights: {
    GoalTrackr:
      "Full-stack productivity workspace with tasks, goal tracking, journal, job tracking, and JWT-based auth.",
    TicketFlix:
      "Movie ticket booking platform with seat selection, Stripe checkout, PDF tickets, and email confirmations.",
    Animalslover:
      "Official startup website with reusable modules, responsive pages, and continuous UI/performance improvements.",
  },
  codingPractice:
    "Actively practices DSA on LeetCode, GeeksforGeeks, and HackerRank.",
};

export const defaultPortfolio: PortfolioData = {
  hero: {
    name: "Gaurav Kumar Sah",
    role: "Full-Stack Developer | MERN Stack | JavaScript | Java | AWS Cloud",
    intro:
      "Turning ideas into scalable web applications, one clean line of code at a time. I build fast, user-focused digital products with React, Next.js, Node.js, and MongoDB, while strengthening software engineering depth through DSA and system design.",
    highlights: [
      "Built and improved production websites through startup internships",
      "Worked on government digitization workflows for land and revenue systems",
      "Focused on scalable full-stack architecture and cloud-ready engineering",
      "Actively preparing for software engineering roles through DSA practice",
    ],
  },
  about: {
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
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
      progress: 94,
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose"],
      progress: 90,
    },
    {
      title: "AI/ML",
      items: ["AI Integration", "Automation Workflows", "Prompt Engineering"],
      progress: 80,
    },
    {
      title: "Tools",
      items: [
        "JavaScript",
        "Java",
        "C",
        "C++",
        "AWS Cloud",
        "Git",
        "GitHub",
        "Postman",
      ],
      progress: 92,
    },
  ],
  projects: [
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
    },
    {
      title: "Animalslover Official Website",
      description:
        "Developed and maintained the official startup website with reusable architecture, responsive layouts, and performance-focused UI updates for production use.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Component Architecture"],
      github: "https://github.com/gauravssah",
      live: "https://www.animalslover.in",
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
      title: "Web Developer (Second Internship)",
      company: "Animalslover",
      period: "May 2025 - Jun 2025",
      points: [
        "Redesigned key Next.js modules and improved Lighthouse performance by 30%+.",
        "Implemented advanced React hooks, dynamic routing, and cleaner component structure.",
        "Improved user experience with UI refinements based on real feedback.",
        "Contributed to sprint planning, product discussions, and release improvements.",
        "Reduced development turnaround by introducing reusable layout patterns.",
      ],
    },
    {
      title: "Web Developer Intern (First Internship)",
      company: "Animalslover",
      period: "May 2024 - Jul 2024",
      points: [
        "Built 10+ reusable UI components with React.js and Next.js.",
        "Converted Figma designs into responsive, production-ready web pages.",
        "Fixed 20+ UI issues and improved rendering/performance by around 25%.",
        "Worked with GitHub branching, pull requests, and collaborative review cycles.",
        "Refactored hooks and component logic to improve code reusability.",
      ],
    },
    {
      title: "Web Development and Designing Intern",
      company: "Oasis Infobyte",
      period: "Dec 2023 - Jan 2024",
      points: [
        "Completed AICTE OIB-SIP internship and built mini-projects including landing pages and converter tools.",
        "Received recommendation and star performer recognition for delivery quality.",
        "Practiced HTML, CSS, JavaScript, and Git workflows in real project submissions.",
      ],
    },
    {
      title: "Salesforce Developer (Virtual Internship)",
      company: "Salesforce",
      period: "Dec 2023 - Jan 2024",
      points: [
        "Learned Salesforce fundamentals, organization setup, automation, and security concepts.",
        "Practiced Apex, debugging, testing, Lightning components, and API usage.",
        "Completed structured learning tracks such as Apex Specialist and Process Automation Specialist.",
      ],
    },
  ],
  education: [
    {
      title: "B.Tech - Computer Science and Engineering (AI)",
      institution: "Bihar Engineering University, Patna",
      year: "2023 - 2026",
      detail: "Current CGPA: 8.68",
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
    "Learn Complete Front-End Web Development Course (2022)",
    "NPTEL Online Certification - Introduction to Operating Systems",
    "Learn HTML, CSS, JavaScript",
    "NPTEL Online Certification - Cloud Computing",
    "JavaScript - Basics to Advanced Step by Step",
  ],
  contact: {
    email: "gauravssah01@gmail.com",
    phone: "+91 6201219705",
    location: "Muzaffarpur, Bihar, India",
  },
  socials: [
    { label: "GitHub", url: "https://github.com/gauravssah" },
    { label: "LinkedIn", url: "https://linkedin.com/in/gauravssah" },
    { label: "Medium", url: "https://gauravssah.medium.com" },
    { label: "X", url: "https://x.com/gauravssah" },
  ],
  resumeUrl: "/Gaurav_Resume.pdf",
};
