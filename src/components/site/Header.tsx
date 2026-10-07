"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Menu,
  X,
  ShieldCheck,
  Calendar,
  Clock,
  MessageCircle,
  ChevronRight,
  MapPin,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body and html scrolling strictly when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyTouch = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Prevents mobile touch drag on background

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalBodyTouch;
      };
    }
  }, [mobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Clinical Services", href: "/#services" },
    { label: "First Visit Journey", href: "/#first-visit" },
    { label: "Our Practitioners", href: "/#practitioners" },
    { label: "Patient Reviews", href: "/#reviews" },
    { label: "FAQ & Pricing", href: "/#faq" },
    { label: "Contact & Location", href: "/#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md transition-all">
        {/* Top Clinical Announcement Bar */}
        <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Now Welcoming New Patients
              </span>
              <span className="hidden md:inline text-slate-500">|</span>
              <span className="hidden md:inline text-slate-300">
                730 Bath Road, Cranford, Hounslow TW5 9TW
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="hidden lg:flex items-center gap-1 text-slate-400">
                <Clock className="h-3.5 w-3.5 text-slate-400" /> Mon–Sat: 8am–7pm
              </span>
              <a
                href={CLINIC_CONFIG.phoneUrl}
                className="font-medium text-white hover:text-emerald-300 transition-colors flex items-center gap-1"
              >
                <Phone className="h-3 w-3 text-emerald-400" />
                <span>Call: {CLINIC_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          {/* Brand Logo & Clinical Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl bg-primary flex items-center justify-center text-white font-heading font-bold text-xl tracking-tight shadow-sm group-hover:bg-primary-hover transition-colors">
              HW
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight">
                Healthwise Chiropractic
              </span>
              <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span>Hounslow Clinic</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="text-primary font-semibold">Est. 2002</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_CONFIG.phoneUrl}
              className="hidden xl:inline-flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-primary transition-colors px-3 py-2 rounded-lg border border-slate-200 hover:border-slate-300 bg-white"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{CLINIC_CONFIG.phoneDisplay}</span>
            </a>
            <Button asChild size="default" className="font-semibold shadow-xs">
              <Link href="/book-online" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="sm" className="font-semibold sm:hidden shadow-xs">
              <Link href="/book-online">Book</Link>
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary/20"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          REACT PORTAL: MOBILE SLIDE-OVER SIDE DRAWER (Detached from Header Context)
         ========================================================================= */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] lg:hidden transition-all duration-300 ${
              mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
            }`}
          >
            {/* 1. Backdrop Dark Overlay with Blur */}
            <div
              className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* 2. Side Slide-In Panel (100% Viewport Height, Pinned to Right) */}
            <div
              className={`fixed top-0 bottom-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out border-l border-slate-200 h-[100dvh] ${
                mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ touchAction: "pan-y" }}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Drawer Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white font-heading font-bold text-base shadow-xs">
                    HW
                  </div>
                  <div>
                    <span className="font-heading text-sm font-bold text-slate-900 block leading-tight">
                      Healthwise Clinic
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Cranford, Hounslow • Est. 2002
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
                {/* Navigation Links */}
                <nav className="flex flex-col space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 pb-2">
                    Navigation
                  </span>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors group"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </nav>

                {/* Direct Patient Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                    Direct Access
                  </span>

                  <Button asChild size="lg" className="w-full font-semibold shadow-xs">
                    <Link
                      href="/book-online"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book an Appointment</span>
                    </Link>
                  </Button>

                  <a
                    href={CLINIC_CONFIG.phoneUrl}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 py-2.5 px-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors w-full"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    <span>Call: {CLINIC_CONFIG.phoneDisplay}</span>
                  </a>

                  <a
                    href={CLINIC_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-800 py-2.5 px-3 rounded-lg border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition-colors w-full"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>WhatsApp Reception</span>
                  </a>
                </div>

                {/* Clinic Hours & Address Card */}
                <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/80 space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{CLINIC_CONFIG.address.full}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span>Mon–Sat: 8:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Drawer Footer & Regulatory Attribution */}
              <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-2 text-center shrink-0">
                <div className="flex items-center justify-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>GCC Statutory Regulated Practice</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Designed &amp; Built by{" "}
                  <a
                    href="https://mercianwealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-900 font-medium underline-offset-2 hover:underline transition-colors"
                  >
                    Mercian Wealth
                  </a>
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
