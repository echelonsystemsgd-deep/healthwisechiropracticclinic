import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { DASHBOARD_KPIS } from "@/lib/mock-data";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { PipelineFunnelChart } from "@/components/dashboard/PipelineFunnelChart";
import { OutreachAreaChart } from "@/components/dashboard/OutreachAreaChart";
import { LeadsTable } from "@/components/dashboard/LeadsTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, Download, Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Outreach & Growth Pipeline | Practice Growth System",
  description:
    "Internal outreach analytics, partner referral pipeline, and patient engagement performance.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
  },
};

export default function OutreachAdminPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Header Bar & Pill Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                Sample data
              </span>
            </div>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Outreach &amp; Partnership Pipeline
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Practice Growth System • Internal Operational View
            </p>
          </div>

          {/* Pill-Style Top Nav Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <nav className="inline-flex rounded-lg bg-slate-200/80 p-1 text-slate-700 text-xs font-medium">
              <button className="rounded-md bg-white px-3 py-1.5 font-bold text-slate-900 shadow-sm">
                Overview
              </button>
              <button className="rounded-md px-3 py-1.5 hover:text-slate-900 transition-colors">
                Campaigns
              </button>
              <button className="rounded-md px-3 py-1.5 hover:text-slate-900 transition-colors">
                Leads Queue
              </button>
              <button className="rounded-md px-3 py-1.5 hover:text-slate-900 transition-colors">
                Settings
              </button>
            </nav>

            <Button variant="outline" size="sm" className="text-xs font-semibold h-8 gap-1">
              <Download className="h-3.5 w-3.5" /> Export
            </Button>
          </div>
        </div>

        {/* Row of 5 KPI Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DASHBOARD_KPIS.map((kpi) => (
            <KpiCard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              changeText={kpi.changeText}
              isPositive={kpi.isPositive}
              iconName={kpi.iconName}
            />
          ))}
        </div>

        {/* Bklit Charts Row: Funnel (Left) + 12-Week Area Trend (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5">
            <PipelineFunnelChart />
          </div>
          <div className="lg:col-span-7">
            <OutreachAreaChart />
          </div>
        </div>

        {/* Active Queue / Recent Activity Leads Table */}
        <div>
          <LeadsTable />
        </div>
      </div>
    </div>
  );
}
