
import { toast } from "@/hooks/use-toast";

// Types for notifications
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'reminder' | 'achievement' | 'tip';
  read: boolean;
  date: string;
}

// Mock notifications database
let notifications: Notification[] = [
  {
    id: '1',
    title: 'Morning Learning Reminder',
    message: 'It\'s time for your 10-minute morning microlearning session!',
    type: 'reminder',
    read: false,
    date: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Achievement Unlocked',
    message: 'You\'ve completed your 5-day streak for Focus Blocks habit!',
    type: 'achievement',
    read: true,
    date: new Date(Date.now() - 86400000).toISOString() // 1 day ago
  },
  {
    id: '3',
    title: 'Digital Wellness Tip',
    message: 'Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain.',
    type: 'tip',
    read: true,
    date: new Date(Date.now() - 172800000).toISOString() // 2 days ago
  }
];

// Get all notifications
export function getNotifications(): Notification[] {
  return [...notifications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get unread notifications count
export function getUnreadCount(): number {
  return notifications.filter(n => !n.read).length;
}

// Mark notification as read
export function markAsRead(id: string): void {
  const notification = notifications.find(n => n.id === id);
  if (notification) {
    notification.read = true;
  }
}

// Mark all notifications as read
export function markAllAsRead(): void {
  notifications.forEach(n => n.read = true);
}

// Add a new notification
export function addNotification(notification: Omit<Notification, 'id' | 'date' | 'read'>): void {
  const newNotification: Notification = {
    ...notification,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    read: false
  };
  
  notifications.unshift(newNotification);
  
  // Show a toast for the new notification
  toast({
    title: notification.title,
    description: notification.message,
  });
}

// Schedule a notification
export function scheduleNotification(
  title: string,
  message: string,
  type: 'reminder' | 'achievement' | 'tip',
  delayMs: number
): void {
  setTimeout(() => {
    addNotification({ title, message, type });
  }, delayMs);
}

// Schedule standard reminders
export function scheduleStandardReminders(): void {
  // Morning microlearning reminder (9 AM)
  const morning = new Date();
  morning.setHours(9, 0, 0, 0);
  let delay = morning.getTime() - Date.now();
  if (delay < 0) delay += 86400000; // If already past, schedule for tomorrow
  
  scheduleNotification(
    'Morning Learning Reminder',
    'Start your day with a 10-minute microlearning session!',
    'reminder',
    delay
  );
  
  // Afternoon focus block reminder (2 PM)
  const afternoon = new Date();
  afternoon.setHours(14, 0, 0, 0);
  delay = afternoon.getTime() - Date.now();
  if (delay < 0) delay += 86400000;
  
  scheduleNotification(
    'Afternoon Focus Block',
    'Time for a 30-minute distraction-free focus session',
    'reminder',
    delay
  );
  
  // Evening digital sunset reminder (8 PM)
  const evening = new Date();
  evening.setHours(20, 0, 0, 0);
  delay = evening.getTime() - Date.now();
  if (delay < 0) delay += 86400000;
  
  scheduleNotification(
    'Digital Sunset Reminder',
    'Time to put away your screens and prepare for a restful night',
    'reminder',
    delay
  );
  
  // Random digital wellness tip (sometime during the day)
  const randomHour = Math.floor(Math.random() * 8) + 10; // Between 10 AM and 5 PM
  const randomTipTime = new Date();
  randomTipTime.setHours(randomHour, 0, 0, 0);
  delay = randomTipTime.getTime() - Date.now();
  if (delay < 0) delay += 86400000;
  
  const tips = [
    'Try the Pomodoro Technique: 25 minutes of focused work followed by a 5-minute break',
    'Use the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds',
    'Set specific times to check social media instead of checking throughout the day',
    'Keep your phone in another room while sleeping to improve sleep quality',
    'Try app blockers during your most productive hours of the day'
  ];
  
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  
  scheduleNotification(
    'Digital Wellness Tip',
    randomTip,
    'tip',
    delay
  );
}

// Add a demo notification (for testing)
export function addDemoNotification(): void {
  addNotification({
    title: 'New Notification',
    message: 'This is a test notification to demonstrate the system',
    type: 'reminder'
  });
}
