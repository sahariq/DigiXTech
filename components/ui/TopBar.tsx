'use client';
import { Bell, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TopBar({ title }: { title: string }) {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between h-14 px-4 md:px-8">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

        <div className="flex items-center gap-3">
          {/* dark / light switch */}
          <Button variant="ghost" size="icon" onClick={() => setTheme('dark')}>
            <SunMoon className="w-5 h-5" />
          </Button>

          {/* notifications placeholder */}
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>

          {/* avatar */}
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatar.jpg" alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
