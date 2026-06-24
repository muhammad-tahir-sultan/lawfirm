import type { SiteConfig } from "@/niche-ui";

export const siteConfig: SiteConfig = {
  niche: "Law Firm",
  demoBadge: "Demo Website — Rodriguez & Associates Law",
  business: {
    name: "Rodriguez & Associates Law",
    shortName: "Rodriguez Law",
    tagline: "Trusted Legal Advocates in Your City",
    phone: "(555) 987-6543",
    email: "contact@rodriguezlaw.com",
    address: "456 Legal Plaza, Your City, ST 12345",
    hours: "Mon–Fri 8am–6pm · Sat by appointment",
  },
  branding: {
    primary: "#1E293B",
    accent: "#2563EB",
    heroGradient: "linear-gradient(135deg, #1E293B 0%, #2563EB 50%, #3B82F6 100%)",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Practice Areas" },
    { href: "/team", label: "Our Attorneys" },
    { href: "/free-consultation", label: "Free Consultation" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ],
  hero: {
    badge: "Free Initial Consultation",
    headline: "Experienced Advocates When You Need Them Most",
    subheadline:
      "Personal injury, family law, criminal defense, and more. Confidential case review — we fight for your rights with integrity and results.",
    primaryCta: { label: "Free Consultation", href: "/contact" },
    secondaryCta: { label: "View Practice Areas", href: "/services" },
  },
  trust: ["25+ Years Combined Experience", "Bar Association Member", "Free Initial Consultation", "Confidential Case Review"],
  problems: [
    { title: "Generic Template Site", description: "Your website looks like every other firm — visitors leave without trusting you." },
    { title: "Confusing Practice Areas", description: "Potential clients can't find the legal help they need." },
    { title: "Low Form Submissions", description: "Traffic arrives but consultation requests never come through." },
    { title: "Attorneys Not Differentiated", description: "Credentials and experience aren't visible enough." },
    { title: "Lost on Google", description: "Competitors rank higher for local legal searches." },
    { title: "No Trust Signals", description: "Missing reviews and clear attorney profiles." },
  ],
  solutions: [
    { title: "Practice Area Pages", description: "Clear, dedicated pages for every area of law you handle." },
    { title: "Attorney Profiles", description: "Build trust with credentials, experience, and case highlights." },
    { title: "Conversion Forms", description: "Simple, confidential consultation request forms." },
    { title: "Local SEO Built In", description: "Rank when people search for lawyers in your city." },
  ],
  services: [
    { slug: "personal-injury", title: "Personal Injury", description: "Representation for accident victims seeking fair compensation.", benefits: ["Car accidents", "Slip and fall", "Medical malpractice", "Wrongful death"] },
    { slug: "family-law", title: "Family Law", description: "Guidance through divorce, custody, and family disputes.", benefits: ["Divorce", "Child custody", "Spousal support", "Prenuptial agreements"] },
    { slug: "criminal-defense", title: "Criminal Defense", description: "Defense for misdemeanors, felonies, and DUI charges.", benefits: ["DUI defense", "Drug offenses", "Assault charges", "Expungement"] },
    { slug: "estate-planning", title: "Estate Planning", description: "Wills, trusts, and probate guidance.", benefits: ["Wills & trusts", "Power of attorney", "Probate", "Estate tax planning"] },
    { slug: "business-law", title: "Business Law", description: "Contracts, formation, and commercial disputes.", benefits: ["Entity formation", "Contract review", "Employment matters", "Litigation"] },
    { slug: "employment-law", title: "Employment Law", description: "Wrongful termination, discrimination, and workplace issues.", benefits: ["Wrongful termination", "Discrimination", "Wage disputes", "Severance review"] },
  ],
  team: [
    { name: "James Rodriguez", role: "Managing Partner", credentials: "Esq. · State Bar, 2005", bio: "20+ years in personal injury and civil litigation. Tireless client advocacy." },
    { name: "Maria Santos", role: "Senior Associate", credentials: "Esq. · Family & Estate Law", bio: "Specializes in family law and estate planning with compassionate support." },
    { name: "David Kim", role: "Associate Attorney", credentials: "Esq. · Criminal Defense", bio: "Experienced trial attorney focused on criminal defense." },
  ],
  testimonials: [
    { name: "Michael T.", detail: "Personal Injury Client", rating: 5, review: "They fought for me when no one else would. Professional and caring." },
    { name: "Sandra L.", detail: "Family Law Client", rating: 5, review: "Got me through a difficult divorce with compassion and strength." },
    { name: "Robert H.", detail: "Criminal Defense Client", rating: 5, review: "Clear communication, aggressive in court, and truly had my back." },
  ],
  about: {
    mission: "To provide accessible, aggressive, and ethical legal representation for every client we serve.",
    vision: "To be the most respected law firm in our community.",
    story: "Founded in 2005 by James Rodriguez, serving thousands across personal injury, family, criminal, and business law.",
    values: [
      { title: "Integrity", description: "Honest counsel and ethical practice." },
      { title: "Client-First Advocacy", description: "Your goals drive every strategy." },
      { title: "Results-Driven", description: "Focused on outcomes that matter." },
      { title: "Transparent Communication", description: "Clear updates, no jargon, no surprises." },
    ],
    whyChooseUs: ["Proven track record", "Personalized attention", "Free initial consultation", "Contingency fees available", "Response within 24 hours"],
  },
  cta: {
    title: "Need Legal Help? Start With a Free Consultation.",
    subtitle: "Confidential, no obligation. We respond within one business day.",
    primaryCta: { label: "Request Free Consultation", href: "/contact" },
    secondaryCta: { label: "Call Now", href: "tel:5559876543" },
  },
  contact: {
    headline: "Request Your Free Consultation",
    subheadline: "All information is confidential and protected.",
    formFields: ["Name", "Email", "Phone", "Practice Area", "Case Description"],
  },
  seo: {
    title: "Rodriguez & Associates Law | Your City Lawyers",
    description: "Free consultation. Personal injury, family law, criminal defense & more. Call (555) 987-6543.",
  },
  extraPage: {
    slug: "free-consultation",
    navLabel: "Free Consultation",
    title: "Free Consultation",
    sections: [
      { title: "What to Expect", content: ["Confidential review of your situation", "Honest assessment of options", "Clear fee explanation", "No pressure to decide"] },
      { title: "How to Prepare", content: ["Gather relevant documents", "Write a timeline of events", "List your questions", "Note any deadlines"] },
      { title: "Our Commitment", content: "Your consultation is free and confidential. We never share your information without consent." },
      { title: "Practice Areas", content: "Personal injury, family law, criminal defense, estate planning, business law, and employment law." },
    ],
  },
};
