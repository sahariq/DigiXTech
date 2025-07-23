import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Key, Eye, EyeOff, Copy, RotateCcw, CheckCircle, AlertCircle } from 'lucide-react';

interface ApiKeyManagementCardProps {
  apiKey: string;
  apiKeyVisible: boolean;
  setApiKeyVisible: (v: boolean) => void;
  handleCopyApiKey: () => void;
  handleRegenerateKey: () => void;
}

export function ApiKeyManagementCard({ apiKey, apiKeyVisible, setApiKeyVisible, handleCopyApiKey, handleRegenerateKey }: ApiKeyManagementCardProps) {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Key className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>API Key Management</span>
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Manage your API key for external integrations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* API key field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            API Key
          </label>
          <div className="flex items-center gap-2">
            <div className="flex-1 px-3 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-md font-mono text-sm text-gray-900 dark:text-gray-200 overflow-x-auto">
              {apiKeyVisible ? apiKey : '•'.repeat(apiKey.length)}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 dark:hover:bg-slate-700/50"
              onClick={() => setApiKeyVisible(!apiKeyVisible)}
            >
              {apiKeyVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 dark:hover:bg-slate-700/50"
              onClick={handleCopyApiKey}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
        {/* meta */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              Active
            </Badge>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Created: Jan 15, 2025
            </span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Last used: 2 hours ago</p>
        </div>
        <Separator className="dark:bg-slate-600" />
        <Button
          variant="outline"
          onClick={handleRegenerateKey}
          className="w-full hover:bg-blue-50 dark:hover:bg-slate-700/50"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Regenerate Key
        </Button>
        <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-300">
                Security Notice
              </p>
              <p className="text-xs text-yellow-700 dark:text-yellow-400">
                Keep your API key secure and never share it publicly. Regenerating will invalidate the current key.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 