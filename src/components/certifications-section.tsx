'use client';

import { useState } from 'react';
import Image from 'next/image';

const certifications = [
  {
    title: 'Certification O',
    src: '/o.jpeg',
  },
  {
    title: 'Certification C',
    src: '/c.jpeg',
  },
  {
    title: 'Certification W',
    src: '/w.png',
    fit: 'contain' as const,
  },
  {
    title: 'Certification M',
    src: '/m.jpeg',
  },
];

export function CertificationsSection() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-8 md:py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Certifications</h2>
        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
          A snapshot of key certifications that support my business analysis and data skills.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
        {certifications.map((cert) => {
          const isActive = activeTitle === cert.title;

          return (
            <button
              key={cert.title}
              type="button"
              onClick={() => setActiveTitle(isActive ? null : cert.title)}
              className={`group overflow-hidden rounded-xl border border-border/70 bg-card/80 shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                isActive
                  ? 'translate-y-0 -translate-x-1 -rotate-1 scale-[1.02] shadow-2xl border-primary/60'
                  : 'hover:-translate-y-1 hover:shadow-xl'
              }`}
            >
              <div className="relative aspect-[4/3] w-full bg-background flex items-center justify-center">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  fill
                  className={`transition-transform duration-500 ${
                    cert.fit === 'contain'
                      ? 'object-contain p-2'
                      : 'object-cover'
                  } ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

