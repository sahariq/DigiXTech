import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Shield, Database } from 'lucide-react';

export function DataPrivacyCard() {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
          <span>Data & Privacy</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Manage your data and privacy settings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-start gap-2">
            <Database className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300">Data Retention</p>
              <p className="text-xs text-blue-700 dark:text-blue-400">
                Your data is retained for analysis purposes. You can request deletion at any time.
              </p>
            </div>
          </div>
        </div>
        {[
          { title: 'Data Processing', desc: 'Allow processing for optimization', default: true },
          { title: 'Analytics', desc: 'Help improve our services', default: true },
          { title: 'Marketing', desc: 'Receive product updates', default: false },
        ].map((opt, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{opt.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{opt.desc}</p>
            </div>
            <Switch defaultChecked={opt.default} />
          </div>
        ))}
        <Separator className="dark:bg-slate-600" />
        <div className="space-y-2">
          <Button variant="outline" className="w-full hover:bg-blue-50 dark:hover:bg-slate-700/50">
            <Database className="w-4 h-4 mr-2" /> Export My Data
          </Button>
          <Button
            variant="outline"
            className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <Shield className="w-4 h-4 mr-2" /> Delete Account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 