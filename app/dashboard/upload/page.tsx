/* ---------- upload/page.tsx ---------- */
'use client';
import UploadDataSection from '@/components/ui/UploadDataSection';
import TopBar from '@/components/ui/TopBar';

export default function UploadPage() {
  return (
    <>
      <TopBar title="Upload Data" />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Upload Data</h1>
        <UploadDataSection />
      </div>
    </>
  );
}