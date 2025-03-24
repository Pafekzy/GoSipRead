
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, BookOpen, Star, Clock, ArrowRight, Check, PlayCircle } from 'lucide-react';

const Microlearning = () => {
  const [selectedTab, setSelectedTab] = useState("featured");
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const categories = [
    { value: "featured", label: "Featured" },
    { value: "critical-thinking", label: "Critical Thinking" },
    { value: "communication", label: "Communication" },
    { value: "leadership", label: "Leadership" }
  ];

  const featuredLessons = [
    {
      id: 1,
      title: "AI Antagonist: Logical Fallacies Debate",
      description: "Challenge your critical thinking by debating with an AI that employs logical fallacies",
      category: "Critical Thinking",
      duration: "10 min",
      level: "Intermediate",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: 2,
      title: "Articulation Challenge: Complex Ideas Simplified",
      description: "Practice explaining complex topics in simple, clear language",
      category: "Communication",
      duration: "8 min",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Decision Making Under Pressure",
      description: "Learn techniques to make sound decisions with limited time and information",
      category: "Leadership",
      duration: "12 min",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Cognitive Bias Recognition",
      description: "Identify and overcome common cognitive biases in your thinking",
      category: "Critical Thinking",
      duration: "7 min",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Persuasive Speaking Patterns",
      description: "Master the art of persuasive speech with proven rhetorical techniques",
      category: "Communication",
      duration: "9 min",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Strategic Problem Decomposition",
      description: "Break down complex problems into manageable parts for easier solving",
      category: "Critical Thinking",
      duration: "10 min",
      level: "Intermediate",
      image: "/placeholder.svg"
    }
  ];

  const renderLessonCard = (lesson: typeof featuredLessons[0], index: number) => (
    <motion.div
      key={lesson.id}
      variants={fadeInUp}
      className={lesson.featured ? "md:col-span-2" : ""}
    >
      <Card className="h-full overflow-hidden hover-scale">
        <div className="relative">
          <div className="aspect-video bg-muted/50 flex items-center justify-center">
            <PlayCircle className="h-12 w-12 text-muted-foreground/50" />
          </div>
          <div className="absolute top-2 right-2 flex gap-2">
            <div className="bg-primary text-primary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full">
              {lesson.level}
            </div>
            <div className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {lesson.duration}
            </div>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="text-xs font-medium text-accent mb-1">
            {lesson.category}
          </div>
          <CardTitle className={lesson.featured ? "text-xl" : "text-lg"}>
            {lesson.title}
          </CardTitle>
          <CardDescription>
            {lesson.description}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">
            Start Lesson 
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

  const renderTodayChallenge = () => (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border mb-8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-accent mb-1">
              Daily Challenge
            </div>
            <CardTitle>AI Debate: Defend Your Position</CardTitle>
            <CardDescription>
              Challenge yourself to debate with our AI on a controversial topic, practicing critical thinking and persuasion
            </CardDescription>
          </div>
          <div className="bg-background rounded-full h-12 w-12 flex items-center justify-center">
            <Star className="h-6 w-6 text-accent" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>10 minute challenge</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Brain className="h-4 w-4 text-muted-foreground" />
            <span>Critical thinking focus</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>Earns 50 mastery points</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full sm:w-auto">
          Accept Challenge
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );

  const filterLessons = (tab: string) => {
    if (tab === "featured") return featuredLessons;
    return featuredLessons.filter(lesson => 
      lesson.category.toLowerCase() === tab.replace("-", " ")
    );
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
          <h1 className="text-3xl font-bold tracking-tight">Microlearning Center</h1>
          <p className="text-muted-foreground">
            High-impact learning sessions designed for maximum retention in minimal time
          </p>
        </motion.div>

        {renderTodayChallenge()}
        
        <Tabs defaultValue="featured" className="mb-8" onValueChange={setSelectedTab}>
          <div className="flex justify-between items-center">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.value} value={category.value}>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
              >
                {filterLessons(category.value).map((lesson, index) => 
                  renderLessonCard(lesson, index)
                )}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mt-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Completed This Week",
                value: "7",
                icon: Check,
                color: "text-green-500"
              },
              {
                title: "Current Streak",
                value: "8 days",
                icon: Star,
                color: "text-amber-500"
              },
              {
                title: "Mastery Points",
                value: "1,245",
                icon: Brain,
                color: "text-primary"
              }
            ].map((stat, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center space-x-4">
                  <div className={`h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <span className="text-3xl font-bold">{stat.value}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Microlearning;
