import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site.config";
import { Calendar, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-emerald-50/20 text-slate-800 flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 relative overflow-hidden select-none">
      
      {/* Background Postural Ergonomic Plumb-Line Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E293B 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Decorative Ergonomic Plumb-Line Axis */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Clinic Header Branding */}
      <header className="relative z-10 max-w-4xl mx-auto w-full flex items-center justify-between pb-2 sm:pb-4">
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

      {/* Main Hero & Animation Stage */}
      <main className="relative z-10 max-w-3xl mx-auto my-auto w-full text-center flex flex-col items-center">
        
        {/* Diagnostic Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Postural Examination • 404 Missing Route</span>
        </div>

        {/* =========================================================================
            CINEMATIC LOOPING VECTOR STAGE (INSPIRED BY WHATSAPP ANTIQUE LAMP VIDEO)
           ========================================================================= */}
        <div className="relative w-full max-w-xl mx-auto my-2 sm:my-4 flex items-center justify-center">
          
          <svg
            viewBox="0 0 600 240"
            className="w-full h-auto max-h-[220px] sm:max-h-[260px] overflow-visible drop-shadow-sm"
            aria-label="Continuous animated scene of Spiney the vertebra mascot inspecting the 404 numbers with a searchlight"
          >
            <defs>
              {/* Floor Horizon Gradient */}
              <linearGradient id="floorGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0" />
                <stop offset="20%" stopColor="#CBD5E1" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#94A3B8" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#CBD5E1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0" />
              </linearGradient>

              {/* Conical Searchlight Beam Gradient */}
              <linearGradient id="lightBeamGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8CB843" stopOpacity="0.85" />
                <stop offset="25%" stopColor="#A3E635" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#BEF264" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#ECFCCB" stopOpacity="0.02" />
              </linearGradient>

              {/* Illuminated Floor Pool Gradient */}
              <radialGradient id="floorPoolGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8CB843" stopOpacity="0.75" />
                <stop offset="40%" stopColor="#A3E635" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#BEF264" stopOpacity="0" />
              </radialGradient>

              {/* Vertebra Disc Gradient */}
              <linearGradient id="vertebraGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8CB843" />
                <stop offset="100%" stopColor="#76A436" />
              </linearGradient>

              {/* Cervical Head Gradient */}
              <linearGradient id="headGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>

              {/* CSS Animations Embedded Inside SVG for 60FPS Performance */}
              <style>{`
                /* Master Hopping Traversal Loop across the 404 Stage */
                @keyframes spiney-traversal {
                  0% {
                    transform: translate(470px, 140px);
                  }
                  /* Hop 1: Squash & Leap towards center */
                  4% {
                    transform: translate(470px, 145px) scale(1.18, 0.8); /* Squash */
                  }
                  10% {
                    transform: translate(420px, 75px) scale(0.85, 1.25) rotate(-10deg); /* High Apex */
                  }
                  16% {
                    transform: translate(375px, 144px) scale(1.22, 0.78); /* Land squash */
                  }
                  20% {
                    transform: translate(375px, 140px) scale(1, 1); /* Settle */
                  }
                  /* Hop 2: Leap into Center Stage */
                  24% {
                    transform: translate(375px, 145px) scale(1.18, 0.8); /* Squash */
                  }
                  30% {
                    transform: translate(325px, 75px) scale(0.85, 1.25) rotate(-10deg); /* High Apex */
                  }
                  36% {
                    transform: translate(280px, 144px) scale(1.22, 0.78); /* Land squash */
                  }
                  40% {
                    transform: translate(280px, 140px) scale(1, 1) rotate(0deg); /* Stand Center */
                  }
                  /* Inspection: Sits Center-Stage Looking Around */
                  44% {
                    transform: translate(280px, 140px) rotate(-8deg); /* Tilt Left */
                  }
                  50% {
                    transform: translate(280px, 140px) rotate(8deg); /* Tilt Right */
                  }
                  55% {
                    transform: translate(280px, 140px) rotate(0deg); /* Facing Forward */
                  }
                  /* Examination: Leans forward while light beam shines */
                  58% {
                    transform: translate(280px, 142px) scale(1.05, 0.95);
                  }
                  64% {
                    transform: translate(280px, 142px) scale(1.05, 0.95) rotate(-5deg);
                  }
                  70% {
                    transform: translate(280px, 142px) scale(1.05, 0.95) rotate(5deg);
                  }
                  76% {
                    transform: translate(280px, 140px) scale(1, 1);
                  }
                  /* Shrug & Reset Leap back to start */
                  80% {
                    transform: translate(280px, 140px);
                  }
                  84% {
                    transform: translate(280px, 146px) scale(1.2, 0.78);
                  }
                  90% {
                    transform: translate(380px, 70px) scale(0.88, 1.22) rotate(12deg);
                  }
                  96% {
                    transform: translate(470px, 143px) scale(1.18, 0.82);
                  }
                  100% {
                    transform: translate(470px, 140px) scale(1, 1);
                  }
                }

                /* Synchronized Dynamic Floor Contact Shadow */
                @keyframes shadow-physics {
                  0% {
                    transform: translate(470px, 204px) scale(1, 1);
                    opacity: 0.6;
                  }
                  4% {
                    transform: translate(470px, 204px) scale(1.3, 0.9);
                    opacity: 0.8;
                  }
                  10% {
                    transform: translate(420px, 204px) scale(0.5, 0.4);
                    opacity: 0.2;
                  }
                  16% {
                    transform: translate(375px, 204px) scale(1.35, 0.85);
                    opacity: 0.85;
                  }
                  20% {
                    transform: translate(375px, 204px) scale(1, 1);
                    opacity: 0.6;
                  }
                  24% {
                    transform: translate(375px, 204px) scale(1.3, 0.9);
                    opacity: 0.8;
                  }
                  30% {
                    transform: translate(325px, 204px) scale(0.5, 0.4);
                    opacity: 0.2;
                  }
                  36% {
                    transform: translate(280px, 204px) scale(1.35, 0.85);
                    opacity: 0.85;
                  }
                  40%, 80% {
                    transform: translate(280px, 204px) scale(1, 1);
                    opacity: 0.6;
                  }
                  84% {
                    transform: translate(280px, 204px) scale(1.3, 0.9);
                    opacity: 0.8;
                  }
                  90% {
                    transform: translate(380px, 204px) scale(0.5, 0.4);
                    opacity: 0.2;
                  }
                  96% {
                    transform: translate(470px, 204px) scale(1.3, 0.85);
                    opacity: 0.85;
                  }
                  100% {
                    transform: translate(470px, 204px) scale(1, 1);
                    opacity: 0.6;
                  }
                }

                /* Botanical Leaf Inertial Follow-Through */
                @keyframes leaf-followthrough {
                  0%, 100% {
                    transform: rotate(0deg);
                  }
                  10% {
                    transform: rotate(-18deg);
                  }
                  16% {
                    transform: rotate(14deg);
                  }
                  30% {
                    transform: rotate(-18deg);
                  }
                  36% {
                    transform: rotate(14deg);
                  }
                  44% {
                    transform: rotate(-10deg);
                  }
                  50% {
                    transform: rotate(10deg);
                  }
                  64% {
                    transform: rotate(-8deg);
                  }
                  70% {
                    transform: rotate(8deg);
                  }
                  90% {
                    transform: rotate(18deg);
                  }
                }

                /* Examination Conical Searchlight Beam (Clicks on, sways, then clicks off) */
                @keyframes searchlight-beam {
                  0%, 54% {
                    opacity: 0;
                    transform: scale(0.8) rotate(0deg);
                  }
                  56% {
                    opacity: 0.95;
                    transform: scale(1.02) rotate(-6deg);
                  }
                  64% {
                    opacity: 0.9;
                    transform: scale(1) rotate(6deg);
                  }
                  70% {
                    opacity: 0.9;
                    transform: scale(1) rotate(-4deg);
                  }
                  74% {
                    opacity: 0.85;
                    transform: scale(1) rotate(0deg);
                  }
                  76%, 100% {
                    opacity: 0;
                    transform: scale(0.8) rotate(0deg);
                  }
                }

                /* Expressive Blinking Eyes */
                @keyframes eye-blink {
                  0%, 42%, 46%, 70%, 74%, 100% {
                    transform: scaleY(1);
                  }
                  44%, 72% {
                    transform: scaleY(0.1);
                  }
                }

                /* Subtle Float for Background Atmospheric Motes */
                @keyframes dust-float {
                  0%, 100% {
                    transform: translateY(0px) translateX(0px);
                    opacity: 0.3;
                  }
                  50% {
                    transform: translateY(-8px) translateX(4px);
                    opacity: 0.7;
                  }
                }

                .anim-spiney {
                  animation: spiney-traversal 8.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                  transform-origin: 30px 65px;
                }
                .anim-shadow {
                  animation: shadow-physics 8.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
                  transform-origin: center;
                }
                .anim-leaf {
                  animation: leaf-followthrough 8.5s ease-in-out infinite;
                  transform-origin: 25px 12px;
                }
                .anim-beam {
                  animation: searchlight-beam 8.5s ease-in-out infinite;
                  transform-origin: 25px 25px;
                }
                .anim-eyes {
                  animation: eye-blink 8.5s infinite;
                  transform-origin: center;
                }
                .anim-dust-1 { animation: dust-float 4s ease-in-out infinite; }
                .anim-dust-2 { animation: dust-float 5s ease-in-out infinite 1.5s; }
                .anim-dust-3 { animation: dust-float 4.5s ease-in-out infinite 0.8s; }

                @media (prefers-reduced-motion: reduce) {
                  .anim-spiney {
                    animation: none !important;
                    transform: translate(280px, 140px) !important;
                  }
                  .anim-shadow {
                    animation: none !important;
                    transform: translate(280px, 204px) !important;
                  }
                  .anim-leaf, .anim-beam, .anim-eyes, .anim-dust-1, .anim-dust-2, .anim-dust-3 {
                    animation: none !important;
                  }
                }
              `}</style>
            </defs>

            {/* Background Perspective Floor Line */}
            <path
              d="M 20 205 L 580 205"
              stroke="url(#floorGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Atmospheric Therapeutic Motes */}
            <circle cx="110" cy="80" r="2.5" fill="#8CB843" className="anim-dust-1" />
            <circle cx="240" cy="50" r="1.8" fill="#468EC8" className="anim-dust-2" />
            <circle cx="510" cy="95" r="2.2" fill="#8CB843" className="anim-dust-3" />
            <circle cx="430" cy="40" r="1.5" fill="#CBD5E1" className="anim-dust-1" />

            {/* =============================================================
                STATIC BACKGROUND NUMERALS: "4 0 4"
               ============================================================= */}
            <g className="font-heading font-black select-none opacity-25 dark:opacity-30">
              {/* Left '4' */}
              <text
                x="145"
                y="190"
                fontSize="130"
                fontWeight="900"
                textAnchor="middle"
                fill="#64748B"
                letterSpacing="-4px"
              >
                4
              </text>

              {/* Center '0' (Vertebra Alignment Ring) */}
              <text
                x="300"
                y="190"
                fontSize="130"
                fontWeight="900"
                textAnchor="middle"
                fill="#64748B"
                letterSpacing="-4px"
              >
                0
              </text>

              {/* Right '4' */}
              <text
                x="455"
                y="190"
                fontSize="130"
                fontWeight="900"
                textAnchor="middle"
                fill="#64748B"
                letterSpacing="-4px"
              >
                4
              </text>
            </g>

            {/* Dynamic Contact Floor Shadow under Spiney */}
            <ellipse
              cx="0"
              cy="0"
              rx="22"
              ry="5.5"
              fill="#0F172A"
              className="anim-shadow"
            />

            {/* =============================================================
                ANIMATED HERO CHARACTER: "SPINEY THE POSTURE EXPLORER"
               ============================================================= */}
            <g className="anim-spiney">
              
              {/* 1. Conical Examination Beam (Projects from Headlamp onto Ground) */}
              <g className="anim-beam pointer-events-none">
                {/* Conical Light Flare */}
                <polygon
                  points="25,25 -25,120 75,120"
                  fill="url(#lightBeamGrad)"
                />
                {/* Illuminated Floor Spotlight Pool */}
                <ellipse
                  cx="25"
                  cy="120"
                  rx="48"
                  ry="12"
                  fill="url(#floorPoolGrad)"
                />
                {/* Tiny Footprint / Lost Page Hint inside the Beam */}
                <g opacity="0.75" transform="translate(18, 114) scale(0.65)">
                  <rect x="0" y="0" width="14" height="18" rx="2" fill="#FFFFFF" stroke="#76A436" strokeWidth="1.5" />
                  <line x1="3" y1="5" x2="11" y2="5" stroke="#76A436" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="9" x2="11" y2="9" stroke="#76A436" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="8" y2="13" stroke="#76A436" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              </g>

              {/* 2. Botanical Leaf Crest (The Clinic Logo Motif) */}
              <g className="anim-leaf">
                <path
                  d="M 25 12 C 25 12 14 3 19 -2 C 23 -6 32 3 25 12 Z"
                  fill="#76A436"
                />
                <path
                  d="M 25 12 C 25 12 36 3 31 -2 C 27 -6 18 3 25 12 Z"
                  fill="#8CB843"
                  opacity="0.9"
                />
              </g>

              {/* 3. Cervical Head (C1 Atlas) with Headlamp */}
              <g>
                {/* Head Body */}
                <rect
                  x="8"
                  y="14"
                  width="34"
                  height="22"
                  rx="9"
                  fill="url(#headGrad)"
                  stroke="#334155"
                  strokeWidth="1.5"
                />

                {/* Headlamp Rim (The Source of the Searchlight) */}
                <circle cx="25" cy="25" r="4.5" fill="#FEF08A" stroke="#76A436" strokeWidth="1.5" />
                <circle cx="25" cy="25" r="2" fill="#FFFFFF" />

                {/* Blinking Expressive Eyes */}
                <g className="anim-eyes">
                  <circle cx="16" cy="22" r="2.6" fill="#FFFFFF" />
                  <circle cx="34" cy="22" r="2.6" fill="#FFFFFF" />
                  <circle cx="17.2" cy="22" r="1.3" fill="#0F172A" />
                  <circle cx="35.2" cy="22" r="1.3" fill="#0F172A" />
                  {/* Rosy Ergonomic Cheeks */}
                  <circle cx="13" cy="28" r="1.8" fill="#FFBC7D" />
                  <circle cx="37" cy="28" r="1.8" fill="#FFBC7D" />
                </g>
              </g>

              {/* 4. Flexible Intervertebral Discs & Vertebrae Body */}
              {/* Disc 1 (Cervical-Thoracic) */}
              <rect x="14" y="38" width="22" height="5" rx="2.5" fill="#468EC8" />

              {/* Thoracic Vertebra Body */}
              <rect
                x="11"
                y="45"
                width="28"
                height="15"
                rx="6"
                fill="url(#vertebraGrad)"
                stroke="#65A30D"
                strokeWidth="1"
              />

              {/* Disc 2 (Thoracic-Lumbar Cushion) */}
              <rect x="13" y="62" width="24" height="5" rx="2.5" fill="#468EC8" />

              {/* Lumbar Vertebra Body (Core Support) */}
              <rect
                x="9"
                y="69"
                width="32"
                height="16"
                rx="7"
                fill="url(#vertebraGrad)"
                stroke="#65A30D"
                strokeWidth="1"
              />

              {/* Disc 3 (Lumbar-Sacral Foundation) */}
              <rect x="12" y="87" width="26" height="5" rx="2.5" fill="#468EC8" />

              {/* 5. Sacrum & Pelvic Feet (Spring Base) */}
              <path
                d="M 5 95 C 15 90 35 90 45 95 C 42 101 8 101 5 95 Z"
                fill="#1E293B"
              />
            </g>
          </svg>
        </div>

        {/* Narrative & Reassurance */}
        <div className="space-y-2.5 mt-1 sm:mt-2 max-w-lg">
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            We’ve Examined Every Vertebra...
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our posture explorer searched high and low, but this page seems to have slipped out of alignment. Let us guide you back to our clinic services or help you schedule a consultation.
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
        <div className="mt-6 sm:mt-8 pt-5 border-t border-slate-200/60 w-full max-w-md text-center space-y-2 text-xs text-slate-500">
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
      <footer className="relative z-10 text-center text-xs text-slate-400 pt-4">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Regulated by the General Chiropractic Council.</p>
      </footer>
    </div>
  );
}
