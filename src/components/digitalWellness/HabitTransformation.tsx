
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Smartphone, Calendar, TrendingUp, Zap } from 'lucide-react';

interface HabitCardProps {
  habit: {
    id: number;
    name: string;
    description: string;
    progress: number;
    streak: number;
    impact: string;
    icon: React.ElementType;
  };
}

const HabitCard = ({ habit }: HabitCardProps) => {
  return (
    <Card key={habit.id} className="hover-scale">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <habit.icon size={20} />
            </div>
            <div>
              <CardTitle className="text-lg">{habit.name}</CardTitle>
              <CardDescription>{habit.description}</CardDescription>
            </div>
          </div>
          <div className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {habit.streak} day streak
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 md:col-span-2">
            <div className="flex justify-between text-sm">
              <span>Consistency</span>
              <span>{habit.progress}%</span>
            </div>
            <Progress value={habit.progress} className="h-2" />
          </div>
          <div className="flex items-center">
            <div className="flex gap-2 items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>{habit.impact}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const HabitTransformation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const habits = [
    {
      id: 1,
      name: "Morning Microlearning",
      description: "Replace morning social media scrolling with a 10-minute learning session",
      progress: 80,
      streak: 8,
      impact: "Reduced morning phone usage by 62%",
      icon: BookOpen
    },
    {
      id: 2,
      name: "Focus Blocks",
      description: "Schedule 30-minute distraction-free focus sessions throughout the day",
      progress: 65,
      streak: 5,
      impact: "Improved productivity score by 45%",
      icon: Clock
    },
    {
      id: 3,
      name: "Digital Sunset",
      description: "No screens 1 hour before bedtime, replaced with reading or journaling",
      progress: 50,
      streak: 3,
      impact: "Sleep quality improved by 28%",
      icon: Smartphone
    }
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Habit Transformation</h2>
        <Button>
          Add New Habit
          <Zap className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-6">
        {habits.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </motion.div>
  );
};

export default HabitTransformation;
