import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Business Analyst',
    company: 'Dev Technosys',
    period: 'December 2025 – February 2026',
    tasks: [
      'Acted as a client-facing Business Analyst, engaging with stakeholders to understand business objectives, workflows, and system requirements through calls, meetings, and face-to-face discussions.',
      'Bridged the gap between clients and development teams, ensuring accurate requirement interpretation and smooth execution.',
      'Maintained structured documentation and ensured end-to-end requirement traceability throughout the project lifecycle.',
    ],
  },
  {
    role: 'Data & Web Development Intern',
    company: 'Basket Hunt',
    period: 'May 2024 – July 2024',
    tasks: [
      'Supported business and reporting requirements by maintaining data documentation, metadata, and performance logs.',
      'Worked closely with stakeholders to understand reporting needs and translated them into optimized SQL queries.',
      'Created validation checks that reduced reporting inefficiencies by 15%.',
    ],
  },
];

export function WorkExperienceSection() {
  return (
    <section id="experience" className="py-8 md:py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Work Experience</h2>
        <p className="text-muted-foreground md:text-lg">
          Recent business analysis and data-focused experience, structured for quick recruiter review.
        </p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline">{exp.role} — {exp.company}</CardTitle>
                <CardDescription>{exp.period}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-left">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
