import React, { RefObject } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface UploadType {
  title: string;
  description: string;
  icon: React.ElementType;
  format: string;
  columns: string;
  example: string;
  color: string;
}

interface UploadTypeCardProps {
  type: UploadType;
  index: number;
  selectedFiles: { [key: number]: string | null };
  setSelectedFiles: React.Dispatch<React.SetStateAction<{ [key: number]: string | null }>>;
  isUploading: boolean;
  fileInputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
}

export function UploadTypeCard({ type, index, selectedFiles, setSelectedFiles, isUploading, fileInputRefs }: UploadTypeCardProps) {
  return (
    <Card className="bg-white dark:bg-slate-800 hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <type.icon className={`w-5 h-5 ${type.color}`} />
          <CardTitle className="text-lg text-gray-900 dark:text-white">
            {type.title}
          </CardTitle>
        </div>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {type.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Format:</span>
            <span className="font-medium dark:text-gray-200">{type.format}</span>
          </div>
          <div className="space-y-1">
            <span className="text-sm text-gray-600 dark:text-gray-400">Required columns:</span>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-slate-900/30 p-2 rounded">
              {type.columns}
            </p>
          </div>
        </div>
        <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-4 text-center bg-gray-50 dark:bg-slate-900/20">
          <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Drop files here or click to browse</p>
          <input
            type="file"
            ref={el => fileInputRefs.current[index] = el}
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const file = e.target.files?.[0];
              if (file) {
                setSelectedFiles(prev => ({ ...prev, [index]: file.name }));
              }
            }}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => fileInputRefs.current[index]?.click()}
            disabled={isUploading}
          >
            {isUploading ? 'Uploading…' : 'Choose File'}
          </Button>
          {selectedFiles[index] && (
            <div className="text-xs text-gray-700 dark:text-gray-200 mt-2">Selected: {selectedFiles[index]}</div>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Example: {type.example}</span>
          <Button variant="ghost" size="sm" className="text-xs">Download</Button>
        </div>
      </CardContent>
    </Card>
  );
} 