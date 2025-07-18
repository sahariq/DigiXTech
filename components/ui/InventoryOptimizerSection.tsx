'use client';
import {
  Card, CardHeader, CardTitle, CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';
import { useRef, useState } from 'react';

export default function InventoryOptimizerSection() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Package className="w-5 h-5 text-green-600" />
          <CardTitle>Inventory Optimization</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Safety Stock %
          </label>
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="number"
              defaultValue="15"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-500">%</span>
          </div>

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

        <Button className="w-full bg-green-600 hover:bg-green-700">
          Optimize
        </Button>

        <div className="h-24 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-sm">Results table placeholder</p>
        </div>
      </CardContent>
    </Card>
  );
}
