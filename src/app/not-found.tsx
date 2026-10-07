import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site.config";
import { Calendar, Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between py-12 px-4 sm:px-6">
      <div className="max-w-xl mx-auto my-auto w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
        {/* Brand Mark */}
        <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Image
            src="/icon.svg"
            alt={SITE_CONFIG.name}
            width={40}
            height={40}
            className="h-10 w-10"
          />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Page Not Found
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let&apos;s Get You Back on Track
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have moved or no longer exists. You can return to our homepage or schedule an appointment directly below.
          </p>
        </div>

        {/* Clear Action CTAs */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg" className="w-full sm:w-auto font-semibold">
            <Link href="/book-online">
              <Calendar className="h-4 w-4 mr-2" />
              Book an Appointment
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Return Home
            </Link>
          </Button>
        </div>

        {/* Clinic Reassurance & Contact */}
        <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 space-y-2">
          <p className="font-medium text-slate-700">
            Need urgent assistance or advice on your symptoms?
          </p>
          <a
            href={SITE_CONFIG.contact.telephoneLink}
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Call Reception: {SITE_CONFIG.contact.telephoneDisplay}</span>
          </a>
          <p className="text-[11px] text-slate-400">
            {SITE_CONFIG.address.full} • Mon–Sat: 8:00 AM – 7:00 PM
          </p>
        </div>
      </div>

      <footer className="text-center text-xs text-slate-400 pt-8">
        <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Regulated by the General Chiropractic Council.</p>
      </footer>
    </div>
  );
}
