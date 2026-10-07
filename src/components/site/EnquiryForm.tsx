"use client";

import React, { useState } from "react";
import { CLINIC_CONFIG } from "@/lib/constants";
import { submitEnquiry } from "@/lib/api";
import { EnquiryFormData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  AlertCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";

interface EnquiryFormProps {
  defaultReason?: string;
  isStandalonePage?: boolean;
}

export function EnquiryForm({
  defaultReason = "initial_consultation",
  isStandalonePage = false,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: "",
    phone: "",
    email: "",
    preferredDay: "next_available",
    preferredTime: "any",
    practitionerPreference: "any",
    reasonForVisit: defaultReason as any,
    message: "",
    consentPrivacy: false,
    marketingOptIn: false,
  });

  const [loading, setLoading] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState<{
    enquiryId: string;
    message: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please provide a contact phone number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.consentPrivacy) {
      setErrorMessage("Please accept the privacy policy to proceed.");
      return;
    }

    try {
      setLoading(true);
      const res = await submitEnquiry(formData);
      if (res.success) {
        setSubmittedResponse({
          enquiryId: res.enquiryId,
          message: res.message,
        });
      }
    } catch (err: any) {
      setErrorMessage("An unexpected error occurred. Please call the clinic directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Clinic Visit Logistics & Urgent Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <Badge variant="default" className="mb-3 font-semibold">
                Direct Appointment Booking
              </Badge>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                Request Your Appointment at Healthwise
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Fill in your preferred day and symptoms below, or connect instantly with our reception team via telephone or WhatsApp.
              </p>
            </div>

            {/* Instant Contact Triggers */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-card-dashboard space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Prefer to Speak with Reception Now?
              </span>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={CLINIC_CONFIG.phoneUrl}
                  className="flex items-center justify-between p-3.5 rounded-lg border border-slate-200 hover:border-primary/50 hover:bg-emerald-50/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-100 text-primary flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Direct Telephone</p>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {CLINIC_CONFIG.phoneDisplay}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-primary underline underline-offset-2">
                    Call Now
                  </span>
                </a>

                <a
                  href={CLINIC_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg border border-emerald-200 hover:border-emerald-400 bg-emerald-50/40 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-800 font-medium">Fast Enquiries</p>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        WhatsApp Reception
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 underline underline-offset-2">
                    Message
                  </span>
                </a>
              </div>
            </div>

            {/* Clinic Location & Opening Hours Card */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-card-dashboard space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    Clinic Address
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {CLINIC_CONFIG.address.full}
                  </p>
                  <a
                    href={CLINIC_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline inline-block mt-1.5"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-start gap-3">
                <Clock className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-slate-900">
                    Clinic Hours
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday – Saturday: 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-xs text-slate-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Fresh Working Appointment Engine (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-card-dashboard relative">
              {submittedResponse ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-5 animate-in fade-in-50 duration-300">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-primary flex items-center justify-center mx-auto border-4 border-emerald-50">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Booking Request Received
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-slate-900">
                      Thank You, {formData.fullName}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 bg-slate-100 inline-block px-3 py-1 rounded-md">
                      Reference: {submittedResponse.enquiryId}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    {submittedResponse.message}
                  </p>
                  <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1.5">
                    <p className="font-semibold text-slate-800">What happens next?</p>
                    <p>1. Our clinic coordinator checks the diary for your preferred slot.</p>
                    <p>2. We call you at {formData.phone} to confirm your appointment time.</p>
                    <p>3. You receive an SMS and email with preparation guidance and parking directions.</p>
                  </div>
                  <Button
                    onClick={() => {
                      setSubmittedResponse(null);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        preferredDay: "next_available",
                        preferredTime: "any",
                        practitionerPreference: "any",
                        reasonForVisit: "initial_consultation",
                        message: "",
                        consentPrivacy: false,
                        marketingOptIn: false,
                      });
                    }}
                    variant="outline"
                    className="font-semibold"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                /* Interactive High-Conversion Form */
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      Appointment Enquiry Form
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      No upfront payment required. All consultations include full physical &amp; postural assessment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="rounded-lg bg-red-50 border border-red-200 p-3.5 flex items-start gap-3 text-xs text-red-800">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Patient Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="e.g. 07123 456789"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Appointment Timing & Preferences */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Preferred Day
                      </label>
                      <Select
                        value={formData.preferredDay}
                        onValueChange={(val) =>
                          setFormData({ ...formData, preferredDay: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="next_available">Earliest Available</SelectItem>
                          <SelectItem value="monday">Monday</SelectItem>
                          <SelectItem value="tuesday">Tuesday</SelectItem>
                          <SelectItem value="wednesday">Wednesday</SelectItem>
                          <SelectItem value="thursday">Thursday</SelectItem>
                          <SelectItem value="friday">Friday</SelectItem>
                          <SelectItem value="saturday">Saturday</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Preferred Time of Day
                      </label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(val: any) =>
                          setFormData({ ...formData, preferredTime: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time window" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Time</SelectItem>
                          <SelectItem value="morning">Morning (8am – 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm – 4pm)</SelectItem>
                          <SelectItem value="evening">Evening (4pm – 7pm)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Reason for Visit (Every Option Has a Valid Non-Empty Value) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Reason For Visit / Main Symptom <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={formData.reasonForVisit}
                        onValueChange={(val: any) =>
                          setFormData({ ...formData, reasonForVisit: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select symptom" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="initial_consultation">
                            Initial Chiropractic Consultation
                          </SelectItem>
                          <SelectItem value="back_pain">
                            Lower Back Pain / Disc Strain
                          </SelectItem>
                          <SelectItem value="neck_shoulder_pain">
                            Neck &amp; Shoulder Stiffness
                          </SelectItem>
                          <SelectItem value="headaches">
                            Cervicogenic Headaches / Migraines
                          </SelectItem>
                          <SelectItem value="sciatica">
                            Sciatica / Radiating Nerve Pain
                          </SelectItem>
                          <SelectItem value="remedial_massage">
                            Remedial / Deep Tissue Massage
                          </SelectItem>
                          <SelectItem value="other">
                            Other Musculoskeletal Concern
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Practitioner Preference
                      </label>
                      <Select
                        value={formData.practitionerPreference}
                        onValueChange={(val) =>
                          setFormData({ ...formData, practitionerPreference: val })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select practitioner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any Available Practitioner</SelectItem>
                          <SelectItem value="gurmeet">Gurmeet Tulsi (Director &amp; Chiro)</SelectItem>
                          <SelectItem value="gabriella">Dr. Gabriella (Chiropractor)</SelectItem>
                          <SelectItem value="kien">Kien (Chiropractor &amp; Rehab)</SelectItem>
                          <SelectItem value="sushma">Sushma (Remedial Massage)</SelectItem>
                          <SelectItem value="karina">Karina (Therapeutic Massage)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Brief Description of Symptoms (Optional)
                    </label>
                    <Textarea
                      placeholder="Tell us how long you have had the pain or any specific details..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  {/* Accessible Checkboxes (Fixing Audit Defect #2) */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent-privacy"
                        checked={formData.consentPrivacy}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            consentPrivacy: checked === true,
                          })
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="consent-privacy"
                        className="text-xs text-slate-600 leading-snug cursor-pointer select-none"
                      >
                        I have read and accept the{" "}
                        <Link
                          href="/privacy-policy"
                          className="font-medium text-primary underline underline-offset-2 hover:text-primary-hover"
                          target="_blank"
                        >
                          Healthwise Privacy Policy
                        </Link>
                        . I understand my data is stored securely in compliance with UK GDPR for appointment scheduling.{" "}
                        <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="opt-in-marketing"
                        checked={formData.marketingOptIn}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            marketingOptIn: checked === true,
                          })
                        }
                        className="mt-0.5"
                      />
                      <label
                        htmlFor="opt-in-marketing"
                        className="text-xs text-slate-500 leading-snug cursor-pointer select-none"
                      >
                        Optional: Keep me updated with seasonal spinal care advice and practice announcements. (You may unsubscribe at any time).
                      </label>
                    </div>
                  </div>

                  {/* Primary Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-bold text-base shadow-sm"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Processing Request...
                        </>
                      ) : (
                        "Submit Appointment Request"
                      )}
                    </Button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      🔒 100% Confidential • No Spam Guarantee • Response within 2 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
