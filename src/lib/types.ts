export interface Practitioner {
  id: string;
  name: string;
  role: string;
  title: string;
  credentials: string[];
  bio: string;
  experience: string;
  specialties: string[];
  registrationNumber?: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  condition: string;
  practitionerMentioned?: string;
  quote: string;
  rating: number;
  dateRelative: string;
  verified: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  idealFor: string[];
  durationMinutes: number;
  iconName: string;
}

export interface Condition {
  id: string;
  name: string;
  description: string;
  commonSymptoms: string[];
  recommendedApproach: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Treatment" | "Pricing & Insurance" | "Logistics";
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDay: string;
  preferredTime: "morning" | "afternoon" | "evening" | "any";
  practitionerPreference?: string;
  reasonForVisit:
    | "initial_consultation"
    | "back_pain"
    | "neck_shoulder_pain"
    | "headaches"
    | "sciatica"
    | "remedial_massage"
    | "other";
  message?: string;
  consentPrivacy: boolean;
  marketingOptIn?: boolean;
}

export interface OutreachLead {
  id: string;
  clinicName: string;
  contactPerson: string;
  channel: "Email" | "Phone" | "WhatsApp" | "Referral";
  status: "Contacted" | "Replied" | "Call Booked" | "Proposal Sent" | "Closed";
  sentDate: string;
  lastReply: string;
  notes: string;
}

export interface OutreachKpi {
  label: string;
  value: string | number;
  changeText: string;
  isPositive: boolean;
  iconName: string;
}

export interface FunnelStage {
  stage: string;
  count: number;
  percentage: number;
  color: string;
}

export interface VolumeDataPoint {
  week: string;
  messagesSent: number;
  repliesReceived: number;
  callsBooked: number;
}
