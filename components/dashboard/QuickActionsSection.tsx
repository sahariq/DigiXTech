import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface QuickAction {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  href: string;
}

interface QuickActionsSectionProps {
  quickActions: QuickAction[];
}

export function QuickActionsSection({ quickActions }: QuickActionsSectionProps) {
  return (
    <Card className="bg-white dark:bg-slate-800 lg:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">Quick Actions</CardTitle>
        <CardDescription className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          Jump to your most used optimization tools
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-700 hover:shadow-md dark:hover:shadow-slate-900/30 transition-all duration-200 cursor-pointer group"
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color} group-hover:scale-105 transition-transform`}
                  >
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-1 text-base md:text-lg">
                      {action.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                      {action.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 