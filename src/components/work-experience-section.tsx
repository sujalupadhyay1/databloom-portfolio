import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'IT development',
    company: 'Basket hunt',
    period: 'May 2024 – Jul 2024',
    tasks: [
      'Managed company databases and created dashboards & reports for client operations.',
      'Coordinated with cross-functional teams to deliver KPI tracking reports on time.',
      'Supported automation of reporting processes, improving efficiency and reducing manual tasks.',
    ],
  },
];

export function WorkExperienceSection() {
  return (
    <section id="experience" className="py-8 md:py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Work Experience</h2>
        <p className="text-muted-foreground md:text-lg">My professional journey so far.</p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <Card key={index} className="shadow-lg mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline">{exp.role}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.period}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
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
