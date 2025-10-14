
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MoveRight } from "lucide-react";

export function HeroSection() {
  const headshot = PlaceHolderImages.find(
    (img) => img.id === "aareen-headshot"
  );

  return (
    <section id="home" className="py-24 sm:py-32 lg:py-40">
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
          <div className="flex justify-center">
            {headshot && (
              <Image
                src={headshot.imageUrl}
                alt={headshot.description}
                data-ai-hint={headshot.imageHint}
                width={400}
                height={400}
                className="rounded-full aspect-square object-cover border-8 border-primary/10 shadow-2xl"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
