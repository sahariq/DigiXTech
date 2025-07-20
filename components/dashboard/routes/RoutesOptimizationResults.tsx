import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface OptimizationResult {
  metric: string;
  before: string;
  after: string;
  improvement: string;
  savings: string;
}

interface ActiveRoute {
  vehicle: string;
  driver: string;
  stops: number;
  completed: number;
  eta: string;
  efficiency: number;
}

interface RoutesOptimizationResultsProps {
  optimizationResults: OptimizationResult[];
  activeRoutes: ActiveRoute[];
}

export function RoutesOptimizationResults({ optimizationResults, activeRoutes }: RoutesOptimizationResultsProps) {
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">
          Optimization Results
        </CardTitle>
        <CardDescription className="dark:text-gray-400">
          Performance improvements from route optimization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Metrics cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {optimizationResults.map((result) => (
              <div
                key={result.metric}
                className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 rounded-lg"
              >
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  {result.metric}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Before:</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {result.before}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-300">After:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {result.after}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t dark:border-slate-600">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-900 dark:bg-blue-900/30 dark:text-blue-400"
                    >
                      {result.improvement}改善
                    </Badge>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {result.savings}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Route efficiency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="space-y-4">
              <h3 className="font-medium text-gray-900 dark:text-white">
                Route Efficiency by Vehicle
              </h3>
              <div className="space-y-3">
                {activeRoutes.map((route) => (
                  <div
                    key={route.vehicle}
                    className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg"
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {route.vehicle}
                    </span>
                    <div className="flex items-center gap-2">
                      <Progress value={route.efficiency} className="w-20 h-2" />
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {route.efficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Daily performance */}
            <section className="space-y-4">
              <h3 className="font-medium text-gray-900 dark:text-white">Daily Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Deliveries Today', value: '45' },
                  { label: 'On‑time Rate', value: '92%' },
                  { label: 'Total Distance', value: '347km' },
                  { label: 'Fuel Cost', value: '$180' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {value}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 