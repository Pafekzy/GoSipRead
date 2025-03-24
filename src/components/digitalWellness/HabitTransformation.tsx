
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Smartphone, Calendar, TrendingUp, Zap } from 'lucide-react';
import { habits, getHabitProgress } from '@/utils/digitalWellness';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  
  return (
    <Card key={habit.id} className="hover-scale">
      <CardHeader className="pb-4">
        <div className={`flex justify-between ${isMobile ? 'flex-col gap-3' : 'items-start'}`}>
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
        <div className={`grid grid-cols-1 ${isMobile ? '' : 'md:grid-cols-3'} gap-4`}>
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

  // Get real habit progress data
  const habitProgressData = getHabitProgress();
  
  // Combine with the habit definitions and add impact data
  const habitImpacts = [
    "Reduced morning phone usage by 62%",
    "Improved productivity score by 45%",
    "Sleep quality improved by 28%"
  ];
  
  const habitIcons = [BookOpen, Clock, Smartphone];
  
  const habitData = habits.map((habit, index) => {
    const progress = habitProgressData.find(h => h.id === habit.id) || { progress: 0, streak: 0 };
    
    return {
      ...habit,
      progress: progress.progress,
      streak: progress.streak,
      impact: habitImpacts[index],
      icon: habitIcons[index]
    };
  });

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold">Habit Transformation</h2>
        <Button>
          Add New Habit
          <Zap className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-6">
        {habitData.map((habit) => (
          <HabitCard key={habit.id} habit={habit} />
        ))}
      </div>
    </motion.div>
  );
};

export default HabitTransformation;
