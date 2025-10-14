"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import React from "react";

const skills = [
  {
    name: "JavaScript",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F7DF1E" className="h-16 w-16">
        <path d="M0 0h24v24H0V0zm22.034 18.276h-2.436V10.998H17.43v7.278h-2.394V8.724h7v9.552zm-4.74-6.39h-2.394v2.436h2.394v-2.436zm-2.394 4.026V13.5h2.394v2.412h-2.394zM8.766 18.276V8.724h2.394l2.436 3.06 2.436-3.06h2.394v9.552H16.05v-4.8l-2.436 3.06-2.436-3.06v4.8H8.766zM0 18.276h7.182V8.724H0v9.552zm4.788-2.412H2.394v-4.788h2.394v4.788z"/>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#3178C6" className="h-16 w-16">
        <path d="M1.5 1.5v21h21v-21h-21zM21 21H3V3h18v18zM11.535 15.33V9.225h1.95v2.91h2.1v-2.91h1.95v6.105h-1.95v-2.88h-2.1v2.88h-1.95zM9.69 9.225h-4.26v1.59h2.55v1.2H5.43v1.59h2.55v1.725H9.69V9.225z"/>
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#61DAFB" className="h-16 w-16">
        <circle cx="12" cy="12" r="2.05"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-16 w-16">
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 15.12h-1.34V9.62h1.34v7.5zm3.84-7.5h-1.5l-2.34 3.34V9.62h-1.34v7.5h1.34l2.5-3.56v3.56h1.34v-7.5z" fill="#fff"/>
         <path d="M15.72 9.62v7.5h1.34v-7.5zM9.88 9.62v7.5H8.54v-7.5z" fill="#000"/>
         <path d="M14.22 13.18l2.5 3.56h1.34v-7.5h-1.34v3.94l-2.34-3.32h-1.5v7.5h1.34z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#339933" className="h-16 w-16">
        <path d="M11.99 24C5.382 24 0 18.618 0 12S5.382 0 11.99 0C18.618 0 24 5.382 24 12s-5.382 12-12.01 12zM11.33 2.195c-5.26.47-9.405 4.885-9.405 10.18 0 5.66 4.6 10.275 10.26 10.275 5.52 0 10.02-4.29 10.245-9.765-.645.405-1.425.66-2.28.66-1.89 0-3.435-1.545-3.435-3.435 0-1.275.69-2.385 1.725-2.985A10.23 2.97 11.33 2.195z"/>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16">
        <path d="M12 2.382c-4.94 0-8.52 3.582-8.52 8.52v.706h4.26c.94 0 1.612-1.282 1.612-2.122 0-1.178-1.06-1.768-2.122-1.768V5.43c2.436-1.178 5.148-.236 5.148 2.6v3.294h5.66V8.52C17.92 4.86 15.28 2.382 12 2.382z" fill="#3776AB"/>
        <path d="M12 21.618c4.94 0 8.52-3.582 8.52-8.52v-.706h-4.26c-.94 0-1.612 1.282-1.612 2.122 0 1.178 1.06 1.768 2.122 1.768v2.292c-2.436 1.178-5.148.236-5.148-2.6v-3.294H5.66v2.824c0 3.66 2.64 6.238 5.86 6.238h.48z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00599C" className="h-16 w-16">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12.5 6.4C9.5 6.4 7 8.9 7 12s2.5 5.6 5.5 5.6c1.2 0 2.4-.4 3.3-1.1l-1-1.8c-.7.5-1.5.8-2.3.8-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c1.1 0 2.1.5 2.8 1.3l1-1.8c-.9-.8-2-1.3-3.3-1.3z" fill="#fff"/>
            <path d="M17.5 10h1.5v1.5h-1.5zm2.5 0h1.5v1.5h-1.5zM17.5 12.5h1.5v-1.5h-1.5zm-2.5-4h1.5v-1.5h-1.5z" fill="#fff"/>
        </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E34F26" className="h-16 w-16">
        <path d="m1.8 21.2 1.8-20.6h16.8l-1.8 20.6-6.6 1.8zM12 4.2v17.2l6.2-1.7L19.8 4.2H12zm-2.8 5.9h2.8v2.3H8.9l.2-2.3zm0 4.6h2.8v2.3H9.2l.2-2.3zm.4-7.9h5.5l-.3 3.4h-5.2V6.8z"/>
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1572B6" className="h-16 w-16">
        <path d="m1.8 21.2 1.8-20.6h16.8l-1.8 20.6-6.6 1.8zM12 4.2v17.2l6.2-1.7L19.8 4.2H12zM8.9 9.1h3.1v2.3H9.2l-.3-2.3zm.2 4.6h3.1v2.3H9.4l-.3-2.3z"/>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#06B6D4" className="h-16 w-16">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm8 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2496ED" className="h-16 w-16">
        <path d="M21.728 8.204s-1.8-1.746-4.2-1.746H4.214C2.514 6.458 2 7.662 2 7.662v7.622c0 .8.6 1.442 1.4 1.442h17.228c.798 0 1.4-.64 1.4-1.442V8.204zM6.957 11.95H5.043v-1.914h1.914v1.914zm3.828 0H8.87V10.036h1.914v1.914zm3.828 0h-1.914V10.036h1.914v1.914zM4.628 5.162a.4.4 0 00-.4.4v.4h15.572v-.4a.4.4 0 00-.4-.4H4.628z"/>
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#F24E1E"/>
        <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 0012 22z" fill="#FF7262"/>
        <path d="M12 2a10 10 0 000 20v-2a8 8 0 010-16V2z" fill="#A259FF"/>
        <path d="M12 12a2 2 0 11-4 0 2 2 0 014 0z" fill="#1ABCFE"/>
        <path d="M12 12a2 2 0 100-4 2 2 0 000 4z" transform="rotate(90 12 12)" fill="#0ACF83"/>
      </svg>
    ),
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
      {Icon}
      <p className="text-xl font-semibold text-center text-foreground">
        {name}
      </p>
    </Card>
  );
}
