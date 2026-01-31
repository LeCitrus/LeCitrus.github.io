export type CertificationLevel = "fundamental" | "associate";

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  level: CertificationLevel;
}

export const certifications: CertificationItem[] = [
  {
    title: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "September 2025",
    level: "fundamental",
  },
  {
    title: "Microsoft 365 Fundamentals (MS-900)",
    issuer: "Microsoft",
    date: "January 2026",
    level: "fundamental",
  },
  {
    title: "Security, Compliance, and Identity Fundamentals (SC-900)",
    issuer: "Microsoft",
    date: "October 2025",
    level: "fundamental",
  },
  {
    title: "Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "November 2025",
    level: "fundamental",
  },
  {
    title: "Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    date: "January 2026",
    level: "associate",
  },
];