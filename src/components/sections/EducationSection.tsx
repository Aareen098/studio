
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { School, GraduationCap, Building } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    period: "2025 - Present",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    details: "Currently pursuing my post-graduation with a focus on advanced software development, data structures, and algorithms."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Group of Institutes",
    period: "2022 - 2025",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    details: "Graduated with a strong foundation in computer science, programming languages, and web development."
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "SSSS Khlasa Sr. Sec. School",
    period: "2021 - 2022",
    icon: <School className="h-8 w-8 text-primary" />,
    details: "Completed my higher secondary education in commerce, which gave me an early insight into business structures and sparked my interest in technology-driven solutions."
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
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border ml-4 md:ml-0" aria-hidden="true" />
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className="relative flex items-center md:items-start flex-col md:flex-row"
              >
                <div className={cn(
                  "flex w-full md:w-1/2",
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  {index % 2 === 0 && <EducationCard {...item} rightAligned={true} />}
                  {index % 2 !== 0 && <div className="hidden md:block w-full"></div>}
                </div>

                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary ml-4 md:ml-0">
                  {item.icon}
                </div>

                <div className={cn(
                  "flex w-full md:w-1/2",
                   index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                )}>
                   {index % 2 !== 0 && <EducationCard {...item} rightAligned={false} />}
                   {index % 2 === 0 && <div className="hidden md:block w-full"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({ degree, institution, period, details, rightAligned }: typeof educationData[0] & { rightAligned: boolean }) => {
  return (
    <div className={cn(
        "w-full max-w-sm p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow duration-300 md:mx-4 ml-12 md:ml-0",
        rightAligned ? "md:text-right" : "md:text-left"
    )}>
      <p className="text-sm text-muted-foreground">{period}</p>
      <h3 className="text-xl font-bold text-foreground mt-1">{degree}</h3>
      <div className={cn(
          "flex items-center mt-2",
          rightAligned ? "md:justify-end" : "md:justify-start"
      )}>
        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
        <p className="text-md text-primary">{institution}</p>
      </div>
      <p className="mt-3 text-muted-foreground">{details}</p>
    </div>
  )
}
