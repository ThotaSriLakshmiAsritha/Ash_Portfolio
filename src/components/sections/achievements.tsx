"use client";

import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, Code2, Sparkles, ExternalLink } from "lucide-react";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const achievements = [
  {
    id: 1,
    title: "Academic Excellence — 9.41 CGPA",
    category: "Academics",
    institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
    period: "2022 - 2026",
    description:
      "Consistent top academic performer in B.Tech Computer Science & Engineering with a cumulative GPA of 9.41/10.",
    icon: GraduationCap,
    badge: "Top Performer",
    link: null,
  },
  {
    id: 2,
    title: "250+ Problems Solved on LeetCode",
    category: "Competitive Programming",
    institution: "LeetCode",
    period: "Ongoing",
    description:
      "Demonstrated strong problem-solving skills in Data Structures, Algorithms, Dynamic Programming, Graphs, and Trees.",
    icon: Code2,
    badge: "250+ Solved",
    link: "https://leetcode.com/u/asrithathota06",
  },
  {
    id: 3,
    title: "Government Healthcare Platform Development",
    category: "Impact Project",
    institution: "Police Hospital Digital Healthcare System — PupilSolutions",
    period: "Jan 2026 - May 2026",
    description:
      "Engineered & optimized healthcare workflows, patient registration, and role-based access control for Telangana Police Hospital.",
    icon: Award,
    badge: "Govt Project",
    link: null,
  },
  {
    id: 4,
    title: "AI & Full-Stack Systems Innovator",
    category: "AI/ML Development",
    institution: "Personal & Academic Projects",
    period: "2024 - 2026",
    description:
      "Built production-ready AI solutions: TrustLens (Phishing Detection), FinGuide (XAI Finance), & SkillSync AI (Workforce Forecasting).",
    icon: Sparkles,
    badge: "3 AI Projects",
    link: "https://github.com/ThotaSriLakshmiAsritha",
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
          desc="Key milestones, academic accomplishments, and technical recognition."
          className="mb-12 md:mb-16 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card
                  className={cn(
                    "bg-card text-card-foreground border-border h-full flex flex-col justify-between",
                    "hover:border-primary/30 transition-all duration-300",
                    "shadow-sm hover:shadow-md backdrop-blur-sm bg-card/90"
                  )}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold tracking-tight">
                            {item.title}
                          </CardTitle>
                          <p className="text-xs font-medium text-muted-foreground mt-0.5">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="shrink-0 text-[11px] font-mono">
                        {item.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between pt-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground">
                      <span className="font-mono">{item.period}</span>
                      {item.link ? (
                        <Link
                          href={item.link}
                          target="_blank"
                          className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
                        >
                          View Details
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ) : (
                        <span className="text-muted-foreground/70">{item.category}</span>
                      )}
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
