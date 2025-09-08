import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { WorkExperienceSection } from '@/components/work-experience-section';
import { AiEnhancerSection } from '@/components/ai-enhancer-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <HeroSection />
      <Separator className="my-12 md:my-24" />
      <SkillsSection />
      <Separator className="my-12" />
      <WorkExperienceSection />
      <Separator className="my-12 md:my-24" />
      <AiEnhancerSection />
    </div>
  );
}
