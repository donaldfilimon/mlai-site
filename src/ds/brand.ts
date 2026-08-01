// MLAI brand data — the canonical copy, benchmark figures, and nav model.
// Ported verbatim from lib/brand.ts inside the mlai-site design-system bundle.
// Claims discipline: every stat carries a provenance tag; do not add untagged figures.

export type Accent = "wdbx" | "abi" | "abbey";
export type ProvKind = "measured" | "target" | "reported";

export interface Stat {
  value: string;
  label: string;
  tag: ProvKind;
  note?: string;
}

export interface NavItem {
  label: string;
  href: string;
  accent?: Accent;
}

export interface Publication {
  tag: string;
  title: string;
  date: string;
  abstract: string;
}

export interface Company {
  name: string;
  legalName: string;
  entity: string;
  location: string;
  tagline: string;
  appleFraming: string;
  principles: { name: string; desc: string }[];
  press: string[];
}

export interface Feature {
  title: string;
  desc: string;
}

export interface Persona {
  name: string;
  role: string;
  desc: string;
  accent: Accent;
}

interface ProductBase {
  name: string;
  accent: Accent;
  href: string;
  headline: string;
  sub: string;
}

export interface ProductMap {
  wdbx: ProductBase & {
    heroStats: Stat[];
    features: Feature[];
    scaleBench: { tag: ProvKind; note: string; cols: string[]; rows: string[][] };
    competitive: { cols: string[]; rows: string[][]; claims: Stat[] };
  };
  abi: ProductBase & {
    gpuBench: Stat[];
    silicon: { label: string; value: string }[];
    features: Feature[];
  };
  abbey: ProductBase & {
    capabilities: Feature[];
    personas: Persona[];
    platformStatus: { name: string; status: string }[];
    personaStats: Stat[];
  };
}

export const company = {
  name: "MLAI",
  legalName: "Machine Learning Advanced Innovations, Inc.",
  entity: "Delaware C-Corp",
  location: "Orlando, FL",
  tagline: "Privacy-first AI infrastructure for Apple Silicon.",
  // Integrity-gated Apple framing. Do NOT replace with partnership language
  // until an executed agreement is verified.
  appleFraming: "Apple Silicon-native. Built on Apple's public frameworks \u2014 Metal, Accelerate, and Core ML.",
  principles: [{
    name: "Disciplined secrecy",
    desc: "We publish benchmarks, not roadmaps. What ships speaks; what's in flight stays quiet until it's real."
  }, {
    name: "Mission stewardship",
    desc: "Privacy-first is an architecture decision, not a marketing position. Data never leaves the device unless the owner sends it."
  }, {
    name: "Operational velocity",
    desc: "Small team, systems languages, zero ceremony. We measure in p50s and ship in weeks."
  }],
  press: ["Cult of Mac", "PhoneArena", "TechTimes"],
} satisfies Company;

