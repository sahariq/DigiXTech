'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Package, 
  Truck, 
  Target,
  Calendar,
  ArrowUpRight,
  Activity,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const kpis = [
    {
      title: 'Inventory Accuracy',
      value: '95%',
      change: '+2.5%',
      changeType: 'positive',
      icon: Package,
      color: 'text-green-600'
    },
    {
      title: 'Last Forecast',
      value: 'Jul 01, 2025',
      change: 'Updated',
      changeType: 'neutral',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      title: 'Active Vehicles',
      value: '12',
      change: '+1',
      changeType: 'positive',
      icon: Truck,
      color: 'text-purple-600'
    },
    {
      title: 'Route Efficiency',
      value: '87%',
      change: '+5.2%',
      changeType: 'positive',
      icon: Target,
      color: 'text-orange-600'
    }
  ];

  const recentActivities = [
    { action: 'Demand forecast completed', module: 'Forecasting', time: '2 hours ago' },
    { action: 'Route optimization finished', module: 'Routing', time: '4 hours ago' },
    { action: 'Inventory data uploaded', module: 'Data Management', time: '1 day ago' },
    { action: 'Safety stock levels updated', module: 'Inventory', time: '2 days ago' }
  ];

  const quickActions = [
    {
      title: 'Run Demand Forecast',
      description: 'Generate AI-powered demand predictions',
      icon: TrendingUp,
      color: 'bg-blue-600 hover:bg-blue-700',
      href: '/dashboard/forecast'
    },
    {
      title: 'Optimize Inventory',
      description: 'Calculate optimal stock levels',
      icon: Package,
      color: 'bg-green-600 hover:bg-green-700',
      href: '/dashboard/inventory'
    },
    {
      title: 'Plan Routes',
      description: 'Optimize delivery routes and schedules',
      icon: Truck,
      color: 'bg-purple-600 hover:bg-purple-700',
      href: '/dashboard/routes'
    },
    {
      title: 'Upload Data',
      description: 'Import sales, inventory, or delivery data',
      icon: ArrowUpRight,
      color: 'bg-orange-600 hover:bg-orange-700',
      href: '/dashboard/upload'
    }
  ];
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Your optimization control panel.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{kpi.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge 
                  variant={kpi.changeType === 'positive' ? 'secondary' : 'outline'}
                  className={kpi.changeType === 'positive' ? 'bg-green-100 text-green-800' : ''}
                >
                  {kpi.change}
                </Badge>
                <span className="text-xs text-gray-500">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Quick Actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Jump to your most used optimization tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} href={action.href} passHref legacyBehavior>
                  <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color} group-hover:scale-105 transition-transform`}>
                          <action.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-600" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.module}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
          <CardDescription>
            Track your optimization performance over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Cost Savings</span>
                <span className="text-sm font-bold text-green-600">+$24,500</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-gray-500">78% improvement this quarter</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Efficiency</span>
                <span className="text-sm font-bold text-blue-600">87%</span>
              </div>
              <Progress value={87} className="h-2" />
              <p className="text-xs text-gray-500">Above target performance</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-600">Forecast Accuracy</span>
                <span className="text-sm font-bold text-purple-600">92%</span>
              </div>
              <Progress value={92} className="h-2" />
              <p className="text-xs text-gray-500">Excellent prediction quality</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}