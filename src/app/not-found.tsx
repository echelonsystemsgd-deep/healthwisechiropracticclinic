"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site.config";
import { Calendar, Home, Phone, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";

export default function NotFound() {
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Auto-play the adjustment animation shortly after mount (like the antique lamp turning on)
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerAdjustment();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const triggerAdjustment = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsAdjusted(false);

    // Simulate the anticipatory tension and then the satisfying "CLICK / ADJUSTMENT"
    setTimeout(() => {
      setIsAdjusted(true);
      setClickCount((prev) => prev + 1);
      setTimeout(() => {
        setIsAnimating(false);
      }, 900);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/20 text-slate-800 flex flex-col justify-between py-8 px-4 sm:px-6 relative overflow-hidden select-none">
      {/* Background Postural Plumb Line Grid (subtle medical ergonomics watermark) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E293B 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Decorative Ergonomic Plumb-Line Axis */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Clinic Header Branding */}
      <header className="relative z-10 max-w-4xl mx-auto w-full flex items-center justify-between pb-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2.5 text-slate-900 hover:text-primary transition-colors group"
          title={`${SITE_CONFIG.name} Home`}
        >
          <div className="h-9 w-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
            <Image
              src="/icon.svg"
              alt={SITE_CONFIG.name}
              width={28}
              height={28}
              className="h-6 w-6"
            />
          </div>
          <span className="font-heading font-bold text-sm tracking-tight text-slate-900 hidden sm:inline-block">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <a
          href={SITE_CONFIG.contact.telephoneLink}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-primary transition-colors bg-white/80 backdrop-blur px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs"
        >
          <Phone className="h-3.5 w-3.5 text-primary" />
          <span>Reception: {SITE_CONFIG.contact.telephoneDisplay}</span>
        </a>
      </header>

      {/* Main Interactive Stage */}
      <main className="relative z-10 max-w-2xl mx-auto my-auto w-full text-center flex flex-col items-center">
        {/* Diagnostic Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 animate-fade-in">
          {isAdjusted ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span>Alignment Restored</span>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Subluxation Detected • 404 Missing</span>
            </>
          )}
        </div>

        {/* =========================================================================
            BESPOKE ANIMATED CHARACTER STAGE ("SPINEY" THE VERTEBRA & 404)
           ========================================================================= */}
        <div 
          className="relative w-full max-w-md sm:max-w-lg mx-auto py-2 flex flex-col items-center justify-center cursor-pointer group"
          onClick={triggerAdjustment}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); triggerAdjustment(); } }}
          aria-label="Click to realign the chiropractic vertebrae"
          title="Click to trigger a chiropractic adjustment!"
        >
          {/* Postural Healing Halo / Light Cone (Inspired by the Antique Lamp's Light Beam) */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full transition-all duration-700 pointer-events-none ${
              isAdjusted 
                ? "bg-gradient-to-tr from-primary/15 via-emerald-400/10 to-teal-200/5 blur-2xl scale-110 opacity-100" 
                : "bg-slate-200/40 blur-xl scale-75 opacity-40"
            }`}
          />

          {/* Sparkle Particle Shockwave Ring (Triggers upon adjustment pop) */}
          {isAdjusted && isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 rounded-full border-2 border-primary/40 animate-ping opacity-60" />
              <div className="absolute top-1/4 left-1/3 text-primary animate-bounce">
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              </div>
              <div className="absolute bottom-1/3 right-1/4 text-primary animate-pulse">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
            </div>
          )}

          {/* NUMBERS & CHARACTER COMPOSITION */}
          <div className="relative flex items-center justify-center gap-1 sm:gap-3 w-full h-44 sm:h-52">
            
            {/* Number "4" Left */}
            <span className="font-heading text-6xl sm:text-8xl font-black tracking-tighter text-slate-300 transition-colors duration-500 select-none">
              4
            </span>

            {/* Central Animated Character: "Spiney the Vertebra" & the "0" */}
            <div className="relative flex items-center justify-center mx-1 sm:mx-2 w-32 sm:w-40 h-full">
              
              {/* Misaligned or Realigned "0" Ring representing the displaced vertebra disc */}
              <div 
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                  isAdjusted 
                    ? "rotate-0 scale-100 text-primary drop-shadow-[0_8px_16px_rgba(118,164,54,0.25)]" 
                    : isAnimating 
                      ? "-rotate-12 scale-90 translate-y-2 text-amber-500" 
                      : "rotate-18 -translate-y-1 text-slate-300 drop-shadow-sm"
                }`}
              >
                {/* Stylized Vertebra Oval (The '0') */}
                <svg
                  viewBox="0 0 100 120"
                  className="w-24 sm:w-32 h-32 sm:h-40 overflow-visible transition-transform duration-500"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="vertebraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={isAdjusted ? "#8CB843" : "#94A3B8"} />
                      <stop offset="100%" stopColor={isAdjusted ? "#76A436" : "#64748B"} />
                    </linearGradient>
                    <linearGradient id="discGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={isAdjusted ? "#60A5FA" : "#CBD5E1"} />
                      <stop offset="100%" stopColor={isAdjusted ? "#3B82F6" : "#94A3B8"} />
                    </linearGradient>
                  </defs>

                  {/* Outer Vertebra Body Ring */}
                  <rect
                    x="15"
                    y="12"
                    width="70"
                    height="96"
                    rx="35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="15"
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />

                  {/* Spinal Canal Aperture / Core Disc */}
                  <ellipse
                    cx="50"
                    cy="60"
                    rx="14"
                    ry="20"
                    fill="white"
                    className="shadow-inner"
                  />

                  {/* Intervertebral Disc Cushion Accent */}
                  <path
                    d="M 32 60 Q 50 66 68 60"
                    stroke={isAdjusted ? "#76A436" : "#CBD5E1"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>

              {/* "Spiney" The Animated Walking & Adjusting Character Mascot */}
              <div 
                className={`relative z-20 flex flex-col items-center transition-all duration-500 ${
                  isAnimating 
                    ? "scale-90 translate-y-3" 
                    : isAdjusted 
                      ? "scale-105 -translate-y-1" 
                      : "scale-95 translate-y-1 rotate-6"
                }`}
              >
                <svg
                  viewBox="0 0 100 130"
                  className="w-20 sm:w-26 h-26 sm:h-34 overflow-visible"
                  aria-hidden="true"
                >
                  {/* Healthwise Botanical Leaf Crest (The Clinic Logo Motif) */}
                  <g 
                    className={`transition-all duration-700 origin-bottom ${
                      isAdjusted ? "scale-100 rotate-0" : "-rotate-12 scale-90 opacity-70"
                    }`}
                  >
                    <path
                      d="M 50 18 C 50 18 36 6 42 0 C 48 -4 58 8 50 18 Z"
                      fill="#76A436"
                    />
                    <path
                      d="M 50 18 C 50 18 64 6 58 0 C 52 -4 42 8 50 18 Z"
                      fill="#8CB843"
                      opacity="0.85"
                    />
                  </g>

                  {/* Cervical Vertebra (Head with Expressive Eyes) */}
                  <g 
                    className={`transition-transform duration-500 origin-center ${
                      !isAdjusted ? "translate-x-1" : "translate-x-0"
                    }`}
                  >
                    {/* Head / C1 Atlas */}
                    <rect
                      x="30"
                      y="20"
                      width="40"
                      height="24"
                      rx="10"
                      fill="#1E293B"
                    />
                    {/* Friendly Eyes */}
                    {isAdjusted ? (
                      // Happy relaxed eyes (adjusted state)
                      <g stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none">
                        <path d="M 40 33 Q 44 29 48 33" />
                        <path d="M 52 33 Q 56 29 60 33" />
                        {/* Cheerful rosy cheeks */}
                        <circle cx="36" cy="36" r="2.5" fill="#FFBC7D" stroke="none" />
                        <circle cx="64" cy="36" r="2.5" fill="#FFBC7D" stroke="none" />
                      </g>
                    ) : (
                      // Quizzical / strained eyes looking sideways at the misaligned 404
                      <g fill="#FFFFFF">
                        <circle cx="43" cy="32" r="3" />
                        <circle cx="57" cy="32" r="3" />
                        {/* Pupils looking to the side */}
                        <circle cx="44.5" cy="32.5" r="1.5" fill="#0F172A" />
                        <circle cx="58.5" cy="32.5" r="1.5" fill="#0F172A" />
                        {/* Sweat droplet (mild tension) */}
                        <path d="M 66 22 Q 68 25 66 28 Q 64 25 66 22 Z" fill="#60A5FA" />
                      </g>
                    )}
                  </g>

                  {/* Flexible Spine Discs (Thoracic & Lumbar Column) */}
                  {/* Disc 1 (Cervical-Thoracic Junction) */}
                  <rect
                    x={isAdjusted ? "38" : "42"}
                    y="46"
                    width="24"
                    height="6"
                    rx="3"
                    fill={isAdjusted ? "#76A436" : "#94A3B8"}
                    className="transition-all duration-500"
                  />

                  {/* Vertebra T-Spine */}
                  <rect
                    x={isAdjusted ? "33" : "38"}
                    y="54"
                    width="34"
                    height="18"
                    rx="8"
                    fill={isAdjusted ? "#76A436" : "#64748B"}
                    className="transition-all duration-500"
                  />

                  {/* Disc 2 (Thoraco-Lumbar Cushion) */}
                  <rect
                    x={isAdjusted ? "37" : "39"}
                    y="74"
                    width="26"
                    height="6"
                    rx="3"
                    fill={isAdjusted ? "#468EC8" : "#94A3B8"}
                    className="transition-all duration-500"
                  />

                  {/* Vertebra L-Spine (Lumbar Core) */}
                  <rect
                    x={isAdjusted ? "31" : "33"}
                    y="82"
                    width="38"
                    height="20"
                    rx="9"
                    fill={isAdjusted ? "#76A436" : "#475569"}
                    className="transition-all duration-500"
                  />

                  {/* Disc 3 (Lumbar-Sacral Foundation) */}
                  <rect
                    x={isAdjusted ? "36" : "37"}
                    y="104"
                    width="28"
                    height="6"
                    rx="3"
                    fill={isAdjusted ? "#468EC8" : "#94A3B8"}
                    className="transition-all duration-500"
                  />

                  {/* Sacrum & Pelvic Feet (Stable Grounding Base) */}
                  <path
                    d={
                      isAdjusted
                        ? "M 24 118 Q 50 110 76 118 L 72 126 Q 50 120 28 126 Z"
                        : "M 22 120 Q 50 114 74 122 L 70 128 Q 50 122 26 128 Z"
                    }
                    fill="#1E293B"
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
            </div>

            {/* Number "4" Right */}
            <span className="font-heading text-6xl sm:text-8xl font-black tracking-tighter text-slate-300 transition-colors duration-500 select-none">
              4
            </span>
          </div>

          {/* Interactive Micro-Cue (Encourages patient tactile delight) */}
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 group-hover:text-primary transition-colors">
            <RefreshCw className={`h-3 w-3 ${isAnimating ? "animate-spin" : "group-hover:rotate-45"} transition-transform`} />
            <span>
              {isAdjusted ? "Click to re-align again" : "Click Spiney to perform a gentle adjustment"}
            </span>
            {clickCount > 1 && (
              <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-mono">
                {clickCount} adjustments
              </span>
            )}
          </div>
        </div>

        {/* Narrative & Helpful Guidance */}
        <div className="space-y-3 mt-4 max-w-lg">
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {isAdjusted ? "Let’s Get You Back into Alignment" : "Looks Like This Link Is Out of Alignment"}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {isAdjusted ? (
              <>
                The page you are looking for has moved or no longer exists. While Spiney is now standing tall and aligned, let us guide you back to our clinic services or help you book an assessment.
              </>
            ) : (
              <>
                Our chiropractors in Cranford specialize in gentle spinal correction, but this URL seems to have slipped off course. Let us guide you back to comfort.
              </>
            )}
          </p>
        </div>

        {/* Clear Action CTAs */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          <Button asChild size="lg" className="w-full sm:w-auto font-semibold shadow-md hover:shadow-lg transition-all">
            <Link href="/book-online">
              <Calendar className="h-4 w-4 mr-2" />
              Book an Appointment
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-semibold bg-white hover:bg-slate-50">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Return to Homepage
            </Link>
          </Button>
        </div>

        {/* Clinic Reassurance & Direct Contact */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 w-full max-w-md text-center space-y-2 text-xs text-slate-500">
          <p className="font-medium text-slate-700">
            Experiencing acute back or neck discomfort? Speak directly with our team.
          </p>
          <a
            href={SITE_CONFIG.contact.telephoneLink}
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Reception: {SITE_CONFIG.contact.telephoneDisplay}</span>
          </a>
          <p className="text-[11px] text-slate-400">
            {SITE_CONFIG.address.full} • Mon–Sat: 8:00 AM – 7:00 PM
          </p>
        </div>
      </main>

      {/* Trust & Regulatory Footer */}
      <footer className="relative z-10 text-center text-xs text-slate-400 pt-6">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Regulated by the General Chiropractic Council.</p>
      </footer>
    </div>
  );
}
