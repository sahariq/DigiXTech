import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function InventoryAnalyticsCard() {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Inventory Analytics</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Detailed analysis and performance insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stock distribution */}
          <section className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Stock Distribution</h3>
            <div className="space-y-3">
              {[
                { label: 'Overstock', value: 23 },
                { label: 'Optimal', value: 69 },
                { label: 'Understock', value: 8 },
              ].map((dist) => (
                <div
                  key={dist.label}
                  className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
                >
                  <span className="text-sm text-gray-600 dark:text-white">
                    {dist.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <Progress value={dist.value} className="w-20 h-2" />
                    <span className="text-3xl font-bold text-blue-600 dark:text-white">
                      {dist.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* KPI metrics */}
          <section className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Inventory Turnover', value: '4.2x' },
                { label: 'Service Level', value: '95%' },
                { label: 'Avg Lead Time', value: '7.3 days' },
                { label: 'Total Value', value: '$2.4M' },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20"
                >
                  <p className="text-2xl font-bold text-blue-600 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-white">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  );
} 