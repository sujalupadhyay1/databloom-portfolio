import { HeroSection } from '@/components/hero-section';
import { SkillsSection } from '@/components/skills-section';
import { WorkExperienceSection } from '@/components/work-experience-section';
import { CertificationsSection } from '@/components/certifications-section';
import { Separator } from '@/components/ui/separator';
import { FeedbackForm } from '@/components/feedback-form';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <HeroSection />
      <Separator className="my-8 md:my-12" />
      <WorkExperienceSection />
      <Separator className="my-8 md:my-12" />
      <SkillsSection />
      <Separator className="my-8 md:my-12" />
      <CertificationsSection />
      <Separator className="my-8 md:my-12" />
      <FeedbackForm />
    </div>
  );
}
