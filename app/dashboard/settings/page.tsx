'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  Settings, 
  Key,
  Bell,
  Shield,
  User,
  Database,
  Mail,
  Copy,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function SettingsPage() {
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    forecast: true,
    alerts: false,
    reports: true
  });

  const apiKey = 'sk_live_1234567890abcdef1234567890abcdef';

  const handleCopyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    // Show success message
  };

  const handleRegenerateKey = () => {
    // Handle API key regeneration
    console.log('Regenerating API key...');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Key Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Key className="w-5 h-5 text-blue-600" />
              <span>API Key Management</span>
            </CardTitle>
            <CardDescription>
              Manage your API key for external integrations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Key
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded-md font-mono text-sm">
                  {apiKeyVisible ? apiKey : '•'.repeat(apiKey.length)}
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setApiKeyVisible(!apiKeyVisible)}
                >
                  {apiKeyVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleCopyApiKey}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Active
                </Badge>
                <span className="text-sm text-gray-600">Created: Jan 15, 2025</span>
              </div>
              <p className="text-xs text-gray-500">
                Last used: 2 hours ago
              </p>
            </div>
            
            <Separator />
            
            <Button 
              variant="outline" 
              onClick={handleRegenerateKey}
              className="w-full"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Regenerate Key
            </Button>
            
            <div className="p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Security Notice</p>
                  <p className="text-xs text-yellow-700">
                    Keep your API key secure and never share it publicly. Regenerating will invalidate the current key.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5 text-green-600" />
              <span>Account Settings</span>
            </CardTitle>
            <CardDescription>
              Manage your profile and account preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                defaultValue="Acme Logistics Corp"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="admin@acmelogistics.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>UTC-05:00 (Eastern Time)</option>
                <option>UTC-06:00 (Central Time)</option>
                <option>UTC-07:00 (Mountain Time)</option>
                <option>UTC-08:00 (Pacific Time)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Save Changes
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5 text-purple-600" />
              <span>Notifications</span>
            </CardTitle>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <Switch 
                checked={notifications.email}
                onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Forecast Alerts</p>
                <p className="text-sm text-gray-600">Get notified when forecasts are ready</p>
              </div>
              <Switch 
                checked={notifications.forecast}
                onCheckedChange={(checked) => setNotifications({...notifications, forecast: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">System Alerts</p>
                <p className="text-sm text-gray-600">Important system notifications</p>
              </div>
              <Switch 
                checked={notifications.alerts}
                onCheckedChange={(checked) => setNotifications({...notifications, alerts: checked})}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Weekly Reports</p>
                <p className="text-sm text-gray-600">Receive weekly performance reports</p>
              </div>
              <Switch 
                checked={notifications.reports}
                onCheckedChange={(checked) => setNotifications({...notifications, reports: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Notification Email
              </label>
              <input
                type="email"
                defaultValue="notifications@acmelogistics.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-600" />
              <span>Data & Privacy</span>
            </CardTitle>
            <CardDescription>
              Manage your data and privacy settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <Database className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-800">Data Retention</p>
                  <p className="text-xs text-blue-700">
                    Your data is retained for analysis purposes. You can request deletion at any time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Data Processing</p>
                  <p className="text-sm text-gray-600">Allow processing for optimization</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Analytics</p>
                  <p className="text-sm text-gray-600">Help improve our services</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Marketing</p>
                  <p className="text-sm text-gray-600">Receive product updates</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full">
                <Database className="w-4 h-4 mr-2" />
                Export My Data
              </Button>
              <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
                <Shield className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Information */}
      <Card>
        <CardHeader>
          <CardTitle>System Information</CardTitle>
          <CardDescription>
            Current system status and version information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Platform Version</p>
              <p className="font-medium">v2.1.3</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">API Version</p>
              <p className="font-medium">v1.4.2</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Last Update</p>
              <p className="font-medium">Jan 15, 2025</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Status</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-green-600">All Systems Operational</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}