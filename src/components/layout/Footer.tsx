
import { Github, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="text-sm text-muted-foreground md:order-1">
            <p>© {new Date().getFullYear()} Aareen's Portfolio. All rights reserved.</p>
          </div>
          
          <div className="flex justify-center items-center gap-2 md:order-3 md:justify-end">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Aareen098" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/aareen-anand-85aa49208" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm text-muted-foreground md:order-2">
            <a href="mailto:your-email@example.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>your-email@example.com</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
