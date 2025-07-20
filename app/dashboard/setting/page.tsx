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
    <div className="p-6 space-y-6 mt-14 md:mt-0">
      {/* Header */}
      <SettingsHeader title="Settings" subtitle="Manage your account settings and preferences" />
      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ApiKeyManagementCard
          apiKey={apiKey}
          apiKeyVisible={apiKeyVisible}
          setApiKeyVisible={setApiKeyVisible}
          handleCopyApiKey={handleCopyApiKey}
          handleRegenerateKey={handleRegenerateKey}
        />
        <AccountSettingsCard />
        <NotificationSettingsCard notifications={notifications} setNotifications={setNotifications} />
        <DataPrivacyCard />
      </div>
      <SystemInfoCard />
    </div>
  );
}
