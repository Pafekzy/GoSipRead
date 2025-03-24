
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Calendar, Activity, User, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/sign-up';
  
  // This would be replaced with actual auth state management
  useEffect(() => {
    // Demo auth check
    const checkAuth = () => {
      const isAuth = 
        location.pathname === '/dashboard' || 
        location.pathname === '/microlearning' || 
        location.pathname === '/digital-wellness' || 
        location.pathname === '/profile';
      setIsAuthenticated(isAuth);
    };
    
    checkAuth();
  }, [location.pathname]);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Don't show NavBar on auth pages
  if (isAuthPage) return null;

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: Brain },
    { name: 'Learning', path: '/microlearning', icon: BookOpen },
    { name: 'Wellness', path: '/digital-wellness', icon: Activity },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || !isHomePage ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">
                GoSip<span className="text-accent">Read</span>
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            {isAuthenticated && navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-1 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <link.icon size={16} />
                <span>{link.name}</span>
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent"
                    layoutId="navbar-indicator"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            {!isAuthenticated && (
              <>
                <Button variant="outline" asChild>
                  <Link to="/sign-in">
                    <LogIn className="mr-2 h-4 w-4" />
                    Log in
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/sign-up">Get Started</Link>
                </Button>
              </>
            )}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default NavBar;
