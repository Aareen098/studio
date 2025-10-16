
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl">
              Aareen
            </h1>
            <p className="mt-4 text-2xl font-medium tracking-tight text-primary">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              Crafting seamless digital experiences from concept to deployment. I specialize in building robust, user-friendly web applications that leave a lasting impression.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Get In Touch <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end w-full">
            <div
              className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
              role="img"
              aria-label="Aareen's professional headshot."
            >
              <Image
                src="/aareen-headshot.png"
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
