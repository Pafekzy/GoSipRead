
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Activity } from 'lucide-react';
import { BarChart } from '@/components/ui/bar-chart';
import { getScreenTimeData, getHabitCompletions, habits } from '@/utils/digitalWellness';
import { useIsMobile } from '@/hooks/use-mobile';

const WeeklyOverview = () => {
  const isMobile = useIsMobile();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Format screen time data for chart
  const screenTimeData = getScreenTimeData(7).map(entry => {
    const date = new Date(entry.date);
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    return {
      day,
      "Productive Time": entry.productiveMinutes,
      "Distracted Time": entry.distractedMinutes
    };
  });

  // Format habit completion data for chart
  const habitCompletions = getHabitCompletions(undefined, 7);
  const habitData = screenTimeData.map(entry => {
    const dataPoint: any = { day: entry.day };
    
    habits.forEach(habit => {
      // Find completions for this habit on this day
      const completed = habitCompletions.some(
        completion => 
          new Date(completion.date).toLocaleDateString('en-US', { weekday: 'short' }) === entry.day && 
          completion.habitId === habit.id
      );
      
      dataPoint[habit.name] = completed ? 1 : 0;
    });
    
    return dataPoint;
  });

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      <Card>
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle>Weekly Overview</CardTitle>
              <CardDescription>
                Track your daily screen time and habit completions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Screen Time Balance</h3>
              <div className="h-64 md:h-80">
                <BarChart
                  data={screenTimeData}
                  index="day"
                  categories={["Productive Time", "Distracted Time"]}
                  colors={["#10B981", "#F97316"]}
                  valueFormatter={(value) => `${value} min`}
                  yAxisWidth={isMobile ? 30 : 50}
                  showLegend={true}
                  showAnimation={true}
                  startEndOnly={isMobile}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Habit Completion</h3>
              <div className="h-64 md:h-80">
                <BarChart
                  data={habitData}
                  index="day"
                  categories={habits.map(h => h.name)}
                  colors={["#8B5CF6", "#06B6D4", "#14B8A6"]}
                  valueFormatter={(value) => value === 1 ? "Completed" : "Missed"}
                  yAxisWidth={isMobile ? 30 : 50}
                  showLegend={true}
                  showAnimation={true}
                  startEndOnly={isMobile}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WeeklyOverview;
