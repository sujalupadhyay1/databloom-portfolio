import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserSquare2, BarChart2, Code2, Database, Settings2 } from 'lucide-react';

type SkillCategory = {
  title: string;
  items: string[];
  icon: ReactNode;
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Business Analysis & Stakeholder Management',
    icon: <UserSquare2 className="h-7 w-7" />,
    items: [
      'Requirement Elicitation',
      'BRD, FRD, FSD Documentation',
      'Agile & Scrum Methodology',
      'User Stories',
      'Stakeholder Management',
      'Business Process Mapping (As-Is & To-Be)',
      'Gap & Impact Analysis',
      'Project Estimation & Scope Definition',
      'Sprint Planning & Coordination',
      'Requirement Traceability Matrix (RTM)',
      'Change Request Management',
      'Risk Analysis & Mitigation',
      'UAT Coordination',
      'SDLC Understanding',
      'Cross-functional Team Collaboration',
    ],
  },
  {
    title: 'Business & Data Analytics',
    icon: <BarChart2 className="h-7 w-7" />,
    items: [
      'KPI Definition & Performance Tracking',
      'Management Dashboards',
      'Automated Reporting',
      'Data Visualization & Storytelling',
    ],
  },
  {
    title: 'Programming & Data Analysis',
    icon: <Code2 className="h-7 w-7" />,
    items: [
      'Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)',
      'Exploratory Data Analysis (EDA)',
      'Regression, Classification & Clustering',
      'Model Evaluation (Accuracy, Precision, Recall, Confusion Matrix)',
    ],
  },
  {
    title: 'Data & Tools',
    icon: <Database className="h-7 w-7" />,
    items: [
      'SQL (Joins, Subqueries, CTEs, Views, Data Cleaning & Optimization)',
      'Power BI (DAX, Power Query, Data Modeling)',
      'Tableau',
      'Microsoft Excel (Pivot Tables, Macros, Advanced Lookups, Power Query)',
      'API Integration',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Settings2 className="h-7 w-7" />,
    items: [
      'JIRA',
      'GitHub',
      'Jupyter Notebook',
      'Google Sheets',
      'MySQL',
      'n8n (Workflow Automation)',
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-8 md:py-16">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">Technologies &amp; Skills</h2>
        <p className="text-muted-foreground md:text-lg max-w-3xl mx-auto">
          A comprehensive overview of my technical expertise in business analysis, data analytics, and programming.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            className="group h-full border border-border/60 bg-card/80 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary/40"
          >
            <CardHeader className="flex flex-row items-start gap-3">
              <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                {category.icon}
              </div>
              <CardTitle className="font-headline text-lg md:text-xl">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {category.items.join(', ')}.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
