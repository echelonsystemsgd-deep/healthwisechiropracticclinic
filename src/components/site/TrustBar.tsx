import React from "react";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Shield, Award, Users, CreditCard } from "lucide-react";

export function TrustBar() {
  return (
    <div className="border-b border-slate-200 bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Trust Pillar 1 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-primary border border-emerald-100">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-slate-900 leading-tight">
                GCC Registered
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                UK Statutory Regulated Care
              </p>
            </div>
          </div>

          {/* Trust Pillar 2 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-secondary border border-blue-100">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-slate-900 leading-tight">
                22+ Years in Hounslow
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Established Clinic Since 2002
              </p>
            </div>
          </div>

          {/* Trust Pillar 3 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-700 border border-amber-100">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-slate-900 leading-tight">
                4.9 Google Reviews
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Over 50+ Verified Testimonials
              </p>
            </div>
          </div>

          {/* Trust Pillar 4 */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-bold text-slate-900 leading-tight">
                Insurance Accepted
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                AXA, Bupa, Aviva &amp; Vitality
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
