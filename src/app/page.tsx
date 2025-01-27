"use client"
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  
  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center justify-center md:-mt-64">
        <div className="w-full h-full max-w-full">
          <DotLottieReact
            src="/animations/home_cat.lottie"
            loop
            autoplay
            style={{ width: '750px', height: '375px' }}
          />
        </div>
        <Button onClick={() => {
          router.push('/working_page?autostart=true');
        }} variant="start" />
      </div>
    </motion.div>
  )
}