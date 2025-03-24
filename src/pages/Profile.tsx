
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Brain, Star, TrendingUp, Award, FileText, Calendar, BookOpen, Rocket } from 'lucide-react';

const Profile = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <NavBar />
      
      <main className="container px-4 md:px-6 pt-24 pb-16">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="flex flex-col md:flex-row gap-6 mb-8"
        >
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 p-0.5">
                <div className="h-full w-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                  <User className="h-12 w-12 md:h-16 md:w-16 text-muted-foreground" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent rounded-full h-8 w-8 flex items-center justify-center text-white border-2 border-background">
                <Star className="h-4 w-4" />
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Alex Parker</h1>
            <p className="text-muted-foreground mb-4">Critical thinking enthusiast | 32 days of growth</p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="flex gap-4">
                {[
                  { label: "Mastery Level", value: "Advanced Beginner", icon: Brain },
                  { label: "Points", value: "1,245", icon: Star },
                  { label: "Current Streak", value: "8 days", icon: TrendingUp }
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <stat.icon className="h-3 w-3" />
                      <span>{stat.label}</span>
                    </div>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex justify-center md:justify-end">
                <Button>
                  View Growth Report
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <Tabs defaultValue="roadmap" className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="roadmap">Mastery Roadmap</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>
          
          {/* Mastery Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-8">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="mr-2 h-5 w-5 text-primary" />
                    Your Personalized Growth Path
                  </CardTitle>
                  <CardDescription>
                    AI-generated roadmap based on your learning patterns and goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pb-12">
                    <div className="absolute left-6 top-0 h-full w-0.5 bg-border"></div>
                    
                    {[
                      {
                        title: "Critical Thinking Foundation",
                        description: "Master the basics of logical reasoning and cognitive biases",
                        progress: 75,
                        status: "in-progress",
                        icon: Brain,
                        items: [
                          { name: "Logical Fallacies", completed: true },
                          { name: "Structured Problem-Solving", completed: false },
                          { name: "Cognitive Biases", completed: false }
                        ]
                      },
                      {
                        title: "Effective Communication",
                        description: "Develop clear articulation and persuasive speaking skills",
                        progress: 0,
                        status: "upcoming",
                        icon: BookOpen,
                        items: [
                          { name: "Storytelling Principles", completed: false },
                          { name: "Persuasive Speaking", completed: false },
                          { name: "Active Listening", completed: false }
                        ]
                      },
                      {
                        title: "Strategic Decision Making",
                        description: "Learn frameworks for making complex decisions with confidence",
                        progress: 0,
                        status: "upcoming",
                        icon: Rocket,
                        items: [
                          { name: "Decision Trees", completed: false },
                          { name: "Risk Assessment", completed: false },
                          { name: "Long-term Planning", completed: false }
                        ]
                      }
                    ].map((phase, index) => (
                      <div key={index} className="relative pl-12 pb-8">
                        <div className={`absolute left-0 top-1 h-12 w-12 rounded-full flex items-center justify-center ${
                          phase.status === 'in-progress' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary text-muted-foreground'
                        }`}>
                          <phase.icon className="h-6 w-6" />
                        </div>
                        
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">{phase.title}</h3>
                            <div className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                              phase.status === 'in-progress' 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-secondary text-muted-foreground'
                            }`}>
                              {phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                            </div>
                          </div>
                          <p className="text-muted-foreground mt-1">{phase.description}</p>
                          
                          {phase.progress > 0 && (
                            <div className="mt-2 space-y-1">
                              <Progress value={phase.progress} className="h-1.5" />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Progress</span>
                                <span>{phase.progress}%</span>
                              </div>
                            </div>
                          )}
                          
                          <div className="mt-4 space-y-2">
                            {phase.items.map((item, itemIndex) => (
                              <div 
                                key={itemIndex} 
                                className={`flex items-center gap-2 p-2 rounded-md ${
                                  item.completed ? 'bg-primary/5 text-primary' : 'bg-secondary/50'
                                }`}
                              >
                                <div className={`h-4 w-4 rounded-full ${
                                  item.completed ? 'bg-primary' : 'bg-muted'
                                } flex items-center justify-center`}>
                                  {item.completed && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                      <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                  )}
                                </div>
                                <span className={item.completed ? 'font-medium' : ''}>{item.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border">
                <CardHeader>
                  <CardTitle>AI Growth Insights</CardTitle>
                  <CardDescription>
                    Personalized recommendations based on your learning patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Strengthen Visual Learning",
                        description: "You show a strong preference for visual learning methods. Try more diagram-based challenges to enhance your problem-solving skills."
                      },
                      {
                        title: "Expand Debate Skills",
                        description: "Your critical thinking is excellent, but you could benefit from more practice defending positions you disagree with."
                      },
                      {
                        title: "Morning Learning Optimization",
                        description: "Your data shows higher retention rates in morning sessions. Consider shifting more learning activities to before noon."
                      }
                    ].map((insight, index) => (
                      <div key={index} className="p-4 rounded-lg bg-background/50 border">
                        <h3 className="font-medium">{insight.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {insight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          
          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "7-Day Streak Master",
                  description: "Completed learning activities for 7 consecutive days",
                  date: "Earned 2 days ago",
                  icon: Calendar,
                  color: "bg-amber-500"
                },
                {
                  title: "Critical Thinker",
                  description: "Successfully completed all logical fallacies challenges",
                  date: "Earned 1 week ago",
                  icon: Brain,
                  color: "bg-primary"
                },
                {
                  title: "Digital Minimalist",
                  description: "Reduced screen time by 30% for a full week",
                  date: "Earned 2 weeks ago",
                  icon: TrendingDown,
                  color: "bg-green-500"
                },
                {
                  title: "Quick Learner",
                  description: "Completed 5 microlearning sessions in a single day",
                  date: "Earned 3 weeks ago",
                  icon: Zap,
                  color: "bg-accent"
                },
                {
                  title: "Habit Builder",
                  description: "Successfully established 3 new learning habits",
                  date: "Earned 1 month ago",
                  icon: Star,
                  color: "bg-purple-500"
                },
                {
                  title: "Knowledge Explorer",
                  description: "Tried challenges across 5 different skill categories",
                  date: "Earned 1 month ago",
                  icon: Compass,
                  color: "bg-blue-500"
                }
              ].map((achievement, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-scale">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        {achievement.date}
                      </div>
                      <div className={`h-10 w-10 rounded-full ${achievement.color} text-white flex items-center justify-center`}>
                        <achievement.icon size={20} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          {/* Statistics Tab */}
          <TabsContent value="stats">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={fadeInUp} className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Activity</CardTitle>
                    <CardDescription>
                      Your learning sessions over the past 30 days
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/20">
                      <div className="text-center p-6">
                        <span className="text-xl font-semibold gradient-text">Activity Visualization</span>
                        <p className="mt-2 text-muted-foreground">Interactive chart coming soon</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Skill Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Critical Thinking", value: 72 },
                        { name: "Communication", value: 45 },
                        { name: "Problem Solving", value: 63 },
                        { name: "Digital Wellness", value: 81 }
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">{skill.name}</span>
                            <span className="text-sm font-medium">{skill.value}%</span>
                          </div>
                          <Progress value={skill.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Peak Productivity",
                          value: "Morning (8-10am)",
                          icon: Calendar
                        },
                        {
                          title: "Favorite Challenge Type",
                          value: "AI Debates",
                          icon: BookOpen
                        },
                        {
                          title: "Avg. Session Length",
                          value: "12 minutes",
                          icon: Clock
                        },
                        {
                          title: "Total Learning Time",
                          value: "18.5 hours",
                          icon: TrendingUp
                        }
                      ].map((stat) => (
                        <div key={stat.title} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground mr-3">
                              <stat.icon size={16} />
                            </div>
                            <span className="text-sm">{stat.title}</span>
                          </div>
                          <span className="font-medium">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;
