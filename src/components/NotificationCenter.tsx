
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, X, CheckCheck, Lightbulb, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  getNotifications, 
  getUnreadCount, 
  markAsRead, 
  markAllAsRead,
  Notification,
  scheduleStandardReminders
} from '@/utils/notifications';
import { useIsMobile } from '@/hooks/use-mobile';

const NotificationItem = ({ notification, onRead }: { notification: Notification, onRead: () => void }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'reminder':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'achievement':
        return <CheckCheck className="h-4 w-4 text-green-500" />;
      case 'tip':
        return <Lightbulb className="h-4 w-4 text-amber-500" />;
      default:
        return <Bell className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div 
      className={`p-3 border-b last:border-b-0 ${notification.read ? 'bg-transparent' : 'bg-primary/5'} hover:bg-secondary/40 transition-colors`}
      onClick={onRead}
    >
      <div className="flex gap-3">
        <div className="mt-0.5">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className={`text-sm font-medium ${notification.read ? '' : 'font-semibold'}`}>
              {notification.title}
            </h4>
            <span className="text-[10px] text-muted-foreground">
              {new Date(notification.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {notification.message}
          </p>
        </div>
      </div>
    </div>
  );
};

const NotificationCenter = () => {
  const isMobile = useIsMobile();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [open, setOpen] = useState(false);

  // Load notifications
  useEffect(() => {
    const loadNotifications = () => {
      setNotifications(getNotifications());
      setUnreadCount(getUnreadCount());
    };

    loadNotifications();
    
    // Set up interval to check notifications
    const interval = setInterval(loadNotifications, 60000);
    
    // Schedule standard reminders
    scheduleStandardReminders();
    
    return () => clearInterval(interval);
  }, []);

  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
    setNotifications(getNotifications());
    setUnreadCount(getUnreadCount());
  };

  const handleMarkAllAsRead = () => {
    markAllAsRead();
    setNotifications(getNotifications());
    setUnreadCount(0);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className={unreadCount > 0 ? "text-primary" : "text-muted-foreground"} />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px]"
              variant="destructive"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-0"
        align={isMobile ? "end" : "center"}
        alignOffset={isMobile ? -50 : 0}
      >
        <div className="flex items-center justify-between p-3 border-b">
          <h3 className="font-medium">Notifications</h3>
          <div className="flex items-center gap-1">
            <Button 
              variant="ghost" 
              size="sm"
              className="h-8 px-2 text-xs flex items-center"
              onClick={handleMarkAllAsRead}
              disabled={unreadCount === 0}
            >
              <Check className="h-3.5 w-3.5 mr-1" />
              Mark all read
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[300px]">
          <AnimatePresence>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <NotificationItem 
                    notification={notification} 
                    onRead={() => handleMarkAsRead(notification.id)}
                  />
                </motion.div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
                <Bell className="h-8 w-8 text-muted-foreground mb-2 opacity-50" />
                <p className="text-sm text-muted-foreground">No notifications yet</p>
              </div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationCenter;
