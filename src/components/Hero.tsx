
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, BookOpen, Activity, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: [0.4, 0.0, 0.2, 1],
      },
    }),
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Personalized challenges that adapt to your unique learning style and goals',
    },
    {
      icon: BookOpen,
      title: 'Microlearning',
      description: 'High-impact 5-10 minute sessions designed for maximum retention',
    },
    {
      icon: Activity,
      title: 'Digital Wellness',
      description: 'Break free from digital addiction with intelligent habit tracking',
    },
    {
      icon: Rocket,
      title: 'Growth Roadmap',
      description: 'AI-generated mastery plan tailored to your personal and career goals',
    },
  ];

  return (
    <section className="overflow-hidden">
      <div className="relative min-h-screen flex flex-col justify-center">
        {/* Abstract background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[45%] h-[70%] rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[45%] h-[70%] rounded-full bg-accent/10 blur-3xl animate-pulse-slow" />
          <div className="absolute top-[10%] left-[20%] w-[30%] h-[40%] rounded-full bg-primary/5 blur-2xl animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <motion.div
                  custom={0}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary"
                >
                  <span className="font-medium">AI-Powered Self Development</span>
                </motion.div>
                <motion.h1
                  custom={1}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Unlock Your <span className="gradient-text">Full Potential</span>
                </motion.h1>
                <motion.p
                  custom={2}
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                >
                  Discover a new way to learn, grow, and overcome digital distractions with 
                  personalized AI guidance and microlearning challenges.
                </motion.p>
              </div>
              <motion.div
                custom={3}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto flex items-center justify-center lg:justify-end"
            >
              <div className="w-full max-w-[500px] aspect-square rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 p-1">
                <div className="w-full h-full rounded-xl glass-card p-6 overflow-hidden">
                  <div className="w-full h-full rounded-lg bg-background/50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <span className="text-5xl font-bold gradient-text">Your Growth Journey</span>
                      <p className="mt-4 text-muted-foreground">Interactive visualization coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Features section */}
      <div className="container px-4 md:px-6 py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Redefine How You Learn & Grow
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Our AI-powered platform combines cutting-edge technology with proven learning science
            to help you achieve mastery faster.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-background p-6 hover-scale"
            >
              <div className="absolute top-0 right-0 h-16 w-16 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-300" />
              
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
