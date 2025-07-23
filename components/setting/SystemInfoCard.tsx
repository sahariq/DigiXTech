import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export function SystemInfoCard() {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">System Information</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Current system status and version information
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Platform Version', value: 'v2.1.3' },
            { label: 'API Version', value: 'v1.4.2' },
            { label: 'Last Update', value: 'Jan 15, 2025' },
          ].map((info, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">{info.label}</p>
              <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
            </div>
          ))}
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full" />
              <span className="font-medium text-green-600 dark:text-green-400">
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 