'use client';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';
import { useRef, useState } from 'react';

export default function RoutePlannerSection() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-purple-600" />
          <CardTitle>Route Planning</CardTitle>
        </div>
        <CardDescription>Optimize delivery routes for efficiency</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Delivery Data
            </label>
            <input
              ref={inputRef}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => e.target.files && setFile(e.target.files[0])}
            />
            <Button variant="outline" onClick={() => inputRef.current?.click()}>
              Choose File
            </Button>
            {file && (
              <span className="ml-2 text-sm text-gray-600">{file.name}</span>
            )}
          </div>

          {/* max tour */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Tour Time
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                defaultValue="8"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-500">hrs</span>
            </div>
          </div>
        </div>

        <Button className="bg-purple-600 hover:bg-purple-700">
          Optimize Routes
        </Button>

        <div className="h-32 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">
            Map placeholder – run optimization to see routes
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
