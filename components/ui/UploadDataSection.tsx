'use client';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';

export default function UploadDataSection() {
  const [sales, setSales]         = useState<File | null>(null);
  const [inventory, setInventory] = useState<File | null>(null);
  const [delivery, setDelivery]   = useState<File | null>(null);

  const salesRef     = useRef<HTMLInputElement>(null);
  const inventoryRef = useRef<HTMLInputElement>(null);
  const deliveryRef  = useRef<HTMLInputElement>(null);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Upload className="w-5 h-5 text-blue-600" />
          <CardTitle>Upload Data</CardTitle>
        </div>
        <CardDescription>Central hub for raw CSV uploads</CardDescription>
      </CardHeader>

      <CardContent className="space-y-8 overflow-x-auto w-full">
        <div className="min-w-[340px]">
          <Row label="Sales Data" file={sales} onPick={() => salesRef.current?.click()} />
          <input
            ref={salesRef}
            type="file"
            className="hidden"
            accept=".csv"
            onChange={(e) => e.target.files && setSales(e.target.files[0])}
          />

          <Row label="Inventory Data" file={inventory} onPick={() => inventoryRef.current?.click()} />
          <input
            ref={inventoryRef}
            type="file"
            className="hidden"
            accept=".csv"
            onChange={(e) => e.target.files && setInventory(e.target.files[0])}
          />

          <Row label="Delivery Data" file={delivery} onPick={() => deliveryRef.current?.click()} />
          <input
            ref={deliveryRef}
            type="file"
            className="hidden"
            accept=".csv"
            onChange={(e) => e.target.files && setDelivery(e.target.files[0])}
          />
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Upload All</Button>
      </CardContent>
    </Card>
  );
}

function Row({ label, file, onPick }: { label: string; file: File | null; onPick: () => void }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2 max-w-[60vw] sm:max-w-xs overflow-x-auto">
        {file && (
          <span className="text-xs text-gray-600 truncate max-w-[80px] sm:max-w-[140px] overflow-hidden whitespace-nowrap">{file.name}</span>
        )}
        <Button variant="outline" size="sm" onClick={onPick}>
          Choose File
        </Button>
      </div>
    </div>
  );
}

function RecentUploadRow({ upload, index }: { upload: any, index: number }) {
  return (
    <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3 min-w-0">
        {/* icon and filename */}
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          {/* icon here */}
        </div>
        <div>
          <p className="font-medium text-gray-900 truncate max-w-[140px] sm:max-w-none">{upload.filename}</p>
          {/* stats here */}
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        {/* status badge and buttons here */}
      </div>
    </div>
  );
}
