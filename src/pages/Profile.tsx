
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Brain, 
  BookOpen, 
  Activity, 
  Star, 
  Calendar, 
  BadgeCheck 
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const handleSaveProfile = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
    }, 1000);
  };

  const handleSaveSettings = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Settings Saved",
        description: "Your preferences have been updated successfully.",
      });
    }, 1000);
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
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Profile Overview */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="md:col-span-4 space-y-6"
          >
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 h-24 w-24 rounded-full flex items-center justify-center mb-2">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Alex Johnson</CardTitle>
                <CardDescription>alex.j@example.com</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold">1,245</div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold">42</div>
                    <div className="text-xs text-muted-foreground">Lessons</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Growth Level</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Member Since</span>
                    <span className="text-sm text-muted-foreground">June 2023</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  <BadgeCheck className="mr-2 h-4 w-4" /> Premium Member
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Learning Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Brain, name: "Critical Thinking", progress: 65 },
                  { icon: BookOpen, name: "Communication", progress: 42 },
                  { icon: Activity, name: "Digital Wellness", progress: 78 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mr-2">
                          <skill.icon className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-accent/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-accent rounded-full" 
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  Update Learning Goals
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Star, name: "7-Day Streak", date: "Today" },
                  { icon: BookOpen, name: "Completed 10 Lessons", date: "Yesterday" },
                  { icon: Activity, name: "Digital Detox Champion", date: "3 days ago" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{achievement.name}</div>
                      <div className="text-xs text-muted-foreground">{achievement.date}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  View All Achievements
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
          
          {/* Profile Settings */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="md:col-span-8"
          >
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="profile">
                  <User className="mr-2 h-4 w-4" /> Profile
                </TabsTrigger>
                <TabsTrigger value="preferences">
                  <Settings className="mr-2 h-4 w-4" /> Preferences
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell className="mr-2 h-4 w-4" /> Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy">
                  <Shield className="mr-2 h-4 w-4" /> Privacy
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and how we contact you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Alex" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="alex.j@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input id="phoneNumber" defaultValue="(555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Input id="bio" defaultValue="Learning enthusiast passionate about personal growth and digital wellness." />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveProfile} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Preferences</CardTitle>
                    <CardDescription>
                      Customize your learning experience on GoSipRead
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Learning Focus Areas</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { id: "criticalThinking", label: "Critical Thinking", icon: Brain },
                          { id: "communication", label: "Communication", icon: BookOpen },
                          { id: "digitalWellness", label: "Digital Wellness", icon: Activity },
                          { id: "leadership", label: "Leadership", icon: Star }
                        ].map((area) => (
                          <div key={area.id} className="flex items-center space-x-2">
                            <Switch id={area.id} defaultChecked={area.id !== "leadership"} />
                            <Label htmlFor={area.id} className="flex items-center">
                              <area.icon className="h-4 w-4 mr-2" />
                              {area.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Learning Session Preferences</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sessionDuration">Preferred Session Duration</Label>
                          <select id="sessionDuration" className="w-full rounded-md border border-input bg-background px-3 py-2">
                            <option>5 minutes</option>
                            <option selected>10 minutes</option>
                            <option>15 minutes</option>
                            <option>20 minutes</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="learningTime">Preferred Learning Time</Label>
                          <select id="learningTime" className="w-full rounded-md border border-input bg-background px-3 py-2">
                            <option selected>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                            <option>Any Time</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">System Preferences</h3>
                      <div className="space-y-2">
                        {[
                          { id: "autoPlay", label: "Auto-play learning videos" },
                          { id: "reminders", label: "Daily learning reminders" },
                          { id: "progressUpdates", label: "Weekly progress updates" }
                        ].map((pref) => (
                          <div key={pref.id} className="flex items-center justify-between py-2">
                            <Label htmlFor={pref.id}>{pref.label}</Label>
                            <Switch id={pref.id} defaultChecked />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveSettings} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Preferences"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                      Manage how you receive notifications from GoSipRead
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {[
                        { title: "Learning Reminders", description: "Daily reminders to complete your learning sessions" },
                        { title: "Goal Updates", description: "Updates on your progress toward learning goals" },
                        { title: "New Content Alerts", description: "Notifications when new courses or features are added" },
                        { title: "Achievement Alerts", description: "Notifications when you earn new achievements" },
                        { title: "Streak Alerts", description: "Reminders when your streak is at risk" }
                      ].map((notification, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                          <div>
                            <h4 className="text-sm font-medium">{notification.title}</h4>
                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                          </div>
                          <div className="grid grid-flow-col gap-2 items-center">
                            <div className="flex flex-col items-center">
                              <Label htmlFor={`email-${index}`} className="text-xs mb-1">Email</Label>
                              <Switch id={`email-${index}`} defaultChecked={index < 3} />
                            </div>
                            <div className="flex flex-col items-center">
                              <Label htmlFor={`push-${index}`} className="text-xs mb-1">Push</Label>
                              <Switch id={`push-${index}`} defaultChecked={index !== 2} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveSettings} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Notification Settings"}
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="privacy">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>
                      Manage how your data is used and stored on GoSipRead
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Data Usage</h3>
                      <div className="space-y-2">
                        {[
                          { id: "dataAnalytics", label: "Use my learning data to improve algorithm accuracy", defaultChecked: true },
                          { id: "personalizedContent", label: "Personalize content based on my learning patterns", defaultChecked: true },
                          { id: "thirdParty", label: "Share anonymized data with third parties", defaultChecked: false }
                        ].map((setting) => (
                          <div key={setting.id} className="flex items-center justify-between py-2">
                            <Label htmlFor={setting.id}>{setting.label}</Label>
                            <Switch id={setting.id} defaultChecked={setting.defaultChecked} />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Account Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="mr-2 h-4 w-4" /> Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Bell className="mr-2 h-4 w-4" /> Enable Two-Factor Authentication
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                          <Shield className="mr-2 h-4 w-4" /> Request Data Export
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSaveSettings} disabled={isLoading}>
                      {isLoading ? "Saving..." : "Save Privacy Settings"}
                    </Button>
                  </CardFooter>
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
