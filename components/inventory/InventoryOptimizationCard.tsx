import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Package } from 'lucide-react';

interface InventoryOptimizationCardProps {
  optimizationSuggestions: Array<{
    type: 'reduce' | 'increase',
    product: string,
    current: number,
    suggested: number,
    savings: string,
  }>;
}

export function InventoryOptimizationCard({ optimizationSuggestions }: InventoryOptimizationCardProps) {
  return (
    <Card className="bg-white dark:bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/30 dark:supports-[backdrop-filter]:bg-slate-900/40">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
          <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Inventory Optimization
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Configure parameters and run optimization analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="configure" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="configure">Configure</TabsTrigger>
            <TabsTrigger value="analyze">Analyze</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          {/* Configure Tab */}
          <TabsContent value="configure" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Safety Stock %', defaultValue: 15 },
                { label: 'Service Level %', defaultValue: 95 },
                { label: 'Lead Time (days)', defaultValue: 7 },
                { label: 'Holding Cost %', defaultValue: 25 },
              ].map(({ label, defaultValue }, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {label}
                  </label>
                  <input
                    type="number"
                    defaultValue={defaultValue}
                    className="w-full rounded-md border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/60 dark:focus:ring-blue-500/40 text-gray-900 dark:text-gray-100"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="seasonal"
                className="rounded border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="seasonal" className="text-sm text-gray-700 dark:text-gray-300">
                Consider seasonal patterns
              </label>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
              Run Optimization
            </Button>
          </TabsContent>
          {/* Analyze Tab */}
          <TabsContent value="analyze" className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                  Analysis Progress
                </h3>
                <Progress value={78} className="mb-2" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Analyzing 1,247 products...
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Current Analysis',
                    lines: [
                      '✓ Demand patterns identified',
                      '✓ Lead time variations calculated',
                      '⏳ Safety stock optimization',
                      '⏳ Reorder point calculation',
                    ],
                  },
                  {
                    title: 'Preliminary Findings',
                    lines: [
                      '• 23% overstock identified',
                      '• 8% items at risk of stockout',
                      '• $127K potential savings',
                      '• 15% improvement possible',
                    ],
                  },
                ].map((section, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-slate-800/40"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {section.title}
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {section.lines.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            {/* KPI blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Potential Savings',
                  value: '$127K',
                },
                { label: 'Items to Optimize', value: '342' },
                { label: 'Efficiency Gain', value: '15%' },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="text-center p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20"
                >
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {kpi.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{kpi.label}</p>
                </div>
              ))}
            </div>
            {/* Recommendations */}
            <div className="rounded-lg p-4 bg-gray-50 dark:bg-slate-800/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-slate-800/40">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                Optimization Recommendations
              </h4>
              <div className="space-y-2">
                {optimizationSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.product}
                    className="flex items-center justify-between p-2 rounded bg-white dark:bg-slate-900/60"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          suggestion.type === 'reduce'
                            ? 'bg-red-500 dark:bg-red-600'
                            : 'bg-green-500 dark:bg-green-600'
                        }`}
                      />
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                        {suggestion.product}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {suggestion.current} → {suggestion.suggested}
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        {suggestion.savings} saved
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 