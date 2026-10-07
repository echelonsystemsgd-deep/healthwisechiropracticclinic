import React from "react";
import Link from "next/link";
import { FIRST_VISIT_STEPS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Shield, ArrowRight } from "lucide-react";

export function FirstVisitJourney() {
  return (
    <section id="first-visit" className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <Badge variant="secondary" className="mb-3 font-semibold">
            Patient Experience
          </Badge>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            What to Expect on Your Very First Visit
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            If you have never visited a chiropractor before, you might feel uncertain. Here is our exact, step-by-step clinical protocol designed to ensure you feel completely at ease, thoroughly heard, and safe throughout.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {FIRST_VISIT_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-6 flex flex-col justify-between shadow-card-elevated relative hover:bg-white hover:border-slate-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-3xl font-extrabold text-primary/30 tracking-tight">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="h-3 w-3 text-slate-400" />
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-medium text-primary">
                <Shield className="h-3.5 w-3.5" />
                <span>Non-invasive &amp; Gentle</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout Banner */}
        <div className="mt-12 rounded-xl bg-slate-900 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading text-xl font-bold tracking-tight">
              Ready to take the first step toward lasting relief?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Appointments are available Monday through Saturday. No doctor’s referral is required.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0 font-semibold text-base">
            <Link href="/book-online" className="flex items-center gap-2">
              <span>Book Your First Visit</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
