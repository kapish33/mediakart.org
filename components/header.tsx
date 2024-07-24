import Link from "next/link";
import React from "react";

export function DemoHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <Link
        href="/"
        className="text-lg font-medium text-gray-800 hover:text-gray-900"
      >
        Home
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          href="/news"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          News
        </Link>
        <Link
          href="/tick-tac-toe"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          Tick Tac Toe
        </Link>
        <Link
          href="/magnifying-circle"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          Magnifying Circle
        </Link>
      </nav>
    </header>
  );
}
