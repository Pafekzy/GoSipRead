
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/NavBar';
import OverviewCards from '@/components/digitalWellness/OverviewCards';
import UsageGraph from '@/components/digitalWellness/UsageGraph';
import HabitTransformation from '@/components/digitalWellness/HabitTransformation';
import Recommendations from '@/components/digitalWellness/Recommendations';
import TrackingForm from '@/components/digitalWellness/TrackingForm';
import WeeklyOverview from '@/components/digitalWellness/WeeklyOverview';
import { useIsMobile } from '@/hooks/use-mobile';

const DigitalWellness = () => {
  const isMobile = useIsMobile();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background page-transition">
      <NavBar />
      
      <main className="container px-4 md:px-6 pt-24 pb-16 max-w-7xl">
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

        {/* Tracking Form */}
        <TrackingForm />

        {/* Overview Cards */}
        <OverviewCards />
        
        {/* Weekly Overview with Charts */}
        <WeeklyOverview />
        
        {/* Usage Graph */}
        <UsageGraph />
        
        {/* Habit Transformation */}
        <HabitTransformation />
        
        {/* Recommendations */}
        <Recommendations />
      </main>
    </div>
  );
};

export default DigitalWellness;
