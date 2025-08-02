import type { Metadata } from "next";
import { fontSans, fontMono } from "@/lib/fonts";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"; // ✅ context provider
import "./globals.css";
import { AppHeader } from "@/components/app-header";

export const metadata: Metadata = {
  title: "Vembric - API Documentation Template",
  description:
    "A modern, beautiful template for API documentation built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1 flex flex-col overflow-auto">
            <AppHeader /> 
            <main className="flex-1 p-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
