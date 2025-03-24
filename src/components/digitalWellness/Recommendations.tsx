
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Clock, Smartphone, BookOpen } from 'lucide-react';

interface RecommendationProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const Recommendation = ({ title, description, icon: Icon }: RecommendationProps) => {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-background/50 border">
      <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">
          {description}
        </p>
      </div>
    </div>
  );
};

const Recommendations = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const recommendations = [
    {
      title: "Evening Focus Session",
      description: "Your data shows higher social media usage between 8-10pm. Try replacing this with a 15-minute focused learning session.",
      icon: Clock
    },
    {
      title: "Screen-Free Morning",
      description: "Implement a 30-minute phone-free routine each morning to start your day more mindfully.",
      icon: Smartphone
    },
    {
      title: "Microlearning Moments",
      description: "Replace quick social media checks with 2-minute learning snippets throughout the day.",
      icon: BookOpen
    }
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
    >
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border">
        <CardHeader>
          <CardTitle>AI Recommendations</CardTitle>
          <CardDescription>
            Personalized suggestions based on your usage patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((recommendation, index) => (
              <Recommendation 
                key={index}
                title={recommendation.title}
                description={recommendation.description}
                icon={recommendation.icon}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Recommendations;
