import React from "react";
import { PRACTITIONERS } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ShieldCheck, Check } from "lucide-react";

export function TeamSection() {
  return (
    <section id="practitioners" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <Badge variant="default" className="mb-3 font-semibold">
            Clinical Leadership
          </Badge>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our Qualified Practitioners
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Every chiropractor at Healthwise is university-educated with a Masters in Chiropractic, fully registered with the General Chiropractic Council (GCC), and dedicated to patient-first holistic care.
          </p>
        </div>

        {/* 5 Practitioners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRACTITIONERS.map((practitioner) => (
            <Card
              key={practitioner.id}
              className="flex flex-col justify-between hover:border-slate-300 transition-all hover:translate-y-[-2px]"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  {/* Clinical Initials Badge / Photo Placeholder */}
                  <div className="h-16 w-16 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center font-heading font-bold text-xl shrink-0 shadow-sm border border-slate-700">
                    <span>{practitioner.initials}</span>
                    <span className="text-[9px] font-normal tracking-wider uppercase text-emerald-400">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-1">
                    <CardTitle className="text-lg font-bold text-slate-900">
                      {practitioner.name}
                    </CardTitle>
                    <p className="text-xs font-semibold text-primary">
                      {practitioner.role}
                    </p>
                    <Badge variant="outline" className="text-[11px] font-medium text-slate-600">
                      {practitioner.experience} Clinical Experience
                    </Badge>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-500 font-medium leading-tight">
                    {practitioner.title}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-0">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {practitioner.bio}
                </p>

                {/* Specialisms list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-800 block">
                    Areas of Expertise:
                  </span>
                  {practitioner.specialties.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
