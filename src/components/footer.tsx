import Link from 'next/link';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted py-6 mt-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-4 mb-4 md:mb-0">
          <Link
            href="https://www.linkedin.com/in/sujal-upadhyay-652876251/"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/sujalupadhyay1"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:sujalupadhyay13@gmail.com"
            aria-label="Email"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
           <Link
            href="tel:+917357135213"
            aria-label="Phone"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">&copy; 2024 DataBloom. All rights reserved.</p>
      </div>
    </footer>
  );
}
