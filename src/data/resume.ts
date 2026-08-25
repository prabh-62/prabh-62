export const profile = {
  name: "Prabhdeep Singh Batth",
  tagline: "Senior Software Engineer  |   Full-Stack Developer   |  Systems Architecture",
  linkedinLabel: "linkedin.com/in/prabh62/",
  linkedinHref: "https://www.linkedin.com/in/prabh62/",
  githubLabel: "github.com/prabh-62",
  githubHref: "https://github.com/prabh-62",
  location: "Whitby, ON",
}

export const summary =
  "Senior software engineer with 9+ years building and modernizing enterprise .NET and cloud systems. Most recently shipped a production RAG platform — Azure AI Search, .NET 9, React 19 — for a multi-tenant property management product; previously architected distributed microservices on AWS and delivered an end-to-end document automation product for the trucking industry. Comfortable owning a system from architecture through production and monitoring, and bridging product and engineering."

export const skills = [
  "C#",
  "EF Core",
  ".NET",
  "TypeScript",
  "React",
  "Angular",
  "AWS",
  "Azure",
  "Docker",
  "MSSQL",
  "Azure AI Search",
  "RAG Pipelines",
  "Vector Search",
  "LLM Integration",
  "Systems Design",
  "Message Queue",
  "IaC",
  "CI/CD",
] as const

type ProductGallerySlot = {
  src: string
  label: string
  alt: string
}

/** Plain text, inline link, or inline diagram thumbnail (opens lightbox). */
export type ExperienceBullet =
  | string
  | {
      before: string
      link: { href: string; label: string }
      after: string
    }
  | {
      before: string
      diagram: { src: string; alt: string; label: string }
      after: string
    }

export type ProductCallout = {
  id?: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  diagramSrc?: string
  diagramAlt?: string
  diagramCaption?: string
  links?: readonly { label: string; href: string }[]
  gallery?: {
    before: ProductGallerySlot
    after: ProductGallerySlot
    mobile: ProductGallerySlot
  }
}

const propertyControlProduct: ProductCallout = {
  title: "UI modernization (before → after)",
  description:
    "",
  links: [
    { label: "app.condocontrol.com", href: "https://app.condocontrol.com/" },
  ],
  gallery: {
    before: {
      src: "/experiences/condocontrol/cc-legacy.mp4",
      label: "Before (ASP.NET MVC)",
      alt: "Screen recording of the previous web client",
    },
    after: {
      src: "/experiences/condocontrol/cc-refresh.mp4",
      label: "After (React 19.2)",
      alt: "Screen recording of the modernized interface",
    },
    mobile: {
      src: "/experiences/condocontrol/cc-mobile.webp",
      label: "Mobile viewport",
      alt: "Mobile layout of the updated experience",
    },
  },
}

const transfloOneProduct: ProductCallout = {
  title: "Transflo Portal",
  description:
    "",
  imageSrc: "/experiences/transflo/transflo-one-dashboard.jpg",
  imageAlt: "Transflo One portal dashboard with applications and content",
  links: [
    { label: "one.transflo.com", href: "https://one.transflo.com/" },
    {
      label: "Microdea acquisition (2020)",
      href: "https://www.transflo.com/news/transflo-expands-into-canadian-market-with-microdea-acquisition/",
    },
  ],
}

const transfloWorkflowAiProduct: ProductCallout = {
  title: "Workflow AI for carriers",
  description:
    "Carrier-facing workflow automation in Transflo’s AI product line.",
  imageSrc: "/experiences/transflo/carrier-workflow-ai.webp",
  imageAlt: "Transflo Workflow AI for carriers product overview",
  links: [
    {
      label: "Workflow AI for carriers",
      href: "https://www.transflo.com/products/workflow-ai/for-carriers/",
    },
  ],
}

const ontarioInsideOpsProduct: ProductCallout = {
  title: "Inside OPS",
  description:
    "Ontario intranet context from the co-op (internal operations tooling).",
  imageSrc: "/experiences/government_of_ontario/inside-ops.webp",
  imageAlt: "Inside OPS intranet interface",
  links: [],
}

const synergizeProduct: ProductCallout = {
  title: "Synergize Explorer",
  description:
    "Document management and workflow UIs in the Synergize stack—browser-based access to repository search, workflows, and batch operations",
  imageSrc: "/experiences/microdea/synergize-explorer.png",
  imageAlt: "Synergize Explorer HTML5 interface",
  diagramSrc: "/experiences/microdea/synergize-microservices.svg",
  diagramAlt:
    "Synergize microservices architecture diagram: services, APIs, and data flow",
  diagramCaption: "Microservices architecture",
  links: [
    {
      label: "Documentation",
      href: "https://knowledge.transflo.com/synergize/Content/04syn/synergize/explorer/synergize-explorer.htm",
    },
    {
      label: "Transflo + Microdea (2020)",
      href: "https://www.transflo.com/news/transflo-expands-into-canadian-market-with-microdea-acquisition/",
    },
  ],
}

