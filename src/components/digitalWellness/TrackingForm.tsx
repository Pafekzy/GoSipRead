
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Save, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { logScreenTime, completeHabit, habits } from '@/utils/digitalWellness';
import { useIsMobile } from '@/hooks/use-mobile';

const TrackingForm = () => {
  const isMobile = useIsMobile();
  const [step, setStep] = useState<'screenTime' | 'habits'>('screenTime');
  const [productiveMinutes, setProductiveMinutes] = useState(90);
  const [distractedMinutes, setDistractedMinutes] = useState(60);
  const [selectedHabit, setSelectedHabit] = useState<number | null>(null);
  const [habitDuration, setHabitDuration] = useState(10);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const totalMinutes = productiveMinutes + distractedMinutes;
  const productivePercentage = totalMinutes ? Math.round((productiveMinutes / totalMinutes) * 100) : 0;

  const handleLogScreenTime = () => {
    logScreenTime(productiveMinutes, distractedMinutes);
    setStep('habits');
  };

  const handleCompleteHabit = () => {
    if (selectedHabit !== null) {
      completeHabit(selectedHabit, habitDuration);
      setSelectedHabit(null);
      setHabitDuration(10);
    }
  };

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="mb-8"
    >
      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border">
        <CardHeader>
          <CardTitle>Track Your Digital Wellness</CardTitle>
          <CardDescription>
            Log your screen time and habit completions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'screenTime' ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  How many minutes did you spend on productive tasks today?
                </label>
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[productiveMinutes]} 
                    min={0} 
                    max={300} 
                    step={5} 
                    onValueChange={(values) => setProductiveMinutes(values[0])}
                    className="flex-1"
                  />
                  <div className="w-16">
                    <Input 
                      type="number" 
                      value={productiveMinutes} 
                      onChange={(e) => setProductiveMinutes(Number(e.target.value))}
                      min={0}
                      max={300}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  How many minutes did you spend on distracting activities?
                </label>
                <div className="flex items-center gap-4">
                  <Slider 
                    value={[distractedMinutes]} 
                    min={0} 
                    max={300} 
                    step={5} 
                    onValueChange={(values) => setDistractedMinutes(values[0])}
                    className="flex-1"
                  />
                  <div className="w-16">
                    <Input 
                      type="number" 
                      value={distractedMinutes} 
                      onChange={(e) => setDistractedMinutes(Number(e.target.value))}
                      min={0}
                      max={300}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-background/60 rounded-lg p-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <div>
                    <p className="text-sm font-medium">Today's Screen Time Summary</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {totalMinutes} minutes total ({productivePercentage}% productive)
                      </span>
                    </div>
                  </div>
                  <Button onClick={handleLogScreenTime}>
                    Log Screen Time
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-sm">
                Which digital wellness habit did you complete today?
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {habits.map(habit => (
                  <Card 
                    key={habit.id}
                    className={`cursor-pointer hover-scale transition-all ${selectedHabit === habit.id ? 'ring-2 ring-primary' : ''}`}
                    onClick={() => {
                      setSelectedHabit(habit.id);
                      setHabitDuration(habit.target);
                    }}
                  >
                    <CardContent className="p-4 space-y-2">
                      <p className="font-medium">{habit.name}</p>
                      <p className="text-xs text-muted-foreground">{habit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedHabit !== null && (
                <div className="space-y-2 animate-fade-in">
                  <label className="text-sm font-medium">
                    How many minutes did you spend on this habit?
                  </label>
                  <div className="flex items-center gap-4">
                    <Slider 
                      value={[habitDuration]} 
                      min={5} 
                      max={120} 
                      step={5} 
                      onValueChange={(values) => setHabitDuration(values[0])}
                      className="flex-1"
                    />
                    <div className="w-16">
                      <Input 
                        type="number" 
                        value={habitDuration} 
                        onChange={(e) => setHabitDuration(Number(e.target.value))}
                        min={5}
                        max={120}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setStep('screenTime')}>
                  Back to Screen Time
                </Button>
                <Button 
                  onClick={handleCompleteHabit}
                  disabled={selectedHabit === null}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Complete Habit
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TrackingForm;
