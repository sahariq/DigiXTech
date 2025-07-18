/* ---------- routes/page.tsx ---------- */
'use client';
import RoutePlannerSection from '@/components/ui/RoutePlannerSection';
import TopBar from '@/components/ui/TopBar';

export default function RoutesPage() {
  return (
    <>
      <TopBar title="Route Planner" />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Route Planner</h1>
        <RoutePlannerSection />
      </div>
    </>
  );
}