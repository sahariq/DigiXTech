import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface UploadHeaderProps {
  title: string;
  subtitle: string;
}

export function UploadHeader({ title, subtitle }: UploadHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>
      </div>
      <Button variant="outline" className="self-start sm:self-auto">
        <Download className="w-4 h-4 mr-2" />
        Download Templates
      </Button>
    </div>
  );
} 