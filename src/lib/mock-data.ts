import {
  Practitioner,
  Testimonial,
  Service,
  Condition,
  FaqItem,
  OutreachLead,
  OutreachKpi,
  FunnelStage,
  VolumeDataPoint,
} from "./types";

export const PRACTITIONERS: Practitioner[] = [
  {
    id: "gurmeet-tulsi",
    name: "Gurmeet Tulsi",
    role: "Clinic Director & Chiropractor",
    title: "MChiro, University of Surrey (2001) | GCC Registered",
    credentials: [
      "Masters in Chiropractic (MChiro, University of Surrey, 2001)",
      "General Chiropractic Council (GCC) Registered",
      "Over 22 years of clinical practice in Hounslow",
    ],
    experience: "22+ Years",
    bio: "Gurmeet founded Healthwise Chiropractic Clinic in Hounslow in 2002 after experiencing life-changing relief from chronic headaches through chiropractic care. Having suffered for years before finding an effective solution, she is deeply committed to empowering each patient with the knowledge, physical treatment, and ongoing guidance needed to take full control of their spinal health.",
    specialties: [
      "Spinal adjustments & alignment",
      "Chronic headache & migraine management",
      "Sciatica & postural correction",
      "Dry-needling therapy",
    ],
    initials: "GT",
  },
  {
    id: "dr-gabriella",
    name: "Dr. Gabriella",
    role: "Associate Chiropractor",
    title: "MChiro, McTimoney College of Chiropractic (2020) | GCC Registered",
    credentials: [
      "Masters in Chiropractic (McTimoney College, 2020)",
      "GCC Registered Chiropractor",
      "Holistic wellness & mobility practitioner",
    ],
    experience: "5+ Years",
    bio: "Dr. Gabriella qualified from the McTimoney College of Chiropractic in 2020, inspired by witnessing chiropractic care's profound impact on a close relative. Gabriella focuses on gentle, precise adjustments aligned with the body's natural healing abilities, helping patients of all ages unlock everyday mobility and build long-term wellness habits.",
    specialties: [
      "Gentle joint mobilisation",
      "Desk worker postural rehabilitation",
      "Age-adapted spinal care",
      "Preventative wellness strategies",
    ],
    initials: "DG",
  },
  {
    id: "kien",
    name: "Kien",
    role: "Associate Chiropractor",
    title: "MChiro | GCC Registered | Movement & Rehab Specialist",
    credentials: [
      "Masters in Chiropractic",
      "GCC Registered Chiropractor",
      "Functional Movement & Strength Rehabilitation Specialist",
    ],
    experience: "4+ Years",
    bio: "Kien is a dedicated chiropractor who blends traditional chiropractic spinal adjustments with active movement therapy and strength rehabilitation. As a dedicated gym and movement enthusiast, he helps patients restore everyday function, overcome sports and lifting strains, and build durable physical resilience.",
    specialties: [
      "Active rehabilitation & exercise prescription",
      "Sports injuries & athletic strain",
      "Hip, pelvis & lower back mechanics",
      "Functional mobility restoration",
    ],
    initials: "K",
  },
  {
    id: "sushma",
    name: "Sushma",
    role: "Remedial Massage Therapist",
    title: "Resilo Level 3 Remedial Massage (2017) | Reiki Practitioner",
    credentials: [
      "Qualified Resilo Level 3 Remedial Massage (2017)",
      "Soft Tissue Rehabilitation Specialist",
      "Trained Reiki Healing Practitioner",
    ],
    experience: "8+ Years",
    bio: "Sushma qualified in Resilo Level 3 Remedial Massage in 2017. Her whole-body treatment works deeply on soft tissues (muscles, tendons, ligaments, and fascia) to release trapped tension, whiplash, frozen shoulder, and chronic muscle spasms. She combines physical therapy with mindful relaxation for complete restorative wellbeing.",
    specialties: [
      "Resilo Level 3 remedial soft-tissue therapy",
      "Whiplash & frozen shoulder rehabilitation",
      "Deep postural tension release",
      "Holistic relaxation & circulation enhancement",
    ],
    initials: "S",
  },
  {
    id: "karina",
    name: "Karina",
    role: "Therapeutic Massage Therapist",
    title: "Certified Swedish & Deep Tissue Massage Therapist",
    credentials: [
      "Swedish Massage Certified",
      "Deep Tissue Musculoskeletal Release",
      "Stress & Tension Relief Specialist",
    ],
    experience: "6+ Years",
    bio: "Karina specialises in targeted Swedish and therapeutic deep tissue massage techniques. She focuses on easing tight muscle knots, accelerating recovery from daily stress, and complementing chiropractic spinal adjustments with deep muscular relaxation.",
    specialties: [
      "Deep tissue therapeutic massage",
      "Swedish relaxation massage",
      "Upper back, trap & neck tension release",
      "Stress relief therapy",
    ],
    initials: "K",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-romana",
    author: "Romana",
    location: "Hounslow",
    condition: "Shoulder pain after 5-year accident",
    practitionerMentioned: "Gurmeet Tulsi",
    quote:
      "Fantastic Chiropractic Clinic. When I started my treatments in September I was so nervous, but Gurmeet put me to ease straight away and thereafter I loved all my sessions. I have had shoulder pain following an accident 5 years ago and nothing helped me get rid of the shoulder pain from massages to cupping. The chiropractic adjustments fixed this pain. I have been feeling so much better. I am so glad I found such an amazing chiropractor in Hounslow. The team there are fantastic and so polite. Thank you",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-ronak",
    author: "Ronak",
    location: "Hounslow",
    condition: "4-year chronic back & leg pain",
    practitionerMentioned: "Dr. Gurmeet Tulsi",
    quote:
      "In medical profession, most important is accuracy in problem diagnosis. Because if right problem is identified then right treatment can be given. I must admit, Dr. Gurmeet identified the root cause of my 4 year old back pain and leg pain in first visit. She started my treatment, day by day my pain is getting reduced, standing and walking strength has been increased significantly, All these happens first time in 4 years, within 3-4 weeks. Yes of course, Dr. Gurmeet is very humble, carefully listen you and explains what is the problem and all these she does with great human touch. I must say staff is very very cooperative and flexible for appointments and payment.",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-james",
    author: "James",
    location: "Greater London",
    condition: "Running injury & back stiffness",
    practitionerMentioned: "Gurmeet Tulsi",
    quote:
      "Cannot recommend highly enough. Highlighted my problems and had me back out running in no time! Gurmeet is genuine and professional as are their lovely staff. Excellent payment plans and flexible appointment times. Thank you!",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-tracie",
    author: "Tracie",
    location: "Hounslow",
    condition: "Pain management & Dry-needling",
    practitionerMentioned: "Gurmeet Tulsi",
    quote:
      "Great service, highly recommend, friendly staff and really helpful chiropractor. I am finding that regular visits with Gurmeet for adjustments are helping me manage my pain and feeling more comfortable, I am especially finding that Dry-needle therapy is working out really well for me. I feel at ease visiting the clinic and safe with the high standard of safety precautions in place.",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-mihaela",
    author: "Mihaela",
    location: "Cranford",
    condition: "Back pain & posture improvement",
    practitionerMentioned: "Gurmeet Tulsi",
    quote:
      "I am totally satisfied with my experience at the Healthwise Chiropractic Clinic. My chiropractor Gurmeet Tulsi and all the staff are very caring and considerate. After only 3 weeks of therapy my back pain decreased considerably and my back posture is improving. I can’t recommend them highly enough. A Massive Thank You!",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-adnan",
    author: "Adnan",
    location: "Hounslow",
    condition: "Therapeutic massage package",
    practitionerMentioned: "Healthwise Team",
    quote:
      "What an experience. Absolutely friendly and flexible service. All staff is very professional. One thing is would definitely recommend is the massage. It’s a magical massage I say. I had a great experience would definitely recommend the services. Very reasonable price and free parking close by. One suggestion if you are looking for a full package it works out cheaper then having individual appointments. Thank you Healthwise team for the experience and improving my health and lifestyle.",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-roland",
    author: "Roland",
    location: "West London",
    condition: "Back and shoulder pain",
    practitionerMentioned: "Healthwise Clinic",
    quote:
      "Best chiropractor I seen, always have a laugh and joke when there and my back and shoulder pains have not far off gone. So impressed with healthwise even got my wife to go who is feeling the benefits. I would highly recommend going if you need treatment but please leave space for me and wife.",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-jagraj",
    author: "Jagraj",
    location: "Hounslow",
    condition: "Shoulder lack of mobility",
    practitionerMentioned: "Gurmeet Tulsi",
    quote:
      "Went there to get my shoulder looked at for lack of mobility. Found the service great and treated my shoulder efficiently and quickly got my shoulder better. Gurmit is a star. Highly recommended!",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-bill",
    author: "Bill",
    location: "Greater London",
    condition: "Lower back pain",
    practitionerMentioned: "Sonia / Clinic Staff",
    quote:
      "Sorted my lower back pain within a few treatments. Very pleased with the level of service given. The other staff were very courteous and knowledgeable making me feel at ease. Highly recommend. Keep up the good work!",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
  {
    id: "rev-andeela",
    author: "Andeela",
    location: "Hounslow",
    condition: "Routine chiropractic care",
    practitionerMentioned: "Healthwise Staff",
    quote:
      "Excellent service and very friendly staff. So happy with my treatments 👍",
    rating: 5,
    dateRelative: "Verified Patient Review",
    verified: true,
  },
];

export const SERVICES: Service[] = [
  {
    id: "chiropractic",
    title: "Chiropractic Care & Spinal Adjustments",
    subtitle: "Precision hands-on realignment to relieve pressure on nerves and joints",
    description:
      "Targeted diagnosis and manual spinal adjustments designed to restore normal joint motion, reduce nerve irritation, and alleviate acute or chronic musculoskeletal pain.",
    bulletPoints: [
      "Comprehensive spinal & postural assessment",
      "Gentle manual adjustments & joint mobilisation",
      "Relief from acute back stiffness, sciatica, and neck spasms",
      "Dry-needling and trigger point release available",
    ],
    idealFor: [
      "Persistent lower back pain & sciatica",
      "Stiff neck, tension headaches & migraines",
      "Postural fatigue from desk work",
      "Joint restrictions and reduced flexibility",
    ],
    durationMinutes: 45,
    iconName: "Activity",
  },
  {
    id: "massage",
    title: "Remedial & Therapeutic Massage",
    subtitle: "Deep soft-tissue therapy to break down knots and chronic muscular tension",
    description:
      "Specialised medical massage including Resilo Level 3 remedial therapy, deep tissue friction, and Swedish techniques to eliminate deep muscular spasms and restore tissue elasticity.",
    bulletPoints: [
      "Resilo Level 3 qualified remedial body treatment",
      "Deep tissue myofascial release for stubborn trigger points",
      "Increases vascular and lymphatic circulation to injured areas",
      "Reduces cortisol and complements spinal adjustments",
    ],
    idealFor: [
      "Chronic muscular tightness & knots",
      "Whiplash & frozen shoulder stiffness",
      "Repetitive strain injuries (RSI)",
      "High-stress muscle clenching and tension",
    ],
    durationMinutes: 60,
    iconName: "HeartHandshake",
  },
  {
    id: "rehabilitation",
    title: "Active Spinal Rehabilitation & Exercise",
    subtitle: "Personalised corrective exercises to prevent recurring injuries",
    description:
      "A structured programme of tailored mobility exercises, core stabilization protocols, and ergonomic advice that empowers you to maintain your clinical results long after leaving the clinic.",
    bulletPoints: [
      "Customised corrective exercise prescription",
      "Deep core and postural muscle strengthening",
      "Workstation and sleeping ergonomic guidance",
      "Step-by-step progress tracking with your chiropractor",
    ],
    idealFor: [
      "Preventing repeated episodes of back lockups",
      "Rebuilding strength after lifting or sports injury",
      "Correcting rounded shoulders and forward head posture",
      "Long-term spinal maintenance and independent wellness",
    ],
    durationMinutes: 30,
    iconName: "ShieldCheck",
  },
];

export const CONDITIONS: Condition[] = [
  {
    id: "lower-back-pain",
    name: "Lower Back Pain & Disc Strain",
    description:
      "Aching, sharp catches, or throbbing pain in the lumbar region caused by facet joint irritation, ligament strain, or disc bulge.",
    commonSymptoms: ["Stiffness upon waking", "Difficulty bending forward", "Pain when standing from a chair"],
    recommendedApproach: "Chiropractic adjustments + gentle lumbar mobilisation + progressive core stability",
  },
  {
    id: "sciatica",
    name: "Sciatica & Pinched Nerves",
    description:
      "Shooting pain, tingling, numbness, or weakness radiating from the lower back through the buttock down the back of the leg.",
    commonSymptoms: ["Sharp pain down one leg", "Pins and needles in the foot", "Increased discomfort when sitting"],
    recommendedApproach: "Decompressive spinal adjustments + nerve gliding exercises + soft tissue release",
  },
  {
    id: "neck-shoulder-pain",
    name: "Neck Strain & Shoulder Tension",
    description:
      "Restricted cervical mobility, tight trapezius muscles, and knotting caused by desk posture, phone strain, or whiplash.",
    commonSymptoms: ["Inability to turn head fully while driving", "Burning sensation between shoulder blades", "Shoulder joint stiffness"],
    recommendedApproach: "Cervical joint mobilisation + remedial deep tissue massage + ergonomic posture reset",
  },
  {
    id: "headaches",
    name: "Cervicogenic Headaches",
    description:
      "Dull, persistent aching radiating from the base of the skull over the forehead, triggered by restricted upper cervical vertebrae.",
    commonSymptoms: ["Band-like pressure across forehead", "Tenderness at base of skull", "Worsens with prolonged screen time"],
    recommendedApproach: "Upper neck alignment + suboccipital muscle release + dry-needling therapy",
  },
  {
    id: "posture-ergonomics",
    name: "Postural Fatigue & Desk Strain",
    description:
      "Slumped posture, rounded shoulders, and anterior pelvic tilt that strain supportive spinal ligaments over months of desk work.",
    commonSymptoms: ["Mid-back fatigue by 3 PM", "Tight hip flexors", "Shallow breathing and neck hunch"],
    recommendedApproach: "Spinal adjustment series + active extension rehab + workstation ergonomic plan",
  },
];

export const FIRST_VISIT_STEPS = [
  {
    step: "01",
    title: "Consultation & Health History",
    description:
      "We sit down with you to listen carefully to your story. We review when your symptoms started, daily triggers, past injuries, and your specific personal goals (returning to sport, gardening, or sleeping without waking up).",
    duration: "15 mins",
  },
  {
    step: "02",
    title: "Thorough Physical Examination",
    description:
      "Your chiropractor carries out orthopaedic tests, neurological assessments (reflexes, sensation, strength), postural analysis, and gentle palpation of spinal joints to identify the precise biomechanical cause of your pain.",
    duration: "15 mins",
  },
  {
    step: "03",
    title: "Clear Report of Findings",
    description:
      "We explain what is wrong in plain English using spinal models and diagrams. We tell you honestly if chiropractic is appropriate, how many sessions are recommended, and what you can expect at each stage.",
    duration: "10 mins",
  },
  {
    step: "04",
    title: "Gentle First Treatment",
    description:
      "Provided there are no medical contraindications, we begin gentle treatment on your very first visit. You also receive practical home advice on ice/heat application and sitting ergonomics.",
    duration: "15 mins",
  },
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-referral",
    question: "Do I need a GP referral before visiting Healthwise Chiropractic?",
    answer:
      "No GP referral is required. Chiropractors are primary contact healthcare practitioners in the UK, meaning you can self-refer and book directly with us at any time. If you plan to claim treatment through private medical insurance (like AXA, Bupa, or Aviva), your insurer may occasionally ask for a quick GP referral note depending on your policy.",
    category: "General",
  },
  {
    id: "faq-hurts",
    question: "Does a chiropractic adjustment hurt?",
    answer:
      "Chiropractic adjustments are gentle, controlled, and typically completely painless. Most patients experience immediate relief or a feeling of release and lightness. If you are experiencing acute inflammation or severe muscle spasm, you may feel temporary mild tenderness, similar to after a workout, which usually settles within 24 hours.",
    category: "Treatment",
  },
  {
    id: "faq-gcc",
    question: "Are your chiropractors officially registered and regulated in the UK?",
    answer:
      "Yes, 100%. By law in the UK, anyone using the title 'Chiropractor' must be registered with the General Chiropractic Council (GCC), the statutory regulatory body established by Parliament under the Chiropractors Act 1994. All our chiropractors hold accredited university degrees (Masters in Chiropractic) and complete mandatory annual Continuing Professional Development.",
    category: "General",
  },
  {
    id: "faq-insurance",
    question: "Can I use private health insurance for my visits?",
    answer:
      "Yes. Healthwise Chiropractic Clinic is recognised by most major UK private health insurers, including AXA Health, Bupa, Aviva, Vitality, and WPA. We recommend contacting your insurer prior to your visit to confirm your authorization number and excess limit. We provide detailed clinical invoices for seamless reimbursement.",
    category: "Pricing & Insurance",
  },
  {
    id: "faq-wear",
    question: "What should I wear to my appointment?",
    answer:
      "Please wear comfortable, loose-fitting or stretchy clothing (such as gym wear, leggings, or a T-shirt and joggers). This allows your chiropractor or massage therapist to easily assess joint mobility and perform physical tests comfortably.",
    category: "Logistics",
  },
  {
    id: "faq-parking",
    question: "Where can I park when visiting the clinic?",
    answer:
      "Healthwise is conveniently situated at 730 Bath Road, Cranford, Hounslow (TW5 9TW). There is free on-street and dedicated local parking spaces available in the immediate vicinity on Bath Road and adjacent residential avenues. Public bus stops (serving Heathrow and Hounslow West) are situated directly outside the clinic.",
    category: "Logistics",
  },
  {
    id: "faq-massage-vs-chiro",
    question: "What is the difference between chiropractic care and remedial massage?",
    answer:
      "Chiropractic focuses primarily on the joints, spinal alignment, and nervous system function, using manual adjustments to restore joint mechanics. Remedial massage focuses specifically on muscles, tendons, ligaments, and soft-tissue tension. At Healthwise, both therapies work synergistically together under one roof for complete recovery.",
    category: "Treatment",
  },
];

