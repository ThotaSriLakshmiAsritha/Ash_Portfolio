const config = {
  title: "Asritha | Software Developer & AI/ML Enthusiast",
  description: {
    long: "Explore the portfolio of Thota Sri Lakshmi Asritha, a Computer Science student at VNRVJIET passionate about AI/ML, web development, and building intelligent systems. Discover projects like TrustLens, FinGuide, and SkillSync AI. Let's build something impactful together!",
    short:
      "Portfolio of Thota Sri Lakshmi Asritha — B.Tech CSE student, AI/ML developer, and full-stack web developer.",
  },
  keywords: [
    "Asritha",
    "Thota Sri Lakshmi Asritha",
    "portfolio",
    "software developer",
    "AI ML developer",
    "machine learning",
    "web development",
    "Python",
    "React",
    "Next.js",
    "TrustLens",
    "FinGuide",
    "SkillSync AI",
    "VNRVJIET",
    "computer science",
  ],
  author: "Thota Sri Lakshmi Asritha",
  email: "asrithathota06@gmail.com",
  site: "https://asritha.dev",

  // for github stars button — set to empty to hide
  githubUsername: "ThotaSriLakshmiAsritha",
  githubRepo: "workforce-skill-gap-forecasting",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/asritha-thota-779153330/",
    github: "https://github.com/ThotaSriLakshmiAsritha",
    leetcode: "https://leetcode.com/u/asrithathota06",
    // Keep twitter/instagram/facebook as empty strings to avoid broken links
    twitter: "",
    instagram: "",
    facebook: "",
  },
};
export { config };
