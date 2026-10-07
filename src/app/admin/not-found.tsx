import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutGrid, ArrowLeft } from "lucide-react";

export default function AdminNotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 relative select-none">
      <div className="max-w-2xl mx-auto w-full text-center flex flex-col items-center bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        
        {/* Diagnostic Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>Internal Operations 404 • Calibrating Route</span>
        </div>

        {/* =========================================================================
            ADMIN CONTINUOUS LOOPING VECTOR ANIMATION
           ========================================================================= */}
        <div className="relative w-full max-w-lg mx-auto my-2 sm:my-4 flex items-center justify-center">
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-[200px] overflow-visible drop-shadow-sm"
            aria-label="Continuous animated scene of internal route explorer searching for resource"
          >
            <defs>
              <linearGradient id="adminFloorGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0" />
                <stop offset="20%" stopColor="#CBD5E1" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#CBD5E1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="adminBeamGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#7DD3FC" stopOpacity="0.4" />
                <stop offset="80%" stopColor="#BAE6FD" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.02" />
              </linearGradient>

              <radialGradient id="adminPoolGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0" />
              </radialGradient>

              <style>{`
                @keyframes admin-spiney-traversal {
                  0% { transform: translate(470px, 140px); }
                  4% { transform: translate(470px, 145px) scale(1.18, 0.8); }
                  10% { transform: translate(420px, 75px) scale(0.85, 1.25) rotate(-10deg); }
                  16% { transform: translate(375px, 144px) scale(1.22, 0.78); }
                  20% { transform: translate(375px, 140px) scale(1, 1); }
                  24% { transform: translate(375px, 145px) scale(1.18, 0.8); }
                  30% { transform: translate(325px, 75px) scale(0.85, 1.25) rotate(-10deg); }
                  36% { transform: translate(280px, 144px) scale(1.22, 0.78); }
                  40% { transform: translate(280px, 140px) scale(1, 1) rotate(0deg); }
                  44% { transform: translate(280px, 140px) rotate(-8deg); }
                  50% { transform: translate(280px, 140px) rotate(8deg); }
                  55% { transform: translate(280px, 140px) rotate(0deg); }
                  58% { transform: translate(280px, 142px) scale(1.05, 0.95); }
                  64% { transform: translate(280px, 142px) scale(1.05, 0.95) rotate(-5deg); }
                  70% { transform: translate(280px, 142px) scale(1.05, 0.95) rotate(5deg); }
                  76% { transform: translate(280px, 140px) scale(1, 1); }
                  80% { transform: translate(280px, 140px); }
                  84% { transform: translate(280px, 146px) scale(1.2, 0.78); }
                  90% { transform: translate(380px, 70px) scale(0.88, 1.22) rotate(12deg); }
                  96% { transform: translate(470px, 143px) scale(1.18, 0.82); }
                  100% { transform: translate(470px, 140px) scale(1, 1); }
                }

                @keyframes admin-shadow-physics {
                  0% { transform: translate(470px, 204px) scale(1, 1); opacity: 0.6; }
                  4% { transform: translate(470px, 204px) scale(1.3, 0.9); opacity: 0.8; }
                  10% { transform: translate(420px, 204px) scale(0.5, 0.4); opacity: 0.2; }
                  16% { transform: translate(375px, 204px) scale(1.35, 0.85); opacity: 0.85; }
                  20% { transform: translate(375px, 204px) scale(1, 1); opacity: 0.6; }
                  24% { transform: translate(375px, 204px) scale(1.3, 0.9); opacity: 0.8; }
                  30% { transform: translate(325px, 204px) scale(0.5, 0.4); opacity: 0.2; }
                  36% { transform: translate(280px, 204px) scale(1.35, 0.85); opacity: 0.85; }
                  40%, 80% { transform: translate(280px, 204px) scale(1, 1); opacity: 0.6; }
                  84% { transform: translate(280px, 204px) scale(1.3, 0.9); opacity: 0.8; }
                  90% { transform: translate(380px, 204px) scale(0.5, 0.4); opacity: 0.2; }
                  96% { transform: translate(470px, 204px) scale(1.3, 0.85); opacity: 0.85; }
                  100% { transform: translate(470px, 204px) scale(1, 1); opacity: 0.6; }
                }

                @keyframes admin-beam-cycle {
                  0%, 54% { opacity: 0; transform: scale(0.8) rotate(0deg); }
                  56% { opacity: 0.95; transform: scale(1.02) rotate(-6deg); }
                  64% { opacity: 0.9; transform: scale(1) rotate(6deg); }
                  70% { opacity: 0.9; transform: scale(1) rotate(-4deg); }
                  74% { opacity: 0.85; transform: scale(1) rotate(0deg); }
                  76%, 100% { opacity: 0; transform: scale(0.8) rotate(0deg); }
                }

                .admin-anim-spiney {
                  animation: admin-spiney-traversal 8.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                  transform-origin: 30px 65px;
                }
                .admin-anim-shadow {
                  animation: admin-shadow-physics 8.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                  transform-origin: center;
                }
                .admin-anim-beam {
                  animation: admin-beam-cycle 8.5s ease-in-out infinite;
                  transform-origin: 25px 25px;
                }

                @media (prefers-reduced-motion: reduce) {
                  .admin-anim-spiney { animation: none !important; transform: translate(280px, 140px) !important; }
                  .admin-anim-shadow { animation: none !important; transform: translate(280px, 204px) !important; }
                  .admin-anim-beam { animation: none !important; }
                }
              `}</style>
            </defs>

            <path d="M 20 205 L 580 205" stroke="url(#adminFloorGrad)" strokeWidth="2.5" strokeLinecap="round" />

            {/* Numerals */}
            <g className="font-heading font-black select-none opacity-20">
              <text x="145" y="190" fontSize="130" fontWeight="900" textAnchor="middle" fill="#0F172A">4</text>
              <text x="300" y="190" fontSize="130" fontWeight="900" textAnchor="middle" fill="#0F172A">0</text>
              <text x="455" y="190" fontSize="130" fontWeight="900" textAnchor="middle" fill="#0F172A">4</text>
            </g>

            {/* Dynamic Shadow */}
            <ellipse cx="0" cy="0" rx="22" ry="5.5" fill="#0F172A" className="admin-anim-shadow" />

            {/* Hero Character */}
            <g className="admin-spiney">
              {/* Beam */}
              <g className="admin-anim-beam pointer-events-none">
                <polygon points="25,25 -25,120 75,120" fill="url(#adminBeamGrad)" />
                <ellipse cx="25" cy="120" rx="48" ry="12" fill="url(#adminPoolGrad)" />
              </g>

              {/* Head */}
              <rect x="8" y="14" width="34" height="22" rx="9" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
              <circle cx="25" cy="25" r="4.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
              <circle cx="25" cy="25" r="2" fill="#FFFFFF" />

              {/* Eyes */}
              <circle cx="16" cy="22" r="2.6" fill="#FFFFFF" />
              <circle cx="34" cy="22" r="2.6" fill="#FFFFFF" />
              <circle cx="17.2" cy="22" r="1.3" fill="#0F172A" />
              <circle cx="35.2" cy="22" r="1.3" fill="#0F172A" />

              {/* Discs & Body */}
              <rect x="14" y="38" width="22" height="5" rx="2.5" fill="#64748B" />
              <rect x="11" y="45" width="28" height="15" rx="6" fill="#334155" />
              <rect x="13" y="62" width="24" height="5" rx="2.5" fill="#64748B" />
              <rect x="9" y="69" width="32" height="16" rx="7" fill="#1E293B" />
              <rect x="12" y="87" width="26" height="5" rx="2.5" fill="#64748B" />

              {/* Base */}
              <path d="M 5 95 C 15 90 35 90 45 95 C 42 101 8 101 5 95 Z" fill="#0F172A" />
            </g>
          </svg>
        </div>

        {/* Narrative */}
        <div className="space-y-2 mt-2 max-w-md">
          <h1 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Internal Operations Route Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The administrative resource requested does not exist or has been relocated within the Practice Growth System.
          </p>
        </div>

        {/* Administrative Action CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <Button asChild size="default" className="w-full sm:w-auto font-semibold bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
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
