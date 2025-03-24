
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart } from '@/components/ui/bar-chart';

const UsageGraph = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const weeklyData = [
    { name: 'Mon', screenTime: 4.2, learningTime: 0.5 },
    { name: 'Tue', screenTime: 3.8, learningTime: 0.7 },
    { name: 'Wed', screenTime: 3.5, learningTime: 0.8 },
    { name: 'Thu', screenTime: 3.2, learningTime: 1.0 },
    { name: 'Fri', screenTime: 2.9, learningTime: 1.2 },
    { name: 'Sat', screenTime: 3.5, learningTime: 0.9 },
    { name: 'Sun', screenTime: 2.8, learningTime: 1.5 },
  ];

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <CardTitle>Weekly Usage Trends</CardTitle>
              <CardDescription>
                Compare your screen time with productive learning time
              </CardDescription>
            </div>
            <Tabs defaultValue="week">
              <TabsList>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <BarChart
              data={weeklyData}
              index="name"
              categories={["screenTime", "learningTime"]}
              colors={["#94a3b8", "hsl(var(--primary))"]}
              valueFormatter={(value: number) => `${value}h`}
              yAxisWidth={40}
              showLegend={true}
              showAnimation={true}
              showGridLines={false}
              startEndOnly={false}
            />
          </div>
          <div className="flex justify-center mt-4 gap-6">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-slate-400 mr-2"></div>
              <span className="text-sm text-muted-foreground">Screen Time</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-primary mr-2"></div>
              <span className="text-sm text-muted-foreground">Learning Time</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UsageGraph;
