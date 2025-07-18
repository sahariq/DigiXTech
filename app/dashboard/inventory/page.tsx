'use client';
import InventoryOptimizerSection from '@/components/ui/InventoryOptimizerSection';
import TopBar from '@/components/ui/TopBar';

export default function InventoryPage() {
  return (
    <>
      <TopBar title="Inventory Optimizer" />
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold">Inventory Optimizer</h1>
        <InventoryOptimizerSection />
      </div>
    </>
  );
}