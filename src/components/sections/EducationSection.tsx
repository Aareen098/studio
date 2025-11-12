
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { School, GraduationCap, Building, Award } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
    period: "2025 - Present",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    details: "Currently pursuing my post-graduation with a focus on advanced software development, data structures, and algorithms.",
    grade: null,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Global Group of Institutes",
    period: "2022 - 2025",
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    details: "Graduated with a strong foundation in computer science, programming languages, and web development.",
    grade: "CGPA: 6.6",
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "SSSS Khlasa Sr. Sec. School",
    period: "2021 - 2022",
    icon: <School className="h-8 w-8 text-primary" />,
    details: "Completed my higher secondary education in commerce, which gave me an early insight into business structures and sparked my interest in technology-driven solutions.",
    grade: "Percentage: 88%",
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
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border ml-4 md:left-1/2 md:-translate-x-1/2 md:ml-0" aria-hidden="true" />
          <div className="flex flex-col gap-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className={cn(
                  "relative flex items-center",
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                )}
              >
                {/* Mobile view card is always on the right */}
                <div className="md:hidden w-full">
                  <EducationCard {...item} />
                </div>
                
                {/* Desktop view */}
                {index % 2 === 0 ? (
                  <>
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary ml-4 md:ml-0">
                      {item.icon}
                    </div>
                    <div className="hidden md:block w-1/2 pl-8">
                      <EducationCard {...item} rightAligned />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 bg-background p-2 rounded-full border-2 border-primary ml-4 md:ml-0">
                      {item.icon}
                    </div>
                    <div className="hidden md:block w-1/2 pr-8">
                       <EducationCard {...item} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const EducationCard = ({ degree, institution, period, details, grade, rightAligned }: typeof educationData[0] & { rightAligned?: boolean }) => {
  return (
    <div className={cn(
        "w-full max-w-sm p-6 bg-card rounded-lg shadow-md hover:shadow-primary/20 transition-shadow duration-300 ml-12 md:ml-0",
        !rightAligned && "md:ml-auto"
    )}>
      <p className={cn("text-sm text-muted-foreground", !rightAligned && "md:text-right")}>{period}</p>
      <h3 className={cn("text-xl font-bold text-foreground mt-1", !rightAligned && "md:text-right")}>{degree}</h3>
      <div className={cn(
          "flex items-center mt-2",
          !rightAligned && "md:justify-end"
      )}>
        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
        <p className="text-md text-primary">{institution}</p>
      </div>
      <p className={cn("mt-3 text-muted-foreground", !rightAligned && "md:text-right")}>{details}</p>
      {grade && (
        <div className={cn(
          "flex items-center mt-3 font-semibold",
          !rightAligned && "md:justify-end"
        )}>
           <Award className="h-4 w-4 mr-2 text-primary" />
          <p>{grade}</p>
        </div>
      )}
    </div>
  )
}
