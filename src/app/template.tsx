"use client"
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.3, 
          ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier curve
          staggerChildren: 0.05,
          type: "spring",
          damping: 20,
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 