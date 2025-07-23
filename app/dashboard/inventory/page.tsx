'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Package,
  Settings,
  AlertTriangle,
  CheckCircle,
  Download,
} from 'lucide-react';
import { InventoryHeader } from '@/components/inventory/InventoryHeader';
import { InventoryOptimizationCard } from '@/components/inventory/InventoryOptimizationCard';
import { InventoryAnalyticsCard } from '@/components/inventory/InventoryAnalyticsCard';

export default function InventoryPage() {
  const criticalItems = [
    { product: 'Product Alpha', stock: 45, reorderPoint: 50, status: 'low', demand: 125 },
    { product: 'Product Beta', stock: 12, reorderPoint: 25, status: 'critical', demand: 89 },
    { product: 'Product Gamma', stock: 8, reorderPoint: 15, status: 'critical', demand: 67 },
    { product: 'Product Delta', stock: 78, reorderPoint: 100, status: 'low', demand: 156 },
    { product: 'Product Epsilon', stock: 234, reorderPoint: 200, status: 'good', demand: 201 },
  ];

  const optimizationSuggestions: {
    type: 'reduce' | 'increase';
    product: string;
    current: number;
    suggested: number;
    savings: string;
  }[] = [
    {
      type: 'reduce',
      product: 'Product X',
      current: 500,
      suggested: 350,
      savings: '$3,200',
    },
    {
      type: 'increase',
      product: 'Product Y',
      current: 25,
      suggested: 45,
      savings: '$1,800',
    },
    {
      type: 'reduce',
      product: 'Product Z',
      current: 180,
      suggested: 120,
      savings: '$2,100',
    },
  ];

  /**
   * Utility to map item status to a dual‑theme colour badge
   */
  const statusColor = {
    critical: 'bg-red-500 dark:bg-red-600',
    low: 'bg-yellow-400 dark:bg-yellow-500',
    good: 'bg-green-500 dark:bg-green-600',
  } as const;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 sm:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <InventoryHeader title="Inventory Optimization" subtitle="Optimize stock levels and reduce carrying costs" />
      {/* Optimization Card */}
      <InventoryOptimizationCard optimizationSuggestions={optimizationSuggestions} />
      {/* Analytics Card */}
      <InventoryAnalyticsCard />
    </div>
  );
}
