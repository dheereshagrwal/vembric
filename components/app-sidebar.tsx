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

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  guides: [
    {
      title: "Getting Started",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Quick Start",
          url: "#",
        },
        {
          title: "Installation",
          url: "#",
        },
      ],
    },
    {
      title: "API Reference",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Authentication",
          url: "#",
        },
        {
          title: "Endpoints",
          url: "#",
        },
        {
          title: "Rate Limiting",
          url: "#",
        },
      ],
    },
    {
      title: "Guides",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Best Practices",
          url: "#",
        },
        {
          title: "Error Handling",
          url: "#",
        },
        {
          title: "SDKs",
          url: "#",
        },
        {
          title: "Examples",
          url: "#",
        },
      ],
    },
    {
      title: "Support",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
        {
          title: "Status",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  resources: [
    {
      title: "Games",
      url: "#",
      icon: Gamepad2,
      isActive: true,
      items: [
        {
          title: "List All Games",
          url: "#",
        },
        {
          title: "Create Game",
          url: "#",
        },
        {
          title: "Edit Game",
          url: "#",
        },
        {
          title: "View Details",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
      items: [
        {
          title: "List Users",
          url: "#",
        },
        {
          title: "Register User",
          url: "#",
        },
        {
          title: "Edit Profile",
          url: "#",
        },
        {
          title: "Manage Roles",
          url: "#",
        },
      ],
    },
    {
      title: "Leases",
      url: "#",
      icon: FileText,
      items: [
        {
          title: "Active Leases",
          url: "#",
        },
        {
          title: "Create Lease",
          url: "#",
        },
        {
          title: "Renew Lease",
          url: "#",
        },
        {
          title: "Lease History",
          url: "#",
        },
      ],
    },
    {
      title: "Payments",
      url: "#",
      icon: CreditCard,
      items: [
        {
          title: "Process Payment",
          url: "#",
        },
        {
          title: "View Transactions",
          url: "#",
        },
        {
          title: "Refunds",
          url: "#",
        },
        {
          title: "Billing Settings",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <img src="/logo.svg" alt="Vembric Logo" className="size-8" />
          <span className="truncate font-semibold">Vembric</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.guides} label="Guides" />
        <NavMain items={data.resources} label="Resources" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
