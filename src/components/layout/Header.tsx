
"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Gem } from "lucide-react";
import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ inSheet }: { inSheet?: boolean }) => (
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={`transition-colors hover:text-primary ${inSheet ? 'block py-2 text-lg' : 'text-sm font-medium'}`}
      >
        {link.label}
      </Link>
    ))
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link href="#" className="flex items-center gap-2">
          <Gem className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Aareen</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <NavLinks />
          </nav>
          <Button asChild>
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="mt-8 flex-grow">
                <nav className="flex flex-col gap-4">
                  <NavLinks inSheet />
                </nav>
              </div>
              <Button asChild className="w-full">
                <Link href="#contact">Hire Me</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
