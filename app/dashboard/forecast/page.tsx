'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  TrendingUp,
  Upload,
  Download,
  AlertCircle,
  CheckCircle,
  BarChart3,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { ForecastHeader } from '@/components/forecast/ForecastHeader';
import { ForecastUploadTab } from '@/components/forecast/ForecastUploadTab';
import { ForecastConfigureTab } from '@/components/forecast/ForecastConfigureTab';
import { ForecastResultsTab } from '@/components/forecast/ForecastResultsTab';
import { ForecastPerformanceSection } from '@/components/forecast/ForecastPerformanceSection';

export default function ForecastPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recentForecasts = [
    { product: 'Product A', demand: 1250, confidence: 94, trend: 'up' },
    { product: 'Product B', demand: 890, confidence: 87, trend: 'down' },
    { product: 'Product C', demand: 1560, confidence: 91, trend: 'up' },
    { product: 'Product D', demand: 670, confidence: 89, trend: 'stable' },
    { product: 'Product E', demand: 1890, confidence: 96, trend: 'up' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 sm:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <ForecastHeader title="Demand Forecasting" subtitle="AI‑powered demand predictions for your products" />
      {/* Main Content */}
      <div className="space-y-8">
        {/* Forecast Setup */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Create New Forecast</span>
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Upload your sales data and configure forecast parameters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-3 border-b border-gray-200 dark:border-gray-700">
                <TabsTrigger value="upload">Upload Data</TabsTrigger>
                <TabsTrigger value="configure">Configure</TabsTrigger>
                <TabsTrigger value="results">Results</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <ForecastUploadTab selectedFile={selectedFile} setSelectedFile={setSelectedFile} fileInputRef={fileInputRef} />
              </TabsContent>
              <TabsContent value="configure">
                <ForecastConfigureTab />
              </TabsContent>
              <TabsContent value="results">
                <ForecastResultsTab />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        {/* Forecast Performance */}
        <ForecastPerformanceSection />
      </div>
    </div>
  );
}
