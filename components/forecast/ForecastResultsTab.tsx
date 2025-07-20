import React from 'react';
import { BarChart3 } from 'lucide-react';

export function ForecastResultsTab() {
  return (
    <div className="space-y-6 pt-4">
      <div className="h-64 bg-gray-50 dark:bg-gray-800/40 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <BarChart3 className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            Forecast chart will appear here
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Run analysis to see predictions
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            value: '1,247',
            label: 'Products Analyzed',
            bg: 'blue',
          },
          {
            value: '92%',
            label: 'Avg Accuracy',
            bg: 'green',
          },
          {
            value: '90',
            label: 'Days Predicted',
            bg: 'purple',
          },
        ].map(({ value, label, bg }) => (
          <div
            key={label}
            className={`text-center p-4 rounded-lg bg-${bg}-50 dark:bg-${bg}-900/40`}
          >
            <p className={`text-2xl font-bold text-${bg}-600 dark:text-${bg}-300`}>{value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 