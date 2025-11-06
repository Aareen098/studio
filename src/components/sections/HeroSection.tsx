
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl">
              Aareen Anand
            </h1>
            <p className="mt-4 text-2xl font-medium tracking-tight text-primary">
            Front-End Specialist | Cybersecurity Enthusiast
            </p>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
            I develop responsive and dynamic web applications with a focus on performance, usability, and security. My goal is to create digital products that not only look great but are reliable and secure from the ground up.
            </p>
            <div className="mt-10 flex items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="/AAREEN%20RESume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> View CV
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
              className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl animate-glow"
              role="img"
              aria-label="Aareen's professional headshot."
              style={{
                boxShadow: `0 0 15px 0px hsl(var(--primary)), 0 0 35px 0px hsl(var(--primary) / 0.7), 0 0 55px 0px hsl(var(--primary) / 0.4)`,
              }}
            >
              <Image
                src="/IMG-20241028-WA0018.jpg"
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
