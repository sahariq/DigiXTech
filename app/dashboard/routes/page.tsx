'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Truck, 
  Map, 
  Clock,
  Fuel,
  Route,
  Target,
  Upload,
  Download,
  MapPin,
  Navigation
} from 'lucide-react';

export default function RoutesPage() {
  const routeMetrics = [
    {
      title: 'Total Distance',
      value: '2,847 km',
      change: '-12%',
      icon: Route,
      color: 'text-blue-600'
    },
    {
      title: 'Fuel Savings',
      value: '$3,240',
      change: '+18%',
      icon: Fuel,
      color: 'text-green-600'
    },
    {
      title: 'Avg Delivery Time',
      value: '4.2 hrs',
      change: '-0.8h',
      icon: Clock,
      color: 'text-purple-600'
    },
    {
      title: 'Route Efficiency',
      value: '87%',
      change: '+7%',
      icon: Target,
      color: 'text-orange-600'
    }
  ];

  const activeRoutes = [
    { 
      vehicle: 'Truck A', 
      driver: 'John Smith',
      stops: 8,
      completed: 5,
      eta: '2:30 PM',
      efficiency: 92
    },
    { 
      vehicle: 'Truck B', 
      driver: 'Sarah Johnson',
      stops: 6,
      completed: 3,
      eta: '3:15 PM',
      efficiency: 88
    },
    { 
      vehicle: 'Truck C', 
      driver: 'Mike Davis',
      stops: 12,
      completed: 8,
      eta: '4:45 PM',
      efficiency: 85
    },
    { 
      vehicle: 'Truck D', 
      driver: 'Emma Wilson',
      stops: 9,
      completed: 9,
      eta: 'Complete',
      efficiency: 94
    }
  ];

  const optimizationResults = [
    {
      metric: 'Distance Reduced',
      before: '3,240 km',
      after: '2,847 km',
      improvement: '12%',
      savings: '$780'
    },
    {
      metric: 'Delivery Time',
      before: '5.8 hrs',
      after: '4.2 hrs',
      improvement: '28%',
      savings: '$1,200'
    },
    {
      metric: 'Fuel Consumption',
      before: '485 L',
      after: '378 L',
      improvement: '22%',
      savings: '$160'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Route Planning</h1>
          <p className="text-gray-600 mt-1">Optimize delivery routes for maximum efficiency</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Export Routes
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
            <Navigation className="w-4 h-4 mr-2" />
            Optimize Routes
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {routeMetrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge 
                  variant={metric.change.startsWith('+') || metric.change.startsWith('-') ? 'secondary' : 'outline'}
                  className={metric.change.startsWith('+') || metric.change.startsWith('-') ? 'bg-green-100 text-green-800' : ''}
                >
                  {metric.change}
                </Badge>
                <span className="text-xs text-gray-500">from last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Route Optimization */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Map className="w-5 h-5 text-purple-600" />
              <span>Route Optimization</span>
            </CardTitle>
            <CardDescription>
              Upload delivery data and optimize routes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="flex flex-wrap gap-2 w-full mb-4">
                <TabsTrigger value="upload" className="flex-1 sm:flex-auto truncate">Upload Data</TabsTrigger>
                <TabsTrigger value="configure" className="flex-1 sm:flex-auto truncate">Configure</TabsTrigger>
                <TabsTrigger value="optimize" className="flex-1 sm:flex-auto truncate">Optimize</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="mt-2 space-y-3 sm:space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center max-w-full">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">Upload Delivery Data</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Support formats: CSV, Excel (.xlsx)
                  </p>
                  <Button variant="outline" className="mb-4">
                    Choose File
                  </Button>
                  <div className="text-xs text-gray-400">
                    Required columns: address, latitude, longitude, time_window, priority
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Last upload: delivery_points_2024.csv
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    156 locations
                  </Badge>
                </div>
              </TabsContent>
              
              <TabsContent value="configure" className="mt-2 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Max Tour Time (hours)
                    </label>
                    <input
                      type="number"
                      defaultValue="8"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vehicle Capacity (kg)
                    </label>
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Vehicles
                    </label>
                    <input
                      type="number"
                      defaultValue="12"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Time
                    </label>
                    <input
                      type="time"
                      defaultValue="08:00"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="traffic" className="rounded" defaultChecked />
                    <label htmlFor="traffic" className="text-sm text-gray-700">
                      Consider real-time traffic
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="timewindows" className="rounded" />
                    <label htmlFor="timewindows" className="text-sm text-gray-700">
                      Respect delivery time windows
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="priority" className="rounded" />
                    <label htmlFor="priority" className="text-sm text-gray-700">
                      Prioritize high-value deliveries
                    </label>
                  </div>
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Configure Optimization
                </Button>
              </TabsContent>
              
              <TabsContent value="optimize" className="mt-2 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">12</p>
                    <p className="text-sm text-gray-600">Optimized Routes</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">-12%</p>
                    <p className="text-sm text-gray-600">Distance Saved</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">$2,140</p>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Map className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Optimized route map</p>
                    <p className="text-sm text-gray-400">Interactive map will appear here</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Active Routes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Truck className="w-5 h-5 text-green-600" />
              <span>Active Routes</span>
            </CardTitle>
            <CardDescription>
              Real-time tracking of ongoing deliveries
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {activeRoutes.map((route, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{route.vehicle}</span>
                    <Badge 
                      variant={route.eta === 'Complete' ? 'secondary' : 'outline'}
                      className={route.eta === 'Complete' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {route.eta === 'Complete' ? 'Complete' : `ETA: ${route.eta}`}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Driver:</span>
                      <span className="font-medium">{route.driver}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress:</span>
                      <span className="font-medium">{route.completed}/{route.stops} stops</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Efficiency:</span>
                      <span className="font-medium">{route.efficiency}%</span>
                    </div>
                  </div>
                  <Progress 
                    value={(route.completed / route.stops) * 100} 
                    className="mt-2 h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Optimization Results */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Results</CardTitle>
          <CardDescription>
            Performance improvements from route optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {optimizationResults.map((result, index) => (
              <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-3">{result.metric}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Before:</span>
                    <span className="font-medium">{result.before}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">After:</span>
                    <span className="font-medium text-green-600">{result.after}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {result.improvement} improvement
                    </Badge>
                    <span className="text-sm font-medium text-green-600">{result.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Route Efficiency by Vehicle</h3>
              <div className="space-y-3">
                {activeRoutes.map((route, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{route.vehicle}</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={route.efficiency} className="w-20 h-2" />
                      <span className="text-sm font-medium">{route.efficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Daily Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-lg font-bold text-blue-600">45</p>
                  <p className="text-xs text-gray-600">Deliveries Today</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-600">92%</p>
                  <p className="text-xs text-gray-600">On-time Rate</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-lg font-bold text-purple-600">347km</p>
                  <p className="text-xs text-gray-600">Total Distance</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <p className="text-lg font-bold text-orange-600">$180</p>
                  <p className="text-xs text-gray-600">Fuel Cost</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}