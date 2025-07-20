'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Button,
} from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ThemeToggle';
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
  User,
} from 'lucide-react';

/**
 * Centralised navigation definition so active‑state colour can be shared
 */
const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Demand Forecast', href: '/dashboard/forecast', icon: TrendingUp },
  { name: 'Inventory Optimizer', href: '/dashboard/inventory', icon: Package },
  { name: 'Route Planner', href: '/dashboard/routes', icon: Map },
  { name: 'Upload Data', href: '/dashboard/upload', icon: Upload },
  { name: 'Settings', href: '/dashboard/setting', icon: Settings },
] as const;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  /**
   * Sidebar extracted into its own component so we can reuse it for
   * both desktop and mobile drawers.
   */
  const Sidebar = ({ className = '' }: { className?: string }) => (
    <div className={`flex flex-col h-full ${className}`.trim()}>
      {/* Brand / logo */}
      <div className="flex items-center space-x-3 px-6 py-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
          <Brain className="w-7 h-7 text-white" />
        </div>
        <span className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-wide">
          Digi‑X‑Tech
        </span>
      </div>

      <Separator />

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-2">
          {navigation.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400 ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{name}</span>
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <Separator />

      {/* Footer / user controls */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Admin User</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">admin@company.com</p>
            </div>
          </div>
          <ThemeToggle />
        </div>

        <Link href="/">
          <Button
            variant="ghost"
            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-900">
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700">
          <Sidebar />
        </div>
      </div>

      {/* Mobile sidebar / drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 md:ml-64 overflow-hidden">
        <main className="h-full overflow-y-auto scroll-smooth focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
}