// --- SAMPLE DATA FOR INTERNAL ADMIN DASHBOARD ---
// (Clearly marked as Sample Data)

export const DASHBOARD_KPIS: OutreachKpi[] = [
  {
    label: "Enquiries Generated",
    value: "142",
    changeText: "+18.4% vs last month",
    isPositive: true,
    iconName: "Send",
  },
  {
    label: "Response Rate",
    value: "34.5%",
    changeText: "+4.2% engagement",
    isPositive: true,
    iconName: "MessageSquareQuote",
  },
  {
    label: "Consultation Calls Booked",
    value: "28",
    changeText: "+12.0% conversion",
    isPositive: true,
    iconName: "PhoneCall",
  },
  {
    label: "Treatment Plans Out",
    value: "14",
    changeText: "+7.1% active pipeline",
    isPositive: true,
    iconName: "FileText",
  },
  {
    label: "New Patients Started",
    value: "6",
    changeText: "+2 this week",
    isPositive: true,
    iconName: "CheckCircle2",
  },
];

export const FUNNEL_STAGES: FunnelStage[] = [
  { stage: "Contacted / Enquired", count: 142, percentage: 100, color: "hsl(var(--chart-1))" },
  { stage: "Replied / Triaged", count: 49, percentage: 34.5, color: "hsl(var(--chart-2))" },
  { stage: "Consultation Booked", count: 28, percentage: 19.7, color: "hsl(var(--chart-3))" },
  { stage: "Care Plan Proposed", count: 14, percentage: 9.8, color: "hsl(var(--chart-4))" },
  { stage: "Started Care (Closed)", count: 6, percentage: 4.2, color: "hsl(var(--chart-5))" },
];

