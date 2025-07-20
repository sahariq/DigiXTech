import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface HeroSectionProps {
  cursor: { x: number; y: number };
}

export function HeroSection({ cursor }: HeroSectionProps) {
  return (
    <section className="py-40 px-4 relative overflow-hidden">
      {/* Framer‑motion entrance */}
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Badge variant="secondary" className="mb-4">
            AI-Powered Solutions
          </Badge>
        </motion.div>
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          AI-Powered Logistics &<br />
          <span className="text-blue-600">E-Commerce Optimization</span>
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        >
          Boost efficiency and profitability with forecasting, routing, and inventory AI modules.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Free Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
            Join Beta
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
} 