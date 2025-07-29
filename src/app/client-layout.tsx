'use client';

import { ReactNode } from 'react';
import { LayoutProvider } from '../providers/layout-provider';
// CORRECTED IMPORT PATH: Import Sidebar from where it's defined (src/components/ui/sidebar.tsx)
import { Sidebar, SidebarProvider,SidebarTrigger } from '@/components/ui/sidebar';
import { Header } from '../components/Header';
import { AppSidebar } from '../components/app-sidebar';
import Link from 'next/link';
import { Logo } from '@/components/logo';
export function ClientLayout({ children }: { children: ReactNode }) {

  const mockUser = {
    name: "Chirag Kumar",
    email: "chigsofficial@gmail.com",
    avatar: "https://placehold.co/100x100/A020F0/ffffff?text=CK",
  };

  return (
    <LayoutProvider>
      {/* SidebarProvider must wrap any component that uses useSidebar, including the Sidebar component itself */}
      <SidebarProvider>
        

      <AppSidebar user={mockUser} />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </LayoutProvider>
  );
}
