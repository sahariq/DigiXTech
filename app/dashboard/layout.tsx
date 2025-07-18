"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  LayoutDashboard,
  TrendingUp,
  Package,
  Map,
  Upload,
  Settings,
  Brain,
  Menu,
  Home,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Demand Forecast', href: '/dashboard/forecast', icon: TrendingUp },
  { name: 'Inventory Optimizer', href: '/dashboard/inventory', icon: Package },
  { name: 'Route Planner', href: '/dashboard/routes', icon: Map },
  { name: 'Upload Data', href: '/dashboard/upload', icon: Upload },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const Sidebar = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex items-center space-x-2 px-6 py-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
          <Brain className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">Digi-X-Tech</span>
      </div>
      <Separator />
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'relative bg-blue-50 text-blue-700 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <Separator />
      <div className="p-4 space-y-2">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* desktop sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white border-r border-gray-200">
          <Sidebar />
        </div>
      </div>

      {/* mobile sidebar */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* main area */}
      <div className="flex-1 md:ml-64 overflow-hidden">
        <main className="h-full overflow-y-auto w-full max-w-[100vw] overflow-x-hidden pt-16 md:pt-0">
          {children}
        </main>
      </div>
    </div>
  );
}
