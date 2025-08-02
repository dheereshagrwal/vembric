"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { sidebarData } from "@/lib/sidebar-data";

export function AppHeader() {
  const pathname = usePathname(); // e.g. "/list-all-games"

  const allSections = [...sidebarData.guides, ...sidebarData.resources];

  // Try to match the current path to a sub-item
  let sectionTitle: string | null = null;
  let pageTitle: string | null = null;

  for (const section of allSections) {
    const match = section.items?.find((item) => item.url === pathname);
    if (match) {
      sectionTitle = section.title;
      pageTitle = match.title;
      break;
    }
  }

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            {sectionTitle && (
              <>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{sectionTitle}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
              </>
            )}
            <BreadcrumbItem>
              <BreadcrumbPage>{pageTitle || "Documentation"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
