import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Navigation } from 'lucide-react';

interface RoutesHeaderProps {
  title: string;
  subtitle: string;
}

export function RoutesHeader({ title, subtitle }: RoutesHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="dark:border-slate-600">
          <Download className="w-4 h-4 mr-2" />
          Export Routes
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
          <Navigation className="w-4 h-4 mr-2" />
          Optimize Routes
        </Button>
      </div>
    </header>
  );
} 