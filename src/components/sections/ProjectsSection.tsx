
"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "QuantumLeap CRM",
    description: "A comprehensive CRM platform designed for startups, featuring contact management, sales tracking, and automated workflows.",
    image: PlaceHolderImages.find((img) => img.id === "project-2"),
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    github: "#",
    live: "#",
  },
  {
    title: "Insightful Analytics",
    description: "A data analytics dashboard that provides real-time insights and visualizations for business intelligence.",
    image: PlaceHolderImages.find((img) => img.id === "project-4"),
    tags: ["React", "D3.js", "Node.js", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "ConnectSphere",
    description: "A social networking mobile app focused on professional development and skill sharing.",
    image: PlaceHolderImages.find((img) => img.id === "project-3"),
    tags: ["React Native", "Firebase", "Redux"],
    github: "#",
    live: "#",
  },
  {
    title: "AbstractFlow",
    description: "An AI-powered content generation tool for creative writers and marketing teams.",
    image: PlaceHolderImages.find((img) => img.id === "project-1"),
    tags: ["Vue.js", "Genkit", "Python", "FastAPI"],
    github: "#",
    live: "#",
  },
];

export function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className={cn("py-16 sm:py-24 bg-card", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-lg text-primary">A glimpse into what I can do.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group">
              {project.image && (
                <div className="overflow-hidden">
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    data-ai-hint={project.image.imageHint}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button asChild>
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