export const products = {
  wdbx: {
    name: "WDBX",
    accent: "wdbx",
    href: "/wdbx",
    headline: "The fastest vector database alive.",
    sub: "Zig-built vector storage with HNSW indexing, MVCC transactions, and Metal / CUDA / Vulkan backends. Runs where the data lives.",
    heroStats: [{
      value: "2.3ms",
      label: "p50 search latency",
      tag: "measured"
    }, {
      value: "98.2%",
      label: "Recall@10",
      tag: "measured"
    }, {
      value: "16.5K",
      label: "QPS \u2014 stress-test objective",
      tag: "target"
    }, {
      value: "0.8ms",
      label: "p50 @ 1M vectors",
      tag: "target"
    }],
    features: [{
      title: "HNSW index architecture",
      desc: "Hierarchical Navigable Small World graphs. O(log n) search. 95% recall at 8.2ms on 1M vectors."
    }, {
      title: "Memory-mapped persistence",
      desc: "Swift 6.2 Span for zero-copy I/O. WAL journaling. Instant cold starts."
    }, {
      title: "Scalar & product quantization",
      desc: "Up to 32\xD7 compression with minimal recall loss. 10B vectors addressable in 2GB RAM."
    }, {
      title: "Metal GPU acceleration",
      desc: "Distance calculations on Apple GPU via the ABI Framework. First App Store-ready vector database."
    }, {
      title: "MVCC transactions",
      desc: "Multiversion concurrency control. Readers never block writers; writers never block readers."
    }, {
      title: "AES-256 + RBAC",
      desc: "Encryption at rest, role-based access control, audit-grade write-ahead log."
    }],
    // Scale benchmarks from the investor deck (engineering harness, single M-series node).
    scaleBench: {
      tag: "measured",
      note: "Single Apple Silicon node; harness in repo.",
      cols: ["Metric", "100K", "1M", "10M"],
      rows: [["Insert throughput", "6,667/s", "6,579/s", "6,500/s"], ["Search latency (k=10)", "2.5ms", "8.2ms", "15.3ms"], ["Memory usage", "150MB", "1.5GB", "15GB"], ["With quantization", "20MB", "200MB", "2GB"]]
    },
    competitive: {
      cols: ["", "WDBX", "Pinecone", "Qdrant", "Chroma"],
      rows: [["100% on-device privacy", "Yes", "\u2014", "Partial", "Partial"], ["Apple Silicon optimized", "Native Metal", "\u2014", "\u2014", "\u2014"], ["iOS / macOS native SDK", "Swift 6", "REST only", "REST only", "Python"], ["Search latency (1M vectors)", "8.2ms", "50\u2013100ms", "25ms", "30ms"], ["Memory (1M vectors, quantized)", "200MB", "Cloud only", "1.5GB", "1.8GB"], ["Integrated ML acceleration", "ABI Framework", "\u2014", "\u2014", "\u2014"]],
      claims: [{
        value: "6\u201312\xD7",
        label: "Faster search vs cloud competitors \u2014 zero network latency",
        tag: "measured"
      }, {
        value: "8\xD7",
        label: "Lower memory footprint with product quantization",
        tag: "measured"
      }, {
        value: "Only",
        label: "App Store-ready vector DB with native Swift/Metal integration",
        tag: "measured"
      }]
    }
  },
  abi: {
    name: "ABI Framework",
    accent: "abi",
    href: "/abi",
    headline: "Apple Silicon, fully spent.",
    sub: "ML and GPU acceleration framework: tensor operations, neural network layers, and zero-copy unified-memory pipelines in Zig 0.17-dev + Metal.",
    gpuBench: [{
      value: "5\xD7",
      label: "MatMul 128\xD7128",
      tag: "measured"
    }, {
      value: "84\xD7",
      label: "MatMul 1024\xD71024",
      tag: "measured"
    }, {
      value: "295\xD7",
      label: "MatMul 4096\xD74096 \u2014 benchmark track",
      tag: "target",
      note: "Matrix workload objective"
    }, {
      value: "13\xD7",
      label: "10-layer neural net",
      tag: "measured"
    }],
    silicon: [{
      label: "Unified memory bandwidth",
      value: "546 GB/s"
    }, {
      label: "Neural Engine (M4)",
      value: "38 TOPS"
    }, {
      label: "Power efficiency",
      value: "200 GFLOPS/W"
    }],
    features: [{
      title: "Tensor operations",
      desc: "N-dimensional tensors with automatic differentiation. SIMD-optimized CPU paths plus Metal GPU kernels."
    }, {
      title: "GPU context management",
      desc: "Metal Performance Shaders integration, automatic kernel selection, async pipelines."
    }, {
      title: "Neural network layers",
      desc: "Dense, Conv2D, LSTM, Attention. ReLU, Sigmoid, Softmax. Full backpropagation."
    }, {
      title: "Zero-copy operations",
      desc: "Unified memory eliminates host\u2194device transfers. Span-based APIs, actor-based concurrency."
    }, {
      title: "Multi-persona orchestration",
      desc: "Intent classification, persona routing across Abbey / Aviva / Abi, RAG over WDBX, DQN reward loop."
    }, {
      title: "Comptime specialization",
      desc: "Zig compile-time execution pre-computes lookup tables and vectorized kernels for the exact target ISA."
    }]
  },
  abbey: {
    name: "Abbey",
    accent: "abbey",
    href: "/abbey",
    headline: "An assistant that remembers \u2014 locally.",
    sub: "Self-learning, emotionally aware AI assistant with persistent vector-backed memory. Every conversation stays on hardware you control.",
    capabilities: [{
      title: "Multi-provider LLM support",
      desc: "OpenAI, Anthropic, and local models via Ollama. Seamless provider switching."
    }, {
      title: "Vector-based semantic memory",
      desc: "Powered by WDBX. Remembers conversations, learns preferences \u2014 all stored locally."
    }, {
      title: "Multi-platform interface",
      desc: "Discord-native today (Bun + TypeScript + discord.js v14). HTTP REST for apps. Voice capable."
    }, {
      title: "Emotional intelligence",
      desc: "Technical precision balanced with empathetic communication, tuned per persona."
    }],
    personas: [{
      name: "Abbey",
      role: "Empathetic Polymath",
      desc: "Creative problem solver with emotional awareness. Training penalizes unsupportive phrasing via an explicit empathy loss term.",
      accent: "abbey"
    }, {
      name: "Aviva",
      role: "Unfiltered Expert",
      desc: "Direct technical answers, minimal hedging. A conciseness loss term penalizes filler tokens \u2014 fewer tokens, lower latency, lower energy.",
      accent: "wdbx"
    }, {
      name: "Abi",
      role: "Adaptive Moderator",
      desc: "Routes each query to the right persona via argmax over P(persona | input, context), with continuous blending when a query needs both.",
      accent: "abi"
    }],
    platformStatus: [{
      name: "Discord (Bun + discord.js v14)",
      status: "Shipping"
    }, {
      name: "Swift 6 / Vapor 4 / DiscordBM port",
      status: "In progress"
    }, {
      name: "Python + Twitch expansion",
      status: "In progress"
    }],
    personaStats: [{
      value: "0.92",
      label: "Abbey empathy score",
      tag: "reported",
      note: "Internal eval harness"
    }, {
      value: "90.5%",
      label: "Abbey technical accuracy",
      tag: "reported",
      note: "Internal eval harness"
    }, {
      value: "30%",
      label: "Aviva latency reduction vs hedged responses",
      tag: "reported"
    }, {
      value: "40%",
      label: "Aviva content density gain",
      tag: "reported"
    }]
  }
} satisfies ProductMap;

