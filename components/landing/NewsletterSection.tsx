import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import React from 'react';

interface NewsletterSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleNewsletterSubmit: (e: React.FormEvent) => void;
}

export function NewsletterSection({ email, setEmail, handleNewsletterSubmit }: NewsletterSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-900 dark:bg-slate-950">
      <div className="container max-w-screen-md mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h3>
        <p className="text-gray-400 mb-6 text-base md:text-lg">Get the latest insights and updates from our AI research team</p>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0"
            required
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
            {/* Mail icon can be added here if desired */}
          </Button>
        </form>
      </div>
    </section>
  );
} 