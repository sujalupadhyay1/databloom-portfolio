import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Weather Data Analysis Dashboard',
    description: 'Weather Report is a Power BI solution that connects to a live weather API, processes raw JSON data, and delivers an interactive dashboard for current conditions, hourly forecasts, and daily forecasts. The project showcases ETL with Power Query (M), data modeling, and DAX measures to produce actionable insights for multiple cities.',
    imageUrl: '/weather_dashborad.png',
    tags: ['Power BI', 'DAX', 'API'],
    aiHint: 'weather dashboard',
    githubUrl: 'https://github.com/sujalupadhyay1/Weather-Data-Analysis-Dashboard-Power-BI',
  },
  {
    title: 'ITC Hotels Customer Sales Analytics',
    description: 'ITC made ₹2.0B in 3 months; Mumbai & Elite rooms drive revenue, occupancy ~43.5%, cancellations high (24.8%, ~₹299M lost) focus on premium upsells, targeted promos for weak markets and stricter cancellation/advance-pay rules.',
    imageUrl: '/ITC_HOTEL.png',
    tags: ['SQL', 'Power BI', 'Figma'],
    aiHint: 'customer segments',
    githubUrl: 'https://github.com/sujalupadhyay1/ITC-Hotels-Customer-Sales-Analytics-Power-BI-SQL-',
  },
  {
    title: 'HR Dashboard',
    description: 'An interactive dashboard providing insights into workforce trends, demographics, and salary analysis. It highlights hiring vs terminations over time, workforce distribution by department.',
    imageUrl: '/Dashborad.png',
    tags: ['Tableau', 'Draw.io'],
    aiHint: 'HR dashboard',
    githubUrl: 'https://github.com/sujalupadhyay1/HR-Dashboard',
  },
  {
    title: "McDonald's Sales Dashboard",
    description: "McDonald's Sales Dashboard , Built an interactive Excel dashboard to track revenue, daily orders, and item-wise trends, providing insights into peak sales, customer preferences, and top-performing items for better decision-making.",
    imageUrl: '/download.jpg',
    tags: ['Excel', 'Figma', 'Sales Analysis'],
    aiHint: 'online shopping',
    githubUrl: 'https://github.com/sujalupadhyay1/McDonald-s-Sales-Dashboard-Excel',
  },
  {
    title: 'SQL SALES ANALYTICS EDA',
    description: 'Performed sentiment analysis on Twitter data to gauge public opinion on a new product launch, providing actionable feedback to the marketing team.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    tags: ['SQL', 'Sales Analysis'],
    aiHint: 'social media',
    githubUrl: 'https://github.com/sujalupadhyay1/Sales-Analytics---EDA-',
  },
  {
    title: 'IMDB Movie Analysis',
    description: 'This analysis highlights the complex relationship between budget, revenue, ratings, and genres.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    tags: ['python', 'Jupyter Notebook', 'Matplotlib/Seaborn'],
    aiHint: 'supply chain',
    githubUrl: 'https://github.com/sujalupadhyay1/IMDB-Movie-Analysis',
  },
  {
    title: 'Financial Fraud Detection',
    description: 'Trained a classification model to detect fraudulent transactions with 98% accuracy, saving the company from potential financial losses.',
    imageUrl: 'https://picsum.photos/600/400?random=7',
    tags: ['Machine Learning', 'Finance', 'Security'],
    aiHint: 'financial chart',
    githubUrl: 'https://github.com/sujalupadhyay1',
  },
  {
    title: 'A/B Testing Platform Analysis',
    description: 'Conducted statistical analysis of A/B test results to determine the impact of website changes on user engagement, leading to a 5% uplift in sign-ups.',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    tags: ['Statistics', 'A/B Testing', 'Web Analytics'],
    aiHint: 'website analytics',
    githubUrl: 'https://github.com/sujalupadhyay1',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">My Work</h1>
        <p className="text-muted-foreground md:text-lg">
          A collection of projects where I've applied my data analysis skills to solve real-world problems.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <div className="aspect-video relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardTitle className="font-headline pt-4">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
                <CardDescription className="flex-grow">{project.description}</CardDescription>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" aria-label="GitHub repository for the project" className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-6 w-6" />
                    </Link>
                  )}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
