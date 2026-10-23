export const aerotContent = {
  images: {
    antennaMast: {
      src: "/assets/images/aerot/patrick_antenna_mast.png",
      alt: "Patrick working beside the AeroT antenna mast during field setup",
    },
    configuringDevice: {
      src: "/assets/images/aerot/patrick_configuring_device.png",
      alt: "Patrick configuring an AeroT device in the field",
    },
    configuringDeviceTwo: {
      src: "/assets/images/aerot/patrick_configuring_device_%232.png",
      alt: "Patrick adjusting an AeroT device during setup",
    },
    fieldTesting: {
      src: "/assets/images/aerot/patrick_field_testing.png",
      alt: "Patrick field testing AeroT equipment at 29 Palms",
    },
    militaryTalkingUser: {
      src: "/assets/images/aerot/patrick_military_talking_user.png",
      alt: "Patrick discussing AeroT feedback with a Marine in the field",
    },
    wholeTeam: {
      src: "/assets/images/aerot/the_whole_team.png",
      alt: "The AeroT field validation team",
    },
  },
  hero: {
    number: "01",
    title: "AeroT",
    subtitle: "All-Domain Electromagnetic Radio Operator Trainer Tool",
    description:
      "A COTS-based RF training system that compressed electromagnetic discipline feedback from delayed after-action review into near-real-time terrain-aware instruction.",
    timeline: "December 2024 to MVP delivery",
    team: [
      {
        role: "Senior Software Engineer / Project Lead",
        name: "Patrick Sherlund",
      },
      {
        role: "Thesis Originator / Stakeholder Sponsor",
        name: "Major William Oblak",
      },
    ],
  },
  team: {
    primary: [
      {
        role: "Thesis Originator / Stakeholder Sponsor",
        name: "Major William Oblak",
      },
    ],
    contributors: [
      {
        role: "Software Engineer",
        name: "Greg Gomez",
      },
      {
        role: "Software Engineer",
        name: "Jeremy Huynh",
      },
      {
        role: "Software Engineer",
        name: "Evan Stewart",
      },
      {
        role: "Product Manager",
        name: "Carlos Flores",
      },
    ],
  },
  role: {
    title: "My role",
    paragraphs: [
      "I led AeroT from thesis concept to a field-tested MVP, shaping the product and engineering direction. My scope covered the RF sensing device, instructor interfaces, and the signal modeling and radio messaging that connected the system.",
      "Our team built a system that let instructors show Marines, in near real time, which simulated enemy receivers were likely to detect their transmissions.",
    ],
    stackTitle: "The Stack",
    stack: [
      {
        category: "Device Manager",
        technologies: [
          { name: "C++", icon: "cplusplus" },
          { name: "Python", icon: "python" },
          { name: "SQLite", icon: "sqlite" },
        ],
      },
      {
        category: "Command View",
        technologies: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "C++", icon: null },
          { name: "PostgreSQL", icon: "postgresql" },
        ],
      },
      {
        category: "ATAK plugin",
        technologies: [
          { name: "Java", icon: "java" },
          { name: "Android", icon: "android" },
          { name: "ATAK 5.1", icon: null },
        ],
      },
      {
        category: "Field hardware",
        technologies: [
          { name: "Raspberry Pi 5", icon: "raspberrypi" },
          { name: "RTL-SDR", icon: null },
          { name: "LimeSDR Mini 2.0", icon: null },
          { name: "Digi XBee", icon: null },
        ],
      },
      {
        category: "Messaging",
        technologies: [
          { name: "protobuff", icon: null },
          { name: "WebSocket", icon: null },
          { name: "MQTT", icon: "mqtt" },
          { name: "Mosquitto", icon: "eclipsemosquitto" },
        ],
      },
      {
        category: "RF modeling",
        technologies: [
          { name: "Longley-Rice ITM", icon: null },
          { name: "DTED elevation data", icon: null },
          { name: "OpenCV (heatmaps)", icon: "opencv" },
        ],
      },
    ],
  },
  challengeVision: {
    challengeTitle: "The Challenge",
    challengeParagraphs: [
      <>
        Marine instructors teaching electromagnetic discipline during live training had{" "}
        <strong>no way to show students the tactical consequence of a transmission</strong> while
        the lesson was <strong>still fresh</strong>.
      </>,
      <>
        Feedback often took{" "}
        <strong>up to 48 hours</strong>, so students had already moved on before they understood
        whether their radio activity would have been <strong>detected by an adversary</strong>.
      </>,
    ],
    visionTitle: "The Vision",
    visionText: (
      <>
        Make the invisible electromagnetic battlefield visible in the moment by capturing live RF
        activity, modeling how it carries across terrain, and showing students whether an adversary
        could have seen them before the training moved on.
      </>
    ),
    concepts: [
      {
        id: "layout",
        src: "/assets/images/aerot/vision/aerot-vision-component-layout.webp",
        alt: "AeroT prototype components laid out on a workbench, including radio boards, antennas, GPS, a Raspberry Pi, and a battery mount",
        width: 1200,
        height: 1600,
      },
      {
        id: "enclosure",
        src: "/assets/images/aerot/vision/aerot-vision-printed-enclosure.webp",
        alt: "Handheld AeroT enclosure prototype with a GPS antenna on top and radio connectors along the side",
        width: 1200,
        height: 1600,
      },
      {
        id: "electronics",
        src: "/assets/images/aerot/vision/aerot-vision-electronics-mounting.webp",
        alt: "AeroT electronics mounted on a perforated panel, with a Raspberry Pi, radio boards, and GPS antenna",
        width: 1600,
        height: 1200,
      },
      {
        id: "power",
        src: "/assets/images/aerot/vision/aerot-vision-battery-powered-prototype.webp",
        alt: "AeroT bench prototype powered by a tool battery, with cooling fan, wiring, and radio electronics exposed",
        width: 1600,
        height: 1200,
      },
      {
        id: "assembly",
        src: "/assets/images/aerot/vision/aerot-vision-portable-case-assembly.webp",
        alt: "Portable AeroT hard-case assembly with an external battery and antenna on a workshop bench",
        width: 1200,
        height: 1600,
      },
      {
        id: "field",
        src: "/assets/images/aerot/vision/aerot-vision-open-field-device.webp",
        alt: "Open AeroT field device showing its electronics, battery, GPS lead, and antennas inside a portable hard case",
        width: 1200,
        height: 1600,
      },
    ],
  },
  outcomes: {
    title: "Feedback during the exercise",
    comparison: [
      {
        id: "before",
        label: "Before AeroT",
        value: "48",
        unit: "hours",
        description:
          "Marines waited for an after-action review to understand the risks of their radio use.",
      },
      {
        id: "after",
        label: "After AeroT",
        value: "~5",
        unit: "seconds",
        description:
          "Instructors received signal feedback within seconds of capture and could review it with Marines during the exercise.",
      },
    ],
    photo: {
      src: "/assets/images/aerot/discovery/aerot-discovery-device-on-training-terrain.webp",
      alt: "An AeroT field device on rocky ground with Marines training in the background",
      width: 1200,
      height: 1600,
    },
  },
  discoverLabels: {
    discoverTitle: "01 | Discover",
    discoverSubtitle: "December 2024 to February 2025",
    defineTitle: "02 | Define",
    defineSubtitle: "Frame the thinnest useful training loop",
    developTitle: "03 | Develop",
    developSubtitle: "Iterate hardware, software, RF, and field UX",
    deliverTitle: "04 | Deliver",
    deliverSubtitle: "Validate the MVP in live terrain",
  },
  context: {
    title: "Why this started",
    text: (
      <>
        Major Oblak&apos;s thesis asked whether inexpensive RF hardware could capture live signal
        activity, reconstruct it inside a virtual training environment, and show whether a student
        transmission would likely be detected by adversarial receivers.
      </>
    ),
    researchTitle: "Research with Marine instructors",
    researchSummary:
      "We interviewed stakeholders and tested prototypes to understand the training problem and field constraints.",
    photos: [
      {
        src: "/assets/images/aerot/discovery/aerot-discovery-instructor-device-review.webp",
        alt: "Marines and the AeroT team reviewing a field device and tablet together around a table",
        width: 1200,
        height: 1600,
      },
      {
        src: "/assets/images/aerot/discovery/aerot-discovery-field-command-post.webp",
        alt: "Marines working beside vehicles and radio equipment under camouflage netting at a field command post",
        width: 1600,
        height: 1200,
      },
      {
        src: "/assets/images/aerot/discovery/aerot-discovery-device-on-training-terrain.webp",
        alt: "An AeroT device and antennas on rocky training terrain while Marines move across the hillside",
        width: 1200,
        height: 1600,
      },
      {
        src: "/assets/images/aerot/discovery/aerot-discovery-evening-field-setup.webp",
        alt: "Marines reviewing laptops and radio equipment at an outdoor AeroT setup after sunset",
        width: 1600,
        height: 1200,
      },
      {
        src: "/assets/images/aerot/discovery/aerot-discovery-multi-device-field-setup.webp",
        alt: "Three open AeroT field devices with antennas and exposed electronics on a table in desert terrain",
        width: 1200,
        height: 1600,
      },
    ],
  },
  discoveryInsights: {
    title: "What we learned from instructors",
    image: {
      src: "/assets/images/aerot/instructors/aerot-instructors-field-discussion.webp",
      alt: "Marine instructors talking beside radio equipment on a pickup truck in rocky desert terrain",
      width: 1246,
      height: 832,
    },
    findings: [
      {
        title: "Feedback had to happen during training",
        description:
          "Instructors needed to show Marines whether a simulated enemy receiver could detect their transmission.",
      },
      {
        title: "Internet and power weren't reliable",
        description:
          "AeroT needed its own network, portable power, and offline terrain data. It also had to remain unclassified for instructors and students to use.",
      },
    ],
  },
  problem: {
    title: "What Was Holding Training Back",
    text: (
      <>
        The core problem was <strong>feedback latency</strong>. Instructors could teach EM discipline,
        but they could not reliably show a student, within the same training moment, that a
        transmission would likely have been seen by an adversarial receiver.
      </>
    ),
  },
  successMetrics: [
    {
      label: "Feedback",
      value: "~5 sec",
      description: "from signal capture to instructor-visible analysis",
      icon: "zap",
    },
    {
      label: "Scale",
      value: "10 devices",
      description: "connected during final field validation",
      icon: "cpu",
    },
    {
      label: "Range",
      value: "~10 miles",
      description: "of 29 Palms terrain during validation",
      icon: "trending-up",
    },
    {
      label: "Access",
      value: "ATAK + Web",
      description: "field and command-node analysis surfaces",
      icon: "clock",
    },
  ],
  architecture: {
    title: "The MVP became a three-part system",
    text: (
      <>
        We split the product by operational boundary: a field device that collected RF activity, a
        Command View that configured devices and ran command-node analysis, and an ATAK workflow
        backed by MobileService for instructors standing in the field.
      </>
    ),
    surfaces: [
      {
        title: "AeroT Field Device",
        eyebrow: "Collect",
        text: "Raspberry Pi 5, SDRs, GPS, health telemetry, local persistence, XBee transport, and hotspot support.",
        visual:
          "Photo placeholder: final field device open in its Pelican-style case with antennas, battery, Raspberry Pi, SDRs, XBee, and GPS visible.",
        imageKey: "configuringDevice",
      },
      {
        title: "Command View",
        eyebrow: "Analyze",
        text: "React and MapLibre command-node app receiving devices, health, captures, heatmaps, receiver links, and event timeline.",
        visual:
          "Screenshot placeholder: Command View map with AeroT devices, simulated enemy receivers, heatmap overlay, and event timeline.",
        imageKey: "configuringDeviceTwo",
      },
      {
        title: "ATAK + MobileService",
        eyebrow: "Teach",
        text: "ATAK-native plugin backed by on-device APIs so field instructors could view analysis without moving heatmaps over low-bandwidth radio.",
        visual:
          "Field photo placeholder: instructor holding ATAK with signal heatmap and receiver links while standing near deployed AeroT devices.",
        imageKey: "militaryTalkingUser",
      },
    ],
  },
  process: {
    title: "The training loop we built toward",
    steps: [
      {
        id: 1,
        label: "Configure devices",
        icon: "settings",
        startTime: 0,
        endTime: 5,
      },
      {
        id: 2,
        label: "Capture RF activity",
        icon: "radio",
        startTime: 5,
        endTime: 10,
      },
      {
        id: 3,
        label: "Model terrain",
        icon: "map",
        startTime: 10,
        endTime: 16,
      },
      {
        id: 4,
        label: "Brief students",
        icon: "send",
        startTime: 16,
        endTime: 22,
      },
    ],
  },
  proved: {
    title: "What we proved",
    hypothesis:
      "We believed off-the-shelf RF hardware could help instructors show students whether a simulated enemy receiver was likely to detect their transmission, while training was still happening.",
    evidence: (
      <>
        At 29 Palms, we connected <strong>ten devices</strong> across <strong>roughly ten miles</strong>{" "}
        and delivered feedback within <strong>about five seconds</strong> of capture. Instructors could
        walk over to students and show them which simulated enemy receivers were likely to detect
        their transmission.
      </>
    ),
  },
  decisions: {
    title: "Engineering decisions",
    items: [
      {
        title: "Keeping heatmaps off the radio network",
        text: "The radio network could carry compact signal events, but heatmaps would consume too much bandwidth. We moved the analysis onto the device with MobileService and served ATAK over its Wi-Fi hotspot. That kept radio messages small, while instructors connected locally for the detailed view.",
      },
      {
        title: "Making transmit power an instructor input",
        text: "A passive receiver couldn't reliably tell us the original transmitter's power without calibration beyond the MVP's scope. We made transmit power an instructor input. Instructors could model likely detection against the terrain, with results tied to the power they configured.",
      },
    ],
  },
  iterations: [
    {
      title: "Iteration 1",
      subtitle: "Prove the device and Command View slice",
      text: "Narrowband RTL-SDR collection, early LillyGo LoRa transport, baseline collection, GPS, telemetry, command configuration, and a first map-centered instructor UI.",
    },
    {
      title: "Iteration 2",
      subtitle: "Stabilize power and expand wideband",
      text: "A better tested step-down converter reduced random USB failures, KL divergence improved detection behavior, LimeSDR Mini 2.0 added wideband collection, and the white case improved thermal handling.",
    },
    {
      title: "Iteration 3",
      subtitle: "Debug self-interference, GPS, and transport",
      text: "Testing showed the device could deny its own GPS. We tested emissions, tried EM tape, externalized GPS, and moved transport toward Digi XBee.",
    },
    {
      title: "Iteration 4",
      subtitle: "Harden MVP, add ATAK, validate in the field",
      text: "The final phase added probability-based detection, MobileService, ATAK heatmaps and receiver links, Pelican-style hardware, and validation with ten devices across roughly ten miles.",
    },
  ],
  delivery: {
    title: "Final system in the field",
    text: (
      <>
        The final validation connected <strong>ten AeroT devices</strong> across roughly{" "}
        <strong>ten miles</strong> of 29 Palms terrain with ATAK clients in instructors&apos; hands and
        Command View running at the command node. Signal feedback arrived within about{" "}
        <strong>five seconds</strong> of capture.
      </>
    ),
    visual:
      "Hero field photo placeholder: wide 29 Palms deployment scene with AeroT devices, antennas, command-node setup, and instructor field activity.",
    imageKey: "fieldTesting",
  },
  learnings: {
    title: "Key Learnings",
    cards: [
      {
        title: "Hardware failures become software symptoms",
        text: "Power regulation, airflow, USB behavior, antenna placement, and enclosure choices directly affected collection reliability.",
        icon: "cpu",
      },
      {
        title: "Bandwidth changes architecture",
        text: "Compact signal messages could move over XBee, but ATAK heatmaps needed local Wi-Fi and on-device analysis.",
        icon: "radio",
      },
      {
        title: "Modeling must stay honest",
        text: "Configured transmit power kept the product truthful about what a passive receiver can and cannot infer.",
        icon: "map",
      },
    ],
  },
  reflection: {
    title: "Reflection",
    paragraphs: [
      "AeroT succeeded because we kept the architecture modular, the message contracts explicit, and the product goal narrow enough to validate in the field.",
      "The work was not just writing services. It was keeping a hardware, software, RF, geospatial, and training system coherent while every constraint was moving.",
      "The smallest field-validatable behavior became the whole point: detect a relevant signal, model adversary detectability against terrain, and show the instructor fast enough to change the student's behavior.",
    ],
  },
};
