import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  tailwind: brand("Tailwind CSS", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  // FastAPI — no logo in the set, use a text mark
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">FA</span>,
  },
  // SHAP — no logo in the set, use a text mark
  shap: {
    title: "SHAP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SHAP</span>,
  },
  // n8n — no logo in the set, use a text mark
  n8n: {
    title: "n8n",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">n8n</span>,
  },
  // Chrome Extension APIs — text mark
  chrome: {
    title: "Chrome Extension APIs",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Ext</span>,
  },
  // GenAI APIs — text mark
  genai: {
    title: "GenAI APIs",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI</span>,
  },
  // Random Forest / Scikit-learn
  sklearn: {
    title: "Scikit-learn",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SKL</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "trustlens",
    category: "AI Security Tool",
    title: "TrustLens",
    src: "/assets/projects-screenshots/trustlens/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.chrome,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
      ],
    },
    github: "https://github.com/gvk16483-cpu/risk_explanation_extension",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An AI-powered phishing detection browser extension — real-time
            threat analysis across Gmail, WhatsApp Web, Telegram Web, and
            browser URLs.
          </TypographyP>
          <TypographyP className="font-mono">
            TrustLens is a Chrome extension built to detect phishing attacks
            across multiple platforms. It combines a custom in-house ML
            classifier with an AI explanation layer to flag suspicious URLs
            and emails with both accuracy and transparency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Two-Stage Detection Pipeline
          </TypographyH3>
          <p className="font-mono mb-2">
            Engineered a two-stage phishing detection pipeline: an in-house
            ML classifier handles primary threat detection, while a secondary
            AI explanation layer provides human-readable reasoning for flagged
            URLs and emails. This architecture reduces inference overhead
            while maintaining end-to-end response time under 2 seconds.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Multi-Platform Coverage
          </TypographyH3>
          <p className="font-mono mb-2">
            Built to work seamlessly across Gmail, WhatsApp Web, Telegram
            Web, and general browser websites — supporting both URL-based and
            email content analysis from a single Chrome extension.
          </p>
        </div>
      );
    },
  },
  {
    id: "finguide",
    category: "Explainable AI Platform",
    title: "FinGuide",
    src: "/assets/projects-screenshots/finguide/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sklearn,
        PROJECT_SKILLS.shap,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.n8n,
      ],
    },
    github: "https://github.com/nxtrohith/Finguide---Your-Financial-Guide",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An explainable AI financial advisory platform — loan prediction,
            EMI estimation, and personalized credit card recommendations with
            full transparency.
          </TypographyP>
          <TypographyP className="font-mono">
            FinGuide is a full-stack financial advisory platform that combines
            machine learning with explainability. Users get personalized loan
            predictions, EMI estimates, and credit card recommendations —
            along with a clear explanation of why each decision was made,
            powered by SHAP (SHapley Additive exPlanations).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            High-Accuracy ML Model with Explainability
          </TypographyH3>
          <p className="font-mono mb-2">
            Trained a Random Forest model on 20,000+ real loan records,
            achieving 88.1% accuracy and a 0.887 ROC-AUC score. Integrated
            SHAP to generate feature-level explanations for every prediction —
            users can see exactly which factors influenced their loan outcome.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Full-Stack Application with Workflow Automation
          </TypographyH3>
          <p className="font-mono mb-2">
            Built a complete full-stack application using FastAPI (backend),
            Next.js (frontend), and MongoDB (database). Integrated n8n for
            workflow automation, enabling scalable REST APIs and real-time
            financial recommendations without manual intervention.
          </p>
        </div>
      );
    },
  },
  {
    id: "skillsync",
    category: "AI Workforce Platform",
    title: "SkillSync AI",
    src: "/assets/projects-screenshots/skillsync/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.genai,
      ],
    },
    github:
      "https://github.com/ThotaSriLakshmiAsritha/workforce-skill-gap-forecasting",
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An AI-powered workforce intelligence platform — skill-gap
            analysis, role-fit prediction, and personalized learning
            recommendations at scale.
          </TypographyP>
          <TypographyP className="font-mono">
            SkillSync AI is a full-stack workforce intelligence platform built
            to help organizations identify skill gaps, predict role fit, and
            surface personalized learning paths — powered by GenAI APIs and a
            structured data pipeline over real workforce data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Large-Scale Data Pipeline & AI Insights
          </TypographyH3>
          <p className="font-mono mb-2">
            Engineered a data pipeline processing 100+ employee profiles and
            821+ skill records, mapping 48+ core skills across 15+ job roles.
            GenAI APIs generate context-aware, actionable insights — from
            identifying skill gaps to recommending targeted learning resources
            for each role.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Scalable Full-Stack Architecture
          </TypographyH3>
          <p className="font-mono mb-2">
            Built with React.js, TypeScript, and Tailwind CSS on the
            frontend, backed by Supabase for a scalable serverless database
            and auth layer. The platform is designed to handle growing
            organizational datasets without infrastructure complexity.
          </p>
        </div>
      );
    },
  },
];
export default projects;
