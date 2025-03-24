
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SignUpForm from '@/components/auth/SignUpForm';
import { Brain } from 'lucide-react';

const SignUp = () => {
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
          <SignUpForm />
        </motion.div>
      </div>
      
      {/* Right side - image/info (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-accent/5 to-primary/20">
        <div className="flex flex-col items-center justify-center p-12 w-full">
          <div className="max-w-md text-center space-y-6">
            <div className="h-24 w-24 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Brain className="h-12 w-12 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Begin Your Growth Journey</h2>
            <p className="text-muted-foreground">
              Join thousands of users who are transforming their lives with just 5-10 minutes of daily focused growth activities.
            </p>
            
            <div className="pt-6 space-y-4">
              <h3 className="font-medium">What our users are saying:</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <p className="italic">"I've been using GoSipRead for just 3 weeks and have already noticed significant improvements in my critical thinking and digital wellness habits."</p>
                <p className="mt-4 font-medium">— Sarah K.</p>
              </div>
              
              <div className="flex justify-center space-x-2 pt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-medium">4.9/5 average rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
