import React from "react";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ServicesSection } from "@/components/site/ServicesSection";
import { FirstVisitJourney } from "@/components/site/FirstVisitJourney";
import { ConditionsSection } from "@/components/site/ConditionsSection";
import { TeamSection } from "@/components/site/TeamSection";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <FirstVisitJourney />
      <ConditionsSection />
      <TeamSection />
      <ReviewsSection />
      <FaqSection />
      <EnquiryForm />
    </>
  );
}
