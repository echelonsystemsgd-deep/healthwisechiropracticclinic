import React from "react";
import type { Metadata } from "next";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Phone, MapPin, Calendar, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Online | Appointment Booking",
  description:
    "Request an appointment at Healthwise Chiropractic Clinic in Hounslow. Complete spinal consultation, posture assessment & treatment with GCC registered chiropractors.",
};

export default function BookOnlinePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <Badge variant="success" className="mb-3 font-semibold text-xs">
            Direct Patient Booking
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Schedule Your Clinical Assessment
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Choose your preferred day and time below. No doctor's referral is required. All first visits include an in-depth health history, physical examination, and report of findings.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-200">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              GCC Statutory Regulated
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="h-4 w-4 text-primary" />
              730 Bath Rd, Cranford
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-slate-200">
              <Phone className="h-4 w-4 text-primary" />
              {CLINIC_CONFIG.phoneDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Booking Form Integration */}
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <EnquiryForm isStandalonePage={true} />
      </div>

      {/* Logistics & What to Bring Section */}
      <div className="container mx-auto px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-card-dashboard">
          <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">
            Patient Preparation Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-1.5">
              <span className="font-bold text-slate-900 block">1. What to Wear</span>
              <p>
                Comfortable, stretchy clothing (such as gym wear, leggings, or a T-shirt and joggers) to allow full joint mobility testing.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-slate-900 block">2. Previous Scans</span>
              <p>
                If you have previous MRI, X-ray, or medical reports relating to your back or neck, please bring them along.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-slate-900 block">3. Insurance Claims</span>
              <p>
                If claiming via AXA, Bupa, Aviva, or Vitality, please bring your pre-authorisation code and policy number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
