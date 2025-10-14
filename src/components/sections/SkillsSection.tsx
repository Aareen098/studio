
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import React from "react";

const skills = [
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#f7df1e" />
        <path d="M13.5 16.5h-3L11 20l4.5-3.5h-2zm-3-9L9 12l1.5 1.5h3L15 12l-1.5-4.5h-3z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#3178c6" />
        <path
          fill="#fff"
          d="M14.2 13.4h-4.4V12h4.4v1.4zm0-3.3h-4.4v1.4h4.4V10.1z"
        />
        <path
          fill="#fff"
          d="M13.8 15.6h-3.6l-.3-1.1H8.7l-.3 1.1H6.8l3.1-8.3h1.2l3.1 8.3h-1.6zm-1.8-2.2l-1-3.3-1 3.3h2z"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#61DAFB]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2a10 10 0 00-7.53 16.59l.94-.34a8.5 8.5 0 110-8.5l-.94-.34A10 10 0 0012 2z" />
        <path d="M4.47 19.53a10 10 0 0015.06-15.06L19.19 4.8a8.5 8.5 0 11-14.38 14.38l-.34.35z" />
        <path d="M19.53 19.53a10 10 0 00-15.06-15.06l.34-.35a8.5 8.5 0 1114.38 14.38l-.34.35z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="10" />
        <path
          fill="#fff"
          d="M15.3 16.7L9.8 8.4h-.1v8.3H8.4V7.3h1.3l5.5 8.3h.1V7.3h1.3v9.4z"
        />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#339933]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2l-10 6v12l10 6 10-6V8l-10-6zm-1.1 16.8l-5.4-3.1V9.7l5.4 3.1v6zm.1-7.6L6.5 8.1l5.4-3.1 5.4 3.1-4.5 2.6zm2 7.6v-6l5.4-3.1v6.2l-5.4 3.1z" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-16 w-16"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path fill="#3776AB" d="M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm-1 14H8v-4h3a2 2 0 002-2V8a2 2 0 00-2-2H8V4h4a4 4 0 014 4v2a4 4 0 01-4 4z"/>
        <path fill="#FFD43B" d="M12 22a10 10 0 0010-10A10 10 0 0012 2a10 10 0 00-10 10 10 10 0 0010 10zm1-14h4v4h-3a2 2 0 00-2 2v2a2 2 0 002 2h3v2h-4a4 4 0 01-4-4v-2a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    name: "C++",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#00599C]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#004482" />
        <path
          fill="#fff"
          d="M12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5c1.2 0 2.3-.4 3.2-1.1l-1-1.7a3.5 3.5 0 01-2.2.8c-1.9 0-3.5-1.6-3.5-3.5S10.1 8.5 12 8.5c1.1 0 2.1.5 2.8 1.4l1-1.7C14.3 6.9 13.2 6.5 12 6.5z"
        />
        <path fill="#fff" d="M17 11h-2v2h2v-2zm3 0h-2v2h2v-2z" />
        <path fill="#fff" d="M18 10h2V8h-2v2zm0 5h2v-2h-2v2z" />
      </svg>
    ),
  },
  {
    name: "HTML5",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#E34F26]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M2 21.3l1.8-20.7h16.4L18.2 21.3 12 23l-7.8-1.7z" />
        <path fill="#F16529" d="M12 4.2v17.2l6.2-1.6L19.8 4.2z" />
        <path
          fill="#EBEBEB"
          d="M12 10.2H9.2l-.2-2.3H12v2.3zm0 4.6H9.4l-.3-3.3h2.9v3.3zM12 9.1V6.8h5.3l-.1 1.2-.3 1.1z"
        />
        <path
          fill="#fff"
          d="M12 14.8v2.3l2.9.8.3-3.1h-3.2zm0-5.7v2.3h4.9l.1-1.1.1-1.2z"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#1572B6]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M2 21.3l1.8-20.7h16.4L18.2 21.3 12 23l-7.8-1.7z" />
        <path fill="#33A9DC" d="M12 4.2v17.2l6.2-1.6L19.8 4.2z" />
        <path
          fill="#fff"
          d="M12 10.2H9.2l-.2-2.3H12v2.3zm0 4.6H9.4l-.3-3.3h2.9v3.3z"
        />
        <path
          fill="#EBEBEB"
          d="M12 9.1V6.8h5.3l-.1 1.2-.3 1.1zm0 7.9l2.9-.8.3-3.1h-3.2v-2.3h4.9l-.1 1.2-.5 4.9z"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#06B6D4]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8.5 16.5A.5.5 0 018 16V8a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v2.5a.5.5 0 01-1 0V9h-2.5v7h2.5v-2a.5.5 0 011 0v2.5a.5.5 0 01-.5.5h-7z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16 text-[#2496ED]"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M21.7 8.3s-1.8-1.7-4.2-1.7H4.2C2.5 6.6 2 7.8 2 7.8v7.6c0 .8.6 1.4 1.4 1.4h17.2c.8 0 1.4-.6 1.4-1.4V8.3zM7 12H5v-2h2v2zm4 0H9v-2h2v2zm4 0h-2v-2h2v2z" />
        <path d="M4.6 5.2a.4.4 0 00-.4.4v.4h15.6v-.4a.4.4 0 00-.4-.4H4.6z" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#F24E1E" />
        <path d="M12 2a10 10 0 00-7.07 17.07A10 10 0 0012 22z" fill="#FF7262" />
        <path d="M12 2a10 10 0 000 20v-2a8 8 0 010-16V2z" fill="#A259FF" />
        <path d="M12 12a2 2 0 11-4 0 2 2 0 014 0z" fill="#1ABCFE" />
        <path
          d="M12 12a2 2 0 100-4 2 2 0 000 4z"
          transform="rotate(90 12 12)"
          fill="#0ACF83"
        />
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
      <p className="text-lg font-semibold text-center text-foreground">
        {name}
      </p>
    </Card>
  );
}
