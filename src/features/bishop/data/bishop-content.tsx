export const bishopContent = {
  hero: {
    description:
      "AI-powered drone search & rescue platform designed for speed, safety, and hope.",
    timeline: "6 months to MVP",
    team: [
      {
        role: "Software Engineer",
        name: "Patrick Sherlund",
      },
      {
        role: "Product Designer",
        name: "Shelby Reilly :)",
      },
    ],
  },
  role: {
    title: "My role",
    text:
      "Engineered Bishop's search and rescue video intelligence pipeline to automate frame-by-frame review into prioritized human detections, cutting time-to-first-lead from hours to seconds.",
    stackTitle: "The Stack",
  },
  usersSaw: {
    title: "Our users saw...",
    stats: [
      {
        value: "30% ↓",
        label: "Time-to-first-find reduction",
      },
      {
        value: "3,400×",
        label: "Faster video review",
      },
    ],
  },
  discoverLabels: {
    discoverTitle: "01 | Discover",
    discoverSubtitle: "Understand the context, painpoints, and user insights",
    defineTitle: "02 | Define",
    defineSubtitle: "Frame the MVP",
  },
  contextResearch: {
    contextTitle: "Why this started",
    contextText: (
      <>
        We started this after the <strong>2024 Southeast Coastal hurricanes</strong>, when SAR teams{" "}
        <strong>struggled to find survivors</strong> quickly across flooded zones.
      </>
    ),
    researchTitle: "Discovery interviews & workshops",
  },
  personaLearned: {
    personaTitle: "Persona Mapping",
    learnedTitle: "What We Learned",
    learnedCards: [
      {
        title: "Simplicity is Key",
        text: (
          <>
            Operators need clear ways to <strong>link each detection</strong> to{" "}
            <strong>time stamps</strong>
          </>
        ),
        icon: "simplicity",
      },
      {
        title: "Time is Crucial",
        text: (
          <>
            Data needs to be <strong>quickly delivered</strong> and{" "}
            <strong>easy to understand</strong>
          </>
        ),
        icon: "time",
      },
      {
        title: "Operators Irreplaceable",
        text: (
          <>
            The <strong>human element</strong> is key. No software can replace the{" "}
            <strong>Operators</strong>
          </>
        ),
        icon: "operators",
      },
    ] as const,
  },
  reality: {
    title: "The Reality Today",
    text: (
      <>
        In SAR, the first <strong>~72 hours</strong> are the most critical, but{" "}
        <strong>manual video review</strong> is <strong>fatiguing and error prone</strong>, and even
        reviewed footage can hide <strong>missed detections</strong>. Bishop runs a{" "}
        <strong>rapid second pass</strong> to surface missed human leads faster.
      </>
    ),
  },
  problem: {
    title: "What's Holding Teams Back",
    text: (
      <>
        In SAR operations, responders have <strong>~72 hours</strong> to find subjects, but{" "}
        <strong>manual video review</strong> creates <strong>cognitive fatigue</strong> that
        increases <strong>missed detections</strong> and delays time-to-discovery.
      </>
    ),
  },
  proposed: {
    title: "Our proposed process",
  },
  proved: {
    title: "What we proved",
    cards: [
      {
        top: "Validate aerial person-detection accuracy",
        bottom: "We saw 94% Recall on footage",
      },
      {
        top: "Benchmark CPU-only video processing throughput",
        bottom: "We processed 3,700 frames per minute",
      },
      {
        top: "Prove smooth playback of annotated timelines",
        bottom: "Roughly 60 FPS during video playback",
      },
    ],
  },
};
