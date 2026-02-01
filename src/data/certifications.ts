export type CertificationLevel = "fundamental" | "associate";

export interface CertificationItem {
  title: string;
  link: string;
  issuer: string;
  date: string;
  level: CertificationLevel;
  description: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Azure Fundamentals (AZ-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/CurtisKan-1821/31F65E847E1FFF8D?sharingId=30423B6F5CF068B3",
    issuer: "Microsoft",
    date: "September 13, 2025",
    level: "fundamental",
    description: "Introduction to cloud concepts and Azure services."
  },
  {
    title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/CurtisKan-1821/E52EC79EF007CBB3?sharingId=30423B6F5CF068B3",
    issuer: "Microsoft",
    date: "October 23, 2025",
    level: "fundamental",
    description: "Introduction to Power Platform capabilities and core components."
  },
  {
    title: "Microsoft 365 Fundamentals (MS-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/CurtisKan-1821/ED9A05371C1C6AA?sharingId=30423B6F5CF068B3",
    issuer: "Microsoft",
    date: "January 27, 2026",
    level: "fundamental",
    description: "Overview of Microsoft 365 services and concepts."
  },
  {
    title: "Security, Compliance, and Identity Fundamentals (SC-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/CurtisKan-1821/C0839099C6467123?sharingId=30423B6F5CF068B3",
    issuer: "Microsoft",
    date: "October 30, 2025",
    level: "fundamental",
    description: "Basics of security, compliance, and identity concepts in Microsoft."
  },
  {
    title: "Azure Data Fundamentals (DP-900)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/CurtisKan-1821/8E1115033A453A39?sharingId=30423B6F5CF068B3",
    issuer: "Microsoft",
    date: "November 20, 2025",
    level: "fundamental",
    description: "Fundamental concepts of core data services and how they are implemented using Microsoft Azure data services."
  },
  {
    title: "Power BI Data Analyst Associate (PL-300)",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/CurtisKan-1821/642C77EA1B92C152?sharingId=30423B6F5CF068B3",
    issuer: "Microsoft",
    date: "January 21, 2026",
    level: "associate",
    description: "Skills to prepare, model, visualize, and analyze data with Power BI."
  },
];