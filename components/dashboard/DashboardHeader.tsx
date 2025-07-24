import React from "react";
import { User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 flex flex-row items-center h-20 px-0">
      <div className="pt-0 pb-3 px-4 sm:px-6 flex justify-end">
        <div className="flex items-center space-x-3 shrink-0 -mt-2">
          <ThemeToggle />
          <div className="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
