"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/site.config";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-4 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center font-bold text-lg">
            HW
          </div>
          <h1 className="text-xl font-bold text-slate-900">
            Healthwise Chiropractic Clinic
          </h1>
          <p className="text-xs text-slate-600">
            A temporary system error occurred. Please click below to refresh the page or call us directly.
          </p>
          <div className="pt-2">
            <button
              onClick={() => reset()}
              className="bg-primary text-white font-semibold text-xs px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Refresh Application
            </button>
          </div>
          <p className="text-[11px] text-slate-400 pt-4 border-t border-slate-100">
            Clinic Telephone: {SITE_CONFIG.contact.telephoneDisplay}
          </p>
        </div>
      </body>
    </html>
  );
}
