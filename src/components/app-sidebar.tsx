import { ChevronUp, Plus, User2 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"

// Navigation items
export const navigation = [
  {
    title: "Guides",
    links: [
      { title: "Introduction", href: "/" },
      { title: "Quickstart", href: "/quickstart" },
      { title: "SDKs", href: "/sdks" },
      { title: "Authentication", href: "/authentication" },
      { title: "Pagination", href: "/pagination" },
      { title: "Errors", href: "/errors" },
      { title: "Webhooks", href: "/webhooks" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Contacts", href: "/contacts" },
      { title: "Conversations", href: "/conversations" },
      { title: "Messages", href: "/messages" },
      { title: "Groups", href: "/groups" },
      { title: "Attachments", href: "/attachments" },
    ],
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between h-full">
        <SidebarGroup className="h-full">
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupAction>
            {/* <Plus /> <span className="sr-only">Add Project</span> */}
          </SidebarGroupAction>
          <SidebarGroupContent className="flex-grow">
            <SidebarMenu>
              {navigation.map((group) => (
                <Collapsible key={group.title} defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span>{group.title}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {group.links.map((link) => (
                          <SidebarMenuSubItem key={link.title}>
                            <SidebarMenuButton asChild>
                              <a href={link.href}>
                                <span>{link.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Chirag Kumar
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width] bg-white"
                >
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}