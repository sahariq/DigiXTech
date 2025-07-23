import React from "react";
import { User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

/**
 * RoutesHeader – page heading for routes views.
 *
 * Behaviour
 * ─────────────────────────────────────────────────────────────
 * • 📱  Mobile (< 1024 px): avatar + theme toggle on first line, title/subtitle
 *   stack below.
 * • 🖥️  Desktop (≥ 1024 px): title/subtitle on the left and controls on the
 *   right, all in a single row.
 * • Absolutely no top whitespace: we set `pt-0` (padding‑top zero) so the
 *   header hugs the very top edge on *all* viewports.
 */
export function RoutesHeader() {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
      {/* pt-0 removes any space above the header */}
      <div className="pt-0 pb-3 px-4 sm:px-6 flex justify-end">
        <div className="flex items-center space-x-3 shrink-0">
          <ThemeToggle />
          <div className="w-8 h-8 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
} 