"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
  Users,
  CreditCard,
  FileText,
  Gamepad2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/lib/sidebar-data";
import { useRouter } from "next/navigation";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <img src="/logo.svg" alt="Vembric Logo" className="size-8" />
          <span className="truncate font-semibold cursor-pointer" onClick={()=>{router.replace("/")}}>Vembric</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.guides} label="Guides" />
        <NavMain items={sidebarData.resources} label="Resources" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
