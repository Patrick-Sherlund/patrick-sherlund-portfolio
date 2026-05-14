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
        category: "Device",
        name: "C++, Raspberry Pi, SoapySDR, RTL-SDR, LimeSDR",
        icon: "cpu",
      },
      {
        category: "Transport",
        name: "Python, Digi XBee, protobuf, WebSocket, MQTT",
        icon: "radio",
      },
      {
        category: "Command",
        name: "React, TypeScript, MapLibre, Drogon, PostgreSQL",
        icon: "map",
      },
      {
        category: "Field",
        name: "Java, ATAK 5.1, MobileService, Room, OkHttp",
        icon: "tablet",
      },
      {
        category: "Modeling",
        name: "Longley-Rice ITM, DTED terrain, OpenCV heatmaps",
        icon: "activity",
      },
      {
        category: "Workflow",
        name: "Agile discovery, field testing, hardware iteration",
        icon: "git",
      },
    ],
  },
  challengeVision: {
    challengeTitle: "The Challenge",
    challengeText: (
      <>
        Instructors teaching <strong>electromagnetic discipline</strong> could not give students
        actionable feedback fast enough. Feedback could take <strong>up to 48 hours</strong>, so the
        consequence of a transmission arrived after the training moment had already passed.
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
    title: "What discovery made clear",
    cards: [
      {
        title: "Stay unclassified",
        text: (
          <>
            The product needed to train broadly, not become a classified intelligence platform with
            limited access.
          </>
        ),
      },
      {
        title: "Bring the network",
        text: (
          <>
            Training environments could not guarantee internet, cellular service, hardwired
            networking, or stable power.
          </>
        ),
      },
      {
        title: "Keep it instructor-simple",
        text: (
          <>
            The interface had to work during live instruction, not as a lab workflow after the event.
          </>
        ),
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
    videoDirection:
      "Screen recording placeholder: Command View or ATAK flow from device configuration through signal event, heatmap, receiver links, and timeline inspection.",
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
    cards: [
      {
        top: "COTS RF hardware could become a field acquisition node",
        bottom: "DeviceManager coordinated SDRs, GPS, health, storage, and transport",
      },
      {
        top: "Raw signal detections could become training consequences",
        bottom: "Longley-Rice terrain analysis produced heatmaps and receiver links",
      },
      {
        top: "A low-bandwidth network could still support rich field feedback",
        bottom: "Compact messages moved over XBee while MobileService served heavy ATAK artifacts locally",
      },
    ],
  },
  decisions: {
    title: "Key product and engineering decisions",
    groups: [
      {
        label: "01 | Feedback latency",
        cards: [
          "Optimize the MVP around shortening the training feedback loop, not around building a general RF analysis platform.",
          "Keep the first useful slice visible to instructors: device location, signal event, terrain effect, receiver detectability.",
          "Tie every analysis result back to the student action that created the training moment.",
        ],
      },
      {
        label: "02 | Field architecture",
        cards: [
          "Use C++ where SDR control, signal processing, and RF modeling needed predictable behavior.",
          "Use Python where vendor hardware APIs and service composition made the fastest reliable path.",
          "Split Command View and ATAK so command-node and field-instructor workflows could both work in disconnected conditions.",
        ],
      },
      {
        label: "03 | Honest modeling",
        cards: [
          "Make transmit power an explicit instructor input instead of pretending a passive receiver could infer the original transmitter power.",
          "Run terrain-aware Longley-Rice analysis against DTED because training terrain, ridgelines, and distance mattered.",
          "Move heavy ATAK heatmap artifacts onto the device hotspot instead of pushing them over low-bandwidth radio transport.",
        ],
      },
    ],
  },
  iterations: {
    title: "Four iteration cycles, one moving system",
    intro:
      "Each cycle forced hardware, software, RF behavior, and field UX to evolve together. A chassis change could affect thermal behavior. A power converter could look like a software bug. GPS could fail because the device was interfering with itself.",
    cards: [
      {
        title: "Iteration 1",
        subtitle: "Prove the device and Command View slice",
        text: "Narrowband RTL-SDR collection, early LillyGo LoRa transport, baseline collection, GPS, telemetry, command configuration, and a first map-centered instructor UI.",
        visual:
          "Carousel placeholder: first 3D-printed chassis, ventilation holes, mounted fans, early wiring, RTL-SDR setup, and first Command View map screen.",
      },
      {
        title: "Iteration 2",
        subtitle: "Stabilize power and expand wideband",
        text: "A better tested step-down converter reduced random USB failures, KL divergence improved detection behavior, LimeSDR Mini 2.0 added wideband collection, and the white case improved thermal handling.",
        visual:
          "Carousel placeholder: white storm trooper case, improved internal layout, power converter close-up, LimeSDR wideband setup, field bench photos.",
      },
      {
        title: "Iteration 3",
        subtitle: "Debug self-interference, GPS, and transport",
        text: "Testing showed the device could deny its own GPS. We tested emissions, tried EM tape, externalized GPS, and moved transport toward Digi XBee.",
        visual:
          "Carousel placeholder: GPS antenna tests, frequency probe kit, EM tape experiment, XBee module wiring, outdoor transport validation.",
        imageKey: "antennaMast",
      },
      {
        title: "Iteration 4",
        subtitle: "Harden MVP, add ATAK, validate in the field",
        text: "The final phase added probability-based detection, MobileService, ATAK heatmaps and receiver links, Pelican-style hardware, and validation with ten devices across roughly ten miles.",
        visual:
          "Carousel placeholder: final Pelican-style case, ATAK screen in hand, Command View at command node, 29 Palms field deployment, ten-device setup.",
      },
    ],
  },
  lifecycle: {
    title: "From RF energy to instructor feedback",
    steps: [
      "Operator configures frequencies, wideband ranges, and modeled transmit power.",
      "DeviceManager assigns SDRs, samples IQ data, computes PSD, and checks the calibrated baseline.",
      "The detector emits paired START and END signal captures after consecutive anomalous or normal observations.",
      "LoRaDriver sends compact protobuf messages over Digi XBee.",
      "Command View deconflicts events, runs terrain-aware analysis, and visualizes heatmaps plus receiver links.",
      "MobileService can run the same analysis locally for ATAK clients over the AeroT hotspot.",
    ],
    visual:
      "Diagram placeholder: signal event lifecycle from Command View configuration to DeviceManager, SDR capture, XBee transport, Longley-Rice analysis, Command View timeline, and ATAK heatmap.",
  },
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
