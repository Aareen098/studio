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
  DiDocker,
  DiFigma,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { VscSymbolNamespace } from "react-icons/vsc";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript size="4em" color="#F7DF1E" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size="4em" color="#3178C6" />,
  },
  {
    name: "React",
    icon: <DiReact size="4em" color="#61DAFB" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size="4em" />,
  },
  {
    name: "Node.js",
    icon: <DiNodejsSmall size="4em" color="#339933" />,
  },
  {
    name: "Python",
    icon: <DiPython size="4em" color="#3776AB" />,
  },
  {
    name: "C++",
    icon: (
      <div className="relative h-16 w-16">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#00599C"
          className="h-16 w-16"
        >
          <path d="M12.501 1.055c-4.83.39-8.734 4.38-8.734 9.248h4.367c0-2.58 2.184-4.75 4.75-4.75s4.75 2.17 4.75 4.75-2.183 4.75-4.75 4.75c-.718 0-1.4-.15-2.03-.42l-.78 1.4c.81.42 1.74.67 2.72.67 3.55 0 6.43-2.89 6.43-6.43s-2.88-6.43-6.43-6.43c-.49 0-.98.05-1.45.15v-.215zm6.208 8.444h1.67v1.67h-1.67zm2.5 0h1.67v1.67h-1.67zm-2.5 2.5h1.67v-1.67h-1.67zm-2.5-4.167h1.67v-1.67h-1.67z" />
        </svg>
      </div>
    ),
  },
  {
    name: "HTML5",
    icon: <DiHtml5 size="4em" color="#E34F26" />,
  },
  {
    name: "CSS3",
    icon: <DiCss3 size="4em" color="#1572B6" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size="4em" color="#06B6D4" />,
  },
  {
    name: "Docker",
    icon: <DiDocker size="4em" color="#2496ED" />,
  },
  {
    name: "Figma",
    icon: <DiFigma size="4em" />,
  },
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
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
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
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 p-4 bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-1 aspect-square">
      <div className="h-16 w-16 flex items-center justify-center">{Icon}</div>
      <p className="text-xl font-semibold text-center text-foreground">
        {name}
      </p>
    </Card>
  );
}
