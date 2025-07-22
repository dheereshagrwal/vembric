'use client';

import { ReactNode } from 'react';
import { LayoutProvider } from '../providers/layout-provider';
import { Sidebar } from '../components/Sidebar';
import { Header } from '../components/Header';

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </LayoutProvider>
  );
}
