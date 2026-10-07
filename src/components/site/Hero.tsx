import React from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-background to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Grid: 7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Real Informational Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default" className="text-xs py-1 px-3 font-semibold">
                GCC Registered Practice
              </Badge>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                730 Bath Road, Hounslow TW5
              </span>
            </div>

            {/* Strict Single H1 Tag */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Relieve Pain, Restore Mobility &amp; Take Control of Your Health
            </h1>

            {/* Evidence-Based Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Gentle, personalized chiropractic care, remedial massage, and active rehabilitation tailored to you. Led by Clinic Director Gurmeet Tulsi (MChiro, University of Surrey 2001) with over 22 years of trusted clinical experience in Hounslow.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Button asChild size="lg" className="font-semibold text-base">
                <Link href="/book-online" className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Request an Appointment</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold text-base text-slate-800"
              >
                <a
                  href={CLINIC_CONFIG.phoneUrl}
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Call {CLINIC_CONFIG.phoneDisplay}</span>
                </a>
              </Button>
            </div>

            {/* Clinical Trust Reassurance Badges */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <Star className="h-4 w-4 fill-emerald-600 text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">4.9 / 5.0 Rating</span>
                  <span className="text-[11px] text-slate-500">Google Patient Reviews</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">GCC Registered</span>
                  <span className="text-[11px] text-slate-500">UK Regulated Standard</span>
                </div>
              </div>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Clock className="h-4 w-4 text-slate-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900">Mon–Sat 8am–7pm</span>
                  <span className="text-[11px] text-slate-500">Flexible Appointments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Trust Clinical Card (Grid: 5 columns on desktop) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-card-dashboard relative">
              {/* Card Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Private Practice
                  </span>
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    Healthwise Chiropractic Clinic
                  </h3>
                </div>
                <Badge variant="success" className="text-xs font-semibold">
                  Serving Hounslow Since 2002
                </Badge>
              </div>

              {/* Clinical Feature List */}
              <div className="space-y-3.5 mb-6 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Comprehensive Examination:</strong> Full postural, neurological, and orthopaedic testing before any treatment.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Gentle Chiropractic Adjustments:</strong> Focused spinal alignment to relieve trapped nerve compression and joint restrictions.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Remedial Soft-Tissue Therapy:</strong> Resilo Level 3 qualified massage to break down chronic muscle knots and tension.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Major Insurance Recognised:</strong> AXA Health, Bupa, Aviva, Vitality, and WPA accepted.
                  </span>
                </div>
              </div>

              {/* Direct Booking Trigger Box */}
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600">
                    Need advice on your symptoms?
                  </span>
                  <span className="text-xs font-bold text-primary">
                    Free Telephone Guidance
                  </span>
                </div>
                <Button asChild size="default" className="w-full font-semibold">
                  <Link href="/book-online">
                    Check Available Appointment Times
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
