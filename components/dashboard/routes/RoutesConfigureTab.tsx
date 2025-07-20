import React from 'react';
import { Button } from '@/components/ui/button';

export function RoutesConfigureTab() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: 'Max Tour Time (hours)', defaultValue: '8' },
          { label: 'Vehicle Capacity (kg)', defaultValue: '1000' },
          { label: 'Number of Vehicles', defaultValue: '12' },
          { label: 'Start Time', defaultValue: '08:00', type: 'time' },
        ].map(({ label, defaultValue, type = 'number' }, i) => (
          <div key={i}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {label}
            </label>
            <input
              type={type}
              defaultValue={defaultValue}
              className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
            />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[
          {
            id: 'traffic',
            label: 'Consider real‑time traffic',
            defaultChecked: true,
          },
          { id: 'timewindows', label: 'Respect delivery time windows' },
          { id: 'priority', label: 'Prioritize high‑value deliveries' },
        ].map(({ id, label, defaultChecked }) => (
          <div key={id} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={id}
              defaultChecked={defaultChecked}
              className="rounded border-gray-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500"
            />
            <label
              htmlFor={id}
              className="text-sm text-gray-700 dark:text-gray-300"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        Configure Optimization
      </Button>
    </div>
  );
} 