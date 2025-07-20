import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

interface RecentActivity {
  action: string;
  module: string;
  time: string;
}

interface RecentActivitySectionProps {
  recentActivities: RecentActivity[];
}

export function RecentActivitySection({ recentActivities }: RecentActivitySectionProps) {
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg md:text-xl text-gray-900 dark:text-white">
          <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white">{activity.action}</p>
                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{activity.module}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 