
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
} from "lucide-react";
import type { LucideIcon, LucideProps } from "lucide-react";
import React from "react";

const skills = [
  { icon: "Javascript", name: "JavaScript" },
  { icon: "Typescript", name: "TypeScript" },
  { icon: "React", name: "React" },
  { icon: "Nextjs", name: "Next.js" },
  { icon: "Nodejs", name: "Node.js" },
  { icon: "Python", name: "Python" },
  { icon: "CPP", name: "C++" },
  { icon: "HTML5", name: "HTML5" },
  { icon: "CSS3", name: "CSS3" },
  { icon: "TailwindCSS", name: "Tailwind CSS" },
  { icon: "Docker", name: "Docker" },
  { icon: Figma, name: "Figma" },
];

const ICONS: Record<string, React.FC<LucideProps>> = {
  Javascript: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 9l-2 9h10l2-9Z" />
      <path d="M12 2v2" />
      <path d="M21 9h-2" />
      <path d="M5 9H3" />
      <path d="m14 18-.5-3" />
      <path d="m10 18 .5-3" />
      <path d="m18 9-2-5" />
      <path d="m6 9 2-5" />
    </svg>
  ),
  React: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="10" ry="4" />
      <ellipse cx="12" cy="5" rx="10" ry="4" transform="rotate(60 12 5)" />
      <ellipse cx="12" cy="5" rx="10" ry="4" transform="rotate(120 12 5)" />
      <circle cx="12" cy="5" r="1" />
    </svg>
  ),
  Nextjs: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 4l-8 16h5l8-16h-5z" />
      <path d="M9 4v16" />
    </svg>
  ),
  Typescript: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 11l4-5 4 5" />
      <path d="M8 11V4" />
      <rect x="3" y="14" width="18" height="7" rx="2" ry="2" />
      <path d="M14.5 17.5h2" />
      <path d="M17.5 15.5v4" />
    </svg>
  ),
  Nodejs: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.22 8.3L12 3.2 8.78 8.3a2 2 0 00-.56 1.4v6.6a2 2 0 002 2h3.56a2 2 0 002-2v-6.6a2 2 0 00-.56-1.4z" />
      <path d="M22 17a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h1" />
    </svg>
  ),
  Python: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.83 8.36H19v-4h-4.38" />
      <path d="M10.17 15.64H5v4h4.38" />
      <path d="M16 8.36h-2.38A3.62 3.62 0 0010 12a3.62 3.62 0 003.62 3.64H16" />
      <path d="M8 15.64h2.38A3.62 3.62 0 0014 12a3.62 3.62 0 00-3.62-3.64H8" />
      <circle cx="17.5" cy="5.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="18.5" r=".5" fill="currentColor" />
    </svg>
  ),
  CPP: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12a4 4 0 00-4-4H4v8h4a4 4 0 004-4z" />
      <path d="M12 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M12 16v2a2 2 0 002 2h4a2 2 0 002-2v-2" />
      <path d="M18 10v4" />
      <path d="M16 12h4" />
      <path d="M22 10v4" />
      <path d="M20 12h4" />
    </svg>
  ),
  HTML5: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3l1.5 16.5L12 22l8.5-2.5L22 3H2zm7.5 9l-1-4.5h9L17 12h-5.5zM12 18l-3.5-1-0.25-2.5h2.5l0.15 1.5L12 16.5v-2.5H8.5l-0.5-5h8l-0.5 5H12v2.5z" />
    </svg>
  ),
  CSS3: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3l1.5 16.5L12 22l8.5-2.5L22 3H2zm7.5 9l-1-4.5h9L17 12h-5.5zm1.5 4.5l3.5 1v-2.5l-1.5-0.5-0.15-1.5H8.5l0.4 4z" />
    </svg>
  ),
  TailwindCSS: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c-3.33 0-6.67 2-10 6s-1.33-10 0-12 6.67 6 10 6zm0 0c3.33 0 6.67-2 10-6s1.33 10 0 12-6.67-6-10-6z" />
    </svg>
  ),
  Docker: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12z" />
    </svg>
  ),
};

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
          {skills.map((skill) => {
            const IconComponent =
              typeof skill.icon === "string" ? ICONS[skill.icon] : skill.icon;
            return (
              <SkillCard
                key={skill.name}
                icon={IconComponent}
                name={skill.name}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  name,
}: {
  icon: LucideIcon | React.FC<LucideProps>;
  name: string;
}) {
  return (
    <Card className="flex flex-col items-center justify-center gap-4 p-4 bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-1 aspect-square">
      <Icon className="h-16 w-16 text-primary" />
      <p className="text-base font-medium text-center text-foreground">{name}</p>
    </Card>
  );
}
