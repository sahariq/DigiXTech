'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  TrendingUp,
  Package,
  Map,
  Brain,
  RotateCcw,
  BarChart3,
  DollarSign,
  AlertTriangle,
  Truck,
  TrendingDown,
  Database,
  Upload,
  Settings,
  Play,
  Eye,
  Mail,
  ArrowRight,
  CheckCircle,
  User,
} from 'lucide-react';

import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { NewsletterSection } from '@/components/landing/NewsletterSection';
import { FooterSection } from '@/components/landing/FooterSection';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // --------------- cursor follower ---------------
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict future demand using advanced machine learning algorithms',
    },
    {
      icon: Package,
      title: 'Inventory Optimization',
      description: 'Optimize stock levels to reduce costs and prevent stockouts',
    },
    {
      icon: Map,
      title: 'Route & Delivery Scheduling',
      description: 'Find optimal delivery routes and schedules for maximum efficiency',
    },
  ];

  const problems = [
    { icon: DollarSign, title: 'Unpredictable demand', description: 'Struggling with demand volatility' },
    { icon: AlertTriangle, title: 'Out-of-stock situations', description: 'Lost sales due to stockouts' },
    { icon: Package, title: 'High holding costs', description: 'Excessive inventory costs' },
  ];

  const steps = [
    { icon: Upload, title: 'Upload Your Data', description: 'Import your sales, inventory, and delivery data' },
    { icon: Settings, title: 'Choose a Module', description: 'Select forecasting, inventory, or routing optimization' },
    { icon: Settings, title: 'Configure Parameters', description: 'Set your specific business parameters and constraints' },
    { icon: Play, title: 'Run Analysis', description: 'Let our AI algorithms process your data' },
    { icon: Eye, title: 'See Results', description: 'Get actionable insights and recommendations' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* cursor follower */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 w-32 h-32 rounded-full bg-blue-500/20 dark:bg-blue-400/20 blur-xl"
        animate={{ x: cursor.x - 64, y: cursor.y - 64 }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 200, damping: 20 }}
      />

      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Digi-X-Tech</span>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <User className="h-4 w-4" />
              </Button>
              <Link href="/dashboard">
                <Button variant="outline" className="hidden sm:flex">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Animated blobs and particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse" />

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce-slow" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-500 rounded-full animate-bounce-slow delay-300" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-600 rounded-full animate-bounce-slow delay-700" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce-slow delay-1000" />
      </div>

      {/* Hero Section */}
      <HeroSection cursor={cursor} />

      {/* Problem Section */}
      <ProblemSection problems={problems} />

      {/* Features Section */}
      <FeaturesSection features={features} />

      {/* How It Works Section */}
      <HowItWorksSection steps={steps} />

      {/* CTA Section */}
      <CtaSection />

      {/* Newsletter Section */}
      <NewsletterSection email={email} setEmail={setEmail} handleNewsletterSubmit={handleNewsletterSubmit} />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}