import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Retail Sales Forecasting',
    description: 'Developed a time-series model to predict weekly sales for a major retail chain, improving inventory management and reducing stockouts by 15%.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    tags: ['Python', 'Time Series', 'Forecasting'],
    aiHint: 'sales chart',
  },
  {
    title: 'Customer Segmentation Analysis',
    description: 'Utilized k-means clustering to segment customers based on purchasing behavior, enabling targeted marketing campaigns that increased conversion rates by 20%.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    tags: ['R', 'Clustering', 'Marketing'],
    aiHint: 'customer segments',
  },
  {
    title: 'Healthcare Readmission Dashboard',
    description: 'Designed and built an interactive Tableau dashboard to monitor patient readmission rates, helping hospital administrators identify key drivers and implement preventative measures.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    tags: ['Tableau', 'Healthcare', 'Dashboard'],
    aiHint: 'medical dashboard',
  },
  {
    title: 'E-commerce Recommendation Engine',
    description: 'Engineered a collaborative filtering recommendation system that personalized user experience and boosted average order value by 12%.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    tags: ['Python', 'Machine Learning', 'E-commerce'],
    aiHint: 'online shopping',
  },
  {
    title: 'Social Media Sentiment Analysis',
    description: 'Performed sentiment analysis on Twitter data to gauge public opinion on a new product launch, providing actionable feedback to the marketing team.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    tags: ['NLP', 'Python', 'Social Media'],
    aiHint: 'social media',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Analyzed logistics data to identify inefficiencies in the supply chain, recommending route optimizations that cut transportation costs by 10%.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    tags: ['SQL', 'Logistics', 'Optimization'],
    aiHint: 'supply chain',
  },
  {
    title: 'Financial Fraud Detection',
    description: 'Trained a classification model to detect fraudulent transactions with 98% accuracy, saving the company from potential financial losses.',
    imageUrl: 'https://picsum.photos/600/400?random=7',
    tags: ['Machine Learning', 'Finance', 'Security'],
    aiHint: 'financial chart',
  },
  {
    title: 'A/B Testing Platform Analysis',
    description: 'Conducted statistical analysis of A/B test results to determine the impact of website changes on user engagement, leading to a 5% uplift in sign-ups.',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    tags: ['Statistics', 'A/B Testing', 'Web Analytics'],
    aiHint: 'website analytics',
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
                <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
