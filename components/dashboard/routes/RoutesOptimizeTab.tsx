import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Map } from 'lucide-react';

export function RoutesOptimizeTab() {
  return (
    <section className="space-y-4">
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="font-medium text-blue-900 dark:text-blue-200 mb-2">
          Optimization Progress
        </h3>
        <Progress value={85} className="mb-2" />
        <p className="text-sm text-blue-700 dark:text-blue-300">
          Processing 156 delivery points...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Optimized Routes', value: '12' },
          { label: 'Distance Saved', value: '-12%' },
          { label: 'Cost Savings', value: '$2,140' },
        ].map(({ label, value }, i) => (
          <div
            key={i}
            className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
          >
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {value}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="h-64 bg-gray-50 dark:bg-slate-900/40 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">Optimized route map</p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Interactive map will appear here
          </p>
        </div>
      </div>
    </section>
  );
} 