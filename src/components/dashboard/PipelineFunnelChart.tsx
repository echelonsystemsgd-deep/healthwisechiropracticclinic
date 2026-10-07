"use client";

import React from "react";
import { FUNNEL_STAGES } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function PipelineFunnelChart() {
  const maxCount = FUNNEL_STAGES[0].count;

  return (
    <Card className="shadow-card-dashboard border-slate-200/90">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-bold text-slate-900">
              Outreach Conversion Funnel
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 mt-0.5">
              Progression from initial clinic contact to closed care partnership
            </CardDescription>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            Sample data
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-1">
        {FUNNEL_STAGES.map((stage, idx) => {
          const widthPercent = Math.max(14, (stage.count / maxCount) * 100);
          return (
            <div key={stage.stage} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  {idx + 1}. {stage.stage}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{stage.count}</span>
                  <span className="text-[11px] text-slate-400">
                    ({stage.percentage}%)
                  </span>
                </div>
              </div>

              {/* Funnel Progress Bar with Brand Colors */}
              <div className="h-4 w-full rounded-md bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-md transition-all duration-500"
                  style={{
                    width: `${widthPercent}%`,
                    backgroundColor: stage.color,
                  }}
                />
              </div>
            </div>
          );
        })}

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Overall Contact-to-Close Rate</span>
          <span className="font-bold text-primary">4.2% Conversion</span>
        </div>
      </CardContent>
    </Card>
  );
}
