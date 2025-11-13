
"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const achievements = [
  {
    title: "Hackmanthan Hackathon",
    image: "/Hackathon Cert.jpg",
    fileUrl: "/Hackathon Cert.jpg",
    description: "Participated in Hackathon Hackmanthan by GeeksForGeeks and EventEye.",
    imageHint: "award certificate"
  },
  {
    title: "Full Stack Development Workshop",
    image: "/Screenshot (156).png",
    fileUrl: "/12518770.pdf",
    description: "Attended Workshop on Full stack development by GeeksForGeeks.",
    imageHint: "trophy"
  },
];

export function AchievementsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" ref={ref} className={cn("py-16 sm:py-24 bg-card", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-4 text-lg text-primary">Highlights of my journey.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <Card key={achievement.title} className="flex flex-col overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden mt-4">
                <Image
                  src={achievement.image}
                  alt={achievement.description}
                  data-ai-hint={achievement.imageHint}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="secondary" className="w-full">
                  <Link href={achievement.fileUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" /> View
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
