
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Zap, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  getScreenTimeTrend, 
  getProductiveTimePercentage, 
  getHabitProgress 
} from '@/utils/digitalWellness';

interface OverviewCardProps {
  title: string;
  description: string;
  value: number;
  icon: React.ElementType;
  color: string;
}

const OverviewCard = ({ title, description, value, icon: Icon, color }: OverviewCardProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={fadeInUp}>
      <Card className="hover-scale">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-medium">{title}</CardTitle>
            <div className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${color}`}>
              <Icon size={18} />
            </div>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {value > 0 && value <= 100 ? (
              <Progress value={value} className="h-2" />
            ) : (
              <div className="flex items-center gap-2">
                <TrendingDown className={`h-5 w-5 ${value < 0 ? 'text-green-500' : 'text-red-500'}`} />
                <span className={`text-lg font-semibold ${value < 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {Math.abs(value)}%
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const OverviewCards = () => {
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  // Get real data from our tracking utilities
  const screenTimeTrend = getScreenTimeTrend(7);
  const productivePercentage = getProductiveTimePercentage(7);
  const habitProgressArray = getHabitProgress();
  
  // Calculate average habit completion rate
  const totalProgress = habitProgressArray.reduce((sum, habit) => sum + habit.progress, 0);
  const averageHabitProgress = Math.round(totalProgress / habitProgressArray.length);
  
  // Calculate total streak days across all habits
  const totalStreakDays = habitProgressArray.reduce((sum, habit) => sum + habit.streak, 0);

  const cards = [
    { 
      title: "Screen Time Trend", 
      description: `${screenTimeTrend < 0 ? 'Decreased' : 'Increased'} by ${Math.abs(screenTimeTrend)}% this week`, 
      value: screenTimeTrend, 
      icon: TrendingDown,
      color: screenTimeTrend < 0 ? "text-green-500" : "text-red-500"
    },
    { 
      title: "Productive Screen Time", 
      description: `${productivePercentage}% of your digital usage is productive`, 
      value: productivePercentage, 
      icon: Zap,
      color: "text-primary"
    },
    { 
      title: "Habit Transformation", 
      description: `${totalStreakDays} active habit streak days`, 
      value: averageHabitProgress, 
      icon: Shield,
      color: "text-accent"
    }
  ];

  return (
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
    >
      {cards.map((card, index) => (
        <OverviewCard 
          key={index} 
          title={card.title} 
          description={card.description} 
          value={card.value} 
          icon={card.icon} 
          color={card.color} 
        />
      ))}
    </motion.div>
  );
};

export default OverviewCards;
