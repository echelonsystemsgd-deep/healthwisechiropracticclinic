import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Outreach & Partner Pipeline | Practice Growth System",
  description: "Internal practice outreach and partnership intelligence dashboard.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      noarchive: true,
    },
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-800 flex flex-col">
      {/* Neutral Internal Operations Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800 px-4 sm:px-6 py-3 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <LayoutGrid className="h-4 w-4" />
            </div>
            <div>
              <span className="font-heading font-bold text-sm tracking-tight text-white block leading-tight">
                Practice Growth System
              </span>
              <span className="text-[11px] text-slate-400">
                Internal Practice Operations Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-slate-800"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Exit to Main Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Admin Content Area */}
      <main className="flex-1">{children}</main>

      {/* Neutral Internal Operational Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-500 text-xs py-4 px-6 text-center">
        <p>Internal Operations Environment • Unauthorised Access Prohibited • Strict Confidentiality</p>
      </footer>
    </div>
  );
}
