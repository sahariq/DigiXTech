'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict future demand using advanced machine learning algorithms'
    },
    {
      icon: Package,
      title: 'Inventory Optimization',
      description: 'Optimize stock levels to reduce costs and prevent stockouts'
    },
    {
      icon: Map,
      title: 'Route & Delivery Scheduling',
      description: 'Find optimal delivery routes and schedules for maximum efficiency'
    },
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'Leverage AI for complex pattern recognition and predictions'
    },
    {
      icon: RotateCcw,
      title: 'Scenario Simulation',
      description: 'Test different scenarios before implementing changes'
    },
    {
      icon: BarChart3,
      title: 'Visual Dashboards',
      description: 'Interactive dashboards with real-time insights and analytics'
    }
  ];

  const problems = [
    {
      icon: DollarSign,
      title: 'Unpredictable demand',
      description: 'Struggling with demand volatility'
    },
    {
      icon: AlertTriangle,
      title: 'Out-of-stock situations',
      description: 'Lost sales due to stockouts'
    },
    {
      icon: Package,
      title: 'High holding costs',
      description: 'Excessive inventory costs'
    },
    {
      icon: Truck,
      title: 'Inefficient delivery routes',
      description: 'Wasted time and fuel costs'
    },
    {
      icon: TrendingDown,
      title: 'Lack of data insights',
      description: 'Poor decision-making without data'
    }
  ];

  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Data',
      description: 'Import your sales, inventory, and delivery data'
    },
    {
      icon: Settings,
      title: 'Choose a Module',
      description: 'Select forecasting, inventory, or routing optimization'
    },
    {
      icon: Settings,
      title: 'Configure Parameters',
      description: 'Set your specific business parameters and constraints'
    },
    {
      icon: Play,
      title: 'Run Analysis',
      description: 'Let our AI algorithms process your data'
    },
    {
      icon: Eye,
      title: 'See Results',
      description: 'Get actionable insights and recommendations'
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Digi-X-Tech</span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" className="hidden sm:flex">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Logistics &<br />
            <span className="text-blue-600">E-Commerce Optimization</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Boost efficiency and profitability with forecasting, routing, and inventory AI modules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get Free Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Join Beta
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tired of Stockouts or Inefficient Routes?
            </h2>
            <p className="text-xl text-gray-600">
              Common challenges that cost your business money every day
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <CardDescription>{problem.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Modules Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Modules
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools to optimize every aspect of your supply chain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our platform in just 5 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Join the Beta
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights and updates from our AI research team
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Digi-X-Tech</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">
                Email: hello@digi-x-tech.com
              </p>
              <p className="text-gray-400">
                © 2025 Digi-X-Tech. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}