'use client';

import { useState, useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Upload,
  FileText,
  Database,
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  Trash2,
} from 'lucide-react'
import { UploadHeader } from '@/components/dashboard/upload/UploadHeader';
import { UploadTypeCard } from '@/components/dashboard/upload/UploadTypeCard';
import { UploadProgressCard } from '@/components/dashboard/upload/UploadProgressCard';
import { RecentUploadsCard } from '@/components/dashboard/upload/RecentUploadsCard';
import { DataRequirementsCard } from '@/components/dashboard/upload/DataRequirementsCard';

export default function UploadPage() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<{[key: number]: string | null}>({});
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const uploadTypes = [
    {
      title: 'Sales Data',
      description: 'Historical sales transactions and customer data',
      icon: FileText,
      format: 'CSV, Excel',
      columns: 'date, product_id, quantity, price, customer_id',
      example: 'sales_data_sample.csv',
      // colour utilities include dark‑theme variant for contrast
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Inventory Data',
      description: 'Stock levels, product information, and warehouse data',
      icon: Database,
      format: 'CSV, Excel',
      columns: 'product_id, name, category, stock_level, reorder_point',
      example: 'inventory_sample.csv',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Delivery Points',
      description: 'Customer addresses and delivery information',
      icon: Upload,
      format: 'CSV, Excel',
      columns: 'address, latitude, longitude, time_window, priority',
      example: 'delivery_points_sample.csv',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ]

  const recentUploads = [
    {
      filename: 'sales_data_2024.csv',
      type: 'Sales Data',
      size: '2.4 MB',
      uploaded: '2 hours ago',
      status: 'processed',
      records: '15,247',
    },
    {
      filename: 'inventory_current.xlsx',
      type: 'Inventory Data',
      size: '1.8 MB',
      uploaded: '1 day ago',
      status: 'processed',
      records: '3,456',
    },
    {
      filename: 'delivery_points_q1.csv',
      type: 'Delivery Points',
      size: '892 KB',
      uploaded: '3 days ago',
      status: 'processed',
      records: '789',
    },
    {
      filename: 'sales_data_backup.csv',
      type: 'Sales Data',
      size: '3.1 MB',
      uploaded: '1 week ago',
      status: 'error',
      records: '0',
    },
  ]

  const handleUpload = () => {
    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
      case 'processing':
        return <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400" />
      default:
        return <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'processing':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'error':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-slate-900/20 dark:text-gray-400'
    }
  }

  return (
    <div className="p-6 space-y-6 mt-14 md:mt-0">
      {/* Header */}
      <UploadHeader title="Upload Data" subtitle="Upload your CSV files for sales, inventory, and delivery data" />
      {/* Upload Types */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {uploadTypes.map((type, index) => (
          <UploadTypeCard
            key={index}
            type={type}
            index={index}
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
            isUploading={isUploading}
            fileInputRefs={fileInputRefs}
          />
        ))}
      </div>
      {/* Upload Progress */}
      <UploadProgressCard uploadProgress={uploadProgress} isUploading={isUploading} />
      {/* Recent Uploads */}
      <RecentUploadsCard recentUploads={recentUploads} getStatusIcon={getStatusIcon} getStatusColor={getStatusColor} />
      {/* Data Requirements */}
      <DataRequirementsCard />
    </div>
  )
}
