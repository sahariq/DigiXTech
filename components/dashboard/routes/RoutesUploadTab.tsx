import React, { RefObject } from 'react';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RoutesUploadTabProps {
  selectedFile: string | null;
  setSelectedFile: (file: string | null) => void;
  fileInputRef: RefObject<HTMLInputElement>;
}

export function RoutesUploadTab({ selectedFile, setSelectedFile, fileInputRef }: RoutesUploadTabProps) {
  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center bg-white dark:bg-slate-900/40">
        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-lg font-medium text-gray-700 dark:text-gray-100 mb-2">
          Upload Delivery Data
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Supported formats: CSV, Excel (.xlsx)
        </p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={e => {
            if (e.target.files && e.target.files[0]) {
              setSelectedFile(e.target.files[0].name);
            }
          }}
        />
        <Button
          variant="outline"
          className="mb-4 dark:border-slate-600"
          onClick={() => fileInputRef.current?.click()}
        >
          Choose File
        </Button>
        {selectedFile && (
          <div className="text-xs text-gray-700 dark:text-gray-200 mt-2">Selected: {selectedFile}</div>
        )}
        <div className="text-xs text-gray-400 dark:text-gray-500">
          Required columns: address, latitude, longitude, time_window, priority
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last upload: <span className="font-medium">delivery_points_2024.csv</span>
        </p>
        <Badge
          variant="secondary"
          className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
        >
          156 locations
        </Badge>
      </div>
    </div>
  );
} 