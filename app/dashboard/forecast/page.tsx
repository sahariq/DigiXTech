"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Upload, 
  Download,
  Calendar,
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3
} from 'lucide-react';

export default function ForecastPage() {
  const forecastMetrics = [
    {
      title: 'Forecast Accuracy',
      value: '92%',
      change: '+4%',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: 'Items Forecasted',
      value: '1,247',
      change: '+156',
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      title: 'Prediction Period',
      value: '90 days',
      change: 'Standard',
      icon: Calendar,
      color: 'text-purple-600'
    },
    {
      title: 'Last Updated',
      value: '2 hours ago',
      change: 'Recent',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  const recentForecasts = [
    { product: 'Product A', demand: 1250, confidence: 94, trend: 'up' },
    { product: 'Product B', demand: 890, confidence: 87, trend: 'down' },
    { product: 'Product C', demand: 1560, confidence: 91, trend: 'up' },
    { product: 'Product D', demand: 670, confidence: 89, trend: 'stable' },
    { product: 'Product E', demand: 1890, confidence: 96, trend: 'up' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Demand Forecasting</h1>
          <p className="text-gray-600 mt-1">AI-powered demand predictions for your products</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Results
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="w-4 h-4 mr-2" />
            New Forecast
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {forecastMetrics.map((metric, index) => (
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
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Forecast Setup */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Create New Forecast</span>
            </CardTitle>
            <CardDescription>
              Upload your sales data and configure forecast parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload Data</TabsTrigger>
                <TabsTrigger value="configure">Configure</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upload" className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-700 mb-2">Upload Sales Data</p>
                  <p className="text-sm text-gray-500 mb-4">
                    Support formats: CSV, Excel (.xlsx)
                  </p>
                  <Button variant="outline" className="mb-4">
                    Choose File
                  </Button>
                  <div className="text-xs text-gray-400">
                    Required columns: date, product_id, quantity, price
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Last upload: sales_data_2024.csv
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Validated
                  </Badge>
                </div>
              </TabsContent>
              
              <TabsContent value="configure" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Forecast Period
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>30 days</option>
                      <option>60 days</option>
                      <option selected>90 days</option>
                      <option>180 days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confidence Level
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>80%</option>
                      <option>85%</option>
                      <option selected>90%</option>
                      <option>95%</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seasonality
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Auto-detect</option>
                      <option>Weekly</option>
                      <option selected>Monthly</option>
                      <option>Quarterly</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option selected>ARIMA</option>
                      <option>Prophet</option>
                      <option>LSTM</option>
                      <option>Ensemble</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Run Forecast Analysis
                </Button>
              </TabsContent>
              
              <TabsContent value="results" className="space-y-4">
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Forecast chart will appear here</p>
                    <p className="text-sm text-gray-400">Run analysis to see predictions</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">1,247</p>
                    <p className="text-sm text-gray-600">Products Analyzed</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">92%</p>
                    <p className="text-sm text-gray-600">Avg Accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">90</p>
                    <p className="text-sm text-gray-600">Days Predicted</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Recent Forecasts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Forecasts</CardTitle>
            <CardDescription>
              Latest demand predictions for your products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentForecasts.map((forecast, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{forecast.product}</p>
                    <p className="text-sm text-gray-500">
                      Demand: {forecast.demand.toLocaleString()} units
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant={forecast.confidence > 90 ? 'secondary' : 'outline'}
                        className={forecast.confidence > 90 ? 'bg-green-100 text-green-800' : ''}
                      >
                        {forecast.confidence}%
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${
                        forecast.trend === 'up' ? 'bg-green-500' : 
                        forecast.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
                      }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Forecast Accuracy Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Forecast Performance</CardTitle>
          <CardDescription>
            Track accuracy and model performance over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Accuracy by Product Category</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Electronics</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={94} className="w-20 h-2" />
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Clothing</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={87} className="w-20 h-2" />
                    <span className="text-sm font-medium">87%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Home & Garden</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={91} className="w-20 h-2" />
                    <span className="text-sm font-medium">91%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Sports</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={89} className="w-20 h-2" />
                    <span className="text-sm font-medium">89%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Model Performance Alerts</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-800">High accuracy achieved</p>
                    <p className="text-xs text-green-600">Electronics category: 94% accuracy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Review recommended</p>
                    <p className="text-xs text-yellow-600">Clothing category accuracy dropped to 87%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Model updated</p>
                    <p className="text-xs text-blue-600">ARIMA model retrained with new data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 