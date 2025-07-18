'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Package, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Target,
  BarChart3,
  Settings,
  Download
} from 'lucide-react';

export default function InventoryPage() {
  const inventoryMetrics = [
    {
      title: 'Total Stock Value',
      value: '$2.4M',
      change: '+12%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Turnover Rate',
      value: '4.2x',
      change: '+0.8x',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      title: 'Stockout Risk',
      value: '3.2%',
      change: '-1.1%',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      title: 'Optimization Score',
      value: '87%',
      change: '+5%',
      icon: Target,
      color: 'text-purple-600'
    }
  ];

  const criticalItems = [
    { product: 'Product Alpha', stock: 45, reorderPoint: 50, status: 'low', demand: 125 },
    { product: 'Product Beta', stock: 12, reorderPoint: 25, status: 'critical', demand: 89 },
    { product: 'Product Gamma', stock: 8, reorderPoint: 15, status: 'critical', demand: 67 },
    { product: 'Product Delta', stock: 78, reorderPoint: 100, status: 'low', demand: 156 },
    { product: 'Product Epsilon', stock: 234, reorderPoint: 200, status: 'good', demand: 201 }
  ];

  const optimizationSuggestions = [
    {
      type: 'reduce',
      product: 'Product X',
      current: 500,
      suggested: 350,
      savings: '$3,200'
    },
    {
      type: 'increase',
      product: 'Product Y',
      current: 25,
      suggested: 45,
      savings: '$1,800'
    },
    {
      type: 'reduce',
      product: 'Product Z',
      current: 180,
      suggested: 120,
      savings: '$2,100'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Inventory Optimization</h1>
          <p className="text-gray-600 mt-1">Optimize stock levels and reduce carrying costs</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
            <Settings className="w-4 h-4 mr-2" />
            Run Optimization
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {inventoryMetrics.map((metric, index) => (
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
                  variant={metric.change.startsWith('+') ? 'secondary' : 'outline'}
                  className={metric.change.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                >
                  {metric.change}
                </Badge>
                <span className="text-xs text-gray-500">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Optimization Controls */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-green-600" />
              <span>Inventory Optimization</span>
            </CardTitle>
            <CardDescription>
              Configure parameters and run optimization analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="configure" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                <TabsTrigger value="configure">Configure</TabsTrigger>
                <TabsTrigger value="analyze">Analyze</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="configure" className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Safety Stock %
                    </label>
                    <input
                      type="number"
                      defaultValue="15"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Level %
                    </label>
                    <input
                      type="number"
                      defaultValue="95"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lead Time (days)
                    </label>
                    <input
                      type="number"
                      defaultValue="7"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Holding Cost %
                    </label>
                    <input
                      type="number"
                      defaultValue="25"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="seasonal" className="rounded" />
                  <label htmlFor="seasonal" className="text-sm text-gray-700">
                    Consider seasonal patterns
                  </label>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Run Optimization
                </Button>
              </TabsContent>
              
              <TabsContent value="analyze" className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-blue-900 mb-2">Analysis Progress</h3>
                    <Progress value={78} className="mb-2" />
                    <p className="text-sm text-blue-700">Analyzing 1,247 products...</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Current Analysis</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✓ Demand patterns identified</li>
                      <li>✓ Lead time variations calculated</li>
                      <li>⏳ Safety stock optimization</li>
                      <li>⏳ Reorder point calculation</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Preliminary Findings</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 23% overstock identified</li>
                      <li>• 8% items at risk of stockout</li>
                      <li>• $127K potential savings</li>
                      <li>• 15% improvement possible</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">$127K</p>
                    <p className="text-sm text-gray-600">Potential Savings</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">342</p>
                    <p className="text-sm text-gray-600">Items to Optimize</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">15%</p>
                    <p className="text-sm text-gray-600">Efficiency Gain</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Optimization Recommendations</h4>
                  <div className="space-y-2">
                    {optimizationSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-white rounded">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            suggestion.type === 'reduce' ? 'bg-red-500' : 'bg-green-500'
                          }`}></div>
                          <span className="text-sm font-medium">{suggestion.product}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm">
                            {suggestion.current} → {suggestion.suggested}
                          </div>
                          <div className="text-xs text-green-600">{suggestion.savings} saved</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Critical Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>Critical Items</span>
            </CardTitle>
            <CardDescription>
              Items requiring immediate attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {criticalItems.map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.product}</span>
                    <Badge 
                      variant={item.status === 'critical' ? 'destructive' : 
                               item.status === 'low' ? 'secondary' : 'outline'}
                      className={item.status === 'critical' ? 'bg-red-100 text-red-800' :
                                item.status === 'low' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Current Stock:</span>
                      <span className="font-medium">{item.stock}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Reorder Point:</span>
                      <span className="font-medium">{item.reorderPoint}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">30-day Demand:</span>
                      <span className="font-medium">{item.demand}</span>
                    </div>
                  </div>
                  <Progress 
                    value={(item.stock / item.reorderPoint) * 100} 
                    className="mt-2 h-2"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Analytics</CardTitle>
          <CardDescription>
            Detailed analysis and performance insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Stock Distribution</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Overstock</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={23} className="w-20 h-2" />
                    <span className="text-sm font-medium">23%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Optimal</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={69} className="w-20 h-2" />
                    <span className="text-sm font-medium">69%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Understock</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={8} className="w-20 h-2" />
                    <span className="text-sm font-medium">8%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Performance Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <p className="text-lg font-bold text-blue-600">4.2x</p>
                  <p className="text-xs text-gray-600">Inventory Turnover</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <p className="text-lg font-bold text-green-600">95%</p>
                  <p className="text-xs text-gray-600">Service Level</p>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <p className="text-lg font-bold text-purple-600">7.3 days</p>
                  <p className="text-xs text-gray-600">Avg Lead Time</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <p className="text-lg font-bold text-orange-600">$2.4M</p>
                  <p className="text-xs text-gray-600">Total Value</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}