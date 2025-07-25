import React from "react";
import { User } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from '@/components/ui/button';

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 flex flex-row items-center h-20 px-0">
      <div className="pt-0 pb-3 px-4 sm:px-6 flex justify-end">
        <div className="flex items-center space-x-3 shrink-0 mt-1">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
