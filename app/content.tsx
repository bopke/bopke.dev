import type { ReactNode } from "react";

export const SITE = {
  github: "https://github.com/bopke",
  linkedin: "https://www.linkedin.com/in/micha%C5%82-kubik-420170161/",
  email: "contact@bopke.dev",
} as const;

export const navLinks: [href: string, label: string][] = [
  ["#about", "01 About"],
  ["#experience", "02 Work"],
  ["#stack", "03 Stack"],
  ["#education", "04 Education"],
  ["#project", "05 Lab"],
  ["#contact", "06 Contact"],
];

export type Role = {
  title: string;
  company: string;
  contract?: boolean;
  when: string;
  desc: ReactNode;
  tags?: string[];
};

export const roles: Role[] = [
  {
    title: "Senior Developer",
    company: "Widelab development sp. k.",
    when: "Jan 2026 - now",
    desc: "Designed and built NestJS / TypeScript backend services, owned external-service integrations end to end, and shipped a PostgreSQL-backed REST API for ad-campaign management, including debit-card issuance through Lithic.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Lithic", "GitHub Actions"],
  },
  {
    title: "Senior Developer",
    company: "Yumzi GmbH",
    contract: true,
    when: "Jan 2026 - Apr 2026",
    desc: "Migrated a backend from Express/JS to NestJS/TypeScript and moved the React frontend onto it. Reworked the MongoDB schema and queries to cut database costs by over 60%, shipped a menu-management API, and connected the product to OpenAI, Anthropic, Grok, Stripe and Cloudflare R2 / Workers.",
    tags: ["NestJS", "MongoDB", "Cloudflare", "Stripe", "LLMs"],
  },
  {
    title: "Senior Developer",
    company: "ACE XR, LLC",
    contract: true,
    when: "Sep 2025 - Nov 2025",
    desc: "Built the NestJS backend for a VR game, handling accounts and scorekeeping. Resolved the main PostgreSQL performance bottleneck by moving a heavy aggregation behind a periodically refreshed materialized view. Ran on AWS SQS/S3/SES with Meta payment & subscription integration.",
    tags: ["NestJS", "PostgreSQL", "AWS", "Meta"],
  },
  {
    title: "Senior Developer / Tech Lead",
    company: "HTD Polska Sp. z o.o.",
    when: "Nov 2021 - Aug 2025",
    desc: "Nearly four years across the stack. Started on Go and Python backends, then moved to NodeJS/NestJS/Serverless, plus React web and React Native mobile, while tech-leading a small team. Built EHR integrations (FHIR/HL7) and HIPAA-compliant patient-data workflows, and helped with the company's ISO 13485 certification. All on AWS with Docker and Terraform.",
    tags: ["Go", "NestJS", "AWS", "FHIR/HL7", "Terraform", "HIPAA"],
  },
  {
    title: "Developer / Sysadmin",
    company: "Smart Soft Solutions",
    when: "Jul 2020 - Dec 2021",
    desc: "Administered Linux servers and built applications in C++, Python, JavaScript and Go against MySQL, Postgres, Elasticsearch and Redis.",
    tags: ["C++", "Go", "Linux", "Elasticsearch"],
  },
  {
    title: "Developer & DevOps Intern",
    company: "WebHott · Lvlup.pro",
    when: "2019 - 2020",
    desc: "Early roles building in PHP, JavaScript, Go and Python, and learning Linux server administration in production.",
    tags: ["PHP", "Go", "Python"],
  },
];

export const stack: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["TypeScript", "JavaScript", "Go", "Python", "C"] },
  { label: "Backend", items: ["NodeJS", "NestJS", "Express", "Serverless"] },
  { label: "Frontend", items: ["React", "React Native", "jQuery"] },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch", "MySQL"],
  },
  {
    label: "Cloud / Infra",
    items: ["AWS", "Cloudflare", "Docker", "Terraform", "GitHub Actions"],
  },
  { label: "Domains", items: ["FHIR / HL7", "HIPAA", "Fintech", "Medtech"] },
];

export type Project = {
  tag: string;
  name: string;
  lead: string;
  body: ReactNode;
  href: string;
  linkLabel: string;
};

export const projects: Project[] = [
  {
    tag: "Open source · satire",
    name: "conditionally-execute",
    lead: "A joke about npm's micro-dependency habit.",
    body: (
      <>
        Why write <code>if (x) {"{ … }"}</code> like a caveman when you could
        just install a package for it? <em>conditionally-execute</em> throws out
        the <code>if</code> keyword and replaces it with a long, over-engineered
        builder API. It&apos;s a jab at the
        &quot;there&apos;s-a-package-for-that&quot; culture that gave us{" "}
        <code>is-odd</code>.
      </>
    ),
    href: "https://github.com/bopke/conditionally-execute",
    linkLabel: "Read it on GitHub →",
  },
];
