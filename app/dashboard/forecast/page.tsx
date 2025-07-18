/* ---------- forecast/page.tsx ---------- */
'use client';
import DemandForecastSection from '@/components/ui/DemandForecastSection';
import TopBar from '@/components/ui/TopBar';

export default function ForecastPage() {
  return (
    <>
      <TopBar title="Demand Forecast" />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Demand Forecast</h1>
        <DemandForecastSection />
      </div>
    </>
  );
}
