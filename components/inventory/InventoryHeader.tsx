import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Settings } from 'lucide-react';

interface InventoryHeaderProps {
  title: string;
  subtitle: string;
}

export function InventoryHeader({ title, subtitle }: InventoryHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="dark:bg-slate-800/50 dark:border-slate-600">
          <Download className="w-4 h-4 mr-2" /> Export Report
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
          <Settings className="w-4 h-4 mr-2" /> Run Optimization
        </Button>
      </div>
    </header>
  );
} 