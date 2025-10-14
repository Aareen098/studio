
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Smartphone, Cloud, Bot, Layout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const skills = [
  { icon: Code, name: "Frontend", description: "React, Next.js, Vue, Tailwind CSS, TypeScript" },
  { icon: Database, name: "Backend", description: "Node.js, Express, Python, Django, PostgreSQL" },
  { icon: Cloud, name: "DevOps", description: "Docker, Kubernetes, GCP, Vercel" },
  { icon: Smartphone, name: "Mobile", description: "React Native, Flutter" },
  { icon: Layout, name: "UI/UX Design", description: "Figma, Adobe XD, User Research" },
  { icon: Bot, name: "AI/ML", description: "Genkit, TensorFlow, PyTorch" },
];

export function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className={cn("py-16 sm:py-24", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-primary">My toolbox for building digital solutions.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} description={skill.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon: Icon, name, description }: { icon: LucideIcon; name: string; description: string }) {
  return (
    <Card className="text-center bg-card/50 hover:bg-card transition-colors duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
        <CardTitle className="mt-4">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
