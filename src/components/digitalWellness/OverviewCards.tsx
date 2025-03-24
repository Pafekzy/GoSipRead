
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Zap, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
            {value > 0 ? (
              <Progress value={value} className="h-2" />
            ) : (
              <div className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-green-500" />
                <span className="text-lg font-semibold text-green-500">{Math.abs(value)}%</span>
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

  const cards = [
    { 
      title: "Screen Time Trend", 
      description: "Decreased by 27% this week", 
      value: -27, 
      icon: TrendingDown,
      color: "text-green-500"
    },
    { 
      title: "Productive Screen Time", 
      description: "78% of your digital usage is productive", 
      value: 78, 
      icon: Zap,
      color: "text-primary"
    },
    { 
      title: "Habit Transformation", 
      description: "3 active habit replacements", 
      value: 65, 
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
