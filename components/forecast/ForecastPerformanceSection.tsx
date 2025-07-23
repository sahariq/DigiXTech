import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function ForecastPerformanceSection() {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">
          Forecast Performance
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Track accuracy and model performance insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Accuracy by Product Category */}
          <section className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Accuracy by Product Category</h3>
            <div className="space-y-3">
              {[
                { label: 'Electronics', value: 94 },
                { label: 'Clothing', value: 87 },
                { label: 'Home & Garden', value: 91 },
                { label: 'Sports', value: 89 },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}%</span>
                </div>
              ))}
            </div>
          </section>
          {/* Model Performance Metrics */}
          <section className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Model Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'High accuracy achieved', value: '94%', sub: 'Electronics' },
                { label: 'Review recommended', value: '87%', sub: 'Clothing' },
                { label: 'Model updated', value: 'ARIMA', sub: 'Retrained' },
                { label: 'Avg Accuracy', value: '90%', sub: 'All Products' },
              ].map(({ label, value, sub }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20"
                >
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{label}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{sub}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
} 