"use client"
import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from "react-icons/io5";
import { motion } from 'framer-motion';

export default function RestingPage() {
  const router = useRouter();
  // State variables for timer
  const [timeLeft, setTimeLeft] = useState(5 * 60); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  // Add useEffect for autostart
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('autostart') === 'true') {
      setIsRunning(true);
    }
  }, []);

  // Timer logic using useEffect
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // When break timer ends, redirect back to working page
      router.push('/working_page?autostart=true');
    }

    return () => clearInterval(intervalId);
  }, [isRunning, timeLeft, router]);

  // Format time as mm:ss
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };


  const handleBack = () => {
    router.back();
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Back Arrow Button */}
      <button 
        onClick={handleBack}
        className="absolute top-8 left-8 p-2 text-3xl hover:opacity-70 transition-opacity"
        aria-label="Go back"
      >
        <IoArrowBack />
      </button>

      <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 md:-mt-32 lg:-mt-16">
        <div className="w-full h-full">
          <DotLottieReact
            src="/animations/resting_cat.lottie"
            loop
            autoplay
            style={{ 
              width: '100%', 
              maxWidth: '1000px',
              height: 'auto',
              minHeight: '375px'
            }}
          />
        </div>
        
        {/* Timer Display with SVG Box */}
        <div className="relative mb-6 md:mb-8 mt-4 lg:mt-8">
          <div className="relative">
            <svg width="223" height="95" viewBox="0 0 223 95" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="223" height="95" rx="47.5" fill="#FFFBFB"/>
              <foreignObject width="223" height="95">
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-black">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
        
        {/* Timer Status */}
        <div className="text-lg md:text-xl lg:text-2xl mb-4">
          Break Time!
        </div>
        <Button onClick={() => {
          router.push('/');
        }} variant="stop" />
      </div>
    </motion.div>
  );
}