export const VOLUME_TIME_SERIES: VolumeDataPoint[] = [
  { week: "Wk 1", messagesSent: 18, repliesReceived: 5, callsBooked: 2 },
  { week: "Wk 2", messagesSent: 22, repliesReceived: 7, callsBooked: 3 },
  { week: "Wk 3", messagesSent: 25, repliesReceived: 8, callsBooked: 4 },
  { week: "Wk 4", messagesSent: 28, repliesReceived: 10, callsBooked: 5 },
  { week: "Wk 5", messagesSent: 30, repliesReceived: 11, callsBooked: 6 },
  { week: "Wk 6", messagesSent: 34, repliesReceived: 12, callsBooked: 7 },
  { week: "Wk 7", messagesSent: 31, repliesReceived: 11, callsBooked: 6 },
  { week: "Wk 8", messagesSent: 36, repliesReceived: 13, callsBooked: 8 },
  { week: "Wk 9", messagesSent: 40, repliesReceived: 14, callsBooked: 9 },
  { week: "Wk 10", messagesSent: 42, repliesReceived: 15, callsBooked: 10 },
  { week: "Wk 11", messagesSent: 45, repliesReceived: 16, callsBooked: 11 },
  { week: "Wk 12", messagesSent: 48, repliesReceived: 17, callsBooked: 12 },
];

