import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, LineChart, Code, BrainCircuit, BarChart, Presentation } from 'lucide-react';

const skills = [
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: 'SQL & Databases',
    description: 'Proficient in SQL for data extraction, manipulation, and analysis from relational databases.',
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: 'Python & R',
    description: 'Using libraries like Pandas, NumPy, and dplyr for data cleaning, transformation, and analysis.',
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Data Visualization',
    description: 'Creating insightful charts and dashboards with tools like Tableau, Power BI, and Matplotlib.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Statistical Analysis',
    description: 'Applying statistical methods and hypothesis testing to derive meaningful conclusions.',
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'Machine Learning',
    description: 'Familiarity with ML concepts and libraries like Scikit-learn for predictive modeling.',
  },
  {
    icon: <Presentation className="h-10 w-10 text-primary" />,
    title: 'Business Acumen',
    description: 'Translating data-driven insights into actionable business recommendations and strategies.',
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Skills Showcase</h2>
        <p className="text-muted-foreground md:text-lg">A glimpse into my technical and analytical capabilities.</p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.title} className="text-center hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              {skill.icon}
              <CardTitle className="font-headline mt-4">{skill.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
