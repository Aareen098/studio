
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import {
  GitBranch,
  Figma,
  Code,
  Globe,
  Database,
  Smartphone,
  Cpu,
  Bot,
  Wind,
  Component,
  Server,
  PenTool,
  Terminal,
  FileCode,
  Box,
  ServerCog,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import React from "react";

const skills: { icon: LucideIcon; name: string }[] = [
  { icon: FileCode, name: "JavaScript" },
  { icon: FileCode, name: "TypeScript" },
  { icon: Component, name: "React" },
  { icon: ServerCog, name: "Next.js" },
  { icon: Server, name: "Node.js" },
  { icon: Code, name: "Python" },
  { icon: Terminal, name: "C++" },
  { icon: Globe, name: "HTML5" },
  { icon: PenTool, name: "CSS3" },
  { icon: Wind, name: "Tailwind CSS" },
  { icon: Box, name: "Docker" },
  { icon: Figma, name: "Figma" },
];

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={cn(
        "py-16 sm:py-24",
        inView ? "opacity-100 animate-fade-in-up" : "opacity-0"
      )}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-primary">
            My toolbox for building digital solutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  name,
}: {
  icon: LucideIcon;
  name: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 p-4 bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-1 aspect-square">
      <Icon className="h-16 w-16 text-primary" />
      <p className="text-base font-medium text-center text-foreground">{name}</p>
    </Card>
  );
}
