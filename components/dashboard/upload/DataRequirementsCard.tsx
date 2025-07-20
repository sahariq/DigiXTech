import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function DataRequirementsCard() {
  return (
    <Card className="bg-white dark:bg-slate-800">
      <CardHeader>
        <CardTitle className="text-gray-900 dark:text-white">Data Requirements & Guidelines</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          Important information about data formats and requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">File Format Requirements</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>CSV files with comma separators</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Excel files (.xlsx format)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>UTF-8 encoding for international characters</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Header row with column names</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span>Maximum file size: 10 MB</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900 dark:text-white">Data Quality Guidelines</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Ensure date formats are consistent (YYYY‑MM‑DD)</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Remove or handle missing values appropriately</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Use consistent product IDs across all files</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Numeric values should not contain text</span>
              </li>
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>Minimum 3 months of historical data recommended</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 