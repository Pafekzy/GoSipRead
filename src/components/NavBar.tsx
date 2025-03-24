import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { User2 } from 'lucide-react';
import NotificationCenter from './NotificationCenter';

const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background border-b sticky top-0 z-50"
    >
      <div className="container flex items-center justify-between h-16">
        {/* Left side - Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">
            GoSip<span className="text-accent">Read</span>
          </span>
        </Link>
        
        {/* Right side - Buttons */}
        <div className="flex items-center space-x-2">
          <NotificationCenter />
          <Button variant="ghost" size="sm" asChild>
            <Link to="/profile">
              <User2 className="h-4 w-4 mr-2" />
              Profile
            </Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
