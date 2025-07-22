'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full h-16 flex justify-center items-center px-4 border-b">
      <Link href="/" className="font-bold text-lg">
        Vembric
      </Link>
      {/* <nav className="ml-auto flex space-x-4"> */}
        {/* <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link> */}
        {/* Add more links as needed */}
      {/* </nav> */}
    </header>
  );
}
