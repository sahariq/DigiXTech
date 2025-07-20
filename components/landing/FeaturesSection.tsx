import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container max-w-screen-xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Powerful AI Modules</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">Comprehensive tools to optimize every aspect of your supply chain</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-slate-800 dark:border-slate-700 border-blue-100 dark:border-blue-800">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm md:text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 