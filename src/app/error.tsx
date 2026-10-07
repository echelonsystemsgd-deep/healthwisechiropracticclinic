"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site.config";
import { AlertCircle, RotateCcw, Home, Phone } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors internally without exposing tooling
    console.error("Clinical Portal Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto my-auto w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
        <div className="mx-auto h-16 w-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
          <AlertCircle className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            System Notice
          </span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Something Interrupted This Request
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Our online system experienced an unexpected interruption. Your appointment data has not been compromised. Please retry or contact our reception desk directly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={() => reset()} size="lg" className="w-full sm:w-auto font-semibold">
            <RotateCcw className="h-4 w-4 mr-2" />
            Try Again
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Return to Clinic Home
            </Link>
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
          <p className="font-medium text-slate-700">
            For urgent appointment bookings, please call our clinic team directly:
          </p>
          <a
            href={SITE_CONFIG.contact.telephoneLink}
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{SITE_CONFIG.contact.telephoneDisplay}</span>
          </a>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 pt-8">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Regulated by the General Chiropractic Council.</p>
      </footer>
    </div>
  );
}
