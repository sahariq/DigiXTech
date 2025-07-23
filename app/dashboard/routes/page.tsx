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
  Truck,
  Map,
  Clock,
  Fuel,
  Route,
  Target,
  Upload,
  Download,
  MapPin,
  Navigation,
} from 'lucide-react';
import { useState, useRef } from 'react';
import { RoutesHeader } from '@/components/dashboard/routes/RoutesHeader';
import { RoutesUploadTab } from '@/components/dashboard/routes/RoutesUploadTab';
import { RoutesConfigureTab } from '@/components/dashboard/routes/RoutesConfigureTab';
import { RoutesOptimizeTab } from '@/components/dashboard/routes/RoutesOptimizeTab';
import { RoutesOptimizationResults } from '@/components/dashboard/routes/RoutesOptimizationResults';

/**
 * RoutesPage – fully responsive, light/dark–aware UI for route‑planning.
 * All fixed tints replaced with dual‑theme utilities.
 */
export default function RoutesPage() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const activeRoutes = [
    {
      vehicle: 'Truck A',
      driver: 'John Smith',
      stops: 8,
      completed: 5,
      eta: '2:30 PM',
      efficiency: 92,
    },
    {
      vehicle: 'Truck B',
      driver: 'Sarah Johnson',
      stops: 6,
      completed: 3,
      eta: '3:15 PM',
      efficiency: 88,
    },
    {
      vehicle: 'Truck C',
      driver: 'Mike Davis',
      stops: 12,
      completed: 8,
      eta: '4:45 PM',
      efficiency: 85,
    },
    {
      vehicle: 'Truck D',
      driver: 'Emma Wilson',
      stops: 9,
      completed: 9,
      eta: 'Complete',
      efficiency: 94,
    },
  ];

  const optimizationResults = [
    {
      metric: 'Distance Reduced',
      before: '3,240 km',
      after: '2,847 km',
      improvement: '12%',
      savings: '$780',
    },
    {
      metric: 'Delivery Time',
      before: '5.8 hrs',
      after: '4.2 hrs',
      improvement: '28%',
      savings: '$1,200',
    },
    {
      metric: 'Fuel Consumption',
      before: '485 L',
      after: '378 L',
      improvement: '22%',
      savings: '$160',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 sm:p-8 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <RoutesHeader />
      {/* Title and subtitle in body */}
      <div className="mb-2">
        <h1 className="truncate text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white m-0">
          Route Planning
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 m-0">
          Optimize delivery routes for maximum efficiency
        </p>
      </div>
      {/* Route Optimization Card */}
      <Card className="bg-white dark:bg-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
            <Map className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>Route Optimization</span>
          </CardTitle>
          <CardDescription className="dark:text-gray-400">
            Upload delivery data and optimize routes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upload" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">Upload Data</TabsTrigger>
              <TabsTrigger value="configure">Configure</TabsTrigger>
              <TabsTrigger value="optimize">Optimize</TabsTrigger>
            </TabsList>
            {/* Upload */}
            <TabsContent value="upload">
              <RoutesUploadTab selectedFile={selectedFile} setSelectedFile={setSelectedFile} fileInputRef={fileInputRef} />
            </TabsContent>
            {/* Configure */}
            <TabsContent value="configure">
              <RoutesConfigureTab />
            </TabsContent>
            {/* Optimize */}
            <TabsContent value="optimize">
              <RoutesOptimizeTab />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      {/* Optimization Results */}
      <RoutesOptimizationResults optimizationResults={optimizationResults} activeRoutes={activeRoutes} />
    </div>
  );
}
