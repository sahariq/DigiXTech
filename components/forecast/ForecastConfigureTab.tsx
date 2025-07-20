import React from 'react';
import { Button } from '@/components/ui/button';

export function ForecastConfigureTab() {
  return (
    <div className="space-y-4 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          {
            label: 'Forecast Period',
            options: ['30 days', '60 days', '90 days', '180 days'],
            selected: '90 days',
          },
          {
            label: 'Confidence Level',
            options: ['80%', '85%', '90%', '95%'],
            selected: '90%',
          },
          {
            label: 'Seasonality',
            options: ['Auto-detect', 'Weekly', 'Monthly', 'Quarterly'],
            selected: 'Monthly',
          },
          {
            label: 'Model Type',
            options: ['ARIMA', 'Prophet', 'LSTM', 'Ensemble'],
            selected: 'ARIMA',
          },
        ].map(({ label, options, selected }) => (
          <div key={label} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {label}
            </label>
            <select
              defaultValue={selected}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
        Run Forecast Analysis
      </Button>
    </div>
  );
} 