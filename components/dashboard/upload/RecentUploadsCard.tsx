import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Trash2 } from 'lucide-react';

interface RecentUpload {
  filename: string;
  type: string;
  size: string;
  uploaded: string;
  status: string;
  records: string;
}

interface RecentUploadsCardProps {
  recentUploads: RecentUpload[];
  getStatusIcon: (status: string) => React.ReactNode;
  getStatusColor: (status: string) => string;
}

export function RecentUploadsCard({ recentUploads, getStatusIcon, getStatusColor }: RecentUploadsCardProps) {
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Recent Uploads</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Your uploaded files and their processing status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentUploads.map((upload, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-gray-50 dark:bg-slate-900/20 rounded-lg"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white truncate max-w-[140px] sm:max-w-none">
                    {upload.filename}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs dark:border-slate-600 dark:text-gray-300">
                      {upload.type}
                    </Badge>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {upload.size} • {upload.uploaded}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="text-right">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(upload.status)}
                    <Badge variant="secondary" className={`${getStatusColor(upload.status)} text-xs`}>
                      {upload.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {upload.records} records
                  </p>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 