import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, TrendingDown, Zap, Compass, User, Settings, 
  BookOpen, Award, Brain, LineChart, BarChart, Star
} from 'lucide-react';

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
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account and view your learning progress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/avatars/user-01.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">Jane Doe</h2>
                  <p className="text-muted-foreground">jane.doe@example.com</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">Pro Member</Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Level 7
                    </Badge>
                  </div>
                  <Button variant="outline" className="mt-4 w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Total Learning Time</span>
                    <span className="text-sm">42.5 hours</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Courses Completed</span>
                    <span className="text-sm">8/12</span>
                  </div>
                  <Progress value={66} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Current Streak</span>
                    <span className="text-sm">14 days</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "Fast Learner", icon: Zap, unlocked: true },
                    { name: "Consistent", icon: Clock, unlocked: true },
                    { name: "Explorer", icon: Compass, unlocked: true },
                    { name: "Bookworm", icon: BookOpen, unlocked: false },
                    { name: "Master", icon: Award, unlocked: false },
                    { name: "Genius", icon: Brain, unlocked: false },
                  ].map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                        achievement.unlocked 
                          ? "bg-primary/5 border-primary/20" 
                          : "bg-muted/50 border-border opacity-50"
                      }`}
                    >
                      <achievement.icon className={`h-6 w-6 mb-2 ${achievement.unlocked ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-xs text-center">{achievement.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Activity & Progress */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="lg:col-span-2 space-y-6"
          >
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>
              <TabsContent value="activity" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Activity</CardTitle>
                    <CardDescription>Your learning patterns over the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/30">
                      <div className="text-center">
                        <LineChart className="h-8 w-8 mb-2 text-muted-foreground mx-auto" />
                        <p className="text-sm text-muted-foreground">Activity chart visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Completed Module: Advanced JavaScript",
                          time: "2 hours ago",
                          icon: Award,
                          iconColor: "text-green-500"
                        },
                        {
                          title: "Started Course: React Fundamentals",
                          time: "Yesterday",
                          icon: BookOpen,
                          iconColor: "text-blue-500"
                        },
                        {
                          title: "Earned Badge: Consistent Learner",
                          time: "3 days ago",
                          icon: Star,
                          iconColor: "text-amber-500"
                        },
                        {
                          title: "Reduced Screen Time by 15%",
                          time: "1 week ago",
                          icon: TrendingDown,
                          iconColor: "text-green-500"
                        },
                      ].map((activity, index) => (
                        <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                          <div className={`h-8 w-8 rounded-full bg-background flex items-center justify-center ${activity.iconColor}`}>
                            <activity.icon size={16} />
                          </div>
                          <div>
                            <p className="font-medium">{activity.title}</p>
                            <p className="text-sm text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Courses</CardTitle>
                    <CardDescription>Track your progress across all courses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Digital Wellness Fundamentals",
                          progress: 100,
                          status: "Completed",
                          statusColor: "text-green-500"
                        },
                        {
                          title: "Productivity Mastery",
                          progress: 85,
                          status: "In Progress",
                          statusColor: "text-blue-500"
                        },
                        {
                          title: "Focus & Deep Work",
                          progress: 60,
                          status: "In Progress",
                          statusColor: "text-blue-500"
                        },
                        {
                          title: "Digital Minimalism",
                          progress: 25,
                          status: "Just Started",
                          statusColor: "text-amber-500"
                        },
                        {
                          title: "Mindful Technology Use",
                          progress: 0,
                          status: "Not Started",
                          statusColor: "text-muted-foreground"
                        },
                      ].map((course, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{course.title}</span>
                            <span className={`text-sm ${course.statusColor}`}>{course.status}</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Advanced Focus Techniques",
                        "Digital Detox Strategies",
                        "Mindfulness for Digital Age",
                      ].map((course, index) => (
                        <div key={index} className="flex justify-between items-center p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <BookOpen className="h-5 w-5 text-primary" />
                            <span>{course}</span>
                          </div>
                          <Button size="sm" variant="outline">Enroll</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Preferences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Learning Reminders",
                          description: "Receive daily reminders to continue your learning",
                          enabled: true
                        },
                        {
                          title: "Weekly Progress Reports",
                          description: "Get a summary of your learning activity every week",
                          enabled: true
                        },
                        {
                          title: "Course Recommendations",
                          description: "Receive personalized course suggestions",
                          enabled: false
                        },
                        {
                          title: "Achievement Notifications",
                          description: "Be notified when you earn new achievements",
                          enabled: true
                        },
                      ].map((preference, index) => (
                        <div key={index} className="flex justify-between items-center p-4 rounded-lg border">
                          <div>
                            <h4 className="font-medium">{preference.title}</h4>
                            <p className="text-sm text-muted-foreground">{preference.description}</p>
                          </div>
                          <div className={`h-6 w-12 rounded-full ${preference.enabled ? 'bg-primary' : 'bg-muted'} relative`}>
                            <div className={`absolute h-5 w-5 rounded-full bg-white top-0.5 transition-all ${preference.enabled ? 'right-0.5' : 'left-0.5'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Button variant="outline" className="w-full">
                        <User className="mr-2 h-4 w-4" />
                        Update Profile
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Account Settings
                      </Button>
                    </div>
                    <Button variant="destructive" className="w-full">
                      Log Out
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
