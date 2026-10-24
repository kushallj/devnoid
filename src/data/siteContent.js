/**
 * DevLix Landing Page Content Data
 * NOTE: Where text in the reference screenshot was unreadable due to compression,
 * plausible, clearly editable placeholder copy is provided below, marked with
 * "// PLACEHOLDER – review before launch". Never present invented content as verified.
 */

export const siteContent = {
  brand: {
    name: "DevLix",
    tagline: "Digital Products That Power Growth",
    wordmark: "DevLix",
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    headline: [
      "WE BUILD",
      "DIGITAL PRODUCTS",
      "THAT POWER GROWTH"
    ],
    // PLACEHOLDER – review before launch
    supportingText: "We design and engineer bespoke software platforms, high-performance web applications, and resilient digital products that scale with your ambitions.",
    primaryCta: {
      label: "Start Your Project",
      href: "#pricing"
    },
    secondaryCta: {
      label: "Plan The Work",
      href: "#process"
    }
  },

  // Highlight panels (Section C)
  highlights: [
    {
      id: "architecture",
      iconType: "concentricRings",
      title: "ENGINEERED FOR SCALE",
      // PLACEHOLDER – review before launch
      description: "Architecture designed from day zero for resilience, security, and exponential user growth."
    },
    {
      id: "delivery",
      iconType: "orbitalSphere",
      title: "GLOBAL DELIVERY",
      // PLACEHOLDER – review before launch
      description: "Cross-functional agile squads partnering directly with visionary founders and engineering leaders."
    }
  ],

  // Collaboration photograph (Section D)
  collaborationPhoto: {
    src: "/images/collaboration.jpg",
    alt: "Two smiling developers reviewing code together at a laptop in a modern warm-lit office",
    // PLACEHOLDER – review before launch
    captionNote: "DevLix Core Architecture & Engineering Team"
  },

  // Services (Section E)
  services: {
    title: "END-TO-END DEVELOPMENT SERVICES",
    // PLACEHOLDER – review before launch
    description: "From concept to launch, we build scalable, high-performance digital products that drive real business results.",
    cta: {
      label: "See All Services",
      href: "#services-grid"
    },
    items: [
      {
        id: "web-dev",
        title: "Web Development",
        // PLACEHOLDER – review before launch
        description: "Modern, performant web applications built with modern frontend frameworks and rock-solid architecture.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind"],
        icon: "code"
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        // PLACEHOLDER – review before launch
        description: "Native and cross-platform mobile apps engineered for fluid 60fps performance and intuitive touch UX.",
        tags: ["iOS", "Android", "React Native", "Flutter"],
        icon: "smartphone"
      },
      {
        id: "saas-dev",
        title: "SaaS Product Development",
        // PLACEHOLDER – review before launch
        description: "Full-lifecycle multi-tenant SaaS architecture with robust subscription billing, security, and auth.",
        tags: ["Cloud SaaS", "Multi-tenant", "Microservices"],
        icon: "layers"
      },
      {
        id: "custom-software",
        title: "Custom Software Solutions",
        // PLACEHOLDER – review before launch
        description: "Tailored enterprise systems, automation pipelines, and domain-specific tooling solving complex workflows.",
        tags: ["Enterprise Systems", "ERP", "Automation"],
        icon: "cpu"
      },
      {
        id: "backend-api",
        title: "Backend & API Development",
        // PLACEHOLDER – review before launch
        description: "High-throughput APIs, event-driven microservices, distributed databases, and bulletproof integrations.",
        tags: ["REST & GraphQL", "Node.js", "PostgreSQL", "Cloud"],
        icon: "database"
      }
    ]
  },

  // Development Process (Section F)
  process: {
    title: "HOW WE TURN IDEAS INTO SCALABLE PRODUCTS",
    // PLACEHOLDER – review before launch
    description: "A battle-tested 4-step engineering framework that eliminates uncertainty and accelerates time-to-market.",
    steps: [
      {
        step: "01",
        title: "Discover & Align",
        // PLACEHOLDER – review before launch
        description: "We unpack your product vision, map user personas, and establish concrete technical requirements."
      },
      {
        step: "02",
        title: "Plan & Design",
        // PLACEHOLDER – review before launch
        description: "Interactive Figma wireframes, systems architecture, schema blueprints, and sprint roadmaps."
      },
      {
        step: "03",
        title: "Build & Testing",
        // PLACEHOLDER – review before launch
        description: "Iterative agile development cycles with automated test suites, code reviews, and CI/CD pipelines."
      },
      {
        step: "04",
        title: "Launch & Scale",
        // PLACEHOLDER – review before launch
        description: "Production deployment, cloud infrastructure orchestration, real-time observability, and post-launch scaling."
      }
    ]
  },

  // Product Showcase (Section G)
  products: {
    title: "PRODUCTS WE'RE PROUD OF",
    // PLACEHOLDER – review before launch
    description: "Selected digital products and software platforms engineered to power high-growth teams.",
    link: {
      label: "See All Projects",
      href: "#contact"
    },
    items: [
      {
        id: "audiostream",
        // PLACEHOLDER – review before launch
        name: "AudioStream",
        category: "Real-Time Audio & Streaming Platform",
        graphicType: "waveform"
      },
      {
        id: "flowtrack",
        // PLACEHOLDER – review before launch
        name: "Shopify / FlowTrack",
        category: "Enterprise E-Commerce Engine",
        graphicType: "radar"
      },
      {
        id: "healthcore",
        // PLACEHOLDER – review before launch
        name: "HealthCore",
        category: "Telehealth & Clinical Data Systems",
        graphicType: "topography"
      }
    ]
  },

  // Pricing (Section H)
  pricing: {
    title: "SIMPLE, TRANSPARENT PRICING",
    // PLACEHOLDER – review before launch
    description: "Predictable engineering plans tailored for startups and scaling companies.",
    plans: [
      {
        id: "starter",
        name: "Starter Plan",
        price: "$799",
        // PLACEHOLDER – review before launch
        description: "Perfect for validating early-stage MVPs and prototypes with velocity.",
        features: [
          "End-to-end agile sprint delivery",
          "Responsive, accessible web UI",
          "Modern tech stack setup",
          "Continuous status & communication",
          "2-week delivery target",
          "30 days post-launch support"
        ],
        ctaText: "Get Started"
      },
      {
        id: "growth",
        name: "Growth Plan",
        price: "$2,499",
        // PLACEHOLDER – review before launch
        description: "Comprehensive software engineering for high-growth platforms and teams.",
        features: [
          "Full-stack web & mobile apps",
          "Custom UI & UX design system",
          "Microservices & API architecture",
          "Automated testing & CI/CD",
          "SEO & performance setup",
          "Priority delivery & ongoing retainer"
        ],
        ctaText: "Get Started"
      }
    ]
  },

  // Testimonials (Section I)
  testimonials: {
    title: "WHAT OUR CLIENTS SAY ABOUT US",
    // All names and testimonials are placeholders for review before launch
    items: [
      {
        id: "t1",
        // PLACEHOLDER – review before launch
        quote: "DevLix transformed our complex requirements into a streamlined SaaS platform that our users adore.",
        name: "Marcus Vance",
        role: "Founder, PulseTech (placeholder)",
        initials: "MV"
      },
      {
        id: "t2",
        // PLACEHOLDER – review before launch
        quote: "Their technical rigor and proactive communication made our mobile product launch an absolute success.",
        name: "Elena Rostova",
        role: "VP Product, FinStream (placeholder)",
        initials: "ER"
      },
      {
        id: "t3",
        // PLACEHOLDER – review before launch
        quote: "From prototype to multi-tenant scale in under 90 days. Exceptional craftsmanship at every layer.",
        name: "David Chen",
        role: "CTO, CloudVertex (placeholder)",
        initials: "DC"
      },
      {
        id: "t4",
        // PLACEHOLDER – review before launch
        quote: "Fast delivery, clean code, and unmatched architectural depth. They feel like an elite internal team.",
        name: "Sarah Lindqvist",
        role: "Head of Tech, Lumina (placeholder)",
        initials: "SL"
      },
      {
        id: "t5",
        // PLACEHOLDER – review before launch
        quote: "A development partner that truly understands business objectives, not just lines of code.",
        name: "Julian Brooks",
        role: "CEO, MetricHQ (placeholder)",
        initials: "JB"
      },
      {
        id: "t6",
        // PLACEHOLDER – review before launch
        quote: "They tackled our legacy migration with precision, cutting our cloud latency by more than half.",
        name: "Amara Diallo",
        role: "VP Engineering, Solis (placeholder)",
        initials: "AD"
      }
    ]
  },

  // FAQ (Section J)
  faq: {
    title: "FREQUENTLY ASKED QUESTIONS",
    // PLACEHOLDER – review before launch
    items: [
      {
        id: "faq-1",
        question: "What type of projects do you take on?",
        answer: "We specialize in end-to-end web applications, mobile platforms (iOS & Android), SaaS products, custom cloud architectures, and API integrations for startups and growth-stage businesses."
      },
      {
        id: "faq-2",
        question: "How do we get started?",
        answer: "We begin with a discovery session to evaluate your scope, timelines, and technical requirements. Within 48 hours, we present a technical blueprint and sprint schedule to kick off development."
      },
      {
        id: "faq-3",
        question: "Do you provide design along with development?",
        answer: "Yes, our engineering squads include UI/UX product designers who craft production-ready Figma design systems, wireframes, and interactive user flows alongside development."
      },
      {
        id: "faq-4",
        question: "Will you provide support after launch?",
        answer: "Every engagement includes post-launch monitoring, warranty bug fixes, cloud infrastructure check-ins, and flexible ongoing retainer options for continuous feature delivery."
      },
      {
        id: "faq-5",
        question: "What technologies do you use?",
        answer: "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Redis, Tailwind CSS, Docker, AWS, and GCP, selected based on your application's unique requirements."
      }
    ]
  },

  // Footer (Section K)
  footer: {
    // PLACEHOLDER – review before launch
    blurb: "DevLix builds scalable digital products, SaaS applications, custom software, and modern web experiences that power business growth.",
    socials: [
      { name: "GitHub", href: "#", label: "GitHub (placeholder)" },
      { name: "Twitter", href: "#", label: "Twitter / X (placeholder)" },
      { name: "LinkedIn", href: "#", label: "LinkedIn (placeholder)" },
      { name: "Dribbble", href: "#", label: "Dribbble (placeholder)" }
    ],
    columns: {
      menu: [
        { label: "Home", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Projects", href: "#projects" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" }
      ],
      services: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile App Development", href: "#services" },
        { label: "SaaS Products", href: "#services" },
        { label: "Custom Software", href: "#services" },
        { label: "Backend & APIs", href: "#services" }
      ],
      contact: [
        // PLACEHOLDER – review before launch
        { label: "hello@devlix.example.com", href: "mailto:hello@devlix.example.com" },
        { label: "+1 (555) 019-2834", href: "tel:+15550192834" },
        { label: "San Francisco, CA", href: "#" }
      ]
    },
    wordmark: "DevLix"
  }
};
