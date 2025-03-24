
// Digital wellness tracking utilities
import { toast } from "@/hooks/use-toast";

// Types for tracking
export interface ScreenTimeEntry {
  date: string;
  totalMinutes: number;
  productiveMinutes: number;
  distractedMinutes: number;
}

export interface HabitEntry {
  id: number;
  date: string;
  habitId: number;
  completed: boolean;
  duration?: number;
}

// Mock database for demo purposes - in a real app, this would be stored in a database
let screenTimeData: ScreenTimeEntry[] = [
  { date: getTodayString(-6), totalMinutes: 252, productiveMinutes: 45, distractedMinutes: 207 },
  { date: getTodayString(-5), totalMinutes: 228, productiveMinutes: 60, distractedMinutes: 168 },
  { date: getTodayString(-4), totalMinutes: 210, productiveMinutes: 75, distractedMinutes: 135 },
  { date: getTodayString(-3), totalMinutes: 195, productiveMinutes: 65, distractedMinutes: 130 },
  { date: getTodayString(-2), totalMinutes: 183, productiveMinutes: 83, distractedMinutes: 100 },
  { date: getTodayString(-1), totalMinutes: 176, productiveMinutes: 94, distractedMinutes: 82 },
  { date: getTodayString(0), totalMinutes: 168, productiveMinutes: 98, distractedMinutes: 70 },
];

let habitData: HabitEntry[] = [];

// Habits database
export const habits = [
  {
    id: 1,
    name: "Morning Microlearning",
    description: "Replace morning social media scrolling with a 10-minute learning session",
    target: 10, // minutes
    category: "learning"
  },
  {
    id: 2,
    name: "Focus Blocks",
    description: "Schedule 30-minute distraction-free focus sessions throughout the day",
    target: 30, // minutes
    category: "focus"
  },
  {
    id: 3,
    name: "Digital Sunset",
    description: "No screens 1 hour before bedtime, replaced with reading or journaling",
    target: 60, // minutes
    category: "wellness"
  }
];

// Helper function to get date strings
function getTodayString(offsetDays = 0): string {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().split('T')[0];
}

// Get screen time data for a specific period
export function getScreenTimeData(days = 7): ScreenTimeEntry[] {
  return screenTimeData.slice(-days);
}

// Log screen time for today
export function logScreenTime(productiveMinutes: number, distractedMinutes: number): void {
  const today = getTodayString();
  const totalMinutes = productiveMinutes + distractedMinutes;
  
  // Check if today already exists
  const existingIndex = screenTimeData.findIndex(entry => entry.date === today);
  
  if (existingIndex >= 0) {
    // Update existing entry
    screenTimeData[existingIndex] = {
      date: today,
      totalMinutes,
      productiveMinutes,
      distractedMinutes
    };
  } else {
    // Add new entry
    screenTimeData.push({
      date: today,
      totalMinutes,
      productiveMinutes,
      distractedMinutes
    });
  }
  
  // Show success message
  toast({
    title: "Screen time logged",
    description: `Logged ${productiveMinutes} productive minutes and ${distractedMinutes} distracted minutes.`,
  });
}

// Complete a habit for today
export function completeHabit(habitId: number, duration?: number): void {
  const today = getTodayString();
  
  // Check if habit already completed today
  const existingEntry = habitData.find(
    entry => entry.date === today && entry.habitId === habitId
  );
  
  if (existingEntry) {
    // Update existing entry
    existingEntry.completed = true;
    if (duration) existingEntry.duration = duration;
  } else {
    // Add new entry
    const habit = habits.find(h => h.id === habitId);
    habitData.push({
      id: habitData.length + 1,
      date: today,
      habitId,
      completed: true,
      duration
    });
    
    // Show success message
    toast({
      title: "Habit completed",
      description: `You've completed "${habit?.name}" for today!`,
    });
  }
}

// Get habit completion data
export function getHabitCompletions(habitId?: number, days = 7): HabitEntry[] {
  const startDate = getTodayString(-days + 1);
  
  return habitData.filter(entry => {
    return (
      entry.date >= startDate && 
      (habitId === undefined || entry.habitId === habitId)
    );
  });
}

// Calculate habit streak for a specific habit
export function getHabitStreak(habitId: number): number {
  let streak = 0;
  let currentDate = new Date();
  
  while (true) {
    const dateString = currentDate.toISOString().split('T')[0];
    const completed = habitData.some(
      entry => entry.habitId === habitId && 
              entry.date === dateString && 
              entry.completed
    );
    
    if (!completed) break;
    
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
  }
  
  return streak;
}

// Get progress percentage for each habit
export function getHabitProgress(): {id: number, progress: number, streak: number}[] {
  return habits.map(habit => {
    const completions = getHabitCompletions(habit.id, 7);
    const progress = (completions.length / 7) * 100;
    const streak = getHabitStreak(habit.id);
    
    return {
      id: habit.id,
      progress: Math.round(progress),
      streak
    };
  });
}

// Get screen time trends (percentage change compared to previous period)
export function getScreenTimeTrend(days = 7): number {
  if (screenTimeData.length < days * 2) return 0;
  
  const currentPeriod = screenTimeData.slice(-days);
  const previousPeriod = screenTimeData.slice(-days*2, -days);
  
  const currentTotal = currentPeriod.reduce((sum, entry) => sum + entry.totalMinutes, 0);
  const previousTotal = previousPeriod.reduce((sum, entry) => sum + entry.totalMinutes, 0);
  
  if (previousTotal === 0) return 0;
  
  return Math.round(((currentTotal - previousTotal) / previousTotal) * 100);
}

// Get productive time percentage
export function getProductiveTimePercentage(days = 7): number {
  const data = screenTimeData.slice(-days);
  
  const totalTime = data.reduce((sum, entry) => sum + entry.totalMinutes, 0);
  const productiveTime = data.reduce((sum, entry) => sum + entry.productiveMinutes, 0);
  
  if (totalTime === 0) return 0;
  
  return Math.round((productiveTime / totalTime) * 100);
}
