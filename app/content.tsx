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

export type Group = {
  group: string;
  when: string;
  blurb: string;
  roles: Role[];
};

export const timeline: (Role | Group)[] = [
  {
    title: "Senior Fullstack Developer",
    company: "Widelab development sp. k.",
    when: "Jan 2026 - now",
    desc: "Building a new platform that gives campaigning organizations fine-grained control over ad spend: budgets and live spend tracking at every level, from the whole campaign down to each agency and individual agent, with debit cards issued through Lithic. Working across the stack: NestJS, PostgreSQL and Redis on the backend, React (Vite, shadcn/ui) on the front, with Sentry and Grafana/Prometheus for observability.",
    tags: ["React", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Lithic"],
  },
  {
    group: "Independent Contractor",
    when: "Sep 2025 - Apr 2026",
    blurb: "A deliberate stint freelancing, taking on work outside the usual.",
    roles: [
      {
        title: "Senior Backend Developer",
        company: "Yumzi GmbH",
        when: "Jan 2026 - Apr 2026",
        desc: "Yumzi turns a restaurant's dishes into professional, print-ready menus with AI. As it gained traction, its quickly-built Express/JS backend started hitting its limits, so I migrated it to NestJS/TypeScript (rewiring the React frontend onto the new API) and rebuilt it for its thousands of daily users and hundreds of menus generated a day. I reworked the MongoDB schema and queries to cut database costs by over 60%, re-integrated its existing LLM features (AI menu generation and a support bot) into the new backend, and built automatic, context-aware menu translation with the same models (OpenAI, Anthropic, Grok). Stripe handled subscriptions, Cloudflare R2 stored menu images, and Workers managed uploads and offloaded heavier jobs from the main service. I set up its CI/CD pipeline and Sentry monitoring, and operated it in production.",
        tags: ["NestJS", "MongoDB", "Cloudflare", "Stripe", "LLMs"],
      },
      {
        title: "Backend Developer",
        company: "ACE XR, LLC",
        when: "Sep 2025 - Nov 2025",
        desc: "Ace is a VR pistol-training platform on Meta Quest. Contracted to help migrate its backend off a low-code platform to NestJS after it outgrew the old stack and started to crumble. With tens of thousands of registered users and thousands of requests per minute at peak, the rebuild leaned heavily asynchronous, using SQS and S3 to pass events and data between services, and precomputing heavy read paths to clear the main PostgreSQL bottleneck. Handled Quest Store subscriptions and account auth through Meta, and transactional email over SES.",
        tags: ["NestJS", "PostgreSQL", "AWS", "Meta"],
      },
    ],
  },
  {
    title: "Senior Developer / Tech Lead",
    company: "HTD Polska Sp. z o.o.",
    when: "Nov 2021 - Aug 2025",
    desc: "Four years at a medtech agency serving the US healthcare market, where I joined as a mid developer and worked my way up to tech lead. I started on ZUS Health, handling HL7/FHIR data in Go, then moved to its GraphQL service in TypeScript when the client pivoted. Later, as a senior fullstack dev, I shipped a React Native and Serverless health app that turned Apple Watch and Fitbit heart-rate data into detailed reports for physicians, and contributed to its ISO 13485 certification. I finished as tech lead of four experienced engineers, owning the technical direction and scoping work directly with the client, on a React/NestJS app that helps insured patients find in-network care nearby; within a month of launch it had a few thousand monthly users and had replaced a costly call-center process. All of it HIPAA-regulated patient data on AWS (Docker, Terraform, CI/CD), monitored with CloudWatch and Grafana; as tech lead I carried the on-call pager and was accountable for uptime.",
    tags: ["Go", "TypeScript", "NestJS", "React", "React Native", "FHIR/HL7", "HIPAA", "ISO 13485"],
  },
  {
    title: "Developer / Sysadmin",
    company: "Smart Soft Solutions",
    when: "Jul 2020 - Dec 2021",
    desc: "Split time between Linux server administration and application work in C, Python, JavaScript and Go, against MySQL, Postgres, Elasticsearch and Redis. The highlight was a COVID-era hardware project: as one of the firmware developers on a Raspberry Pi device that gated building entry behind a temperature check and hand disinfection, I wrote C for the heavy computation and Python for the rest of the app.",
    tags: ["C", "Python", "Firmware", "Raspberry Pi", "Linux"],
  },
  {
    title: "Developer & DevOps Intern",
    company: "WebHott · Lvlup.pro",
    when: "2019 - 2020",
    desc: "Early roles building in PHP, JavaScript, Go and Python, and learning Linux server administration in production.",
    tags: ["PHP", "Go", "Python"],
  },
];

export const stack: { label: string; items: string[]; emphasis?: boolean }[] = [
  {
    label: "Core",
    emphasis: true,
    items: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
  },
  {
    label: "Also worked with",
    items: [
      "Go",
      "Python",
      "C",
      "JavaScript",
      "Express",
      "Serverless",
      "React Native",
      "jQuery",
      "MongoDB",
      "DynamoDB",
      "Elasticsearch",
      "MySQL",
      "Cloudflare",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Sentry",
      "Grafana",
      "Prometheus",
      "CloudWatch",
    ],
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
