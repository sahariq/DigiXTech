import React from "react";
import { User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

/**
 * DashboardHeader – header for dashboard views.
 *
 * Only admin icon and dark mode toggle, right-aligned.
 * No title or subtitle.
 */
export function DashboardHeader() {
  return (
    <header className="bg-white dark:bg-slate-900">
      <div className="pt-0 pb-3 px-4 sm:px-6 flex justify-end">
        <div className="flex items-center space-x-3 shrink-0">
          <ThemeToggle />
          <div className="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
      <div className="bg-border h-[1px] w-full" />
    </header>
  );
}
