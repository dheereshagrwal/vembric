import {
  BookOpen,
  Bot,
  CreditCard,
  FileText,
  Gamepad2,
  Settings2,
  SquareTerminal,
  Users,
} from "lucide-react";


export const sidebarData = {
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
          url: "/list-all-games",
          requestType: "GET",
        },
        {
          title: "Create Game",
          url: "#",
          requestType: "POST",
        },
        {
          title: "Edit Game",
          url: "#",
          requestType: "PUT",
        },
        {
          title: "View Details",
          url: "#",
          requestType: "GET",
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