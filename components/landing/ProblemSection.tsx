import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';

interface Problem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ProblemSectionProps {
  problems: Problem[];
}

export function ProblemSection({ problems }: ProblemSectionProps) {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tired of Stockouts or Inefficient Routes?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Common challenges that cost your business money every day
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 dark:bg-slate-800 dark:border-slate-700 border-blue-100 dark:border-blue-800"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{problem.title}</CardTitle>
                <CardDescription>{problem.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 