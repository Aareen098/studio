
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import React from "react";
import {
  DiReact,
  DiPython,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiCplusplus } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript size="4em" className="text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="4em" className="text-[#3178C6]" />,
  },
  {
    name: "React",
    icon: <DiReact size="4em" className="text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size="4em" className="text-foreground" />,
  },
  {
    name: "Python",
    icon: <DiPython size="4em" className="text-[#3776AB]" />,
  },
  {
    name: "C++",
    icon: <SiCplusplus size="4em" className="text-[#00599C]" />
  },
  {
    name: "HTML5",
    icon: <DiHtml5 size="4em" className="text-[#E34F26]" />,
  },
  {
    name: "CSS3",
    icon: <DiCss3 size="4em" className="text-[#1572B6]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size="4em" className="text-[#06B6D4]" />,
  },
];

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className={cn(
        "py-16 sm:py-24 bg-card",
        inView ? "opacity-100 animate-fade-in-up" : "opacity-0"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-primary">
            My toolbox for building digital solutions.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 p-4 bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-1 aspect-square">
      <div className="h-20 w-20 flex items-center justify-center">{icon}</div>
      <p className="text-xl font-semibold text-center text-foreground">
        {name}
      </p>
    </Card>
  );
}
