
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Aareen Anand
            </h1>
            <p className="mt-4 text-xl font-medium tracking-tight text-primary sm:text-2xl">
            Front-End Specialist | Cybersecurity Enthusiast
            </p>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            I develop responsive and dynamic web applications with a focus on performance, usability, and security. My goal is to create digital products that not only look great but are reliable and secure from the ground up.
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#hire">
                  <Briefcase className="mr-2 h-5 w-5" /> Hire Me
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/Aareen098" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/aareen-anand-85aa49208" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl animate-glow"
              role="img"
              aria-label="Aareen's professional headshot."
              style={{
                boxShadow: `0 0 15px 0px hsl(var(--primary)), 0 0 35px 0px hsl(var(--primary) / 0.7), 0 0 55px 0px hsl(var(--primary) / 0.4)`,
              }}
            >
              <Image
                src="/myimg.jpg"
                alt="Aareen's professional headshot"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
