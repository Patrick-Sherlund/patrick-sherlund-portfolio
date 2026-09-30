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
    text: (
      <>
        I led AeroT from thesis concept to field-tested MVP, shaping the product and engineering
        direction across the RF sensing device, instructor map interface, low-bandwidth radio
        messaging, terrain-based signal modeling, ATAK field integration, and live validation. Our
        work turned an open-ended research idea into a usable training system that helped instructors
        show Marines, in near real time, whether their transmissions could be detected by simulated
        adversarial receivers.
      </>
    ),
    stackTitle: "The Stack",
    stack: [
      {
        category: "Device Manager",
        name: "C++, Python, Raspberry Pi, SoapySDR, RTL-SDR, LimeSDR",
        icon: "cpu",
        icons: ["cplusplus", "raspberrypi", "python"],
      },
      {
        category: "Command View",
        name: "React, TypeScript, MapLibre, Drogon, PostgreSQL",
        icon: "map",
        icons: ["react", "typescript", "postgresql"],
      },
      {
        category: "ATAK Client",
        name: "Java, ATAK 5.1, MobileService, Room",
        icon: "tablet",
        icons: ["openjdk", "android", "tak_logo.png"],
      },
      {
        category: "Transport",
        name: "Digi XBee, protobuf, WebSocket, MQTT",
        icon: "radio",
        icons: ["mqtt"],
      },
      {
        category: "Modeling",
        name: "Longley-Rice ITM, DTED terrain, OpenCV",
        icon: "activity",
        icons: ["opencv"],
      },
      {
        category: "Workflow",
        name: "Agile",
        icon: "git",
        icons: ["github", "git"],
      },
    ],
  },
  challengeVision: {
    challengeTitle: "The Challenge",
    challengeText: (
      <>
        Marine instructors teaching electromagnetic discipline during live training had{" "}
        <strong>no way to show students the tactical consequence of a transmission</strong> while
        the lesson was <strong>still fresh</strong>. Feedback often took{" "}
        <strong>up to 48 hours</strong>, so students had already moved on before they understood
        whether their radio activity would have been <strong>detected by an adversary</strong>.
      </>
    ),
    visionTitle: "The Vision",
    visionText: (
      <>
        Make the invisible electromagnetic battlefield visible in the moment by capturing live RF
        activity, modeling how it carries across terrain, and showing students whether an adversary
        could have seen them before the training moved on.
      </>
    ),
    bubbles: [
      "Unclassified training system",
      "COTS RF hardware",
      "Self-contained network",
      "Terrain-aware RF modeling",
      "Command View plus ATAK",
    ],
  },
  outcomes: {
    title: "The MVP proved...",
    stats: [
      {
        value: "48 hrs -> ~5 sec",
        label: "Feedback loop compressed from delayed review to live instruction",
      },
      {
        value: "10 devices",
        label: "Connected during final field validation",
      },
      {
        value: "~10 miles",
        label: "Validated across hot, sandy, mountainous 29 Palms terrain",
      },
    ],
  },
  discoverLabels: {
    discoverTitle: "01 | Discover",
    discoverSubtitle: "Thesis concept, users, and field constraints",
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
    researchTitle: "Discovery needed field truth, not lab optimism",
    imageDirections: [
      "Concept visual: NPS thesis-to-product sketch showing RF capture, virtual terrain, and simulated adversarial receivers.",
      "Field photo: 29 Palms discovery or exercise planning environment with instructors and training terrain context.",
      "Diagram: delayed feedback loop showing up to 48 hours before students received useful EM-discipline feedback.",
      "Field photo: hot, sandy, mountainous terrain where devices, power, radio transport, and GPS had to work.",
    ],
  },
  discoveryInsights: {
    title: "What we learned from instructors",
    finding: (
      <>
        From December through February, I led discovery with training units from 29 Palms. Those
        conversations narrowed AeroT to one interaction: helping an instructor show a Marine{" "}
        <strong>whether a simulated enemy receiver could detect their transmission.</strong>
      </>
    ),
    implication:
      "We used that interaction to scope the MVP. The tool needed to stay unclassified so instructors and students could use it, and work in training areas without reliable internet or power. That meant bringing our own network and power, with terrain data available offline.",
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
