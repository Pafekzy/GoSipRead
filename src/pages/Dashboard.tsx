
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart } from "@/components/ui/bar-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, BookOpen, Star, Clock, ArrowRight, Activity, UserPlus, CalendarDays, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  // Sample data for learning chart
  const learningData = [
    { day: 'Mon', Minutes: 15 },
    { day: 'Tue', Minutes: 25 },
    { day: 'Wed', Minutes: 20 },
    { day: 'Thu', Minutes: 30 },
    { day: 'Fri', Minutes: 15 },
    { day: 'Sat', Minutes: 25 },
    { day: 'Sun', Minutes: 35 },
  ];

  // Sample data for digital wellness
  const wellnessData = [
    { day: 'Mon', 'Mindful Use': 45, 'Distracted Use': 120 },
    { day: 'Tue', 'Mindful Use': 60, 'Distracted Use': 90 },
    { day: 'Wed', 'Mindful Use': 75, 'Distracted Use': 60 },
    { day: 'Thu', 'Mindful Use': 50, 'Distracted Use': 100 },
    { day: 'Fri', 'Mindful Use': 65, 'Distracted Use': 80 },
    { day: 'Sat', 'Mindful Use': 90, 'Distracted Use': 60 },
    { day: 'Sun', 'Mindful Use': 80, 'Distracted Use': 40 },
  ];

  const todaysLessons = [
    {
      id: 1,
      title: "Critical Thinking Challenge",
      description: "Identify logical fallacies in real-world arguments",
      duration: "10 min",
      category: "Critical Thinking"
    },
    {
      id: 2,
      title: "5-Minute Communication Drill",
      description: "Practice concise explanations of complex topics",
      duration: "5 min",
      category: "Communication"
    },
    {
      id: 3,
      title: "Digital Detox Meditation",
      description: "Guided exercise for mental clarity",
      duration: "8 min",
      category: "Digital Wellness"
    }
  ];

  const insightItems = [
    {
      title: "Learning Peak Hours",
      description: "Your focus is highest between 8-10am. Schedule critical learning during this time.",
      icon: Sparkles,
      color: "text-amber-500"
    },
    {
      title: "Digital Habit Improvement",
      description: "You've reduced social media usage by 22% this week. Keep it up!",
      icon: Activity,
      color: "text-green-500"
    },
    {
      title: "Consistency Streak",
      description: "You're on day 7 of your learning streak. Just 3 more days to reach your goal!",
      icon: Star,
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <NavBar />
      
      <main className="container px-4 md:px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
            <p className="text-muted-foreground">
              Your personal growth journey continues today
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mt-4 md:mt-0"
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  <span>Streak: 7 days</span>
                </div>
              </div>
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center">
                  <Brain className="h-4 w-4 mr-1" />
                  <span>1,245 points</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Today's Plan Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-sm font-medium text-primary mb-1">
                    Today's Growth Plan
                  </div>
                  <CardTitle>Your Personalized Learning Path</CardTitle>
                  <CardDescription>
                    Completing these activities will keep you on track with your goals
                  </CardDescription>
                </div>
                <div className="bg-background rounded-full h-12 w-12 flex items-center justify-center">
                  <CalendarDays className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysLessons.map((lesson) => (
                  <div key={lesson.id} className="bg-background/60 rounded-lg p-4 hover-scale">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-medium text-accent mb-1">
                          {lesson.category}
                        </div>
                        <h3 className="font-medium">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground">{lesson.description}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{lesson.duration}</span>
                        </div>
                        <Button size="sm">Start</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Daily progress</span>
                  <span className="text-sm font-medium">33%</span>
                </div>
                <Progress value={33} className="h-2" />
              </div>
            </CardFooter>
          </Card>
        </motion.div>
        
        {/* Stats and Charts Section */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {/* Learning Activity Chart */}
          <motion.div
            variants={fadeInUp}
            className="col-span-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Learning Activity</CardTitle>
                <CardDescription>Your daily learning minutes this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <BarChart 
                    data={learningData}
                    index="day"
                    categories={["Minutes"]}
                    colors={["#8B5CF6"]}
                    valueFormatter={(value) => `${value} min`}
                    showAnimation={true}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" asChild>
                  <Link to="/microlearning">
                    View All Learning Activities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          {/* Digital Wellness Chart */}
          <motion.div
            variants={fadeInUp}
            className="col-span-1"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Digital Wellness</CardTitle>
                <CardDescription>Balance between mindful and distracted tech use</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[240px]">
                  <BarChart 
                    data={wellnessData}
                    index="day"
                    categories={["Mindful Use", "Distracted Use"]}
                    colors={["#10B981", "#F97316"]}
                    valueFormatter={(value) => `${value} min`}
                    showAnimation={true}
                  />
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" asChild>
                  <Link to="/digital-wellness">
                    View Digital Wellness Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* AI Insights Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <h2 className="text-2xl font-bold mb-4">AI Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insightItems.map((item, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader className="pb-2">
                  <div className={`h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center ${item.color} mb-3`}>
                    <item.icon size={20} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        
        {/* Quick Actions Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Start Today's Challenge", icon: Star, route: "/microlearning" },
              { title: "Digital Wellness Check", icon: Activity, route: "/digital-wellness" },
              { title: "Update Learning Goals", icon: Brain, route: "/profile" },
              { title: "Invite a Friend", icon: UserPlus, route: "#" }
            ].map((action, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="h-auto py-6 flex flex-col items-center justify-center gap-3 hover-scale"
                asChild
              >
                <Link to={action.route}>
                  <action.icon className="h-6 w-6" />
                  <span>{action.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
