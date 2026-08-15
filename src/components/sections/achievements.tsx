"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, Trophy, Medal, GraduationCap, Sparkles, ExternalLink } from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const achievements = [
  {
    id: 1,
    title: "Krithoathon — National Level Hackathon",
    category: "Hackathon Winner",
    issuer: "1st Place Winner",
    description: "Secured 1st Place out of 400+ participating teams in a competitive national-level innovation hackathon.",
    icon: Trophy,
    badge: "1st Place (400+ Teams)",
    link: "https://drive.google.com/file/d/17f2C20BppwcpTYjWMIQNQY7S3PIDH0_f/view?usp=drive_link",
    image: "/assets/achievements/krithoathon-v2.jpg",
  },
  {
    id: 2,
    title: "Innovathon — National Level Hackathon",
    category: "Hackathon Winner",
    issuer: "2nd Place Winner",
    description: "Awarded 2nd Place among 250+ competing teams for engineering innovative AI-driven technical solutions.",
    icon: Medal,
    badge: "2nd Place (250+ Teams)",
    link: "https://drive.google.com/file/d/1GymBVA6Jv2JrvQgVj2wEL1sXaJMiY8Ox/view",
    image: "/assets/achievements/innovathon.jpg",
  },
  {
    id: 3,
    title: "Webathon 4.0",
    category: "Hackathon Winner",
    issuer: "1st Place Winner",
    description: "Achieved 1st Place out of 200+ teams in a 24-hour web & software development competition.",
    icon: Trophy,
    badge: "1st Place (200+ Teams)",
    link: "https://drive.google.com/file/d/1xU0J5R291Hhfi-XlPzt-TrnwLiVP2RBC/view",
    image: "/assets/achievements/webathon.jpg",
  },
  {
    id: 4,
    title: "Emerge Project Expo",
    category: "Project Showcase",
    issuer: "1st Place Winner",
    description: "Won 1st Place for demonstrating impactful technical project implementation and live system architecture.",
    icon: Sparkles,
    badge: "1st Place Winner",
    link: "https://drive.google.com/file/d/1jx7oIQaJgfhiiHn6VQ09TgqWRwPIKSpn/view?usp=drive_link",
    image: null,
  },
  {
    id: 5,
    title: "Microsoft Certified: Data Analyst Associate (Power BI)",
    category: "Professional Certification",
    issuer: "Microsoft",
    description: "Certified proficiency in data analysis, dashboard design, Power BI data modeling, and business intelligence.",
    icon: Award,
    badge: "Microsoft Certified",
    link: "https://drive.google.com/file/d/1Q50JWFCv-n18Yjk78yyGJd6OiBlJALkD/view",
    image: null,
  },
  {
    id: 6,
    title: "Supervised Machine Learning (Coursera)",
    category: "Specialization",
    issuer: "Coursera — Andrew Ng",
    description: "Mastered core ML algorithms, linear & logistic regression, neural networks, and model optimization techniques.",
    icon: GraduationCap,
    badge: "Andrew Ng",
    link: "https://drive.google.com/file/d/1g61VQzjcSyDQCjh3Ym7Nq_tljniKe7bV/view?usp=sharing",
    image: null,
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper
      id="achievements"
      className="flex flex-col items-center justify-center min-h-[100vh] py-20"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Certifications, hackathon victories, and project awards."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card
                  className={cn(
                    "bg-card text-card-foreground border-border h-full flex flex-col justify-between overflow-hidden group",
                    "hover:border-primary/40 hover:-translate-y-1 transition-all duration-300",
                    "shadow-sm hover:shadow-md backdrop-blur-sm bg-card/90"
                  )}
                >
                  {item.image && (
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                    </div>
                  )}
                  <CardHeader className="pb-3">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <Badge variant="secondary" className="shrink-0 text-[11px] font-mono">
                          {item.badge}
                        </Badge>
                      </div>
                      <div>
                        <CardTitle className="text-base font-bold tracking-tight leading-snug">
                          {item.title}
                        </CardTitle>
                        <p className="text-xs font-medium text-muted-foreground mt-1">
                          {item.issuer}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-1">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs">
                      <span className="text-muted-foreground/70 font-mono text-[11px]">
                        {item.category}
                      </span>
                      <Link
                        href={item.link}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                      >
                        Verify / View
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
