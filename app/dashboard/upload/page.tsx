'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  FileText, 
  Database,
  CheckCircle,
  AlertCircle,
  Clock,
  Download,
  Trash2
} from 'lucide-react';

export default function UploadPage() {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const uploadTypes = [
    {
      title: 'Sales Data',
      description: 'Historical sales transactions and customer data',
      icon: FileText,
      format: 'CSV, Excel',
      columns: 'date, product_id, quantity, price, customer_id',
      example: 'sales_data_sample.csv',
      color: 'text-blue-600'
    },
    {
      title: 'Inventory Data',
      description: 'Stock levels, product information, and warehouse data',
      icon: Database,
      format: 'CSV, Excel',
      columns: 'product_id, name, category, stock_level, reorder_point',
      example: 'inventory_sample.csv',
      color: 'text-green-600'
    },
    {
      title: 'Delivery Points',
      description: 'Customer addresses and delivery information',
      icon: Upload,
      format: 'CSV, Excel',
      columns: 'address, latitude, longitude, time_window, priority',
      example: 'delivery_points_sample.csv',
      color: 'text-purple-600'
    }
  ];

  const recentUploads = [
    {
      filename: 'sales_data_2024.csv',
      type: 'Sales Data',
      size: '2.4 MB',
      uploaded: '2 hours ago',
      status: 'processed',
      records: '15,247'
    },
    {
      filename: 'inventory_current.xlsx',
      type: 'Inventory Data',
      size: '1.8 MB',
      uploaded: '1 day ago',
      status: 'processed',
      records: '3,456'
    },
    {
      filename: 'delivery_points_q1.csv',
      type: 'Delivery Points',
      size: '892 KB',
      uploaded: '3 days ago',
      status: 'processed',
      records: '789'
    },
    {
      filename: 'sales_data_backup.csv',
      type: 'Sales Data',
      size: '3.1 MB',
      uploaded: '1 week ago',
      status: 'error',
      records: '0'
    }
  ];

  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'processing':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Upload Data</h1>
          <p className="text-gray-600 mt-1">Upload your CSV files for sales, inventory, and delivery data</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Download Templates
        </Button>
      </div>

      {/* Upload Types */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {uploadTypes.map((type, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <type.icon className={`w-5 h-5 ${type.color}`} />
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </div>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Format:</span>
                  <span className="font-medium">{type.format}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-sm text-gray-600">Required columns:</span>
                  <p className="text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded">
                    {type.columns}
                  </p>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Drop files here or click to browse
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleUpload}
                  disabled={isUploading}
                >
                  {isUploading ? 'Uploading...' : 'Choose File'}
                </Button>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Example: {type.example}</span>
                <Button variant="ghost" size="sm" className="text-xs">
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Upload Progress */}
      {isUploading && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="w-5 h-5 text-blue-600" />
              <span>Upload Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Uploading sales_data_new.csv</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-xs text-gray-500">
                Processing file and validating data structure...
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Uploads */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>
            Your uploaded files and their processing status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentUploads.map((upload, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{upload.filename}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {upload.type}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {upload.size} • {upload.uploaded}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(upload.status)}
                      <Badge variant="secondary" className={getStatusColor(upload.status)}>
                        {upload.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {upload.records} records
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Requirements */}
      <Card>
        <CardHeader>
          <CardTitle>Data Requirements & Guidelines</CardTitle>
          <CardDescription>
            Important information about data formats and requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">File Format Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>CSV files with comma separators</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Excel files (.xlsx format)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>UTF-8 encoding for international characters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Header row with column names</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Maximum file size: 10MB</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Data Quality Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Ensure date formats are consistent (YYYY-MM-DD)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Remove or handle missing values appropriately</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Use consistent product IDs across all files</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Numeric values should not contain text</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum 3 months of historical data recommended</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}