import React from "react";
import { TESTIMONIALS } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle, Quote, ThumbsUp } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <Badge variant="secondary" className="mb-3 font-semibold">
              Real Patient Feedback
            </Badge>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              What Our Patients Say About Us
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Real feedback from local Cranford and Hounslow residents who turned to Healthwise for relief from back pain, joint stiffness, and injuries. Verbatim patient testimonials.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 shrink-0 flex items-center gap-4">
            <div className="text-center">
              <span className="font-heading text-3xl font-extrabold text-slate-900 block leading-none">
                4.9
              </span>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="text-xs text-slate-600 border-l border-slate-200 pl-4">
              <p className="font-bold text-slate-900">Google Verified Rating</p>
              <p className="text-slate-500">50+ Community Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <Card
              key={review.id}
              className="flex flex-col justify-between hover:border-slate-300 transition-all shadow-card-elevated"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-800 font-heading font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-200">
                      {review.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-slate-900">
                        {review.author}
                      </CardTitle>
                      <span className="text-xs text-slate-500">
                        {review.location} Resident
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Badge variant="outline" className="text-[11px] font-medium text-slate-600 bg-slate-50">
                    Treated for: {review.condition}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="py-2">
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </CardContent>

              <CardFooter className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <CheckCircle className="h-3 w-3" />
                  Verified Review
                </span>
                <span>{review.practitionerMentioned && `Seen by ${review.practitionerMentioned}`}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
