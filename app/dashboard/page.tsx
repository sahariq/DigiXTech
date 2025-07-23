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
  Package,
  Truck,
  Target,
  Calendar,
  ArrowUpRight,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { KpiGrid } from '@/components/dashboard/KpiGrid';
import { QuickActionsSection } from '@/components/dashboard/QuickActionsSection';
import { RecentActivitySection } from '@/components/dashboard/RecentActivitySection';
import { PerformanceOverviewSection } from '@/components/dashboard/PerformanceOverviewSection';

export default function Dashboard() {
  const kpis = [
    {
      title: 'Inventory Accuracy',
      value: '95%',
      change: '+2.5%',
      changeType: 'positive',
      icon: Package,
      color: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Last Forecast',
      value: 'Jul 01, 2025',
      change: 'Updated',
      changeType: 'neutral',
      icon: Calendar,
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Active Vehicles',
      value: '12',
      change: '+1',
      changeType: 'positive',
      icon: Truck,
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Route Efficiency',
      value: '87%',
      change: '+5.2%',
      changeType: 'positive',
      icon: Target,
      color: 'text-orange-600 dark:text-orange-400',
    },
  ];

  const recentActivities = [
    { action: 'Demand forecast completed', module: 'Forecasting', time: '2 hours ago' },
    { action: 'Route optimization finished', module: 'Routing', time: '4 hours ago' },
    { action: 'Inventory data uploaded', module: 'Data Management', time: '1 day ago' },
    { action: 'Safety stock levels updated', module: 'Inventory', time: '2 days ago' },
  ];

  const quickActions = [
    {
      title: 'Run Demand Forecast',
      description: 'Generate AI‑powered demand predictions',
      icon: TrendingUp,
      color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700/80 dark:hover:bg-blue-700',
      href: '/dashboard/forecast',
    },
    {
      title: 'Optimize Inventory',
      description: 'Calculate optimal stock levels',
      icon: Package,
      color: 'bg-green-600 hover:bg-green-700 dark:bg-green-700/80 dark:hover:bg-green-700',
      href: '/dashboard/inventory',
    },
    {
      title: 'Plan Routes',
      description: 'Optimize delivery routes and schedules',
      icon: Truck,
      color: 'bg-purple-600 hover:bg-purple-700 dark:bg-purple-700/80 dark:hover:bg-purple-700',
      href: '/dashboard/routes',
    },
    {
      title: 'Upload Data',
      description: 'Import sales, inventory, or delivery data',
      icon: ArrowUpRight,
      color: 'bg-orange-600 hover:bg-orange-700 dark:bg-orange-700/80 dark:hover:bg-orange-700',
      href: '/dashboard/upload',
    },
  ];

  const badgeClass = (type: string) => {
    if (type === 'positive') return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400';
    return 'bg-gray-100 dark:bg-slate-800/40 text-gray-800 dark:text-gray-300';
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 sm:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <DashboardHeader />
      {/* Title and subtitle in body */}
      <div className="mb-2">
        <h1 className="truncate text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white m-0">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 m-0">
          Welcome back! Your optimization control panel.
        </p>
      </div>
      {/* KPI Cards */}
      <KpiGrid kpis={kpis} />
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Quick Actions */}
        <QuickActionsSection quickActions={quickActions} />
        {/* Recent Activity */}
        <RecentActivitySection recentActivities={recentActivities} />
      </div>
      {/* Performance Overview */}
      <PerformanceOverviewSection />
    </div>
  );
}
