import React from "react";
import { FAQS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-3 font-semibold">
            Common Inquiries
          </Badge>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Clear, honest answers to help you prepare for your visit to Healthwise Chiropractic Clinic.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-card-dashboard">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
