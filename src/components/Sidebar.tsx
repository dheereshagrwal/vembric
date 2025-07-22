'use client';

import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-muted border-r flex flex-col p-4">
      <div className="mb-8 font-bold text-xl">Menu</div>
      <nav className="flex flex-col space-y-2">
        <Link href="/">Dashboard</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/reports">Reports</Link>
      </nav>
    </aside>
  );
}
