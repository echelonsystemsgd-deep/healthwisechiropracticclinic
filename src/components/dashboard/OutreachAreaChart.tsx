"use client";

import React from "react";
import { VOLUME_TIME_SERIES } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function OutreachAreaChart() {
  return (
    <Card className="shadow-card-dashboard border-slate-200/90">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-bold text-slate-900">
              Outreach Volume &amp; Replies (12-Week Trend)
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 mt-0.5">
              Weekly messages dispatched vs qualified responses received
            </CardDescription>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            Sample data
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="h-[260px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={VOLUME_TIME_SERIES}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorReplies" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis
                dataKey="week"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#64748B" }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 11, fill: "#64748B" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  fontSize: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              />
              <Area
                type="monotone"
                dataKey="messagesSent"
                name="Messages Sent"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSent)"
              />
              <Area
                type="monotone"
                dataKey="repliesReceived"
                name="Replies Received"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorReplies)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span>Messages Sent</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
            <span>Replies Received</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
