'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface LayoutProviderProps {
  children: ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
