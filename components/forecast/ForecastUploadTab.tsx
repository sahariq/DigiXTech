import React, { RefObject } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ForecastUploadTabProps {
  selectedFile: string | null;
  setSelectedFile: (file: string | null) => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

export function ForecastUploadTab({ selectedFile, setSelectedFile, fileInputRef }: ForecastUploadTabProps) {
  return (
    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
      <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
      <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">
        Upload Sales Data
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Supported formats: CSV, Excel (.xlsx)
      </p>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) setSelectedFile(file.name);
        }}
      />
      <Button
        variant="outline"
        className="mb-4"
        onClick={() => fileInputRef.current?.click()}
      >
        Choose File
      </Button>
      {selectedFile && (
        <div className="text-xs text-gray-700 dark:text-gray-200 mt-2">Selected: {selectedFile}</div>
      )}
      <div className="text-xs text-gray-400 dark:text-gray-500">
        Required columns: date, product_id, quantity, price
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 mt-6">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Last upload: sales_data_2024.csv
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 gap-1">
          <CheckCircle className="w-3 h-3" />
          Validated
        </Badge>
      </div>
    </div>
  );
} 