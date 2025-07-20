import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface KpiCardProps {
  title: string;
  value: string;
  change: string;
  changeType: string;
  icon: React.ElementType;
  color: string;
}

export function KpiCard({ title, value, change, changeType, icon: Icon, color }: KpiCardProps) {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">{title}</CardTitle>
        <Icon className={`w-4 h-4 ${color}`} />
      </CardHeader>
      <CardContent>
        <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="flex items-center space-x-2 mt-1">
          <Badge variant="secondary" className={changeType === 'positive' ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400' : 'bg-gray-100 dark:bg-slate-800/40 text-gray-800 dark:text-gray-300'}>
            {change}
          </Badge>
          <span className="text-xs text-gray-500 dark:text-gray-400">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
} 