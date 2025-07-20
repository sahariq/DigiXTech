import { Brain } from 'lucide-react';
import React from 'react';

export function FooterSection() {
  return (
    <footer className="py-8 px-4 bg-gray-900 dark:bg-slate-950 border-t border-gray-800 dark:border-slate-700">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Digi-X-Tech</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2 text-sm md:text-base">Email: hello@digi-x-tech.com</p>
            <p className="text-gray-400 text-sm md:text-base">© 2025 Digi-X-Tech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 