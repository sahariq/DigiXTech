import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function PerformanceOverviewSection() {
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">Performance Overview</CardTitle>
        <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          Track your optimization performance over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Cost Savings</span>
              <span className="text-sm sm:text-base font-bold text-green-600 dark:text-green-400">+$24,500</span>
            </div>
            <Progress value={78} className="h-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400">78% improvement this quarter</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Efficiency</span>
              <span className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400">87%</span>
            </div>
            <Progress value={87} className="h-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400">Above target performance</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">Forecast Accuracy</span>
              <span className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400">92%</span>
            </div>
            <Progress value={92} className="h-2" />
            <p className="text-xs text-gray-500 dark:text-gray-400">Excellent prediction quality</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 