
"use client";

import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/Y7H9ZQJ1NN3X",
  },
  {
    title: "Programming in Javascript",
    issuer: "Meta",
    link: "https://www.coursera.org/account/accomplishments/verify/W7XXGYDWI3NJ",
  },
];

export function CertificationsSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="certifications" ref={ref} className={cn("py-16 sm:py-24", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-4 text-lg text-primary">My credentials and qualifications.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.title} className="flex flex-col group h-full">
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex items-end">
                <Button asChild variant="outline" className="w-full">
                  <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Credential
                    <ArrowUpRight className="ml-2 h-4 w-4" />
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
