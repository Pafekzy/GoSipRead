
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SignInForm from '@/components/auth/SignInForm';
import { Brain } from 'lucide-react';

const SignIn = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - form */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-8">
        <Link to="/" className="mb-8 flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">
            GoSip<span className="text-accent">Read</span>
          </span>
        </Link>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md"
        >
          <SignInForm />
        </motion.div>
      </div>
      
      {/* Right side - image/info (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary/5 to-accent/20">
        <div className="flex flex-col items-center justify-center p-12 w-full">
          <div className="max-w-md text-center space-y-6">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Grow with Every Moment</h2>
            <p className="text-muted-foreground">
              Sign in to continue your personal growth journey with AI-powered microlearning sessions tailored to your goals.
            </p>
            
            <div className="pt-6">
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  "Personalized learning paths",
                  "AI-powered insights",
                  "Track your progress",
                  "Daily micro-challenges",
                  "Build lasting habits",
                  "Digital wellness tools"
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center text-center">
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
