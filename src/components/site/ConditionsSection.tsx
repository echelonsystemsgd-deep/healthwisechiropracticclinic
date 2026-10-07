import React from "react";
import Link from "next/link";
import { CONDITIONS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Activity } from "lucide-react";

export function ConditionsSection() {
  return (
    <section id="conditions" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12 text-left">
          <Badge variant="default" className="mb-3 font-semibold">
            Conditions We Treat
          </Badge>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Targeted Relief for Everyday Spinal &amp; Joint Problems
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Pain is a symptom, not the root cause. We perform meticulous diagnostic tests to understand why your pain is happening and create a personalised treatment strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDITIONS.map((cond) => (
            <div
              key={cond.id}
              className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-card-dashboard flex flex-col justify-between hover:border-slate-300 transition-all hover:translate-y-[-2px]"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-emerald-50 text-primary flex items-center justify-center shrink-0">
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900">
                    {cond.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {cond.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                    Common Symptoms:
                  </span>
                  {cond.commonSymptoms.map((symp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{symp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-800 block mb-1">
                  Our Approach:
                </span>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {cond.recommendedApproach}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full font-semibold">
                  <Link href={`/book-online?condition=${cond.id}`}>
                    <span>Book Assessment</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 text-slate-400" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
