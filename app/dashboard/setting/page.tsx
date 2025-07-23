'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  Key,
  Bell,
  Shield,
  User,
  Database,
  Copy,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { SettingsHeader } from '@/components/setting/SettingsHeader';
import { ApiKeyManagementCard } from '@/components/setting/ApiKeyManagementCard';
import { AccountSettingsCard } from '@/components/setting/AccountSettingsCard';
import { NotificationSettingsCard } from '@/components/setting/NotificationSettingsCard';
import { DataPrivacyCard } from '@/components/setting/DataPrivacyCard';
import { SystemInfoCard } from '@/components/setting/SystemInfoCard';

export default function SettingsPage() {
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    forecast: true,
    alerts: false,
    reports: true,
  });

  const apiKey = 'sk_live_1234567890abcdef1234567890abcdef';

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    // TODO: surface toast/snackbar feedback
  };

  const handleRegenerateKey = () => {
    // TODO: integrate mutation
    console.log('Regenerating API key...');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 sm:p-8 space-y-6 max-w-6xl mx-auto">
      <SettingsHeader />
      {/* Title and subtitle in body */}
      <div className="mb-2">
        <h1 className="truncate text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white m-0">
          Settings
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 m-0">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Account Settings */}
      <div className="mx-auto w-full max-w-4xl">
        <Card className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-blue-600" />
              <span>Account Settings</span>
            </CardTitle>
            <CardDescription>
              Manage your profile and account preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Name
              </label>
              <input
                type="text"
                defaultValue="Acme Logistics Corp"
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="admin@acmelogistics.com"
                className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Zone
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white">
                <option>UTC-05:00 (Eastern Time)</option>
                <option>UTC-06:00 (Central Time)</option>
                <option>UTC-07:00 (Mountain Time)</option>
                <option>UTC-08:00 (Pacific Time)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Language
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:text-white">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* No additional cards below Account Settings */}
    </div>
  );
}
