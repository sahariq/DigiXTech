import React from 'react';
import { KpiCard } from './KpiCard';

interface Kpi {
  title: string;
  value: string;
  change: string;
  changeType: string;
  icon: React.ElementType;
  color: string;
}

interface KpiGridProps {
  kpis: Kpi[];
}

export function KpiGrid({ kpis }: KpiGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {kpis.map((kpi, index) => (
        <KpiCard key={index} {...kpi} />
      ))}
    </div>
  );
} 