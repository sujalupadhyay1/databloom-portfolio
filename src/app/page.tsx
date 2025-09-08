import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { WorkExperienceSection } from '@/components/work-experience-section';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <HeroSection />
      <Separator className="my-8 md:my-12" />
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          <CarouselItem>
            <SkillsSection />
          </CarouselItem>
          <CarouselItem>
            <WorkExperienceSection />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
    </div>
  );
}
