'use client';

import { ReactNode } from 'react';
import { LayoutProvider } from '../providers/layout-provider';
// CORRECTED IMPORT PATH: Import Sidebar from where it's defined (src/components/ui/sidebar.tsx)
import { Sidebar, SidebarProvider,SidebarTrigger } from '@/components/ui/sidebar';
import { Header } from '../components/Header';
import { AppSidebar } from '../components/app-sidebar';
export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutProvider>
      {/* SidebarProvider must wrap any component that uses useSidebar, including the Sidebar component itself */}
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </LayoutProvider>
  );
}
