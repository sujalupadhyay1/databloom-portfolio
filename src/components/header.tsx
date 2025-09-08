import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="sr-only">DataBloom Portfolio</span>
        <span className="ml-2 text-xl font-headline font-bold">DataBloom</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          My Work
        </Link>
      </nav>
    </header>
  );
}