export const nav = [{
  label: "WDBX",
  href: "/wdbx",
  accent: "wdbx"
}, {
  label: "ABI",
  href: "/abi",
  accent: "abi"
}, {
  label: "Abbey",
  href: "/abbey",
  accent: "abbey"
}, {
  label: "Platform",
  href: "/platform"
}, {
  label: "Services",
  href: "/services"
}, {
  label: "Research",
  href: "/research"
}, {
  label: "Architecture",
  href: "/architecture"
}, {
  label: "Company",
  href: "/company"
}, {
  label: "Investors",
  href: "/investors"
}] satisfies NavItem[];

export const publications = [{
  tag: "Core Architecture",
  title: "WDBX: A Weighted-Backtrace Memory Store for Traceable Retrieval",
  date: "Jun 2026",
  abstract: "The formal data model and scoring math behind WDBX \u2014 hierarchical vector search, temporal\u2013causal reranking, authority-weighted records, and a hash-chained audit log \u2014 as implemented in the ABI runtime."
}, {
  tag: "Research",
  title: "Sparse Evidence Attention for Bounded Context Assembly",
  date: "Jun 2026",
  abstract: "SEA selects which durable records enter a context pack by scoring each candidate across eight independent criteria, then packing greedily under a hard token budget and a diversity constraint."
}, {
  tag: "Core Architecture",
  title: "WDBX Graph Weights for Traceable Neural Retrieval",
  date: "May 2026",
  abstract: "Storing retrieval context as weighted directed paths so answers preserve provenance, confidence, and rollback points."
}, {
  tag: "Safety",
  title: "Policy-Locked Tool Use in Multi-Agent Systems",
  date: "Apr 2026",
  abstract: "Separating creative planning, compliance review, and execution so agents collaborate without inheriting unrestricted tool authority."
}, {
  tag: "Engineering",
  title: "Latency Budgets for Real-Time AI Orchestration",
  date: "Mar 2026",
  abstract: "Allocating milliseconds across retrieval, model calls, safety checks, and UI feedback without hiding reliability work behind optimistic averages."
}, {
  tag: "Research",
  title: "Backtrace Confidence Signals for Hallucination Reduction",
  date: "Feb 2026",
  abstract: "Combining source coverage, graph distance, contradiction checks, and model uncertainty into operator-visible confidence signals."
}, {
  tag: "Scalability",
  title: "Vector Index Maintenance Under Continuous Ingestion",
  date: "Jan 2026",
  abstract: "Keeping high-volume indexes fresh while protecting recall quality, write latency, and audit history."
}, {
  tag: "Ethics & Safety",
  title: "Human Approval Gates That Operators Actually Use",
  date: "Dec 2025",
  abstract: "Designing approval flows that reduce risk without creating alert fatigue, rubber-stamping, or invisible escalation paths."
}, {
  tag: "Core Architecture",
  title: "Chunk Provenance in Long-Context Retrieval Systems",
  date: "Nov 2025",
  abstract: "Source segmentation, citation persistence, and drift detection for teams using large private corpora in regulated environments."
}, {
  tag: "Engineering",
  title: "Offline-First AI Workflows for Sensitive Data",
  date: "Oct 2025",
  abstract: "Packaging retrieval, inference, and audit services where cloud egress is limited or prohibited by policy."
}, {
  tag: "Safety",
  title: "Prompt Injection Drills for Agentic Systems",
  date: "Sep 2025",
  abstract: "A repeatable drill catalog for testing tool permission boundaries, source poisoning resilience, and confused-deputy failure modes."
}] satisfies Publication[];
