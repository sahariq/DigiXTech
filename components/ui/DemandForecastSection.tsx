'use client';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Package, UploadCloud } from 'lucide-react';
import { useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DemandForecastSection() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <CardTitle>Demand Forecasting</CardTitle>
        </div>
        <CardDescription>Upload sales data (.csv) and run forecasts</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
          }}
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400"
        >
          <UploadCloud className="w-10 h-10 text-gray-400" />
          <p className="text-sm text-gray-600">Drag & drop or&nbsp;
            <span className="text-blue-600 underline">browse</span>
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
          />
          {file && <p className="text-sm text-gray-700 mt-2">{file.name}</p>}
        </div>

        {isLoading ? (
          <Skeleton className="h-32 w-full" />
        ) : (
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => setIsLoading(false), 2000); // Simulate async
            }}
          >
            Run Forecast
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
