
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Rocket, Activity, TrendingUp, Calendar, Star, Clock, BookOpen as BookOpenIcon } from 'lucide-react';

const Dashboard = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const fadeSideways = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <NavBar />
      
      <main className="container px-4 md:px-6 pt-24 pb-16">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
            <p className="text-muted-foreground">Track your progress and continue your learning journey</p>
          </div>
          <Button>
            Daily Challenge
            <Star className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        {/* Progress Overview */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {[
            { 
              title: "Learning Progress", 
              description: "72% complete in current path", 
              value: 72, 
              icon: BookOpenIcon,
              color: "text-primary"
            },
            { 
              title: "Streak", 
              description: "8 days in a row", 
              value: 80, 
              icon: Activity,
              color: "text-green-500"
            },
            { 
              title: "Digital Wellness", 
              description: "Reduced screen time by 35%", 
              value: 65, 
              icon: TrendingUp,
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
                    <Progress value={item.value} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progress</span>
                      <span>{item.value}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Learning Path */}
          <motion.div 
            variants={fadeSideways}
            initial="initial"
            animate="animate" 
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Current Learning Path</CardTitle>
                    <CardDescription>Critical Thinking & Problem Solving</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All Paths
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Logical Fallacies",
                      description: "Learn to identify common reasoning errors",
                      progress: 100,
                      completed: true,
                      icon: Brain
                    },
                    {
                      title: "Structured Problem-Solving",
                      description: "Master the STAR method for tackling complex problems",
                      progress: 65,
                      completed: false,
                      icon: Rocket
                    },
                    {
                      title: "Cognitive Biases",
                      description: "Understand how biases affect decision making",
                      progress: 0,
                      completed: false,
                      icon: Brain
                    },
                    {
                      title: "Effective Argumentation",
                      description: "Build persuasive and logically sound arguments",
                      progress: 0,
                      completed: false,
                      icon: BookOpen
                    }
                  ].map((module, index) => (
                    <div 
                      key={index} 
                      className={`relative flex items-start p-4 rounded-lg border ${
                        module.completed ? 'bg-primary/5 border-primary/30' : 'bg-card border-border'
                      } hover-scale`}
                    >
                      <div className={`mr-4 h-10 w-10 rounded-full flex items-center justify-center ${
                        module.completed ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                      }`}>
                        <module.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-base font-medium leading-none mb-1">{module.title}</h4>
                            <p className="text-sm text-muted-foreground">{module.description}</p>
                          </div>
                          {module.completed ? (
                            <div className="ml-2 bg-primary/20 text-primary text-xs font-medium px-2 py-1 rounded-full">
                              Completed
                            </div>
                          ) : module.progress > 0 ? (
                            <div className="ml-2 bg-secondary text-muted-foreground text-xs font-medium px-2 py-1 rounded-full">
                              In Progress
                            </div>
                          ) : (
                            <Button variant="outline" size="sm">
                              Start
                            </Button>
                          )}
                        </div>
                        {module.progress > 0 && !module.completed && (
                          <div className="mt-2 space-y-1">
                            <Progress value={module.progress} className="h-1.5" />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Progress</span>
                              <span>{module.progress}%</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right column */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate" 
            className="space-y-6"
          >
            {/* Upcoming Sessions */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Upcoming Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "AI Antagonist Battle",
                        time: "Today, 5:30 PM",
                        duration: "10 min"
                      },
                      {
                        title: "Critical Thinking Challenge",
                        time: "Tomorrow, 9:00 AM",
                        duration: "15 min"
                      }
                    ].map((session, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg border hover:bg-secondary/50 transition-colors">
                        <div>
                          <p className="font-medium">{session.title}</p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {session.time} ({session.duration})
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Join</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Wellness Insights */}
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="mr-2 h-5 w-5 text-accent" />
                    Wellness Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Focus Sessions</span>
                        <span className="text-sm font-medium">8/10</span>
                      </div>
                      <Progress value={80} className="h-1.5" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Digital Distraction</span>
                        <span className="text-sm font-medium">-32%</span>
                      </div>
                      <Progress value={68} className="h-1.5" />
                    </div>
                    <Button variant="outline" className="w-full" size="sm">
                      View Full Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Achievement */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border">
                <CardHeader>
                  <CardTitle>Latest Achievement</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-6">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/20 text-primary mx-auto flex items-center justify-center">
                      <Star className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">7-Day Streak Master</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Completed a learning session every day for a week
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm">
                        View All Achievements
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
