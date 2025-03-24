
import React from 'react';
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Shield, Zap, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Hero />
        
        {/* How it works section */}
        <section className="py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight"
              >
                How GoSipRead Works
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mx-auto max-w-[700px] text-muted-foreground md:text-lg"
              >
                Our AI-driven approach is designed for maximum impact with minimal time investment
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              {[
                {
                  step: '01',
                  title: 'Personalized Assessment',
                  description: 'Our AI analyzes your learning style, goals, and current habits to create your custom growth plan',
                  icon: User
                },
                {
                  step: '02',
                  title: 'Microlearning Challenges',
                  description: 'Engage in daily 5-10 minute high-impact learning sessions tailored to your growth areas',
                  icon: Zap
                },
                {
                  step: '03',
                  title: 'Track & Transform',
                  description: 'Monitor your progress with real-time analytics and watch as small daily actions create lasting change',
                  icon: Star
                }
              ].map((item, i) => (
                <motion.div 
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -top-10 text-7xl font-bold text-muted/10">{item.step}</div>
                  <div className="pt-6 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Digital Wellness section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm text-accent">
                  <span className="font-medium">Digital Wellness</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Break Free from Digital Distractions
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Our intelligent tracking helps you identify harmful patterns and replace mindless scrolling with intentional growth activities.
                </p>
                <ul className="space-y-2">
                  {[
                    'AI-tracked distraction patterns',
                    'Personalized intervention strategies',
                    'Habit replacement techniques',
                    'Progress visualization and rewards'
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <Shield className="h-5 w-5 text-accent mr-2" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button className="mt-2">
                  Discover Digital Wellness
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 p-1"
              >
                <div className="bg-background rounded-xl p-6 h-full">
                  <div className="aspect-video rounded-lg bg-background/80 flex items-center justify-center border">
                    <div className="text-center p-6">
                      <span className="text-2xl font-semibold gradient-text">Digital Wellness Tracker</span>
                      <p className="mt-4 text-muted-foreground">Interactive demo coming soon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-background border p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6"
            >
              <h2 className="text-3xl font-bold">Ready to Transform Your Growth Journey?</h2>
              <p className="text-muted-foreground md:text-lg">
                Join thousands of users who are maximizing their potential through AI-guided microlearning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold gradient-text">
                GoSip<span className="text-accent">Read</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              <span>© 2023 GoSipRead. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
