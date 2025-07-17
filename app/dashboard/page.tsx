'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  TrendingUp, 
  Package, 
  Truck, 
  Target,
  Calendar,
  ArrowUpRight,
  Activity,
  Users,
  DollarSign
} from 'lucide-react';

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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Your optimization control panel.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <ArrowUpRight className="w-4 h-4 mr-2" />
          Quick Actions
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Forecasting Module */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <CardTitle>Demand Forecasting</CardTitle>
            </div>
            <CardDescription>
              Upload sales data and run AI-powered demand forecasts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-500 mb-4">
                Upload your sales data (.csv format)
              </p>
              <Button variant="outline" className="mb-4">
                Choose File
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Last forecast: Jul 01, 2025
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Run Forecast
              </Button>
            </div>
            <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder - Run forecast to see results</p>
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
            <div className="space-y-4">
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

        {/* Inventory Optimization */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-green-600" />
              <CardTitle>Inventory Optimization</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Safety Stock %
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  defaultValue="15"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-500">%</span>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Optimize
            </Button>
            <div className="h-24 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-sm">Results table placeholder</p>
            </div>
          </CardContent>
        </Card>

        {/* Route Planning */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-purple-600" />
              <CardTitle>Route Planning</CardTitle>
            </div>
            <CardDescription>
              Optimize delivery routes for maximum efficiency
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Delivery Data
                </label>
                <Button variant="outline" className="w-full">
                  Choose File
                </Button>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Tour Time
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    defaultValue="8"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-500">hrs</span>
                </div>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Optimize Routes
            </Button>
            <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Map placeholder - Run optimization to see routes</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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