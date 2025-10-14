
"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className={cn("py-16 sm:py-24 bg-card", inView ? "opacity-100 animate-fade-in-up" : "opacity-0")}>
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-primary">My journey into the world of code.</p>
        </div>
        <div className="mt-12 space-y-6 text-lg text-muted-foreground text-left md:text-center">
          <p>
            From my first "Hello World" in a terminal, I was captivated by the power of programming to bring ideas to life. My passion for technology has evolved into a career dedicated to building elegant and efficient solutions to complex problems. I thrive in collaborative environments, leveraging my skills in both front-end and back-end development to contribute to all stages of the product lifecycle.
          </p>
          <p>
            Beyond the code, I'm a firm believer in lifelong learning and am constantly exploring new technologies to stay at the forefront of the industry. When I'm not at my keyboard, you might find me exploring hiking trails, experimenting with new recipes, or immersed in a good science fiction novel.
          </p>
        </div>
      </div>
    </section>
  );
}
