import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function ForecastPerformanceSection() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-gray-100">
          Forecast Performance
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Track accuracy and model performance over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Accuracy by Category */}
          <section className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Accuracy by Product Category
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Electronics', value: 94 },
                { name: 'Clothing', value: 87 },
                { name: 'Home & Garden', value: 91 },
                { name: 'Sports', value: 89 },
              ].map(({ name, value }) => (
                <div
                  key={name}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-900/10"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {name}
                  </span>
                  <div className="flex items-center gap-2">
                    <Progress value={value} className="w-20 h-2" />
                    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      {value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Model Performance Alerts */}
          <section className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Model Performance Alerts
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: CheckCircle,
                  title: 'High accuracy achieved',
                  message: 'Electronics category: 94% accuracy',
                },
                {
                  icon: AlertCircle,
                  title: 'Review recommended',
                  message: 'Clothing category accuracy dropped to 87%',
                },
                {
                  icon: CheckCircle,
                  title: 'Model updated',
                  message: 'ARIMA model retrained with new data',
                },
              ].map(({ icon: Icon, title, message }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20"
                >
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      {title}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-300">
                      {message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
} 