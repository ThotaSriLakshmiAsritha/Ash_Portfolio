// Skills and experience data for Thota Sri Lakshmi Asritha's portfolio

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "My core language for interactive web logic and dynamic applications 🚀",
    color: "#f0db4f",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Strongly typed JavaScript — catching bugs at compile time 💯🔒",
    color: "#007acc",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription:
      "Semantic structure for responsive web layouts 🏗️",
    color: "#e34c26",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3",
    shortDescription:
      "Styling with flexbox, grid, and smooth responsive design 🎨",
    color: "#563d7c",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React.js",
    shortDescription:
      "Building dynamic UIs with component-driven architecture ⚛️",
    color: "#61dafb",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  // 9. Vue key → C++
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "C++",
    shortDescription:
      "Powerful programming language for Data Structures & Systems Programming 💻",
    color: "#00599c",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Full-stack React framework powering production web apps 🌐",
    color: "#ffffff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "Utility-first CSS framework for modern UI development 🌪️",
    color: "#38bdf8",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "Server-side JavaScript runtime for building RESTful backends 🔙",
    color: "#6cc24a",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  // 4. Express key → FastAPI
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "FastAPI",
    shortDescription:
      "High-performance Python web framework for fast REST API development ⚡",
    color: "#009688",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "Advanced open-source relational database management system 🐘",
    color: "#336791",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "Flexible NoSQL document database for scalable web applications 🍃",
    color: "#47a248",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription:
      "Distributed version control system for tracking code changes 🔄",
    color: "#f1502f",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Cloud platform for repository hosting & collaborative development 🐙",
    color: "#ffffff",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  // 2. Prettier key → Java
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Java",
    shortDescription:
      "Object-oriented programming language & core CS foundation ☕",
    color: "#ea2d2e",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  // 10. npm key → n8n
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "n8n",
    shortDescription:
      "Workflow automation tool for AI & API integrations ⚙️",
    color: "#ff6d5a",
    icon:
      "https://api.iconify.design/simple-icons:n8n.svg",
  },

  // 3. Firebase key → Supabase
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Supabase",
    shortDescription:
      "Postgres database, authentication, storage, and real-time backend ⚡",
    color: "#3ecf8e",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },

  // 1. WordPress key → Python
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "Python",
    shortDescription:
      "Core programming language for Machine Learning & backend engineering 🐍",
    color: "#3776ab",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux & OS",
    shortDescription:
      "Operating system fundamentals & command-line proficiency 🐧",
    color: "#fbc02d",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Containerization platform for seamless software deployment 🐳",
    color: "#2496ed",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  // 6. Nginx key → NumPy
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NumPy",
    shortDescription:
      "Python library for numerical computing and scientific data processing 🔢",
    color: "#4dabcf",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },

  // 7. AWS key → SQL
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "SQL",
    shortDescription:
      "Structured Query Language for querying and managing relational databases 🗄️",
    color: "#4479a1",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "Google's cloud platform for deploying and scaling applications ☁️",
    color: "#4285f4",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },

  // 8. Vim key → Power BI
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Power BI",
    shortDescription:
      "Microsoft Power BI for data analysis & interactive dashboarding 📈",
    color: "#f2c811",
    icon:
      "https://api.iconify.design/logos:microsoft-power-bi.svg",
  },

  // 5. Vercel key → Pandas
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Pandas",
    shortDescription:
      "Python library for data manipulation, analysis, and processing 📊",
    color: "#150458",
    icon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "May 2026",
    title: "Software Development Intern",
    company:
      "Police Hospital Digital Healthcare System — PupilSolutions Pvt Ltd, Hyderabad",
    description: [
      "Contributed to the development and debugging of a digital healthcare platform for a Government Police Hospital in Telangana, supporting patient registration, diagnostics, inventory, and hospital workflows.",
      "Improved role-based access control and backend functionality supporting multiple departments and user roles.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],

  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};