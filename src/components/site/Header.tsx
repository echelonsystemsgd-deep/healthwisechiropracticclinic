"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Shield, Calendar, Clock } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "How It Works", href: "/#first-visit" },
    { label: "Our Team", href: "/#practitioners" },
    { label: "Reviews", href: "/#reviews" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
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
          <Button asChild size="default" className="font-semibold">
            <Link href="/book-online" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="font-semibold sm:hidden">
            <Link href="/book-online">Book</Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-primary hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={CLINIC_CONFIG.phoneUrl}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-800 py-3 rounded-lg border border-slate-300 bg-slate-50"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
              </a>
              <Button asChild size="lg" className="w-full font-semibold">
                <Link
                  href="/book-online"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Request an Appointment</span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
