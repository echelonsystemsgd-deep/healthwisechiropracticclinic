"use client";

import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileActionBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-3 py-2 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Action 1: Direct Phone Call */}
        <a
          href={CLINIC_CONFIG.phoneUrl}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 transition-colors active:scale-95"
          aria-label={`Call Healthwise at ${CLINIC_CONFIG.phoneDisplay}`}
        >
          <Phone className="h-4 w-4 text-primary mb-0.5" />
          <span className="text-[11px] font-bold">Call Clinic</span>
        </a>

        {/* Action 2: WhatsApp Chat */}
        <a
          href={CLINIC_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors active:scale-95"
          aria-label="Send a WhatsApp message to clinic reception"
        >
          <MessageCircle className="h-4 w-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* Action 3: Book Appointment */}
        <Link
          href="/book-online"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-primary text-white font-bold text-xs shadow-sm hover:bg-primary-hover transition-colors active:scale-95"
        >
          <Calendar className="h-4 w-4" />
          <span>Book Online</span>
        </Link>
      </div>
    </aside>
  );
}
