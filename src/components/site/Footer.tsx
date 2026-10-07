import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1-4: Brand & Regulatory Trust */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white font-heading font-bold text-lg">
                HW
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white block leading-tight">
                  Healthwise Chiropractic
                </span>
                <span className="text-xs text-slate-400">
                  Cranford, Hounslow • Est. 2002
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing specialist chiropractic care, remedial massage therapy, and posture rehabilitation to the residents of Hounslow, Cranford, and surrounding West London communities for over 22 years.
            </p>

            <div className="rounded-lg bg-slate-800/80 border border-slate-700/80 p-3.5 space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span>General Chiropractic Council (GCC)</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                All chiropractors at Healthwise are registered with the General Chiropractic Council, the statutory regulatory body in the UK.
              </p>
            </div>
          </div>

          {/* Col 5-7: Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Chiropractic Spinal Adjustments
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Resilo Level 3 Remedial Massage
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Deep Tissue &amp; Swedish Massage
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Active Spinal Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-white transition-colors">
                  Sciatica &amp; Nerve Pain Relief
                </Link>
              </li>
              <li>
                <Link href="/#conditions" className="hover:text-white transition-colors">
                  Cervicogenic Headache Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 8-9: Clinic Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-semibold text-white">Monday – Saturday</p>
                <p className="text-slate-400">8:00 AM – 7:00 PM</p>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <p className="font-semibold text-white">Sunday</p>
                <p className="text-slate-400">Closed</p>
              </div>
              <div className="pt-2">
                <span className="inline-block bg-slate-800 text-emerald-400 font-semibold px-2 py-0.5 rounded text-[10px]">
                  Same-Week Bookings
                </span>
              </div>
            </div>
          </div>

          {/* Col 10-12: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Clinic Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{CLINIC_CONFIG.address.full}</p>
                  <a
                    href={CLINIC_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-[11px] block mt-0.5"
                  >
                    View Map &amp; Parking Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href={CLINIC_CONFIG.phoneUrl}
                  className="font-medium text-white hover:text-emerald-300 transition-colors"
                >
                  {CLINIC_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-slate-400 shrink-0" />
                <span className="text-slate-400">{CLINIC_CONFIG.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {CLINIC_CONFIG.name}. All Rights Reserved. Regulated by the General Chiropractic Council (GCC).
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy &amp; GDPR Policy
            </Link>
            <Link href="/book-online" className="hover:text-slate-300 transition-colors">
              Book Appointment
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <a
              href="https://mercianwealth.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white font-medium transition-colors"
            >
              Designed &amp; Built by Mercian Wealth
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
