import React from 'react';

interface ForecastHeaderProps {
  title: string;
  subtitle: string;
}

export function ForecastHeader({ title, subtitle }: ForecastHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>
      </div>
    </header>
  );
} 