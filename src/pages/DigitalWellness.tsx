import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, TrendingDown, Shield, Clock, Calendar, 
  Smartphone, BookOpen, Zap, TrendingUp 
} from 'lucide-react';
import { BarChart } from '@/components/ui/bar-chart';

const DigitalWellness = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
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
    <div className="min-h-screen bg-background page-transition">
      <NavBar />
      
      <main className="container px-4 md:px-6 pt-24 pb-16">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">Digital Wellness</h1>
          <p className="text-muted-foreground">
            Break free from digital distractions and build healthier technology habits
          </p>
        </motion.div>

        {/* Overview Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
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
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="hover-scale">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-medium">{item.title}</CardTitle>
                    <div className={`h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {typeof item.value === 'number' && item.value > 0 ? (
                      <Progress value={item.value} className="h-2" />
                    ) : (
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-green-500" />
                        <span className="text-lg font-semibold text-green-500">{Math.abs(item.value)}%</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Usage Graph */}
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
        
        {/* Habit Transformation */}
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
            ))}
          </div>
        </motion.div>
        
        {/* Recommendations */}
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
                {[
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
                ].map((recommendation, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-background/50 border">
                    <div className="h-10 w-10 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <recommendation.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">{recommendation.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {recommendation.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default DigitalWellness;
