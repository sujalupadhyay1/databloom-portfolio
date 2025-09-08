'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Github, Mail, Phone, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChangeEvent, useRef, useState } from 'react';

export function HeroSection() {
  const [imageSrc, setImageSrc] = useState("https://firebasestudio-hosting.web.app/images/sujal/sujal.jpeg");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        if (loadEvent.target && typeof loadEvent.target.result === 'string') {
          setImageSrc(loadEvent.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };


  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={imageSrc}
            alt="User Photograph"
            width={400}
            height={400}
            className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary shadow-lg"
            data-ai-hint="professional portrait"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
            accept="image/*"
          />
           <Button onClick={handleButtonClick} variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" />
            Change Photo
          </Button>
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Sujal Upadhyay
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Welcome to my portfolio. I'm a passionate data analyst dedicated to uncovering insights and telling stories with data.
          </p>
          <div className="flex justify-center md:justify-start gap-4 py-4">
            <Link href="https://www.linkedin.com/in/sujal-upadhyay-652876251/" aria-label="LinkedIn" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="h-7 w-7" />
            </Link>
            <Link href="#" aria-label="GitHub" className="text-foreground hover:text-primary transition-colors">
              <Github className="h-7 w-7" />
            </Link>
            <Link href="mailto:example@gmail.com" aria-label="Email" className="text-foreground hover:text-primary transition-colors">
              <Mail className="h-7 w-7" />
            </Link>
            <Link href="tel:+1234567890" aria-label="Phone" className="text-foreground hover:text-primary transition-colors">
              <Phone className="h-7 w-7" />
            </Link>
          </div>
          <Button asChild size="lg" className="rounded-full shadow-md hover:shadow-lg transition-shadow">
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
