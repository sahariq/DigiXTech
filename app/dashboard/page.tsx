'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <p className="text-gray-600 mb-6">Welcome back! Choose a module below:</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ModuleCard title="Demand Forecast" href="/dashboard/forecast" />
        <ModuleCard title="Inventory Optimizer" href="/dashboard/inventory" />
        <ModuleCard title="Route Planner" href="/dashboard/routes" />
      </div>
    </div>
  );
}

function ModuleCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block border rounded-lg p-6 bg-white shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-800">{title}</span>
        <ArrowRight className="w-5 h-5 text-gray-500" />
      </div>
    </Link>
  );
}
