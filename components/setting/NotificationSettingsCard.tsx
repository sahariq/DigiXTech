import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Bell } from 'lucide-react';

interface NotificationSettingsCardProps {
  notifications: {
    email: boolean;
    forecast: boolean;
    alerts: boolean;
    reports: boolean;
  };
  setNotifications: (n: NotificationSettingsCardProps['notifications']) => void;
}

export function NotificationSettingsCard({ notifications, setNotifications }: NotificationSettingsCardProps) {
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span>Notifications</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Configure how you receive notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          {
            id: 'email',
            title: 'Email Notifications',
            desc: 'Receive updates via email',
          },
          {
            id: 'forecast',
            title: 'Forecast Alerts',
            desc: 'Get notified when forecasts are ready',
          },
          {
            id: 'alerts',
            title: 'System Alerts',
            desc: 'Important system notifications',
          },
          {
            id: 'reports',
            title: 'Weekly Reports',
            desc: 'Receive weekly performance reports',
          },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
            <Switch
              checked={notifications[item.id as keyof typeof notifications]}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, [item.id]: checked })
              }
            />
          </div>
        ))}
        <Separator className="dark:bg-slate-600" />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Notification Email
          </label>
          <input
            type="email"
            defaultValue="notifications@acmelogistics.com"
            className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
          />
        </div>
      </CardContent>
    </Card>
  );
} 