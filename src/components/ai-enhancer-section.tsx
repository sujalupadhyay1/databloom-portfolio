'use client';

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { getEnhancedDescription } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

export function AiEnhancerSection() {
  const [originalText, setOriginalText] = useState('');
  const [enhancedText, setEnhancedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setIsLoading(true);
    setEnhancedText('');

    const result = await getEnhancedDescription(originalText);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error,
      });
    } else if (result.data) {
      setEnhancedText(result.data);
      toast({
        title: 'Success!',
        description: 'Your description has been enhanced.',
      });
    }
    setIsLoading(false);
  };

  return (
    <section id="ai-enhancer" className="py-12 md:py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">AI Portfolio Enhancer</h2>
        <p className="text-muted-foreground md:text-lg">
          Let AI help you rephrase your skills and project descriptions for greater impact.
        </p>
      </div>
      <Card className="mt-12 max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle>Enhance Your Text</CardTitle>
          <CardDescription>
            Enter your work experience or skill description below and let our AI suggest a more polished version.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <Textarea
              placeholder="e.g., I made some charts for the sales team."
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              className="min-h-32"
              aria-label="Original text"
            />
            <div className="flex justify-center">
              <Button onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enhancing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Enhance with AI
                  </>
                )}
              </Button>
            </div>
            {enhancedText && (
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">AI Suggestion:</h3>
                <Textarea
                  value={enhancedText}
                  readOnly
                  className="min-h-32 bg-accent/50 border-accent"
                  aria-label="Enhanced text suggestion"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
