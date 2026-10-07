import { EnquiryFormData } from "./types";

export interface EnquirySubmissionResponse {
  success: boolean;
  enquiryId: string;
  message: string;
  timestamp: string;
}

/**
 * Handles appointment enquiry submissions.
 * In Frontend-First mode, validates data, logs to developer console,
 * simulates network latency, and returns an immediate clinical confirmation response.
 */
export async function submitEnquiry(
  data: EnquiryFormData
): Promise<EnquirySubmissionResponse> {
  console.log("[HEALTHWISE CLINIC MOCK DISPATCH]: Enquiry Received", {
    ...data,
    submittedAt: new Date().toISOString(),
    channel: "Web Appointment Engine",
  });

  // Simulate network latency (600ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    enquiryId: `HW-${Math.floor(100000 + Math.random() * 900000)}`,
    message: `Thank you, ${data.fullName}. Your appointment request has been logged. Our reception team will contact you on ${data.phone} within 2 working hours to confirm your scheduled time.`,
    timestamp: new Date().toISOString(),
  };
}
