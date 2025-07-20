import React from 'react';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mt-12">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
      </div>
    </div>
  );
} 