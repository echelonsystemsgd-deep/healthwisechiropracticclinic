import React from "react";
import { RECENT_LEADS } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MessageCircle, UserCheck } from "lucide-react";

export function LeadsTable() {
  const getChannelBadge = (channel: string) => {
    switch (channel) {
      case "Email":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
            <Mail className="h-3 w-3 text-slate-500" /> Email
          </span>
        );
      case "Phone":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
            <Phone className="h-3 w-3 text-blue-500" /> Phone
          </span>
        );
      case "WhatsApp":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
            <MessageCircle className="h-3 w-3 text-emerald-600" /> WhatsApp
          </span>
        );
      case "Referral":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
            <UserCheck className="h-3 w-3 text-purple-500" /> Referral
          </span>
        );
      default:
        return <span>{channel}</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Contacted":
        return <Badge variant="outline" className="text-[11px]">Contacted</Badge>;
      case "Replied":
        return <Badge variant="info" className="text-[11px]">Replied</Badge>;
      case "Call Booked":
        return <Badge variant="secondary" className="text-[11px]">Call Booked</Badge>;
      case "Proposal Sent":
        return <Badge variant="warning" className="text-[11px]">Proposal Sent</Badge>;
      case "Closed":
        return <Badge variant="success" className="text-[11px]">Partner Closed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Card className="shadow-card-dashboard border-slate-200/90">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base font-bold text-slate-900">
              Active Referral &amp; Clinic Outreach Queue
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 mt-0.5">
              Live engagement across Email, Phone, WhatsApp, and GP/Medical Referrals
            </CardDescription>
          </div>
          <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            Sample data
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-[11px] font-bold text-slate-700 uppercase tracking-wider border-y border-slate-200">
              <tr>
                <th className="py-2.5 px-3">Organisation / Contact</th>
                <th className="py-2.5 px-3">Channel</th>
                <th className="py-2.5 px-3">Pipeline Status</th>
                <th className="py-2.5 px-3">Last Contact</th>
                <th className="py-2.5 px-3">Operational Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RECENT_LEADS.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-3">
                    <p className="font-bold text-slate-900">{lead.clinicName}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{lead.contactPerson}</p>
                  </td>
                  <td className="py-3 px-3">{getChannelBadge(lead.channel)}</td>
                  <td className="py-3 px-3">{getStatusBadge(lead.status)}</td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <p className="font-medium text-slate-800">{lead.lastReply}</p>
                    <p className="text-[10px] text-slate-400">Sent: {lead.sentDate}</p>
                  </td>
                  <td className="py-3 px-3 max-w-xs text-slate-600 leading-snug">
                    {lead.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
