import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Upload } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface UploadProgressCardProps {
  uploadProgress: number;
  isUploading: boolean;
}

export function UploadProgressCard({ uploadProgress, isUploading }: UploadProgressCardProps) {
  if (!isUploading) return null;
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-900 dark:text-white">
          <Upload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>Upload Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Uploading sales_data_new.csv</span>
            <span className="text-gray-600 dark:text-gray-400">{uploadProgress}%</span>
          </div>
          <Progress value={uploadProgress} className="h-2" />
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Processing file and validating data structure…
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 