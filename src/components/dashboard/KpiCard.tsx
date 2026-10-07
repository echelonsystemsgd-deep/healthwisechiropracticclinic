import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Send,
  MessageSquareQuote,
  PhoneCall,
  FileText,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

interface KpiCardProps {
  label: string;
  value: string | number;
  changeText: string;
  isPositive: boolean;
  iconName: string;
}

export function KpiCard({
  label,
  value,
  changeText,
  isPositive,
  iconName,
}: KpiCardProps) {
  const renderIcon = () => {
    const iconClass = "h-5 w-5 text-slate-700";
    switch (iconName) {
      case "Send":
        return <Send className={iconClass} />;
      case "MessageSquareQuote":
        return <MessageSquareQuote className={iconClass} />;
      case "PhoneCall":
        return <PhoneCall className={iconClass} />;
      case "FileText":
        return <FileText className={iconClass} />;
      case "CheckCircle2":
        return <CheckCircle2 className={iconClass} />;
      default:
        return <TrendingUp className={iconClass} />;
    }
  };

  return (
    <Card className="shadow-card-dashboard border-slate-200/90 hover:border-slate-300 transition-colors">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-slate-500">{label}</span>
          <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
            {renderIcon()}
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <span className="font-heading text-2xl font-bold tracking-tight text-slate-900">
            {value}
          </span>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
            {changeText}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
