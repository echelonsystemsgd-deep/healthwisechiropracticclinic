import React from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, HeartHandshake, ShieldCheck, Check, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Activity":
        return <Activity className="h-6 w-6 text-primary" />;
      case "HeartHandshake":
        return <HeartHandshake className="h-6 w-6 text-secondary" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-emerald-600" />;
      default:
        return <Activity className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <Badge variant="default" className="mb-3 font-semibold">
            Our Clinical Services
          </Badge>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Specialist Musculoskeletal Care Under One Roof
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            We don't offer generic, temporary cracking. We identify the true root cause of your pain and combine hands-on spinal adjustments, soft-tissue massage, and progressive rehabilitation to deliver durable relief.
          </p>
        </div>

        {/* 3-Column 12-Grid Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card
              key={service.id}
              className="flex flex-col justify-between hover:border-slate-300 transition-all hover:translate-y-[-2px]"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <Badge variant="outline" className="text-xs font-medium text-slate-600">
                    {service.durationMinutes} Mins Session
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-xs font-medium text-primary mt-1">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 pb-6">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Clinical Capabilities */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    What is Included:
                  </span>
                  {service.bulletPoints.map((bp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For Tags */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Recommended For:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.idealFor.map((cond, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                      >
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-2 border-t border-slate-100">
                <Button asChild variant="outline" className="w-full justify-between font-semibold group">
                  <Link href={`/book-online?service=${service.id}`}>
                    <span>Book {service.title.split(" ")[0]}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
