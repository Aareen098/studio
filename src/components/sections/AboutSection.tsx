
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className={cn("py-16 sm:py-24 bg-card", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-primary">My journey into the world of code.</p>
        </div>
        <div className="mt-12 space-y-6 text-lg text-muted-foreground text-left md:text-center">
          <p>
          My journey into the world of technology began with curiosity and a drive to create. As a BCA graduate currently pursuing an MCA from Lovely Professional University, I’ve developed a strong foundation in computer science and an ever-growing passion for crafting responsive and user-friendly web applications. My expertise lies in front-end development and Python programming, where I enjoy turning ideas into clean, functional, and visually appealing digital experiences.
          </p>
          <p>
          I’m also deeply fascinated by cybersecurity, constantly exploring how systems can be protected and optimized in today’s evolving digital landscape.
          </p>
          <p>
          Beyond coding, I believe in continuous learning and innovation — staying up to date with emerging technologies and industry trends. Whether it’s improving my skills, contributing to open-source projects, or experimenting with new frameworks, I’m always eager to grow as a developer and problem-solver.
          </p>
        </div>
      </div>
    </section>
  );
}
