import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export function CtaSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-700 to-blue-900">
      <div className="container max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Optimize Your Supply Chain?</h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of companies already using our AI-powered platform</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100">
            Request a Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-black dark:text-white hover:bg-white hover:text-blue-600">
            Join the Beta
          </Button>
        </div>
      </div>
    </section>
  );
} 