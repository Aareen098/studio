
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
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
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="/Aareen_Anand_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" /> View CV
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              role="img"
              aria-label="Aareen's professional headshot."
            >
              <Image
                src="/IMG-20241028-WA0018.jpg"
                alt="Aareen's professional headshot"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