export const RECENT_LEADS: OutreachLead[] = [
  {
    id: "lead-01",
    clinicName: "Hounslow Community Medical Centre",
    contactPerson: "Dr. Rachel Higgins (Referral Partner)",
    channel: "Email",
    status: "Call Booked",
    sentDate: "05/10/2026",
    lastReply: "Yesterday, 14:20",
    notes: "Interested in cross-referring lower back pain patients who need private conservative care.",
  },
  {
    id: "lead-02",
    clinicName: "Heathrow Aviation Health & Wellbeing",
    contactPerson: "Marcus Vance (Occupational Health)",
    channel: "Phone",
    status: "Proposal Sent",
    sentDate: "03/10/2026",
    lastReply: "04/10/2026",
    notes: "Corporate desk posture & baggage handling injury clinic partnership proposal delivered.",
  },
  {
    id: "lead-03",
    clinicName: "Cranford Dental & Orthodontic Practice",
    contactPerson: "Dr. Amina Patel",
    channel: "WhatsApp",
    status: "Replied",
    sentDate: "06/10/2026",
    lastReply: "Today, 09:15",
    notes: "TMJ and cervicogenic headache co-management collaboration discussion.",
  },
  {
    id: "lead-04",
    clinicName: "PureGym Hounslow East - PT Team",
    contactPerson: "Jordan Cole (Head of Fitness)",
    channel: "Referral",
    status: "Closed",
    sentDate: "28/09/2026",
    lastReply: "02/10/2026",
    notes: "Agreement to refer injured lifters directly to Kien for active spinal rehab.",
  },
  {
    id: "lead-05",
    clinicName: "West London Physio Collective",
    contactPerson: "Sarah Jenkins (Lead Physio)",
    channel: "Email",
    status: "Contacted",
    sentDate: "07/10/2026",
    lastReply: "Pending",
    notes: "Introductory email highlighting Gurmeet's 22-year clinical presence in Hounslow.",
  },
];
