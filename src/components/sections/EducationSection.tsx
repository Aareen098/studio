
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { School, GraduationCap, Building } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    period: "2023 - 2025",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    details: "Currently pursuing my post-graduation with a focus on advanced software development, data structures, and algorithms."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Techno Institute of Higher Studies",
    period: "2020 - 2023",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    details: "Graduated with a strong foundation in computer science, programming languages, and web development."
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "St. Andrews Scots Sr. Sec. School",
    period: "2019 - 2020",
    icon: <School className="h-8 w-8 text-primary" />,
    details: "Completed my higher secondary education with a focus on science and mathematics, sparking my interest in technology."
  },
];

export function EducationSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className={cn("py-16 sm:py-24", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Education
          </h2>
          <p className="mt-4 text-lg text-primary">A timeline of my academic journey.</p>
        </div>
        <div className="relative mt-16">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true" />
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className="relative flex items-center"
              >
                <div className={cn(
                  "flex w-1/2",
                  index % 2 === 0 ? "justify-end" : "justify-start"
                )}>
                  {index % 2 === 0 && <EducationCard {...item} />}
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary">
                  {item.icon}
                </div>

                <div className={cn(
                  "flex w-1/2",
                   index % 2 === 0 ? "justify-start" : "justify-end"
                )}>
                   {index % 2 !== 0 && <EducationCard {...item} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({ degree, institution, period, details }: typeof educationData[0]) => {
  return (
    <div className="w-full max-w-sm p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow duration-300 mx-4">
      <p className="text-sm text-muted-foreground">{period}</p>
      <h3 className="text-xl font-bold text-foreground mt-1">{degree}</h3>
      <div className="flex items-center mt-2">
        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
        <p className="text-md text-primary">{institution}</p>
      </div>
      <p className="mt-3 text-muted-foreground">{details}</p>
    </div>
  )
}
