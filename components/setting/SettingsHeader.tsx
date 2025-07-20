import React from 'react';

interface SettingsHeaderProps {
  title: string;
  subtitle: string;
}

export function SettingsHeader({ title, subtitle }: SettingsHeaderProps) {
  return (
    <header className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{subtitle}</p>
      </div>
    </header>
  );
} 