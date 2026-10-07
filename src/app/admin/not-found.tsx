"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutGrid, ArrowLeft, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";

export default function AdminNotFound() {
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [adjustmentCount, setAdjustmentCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerAdjustment();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const triggerAdjustment = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsAdjusted(false);

    setTimeout(() => {
      setIsAdjusted(true);
      setAdjustmentCount((prev) => prev + 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }, 500);
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 sm:px-6 relative select-none">
      <div className="max-w-xl mx-auto w-full text-center flex flex-col items-center bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        
        {/* Diagnostic Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-4">
          {isAdjusted ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span>Route Realignment Complete</span>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Internal 404 • Operational Route Missing</span>
            </>
          )}
        </div>

        {/* =========================================================================
            ADMIN INTERACTIVE SPINEY CHARACTERS
           ========================================================================= */}
        <div 
          className="relative w-full max-w-sm mx-auto py-2 flex flex-col items-center justify-center cursor-pointer group"
          onClick={triggerAdjustment}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerAdjustment(); } }}
          title="Click to trigger system realignment"
        >
          {/* Glowing Aura */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full transition-all duration-700 pointer-events-none ${
              isAdjusted 
                ? "bg-gradient-to-tr from-emerald-500/10 via-sky-400/10 to-transparent blur-2xl scale-110 opacity-100" 
                : "bg-slate-200/50 blur-xl scale-75 opacity-40"
            }`}
          />

          {/* Sparkles on Pop */}
          {isAdjusted && isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 rounded-full border-2 border-emerald-400/40 animate-ping opacity-60" />
              <div className="absolute top-1/4 left-1/4 animate-bounce">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              </div>
            </div>
          )}

          {/* Numbers & Mascot */}
          <div className="relative flex items-center justify-center gap-2 w-full h-40">
            <span className="font-heading text-6xl sm:text-7xl font-black tracking-tighter text-slate-300">
              4
            </span>

            <div className="relative flex items-center justify-center w-28 sm:w-32 h-full">
              {/* Central Vertebra '0' */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                  isAdjusted 
                    ? "rotate-0 scale-100 text-slate-800" 
                    : isAnimating 
                      ? "-rotate-12 scale-90 translate-y-2 text-amber-600" 
                      : "rotate-18 -translate-y-1 text-slate-300"
                }`}
              >
                <svg viewBox="0 0 100 120" className="w-20 sm:w-24 h-28 sm:h-32 overflow-visible">
                  <rect
                    x="18"
                    y="14"
                    width="64"
                    height="92"
                    rx="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <ellipse cx="50" cy="60" rx="12" ry="18" fill="white" />
                  <path
                    d="M 34 60 Q 50 65 66 60"
                    stroke={isAdjusted ? "#10B981" : "#CBD5E1"}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Admin Spiney Character */}
              <div 
                className={`relative z-20 flex flex-col items-center transition-all duration-500 ${
                  isAnimating 
                    ? "scale-90 translate-y-2" 
                    : isAdjusted 
                      ? "scale-105 -translate-y-1" 
                      : "scale-95 translate-y-1 rotate-6"
                }`}
              >
                <svg viewBox="0 0 100 130" className="w-18 sm:w-22 h-24 sm:h-28 overflow-visible">
                  {/* Leaf Crest */}
                  <g className={`transition-all duration-700 ${isAdjusted ? "scale-100 rotate-0" : "-rotate-12 scale-90 opacity-70"}`}>
                    <path d="M 50 18 C 50 18 36 6 42 0 C 48 -4 58 8 50 18 Z" fill="#10B981" />
                    <path d="M 50 18 C 50 18 64 6 58 0 C 52 -4 42 8 50 18 Z" fill="#34D399" opacity="0.8" />
                  </g>

                  {/* Atlas Head */}
                  <rect x="30" y="20" width="40" height="24" rx="10" fill="#1E293B" />
                  {isAdjusted ? (
                    <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none">
                      <path d="M 40 33 Q 44 29 48 33" />
                      <path d="M 52 33 Q 56 29 60 33" />
                      <circle cx="36" cy="36" r="2" fill="#F59E0B" stroke="none" />
                      <circle cx="64" cy="36" r="2" fill="#F59E0B" stroke="none" />
                    </g>
                  ) : (
                    <g fill="#FFFFFF">
                      <circle cx="43" cy="32" r="3" />
                      <circle cx="57" cy="32" r="3" />
                      <circle cx="44.5" cy="32.5" r="1.5" fill="#0F172A" />
                      <circle cx="58.5" cy="32.5" r="1.5" fill="#0F172A" />
                    </g>
                  )}

                  {/* Vertebrae Column */}
                  <rect x={isAdjusted ? "38" : "42"} y="46" width="24" height="6" rx="3" fill="#64748B" />
                  <rect x={isAdjusted ? "33" : "38"} y="54" width="34" height="18" rx="8" fill="#334155" />
                  <rect x={isAdjusted ? "37" : "39"} y="74" width="26" height="6" rx="3" fill="#64748B" />
                  <rect x={isAdjusted ? "31" : "33"} y="82" width="38" height="20" rx="9" fill="#1E293B" />
                  <rect x={isAdjusted ? "36" : "37"} y="104" width="28" height="6" rx="3" fill="#64748B" />
                  <path d="M 24 118 Q 50 110 76 118 L 72 126 Q 50 120 28 126 Z" fill="#0F172A" />
                </svg>
              </div>
            </div>

            <span className="font-heading text-6xl sm:text-7xl font-black tracking-tighter text-slate-300">
              4
            </span>
          </div>

          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
            <RefreshCw className={`h-3 w-3 ${isAnimating ? "animate-spin" : ""}`} />
            <span>Click Spiney to recalibrate internal route</span>
            {adjustmentCount > 1 && (
              <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full font-mono">
                {adjustmentCount} calibrated
              </span>
            )}
          </div>
        </div>

        {/* Narrative */}
        <div className="space-y-2 mt-4 max-w-md">
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Internal Operations Route Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The administrative view or resource requested does not exist or has been relocated within the Practice Growth System.
          </p>
        </div>

        {/* Administrative Action CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <Button asChild size="default" className="w-full sm:w-auto font-semibold bg-slate-900 hover:bg-slate-800 text-white">
            <Link href="/admin/outreach">
              <LayoutGrid className="h-4 w-4 mr-2" />
              Return to Pipeline Dashboard
            </Link>
          </Button>

          <Button asChild variant="outline" size="default" className="w-full sm:w-auto font-semibold">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Exit to Clinic Homepage
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