export const experience = [
  {
    title: "Senior Developer",
    company: "Condo Control (Property Control)",
    where: "Toronto, ON - Remote",
    dates: "Aug 2024 – Aug 2026",
    product: propertyControlProduct,
    items: [
      "Built and shipped the product's RAG chat platform end to end: a React 19 interface on Vercel AI Elements backed by a .NET 9 API that runs parallel vector searches across Azure AI Search and composes cited answers from the top-ranked chunks.",
      {
        before:
          "Closed a silent-failure gap in ingestion where password-protected and macro-enabled files were skipped without any signal — roughly 3,000 of 27,000 documents across nearly 200 tenants were invisible to search, so customers received confident answers that omitted their own files. Built an event-driven status pipeline giving every document a durable, queryable index status per tenant, with the Azure Function authenticating via managed identity so no database credential sits in the serverless tier — ",
        diagram: {
          src: "/experiences/condocontrol/azure-search-indexer-pipeline.png",
          alt: "Azure Search Indexer pipeline: S3 to Blob, indexed search, and knowledge-store status tracking via Event Grid and Azure Functions",
          label: "view architecture",
        },
        after: ".",
      },
      "Accelerated the UI transition from ASP.NET MVC to React 19 using shadcn/ui components and AI-assisted development in Cursor, and added a session audit page for reviewing chat history.",
    ],
  },
  {
    title: "Software Architect",
    company: "Transflo",
    where: "Tampa, FL - Remote",
    dates: "Oct 2021 – Jul 2024",
    product: transfloOneProduct,
    secondaryProduct: transfloWorkflowAiProduct,
    items: [
      "Architected and delivered Workflow AI, an end-to-end document automation product for trucking carriers: paperwork from mobile, email, and scanning stations runs through an OCR pipeline over HTTP, returns via AWS SQS to .NET Lambda handlers that flag discrepancies for back-office review, and surfaces in an Angular front end over a .NET BFF on App Runner.",
      "Led the architecture of distributed microservices with scalable architecture and leveraging domain events - SQS, SNS, Lambda, and AWS Apprunner.",
      {
        before: "Acted as a glue between ",
        link: {
          href: "https://www.linkedin.com/posts/briansowul_automation-ai-teamwork-activity-7121296799801245698-Uy9L/",
          label: "product and technical teams",
        },
        after:
          ", streamlining requirements and designs and pushing back against partially thought-out product features.",
      },
      "Coded angular v18 + ASP.NET core v8 APIs and code reviewed pull requests on several frontend/backend products with actionable feedback and organized technical sessions on best practices resulting in lesser bugs.",
      "Hired and onboarded six offshore engineers, cutting pull-request review cycles from roughly five rounds to near zero by front-loading codebase context into ticket handoffs.",
      "Increased the productivity of the development team by moving backend and frontend source code to git monorepo saving hundreds of dev hours.",
      "Created and maintained several CI/CD pipelines in Azure DevOps using task groups and regular updates to underlying build tools.",
      "Organized and documented production deployments using AWS CDK (Infrastructure as Code) and followed up on post deployment issues.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Microdea",
    where: "Markham, ON",
    dates: "May 2017 – Oct 2021",
    product: synergizeProduct,
    items: [
      "Created and maintained several UI applications built with the latest version of Angular while reusing code through TypeScript libraries.",
      "Coded, designed, and maintained multiple ASP.NET Core Web APIs with regular updates that served as the foundation for business-critical applications.",
      "Performed code reviews for pull requests on multiple frontend and backend products to ensure top-notch code quality.",
      "Introduced tunneling software to reduce the time needed to expose several on-premise client web services, saving hundreds of company implementation hours.",
      {
        before: "Introduced the ",
        link: {
          href: "https://github.com/adoptium/icedtea-web",
          label: "IcedTea-Web",
        },
        after:
          " project for a legacy Java UI, preventing the company from paying more than $200,000 in licensing fees to Oracle.",
      },
    ],
  },
  {
    title: "Frontend Developer (Co-op)",
    company: "Government of Ontario",
    where: "Toronto, ON",
    dates: "Jan 2017 – Apr 2017",
    product: ontarioInsideOpsProduct,
    items: [
      {
        before: "Wrote frontend code for the ",
        link: {
          href: "https://intra.ontario.ca/",
          label: "Ontario Intranet website",
        },
        after: ".",
      },
      "Developed a conversation bot to automate various Scrum tasks.",
      "Reported issues with the intranet website’s performance and proposed solutions to make the web application more performant.",
    ],
  },
] as const

/** Optional screenshots or product imagery for a project (paths under /public). */
export type ProjectMedia = {
  src: string
  alt: string
  label?: string
}

export type Project = {
  name: string
  items: readonly string[]
  media?: readonly ProjectMedia[]
}

export const projects: readonly Project[] = [
  {
    name: "Ticketing Web Application",
    items: [
      "Managed over $15K in ticket sales for an event using a Stripe backend(2.9% fees).",
      "Automated volunteer registration using Firebase Functions and Google Sheets.",
    ],
    media: [
      {
        src: "/projects/ticketing/big-city-bhangra.webp",
        alt: "Big City Bhangra event app — mobile ticket purchase and information page",
        label: "Event site",
      },
    ],
  },
]

export const education = {
  program:
    "Computer Systems Technology",
  school: "Sheridan Institute of Technology and Advanced Learning",
  where: "Brampton, ON",
  dates: "Sep 2013 – Dec 2016",
  programPageHref:
    "https://www.sheridancollege.ca/programs/computer-systems-technology-software-development-and-network-engineering",
}
