"use client";

import { useRef, useEffect, useState } from "react";
import { bishopAssets, pageAssets } from "@/lib/assetPaths";
import svgPaths from "@/lib/svg-r3w32ldrgh";
import {
  FileText,
  Zap,
  TrendingUp,
  Clock,
  Cpu,
  Plus,
  Upload,
  Eye,
  Send,
} from "lucide-react";

const carouselImages = [
  {
    src: "/assets/videos/Bishop User Session 2.mp4",
    className: "carousel-img-1",
    isVideo: true,
  },
  {
    src: "/assets/videos/figma board.mp4",
    className: "carousel-img-2",
    isVideo: true,
  },
  {
    src: "/assets/videos/Bishop User Session.mp4",
    className: "carousel-img-3",
    isVideo: true,
  },
  {
    src: "/assets/videos/FigJam Board.mp4",
    className: "carousel-img-4",
    isVideo: true,
  },
];

const personaCarouselImages = [
  {
    src: bishopAssets.personas[0],
    className: "carousel-img-1",
    isVideo: false,
  },
  {
    src: bishopAssets.personas[1],
    className: "carousel-img-2",
    isVideo: false,
  },
  {
    src: bishopAssets.personas[2],
    className: "carousel-img-3",
    isVideo: false,
  },
];

export function BishopDiscover() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contextResearchRef = useRef<HTMLDivElement>(null);
  const personaLearnedRef = useRef<HTMLDivElement>(null);
  const defineStartRef = useRef<HTMLDivElement>(null);
  const problemSuccessRef = useRef<HTMLDivElement>(null);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showCentered, setShowCentered] = useState(false);
  const [currentSection, setCurrentSection] = useState<
    "discover" | "define"
  >("discover");
  const previousSectionRef = useRef<"discover" | "define">(
    "discover",
  );
  const [contextResearchProgress, setContextResearchProgress] =
    useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [personaLearnedProgress, setPersonaLearnedProgress] =
    useState(0);
  const [learnedContentVisible, setLearnedContentVisible] =
    useState(false);
  const [problemSuccessProgress, setProblemSuccessProgress] =
    useState(0);
  const [successCardsVisible, setSuccessCardsVisible] =
    useState(false);
  const processVideoRef = useRef<HTMLVideoElement>(null);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [isPersonaHovering, setIsPersonaHovering] =
    useState(false);
  const proposedProvedRef = useRef<HTMLDivElement>(null);
  const [proposedProvedProgress, setProposedProvedProgress] =
    useState(0);
  const [hoveredCarouselVideo, setHoveredCarouselVideo] = useState<number | null>(null);
  const carouselVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const processSteps = [
    {
      id: 1,
      label: "Create Project",
      icon: <Plus size={24} />,
      startTime: 0,
      endTime: 6,
    },
    {
      id: 2,
      label: "Upload Video",
      icon: <Upload size={24} />,
      startTime: 6,
      endTime: 10,
    },
    {
      id: 3,
      label: "Review Results",
      icon: <Eye size={24} />,
      startTime: 10,
      endTime: 37,
    },
    {
      id: 4,
      label: "Share with Team",
      icon: <Send size={24} />,
      startTime: 37,
      endTime: 86,
    },
  ];

  const getTranslateX = (el: HTMLElement) => {
    const t = window.getComputedStyle(el).transform;
    if (!t || t === "none") return 0;

    // matrix(a, b, c, d, tx, ty)
    const m2 = t.match(/^matrix\((.+)\)$/);
    if (m2) {
      const parts = m2[1]
        .split(",")
        .map((p) => parseFloat(p.trim()));
      return parts[4] || 0;
    }

    // matrix3d(..., tx, ty, tz) -> tx is index 12
    const m3 = t.match(/^matrix3d\((.+)\)$/);
    if (m3) {
      const parts = m3[1]
        .split(",")
        .map((p) => parseFloat(p.trim()));
      return parts[12] || 0;
    }

    return 0;
  };

  const computeCenterShift = () => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const contentEl = headerEl.querySelector(
      ".bishop-discover-header-content",
    ) as HTMLDivElement | null;
    if (!contentEl) return;

    const headerRect = headerEl.getBoundingClientRect();
    const contentRect = contentEl.getBoundingClientRect();

    const headerStyles = window.getComputedStyle(headerEl);
    const padL = parseFloat(headerStyles.paddingLeft) || 0;
    const padR = parseFloat(headerStyles.paddingRight) || 0;

    // Center within the header's padded content area
    const usableWidth = headerRect.width - padL - padR;
    const desiredLeft =
      headerRect.left +
      padL +
      (usableWidth - contentRect.width) / 2;

    // ✅ Baseline left = where the content would be with transform: translateX(0)
    const currentTx = getTranslateX(contentEl);
    const baselineLeft = contentRect.left - currentTx;

    const shift = desiredLeft - baselineLeft;

    headerEl.style.setProperty(
      "--discover-center-shift",
      `${shift}px`,
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !headerRef.current) return;

      const sectionRect =
        sectionRef.current.getBoundingClientRect();
      const headerHeight = headerRef.current.offsetHeight;

      // Header becomes sticky when section reaches top of viewport
      const shouldBeSticky =
        sectionRect.top <= 0 &&
        sectionRect.bottom > headerHeight;

      if (shouldBeSticky && !isHeaderSticky) {
        setIsHeaderSticky(true);

        // Delay the centering animation slightly to allow sticky transition first
        setTimeout(() => {
          computeCenterShift(); // <-- compute exact center shift
          setShowCentered(true);
        }, 50);
      } else if (!shouldBeSticky && isHeaderSticky) {
        setShowCentered(false);
        setIsHeaderSticky(false);
        headerRef.current.style.removeProperty(
          "--discover-center-shift",
        ); // <-- reset
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [isHeaderSticky]);

  // Keep centering accurate on resize while sticky
  useEffect(() => {
    if (!isHeaderSticky) return;

    const onResize = () => {
      computeCenterShift();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isHeaderSticky, showCentered]);

  // Recompute center shift when switching between Discover and Define
  // Recompute center shift when switching between Discover and Define
  useEffect(() => {
    if (!isHeaderSticky || !showCentered) return;

    // Only recalculate if section actually changed
    if (previousSectionRef.current === currentSection) return;
    previousSectionRef.current = currentSection;

    // Use double RAF to ensure DOM has fully updated with new text
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        computeCenterShift();
      });
    });
  }, [currentSection, isHeaderSticky, showCentered]);

  // Handle Context → Research crossfade
  useEffect(() => {
    const handleContextScroll = () => {
      if (!contextResearchRef.current) return;

      const rect =
        contextResearchRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ✅ NEW: require some scrolling before the fade begins
      const hold = Math.min(450, viewportHeight * 0.45); // "dead zone" before transition starts
      const transitionDistance = viewportHeight; // how long the fade takes after hold
      const total = hold + transitionDistance;

      // Only drive progress while the sticky section is in its first "total" scroll range
      if (rect.top <= 0 && rect.top > -total) {
        const scrollDistance = Math.abs(rect.top);

        // ✅ NEW: progress stays 0 until you've scrolled past the hold
        const afterHold = Math.max(scrollDistance - hold, 0);
        const newProgress = Math.min(
          Math.max(afterHold / transitionDistance, 0),
          1,
        );

        setContextResearchProgress(newProgress);

        if (newProgress > 0.5) setCarouselVisible(true);
        else setCarouselVisible(false);
      } else if (rect.top > 0) {
        setContextResearchProgress(0);
        setCarouselVisible(false);
      } else if (rect.top <= -total) {
        setContextResearchProgress(1);
        setCarouselVisible(true);
      }
    };

    window.addEventListener("scroll", handleContextScroll, {
      passive: true,
    });
    handleContextScroll();

    return () =>
      window.removeEventListener("scroll", handleContextScroll);
  }, []);

  // Handle Persona Section Visibility
  useEffect(() => {
    if (!personaLearnedRef.current) return;

    const handleLearnedScroll = () => {
      if (!personaLearnedRef.current) return;

      const rect =
        personaLearnedRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ✅ NEW: require some scrolling before the fade begins
      const hold = Math.min(450, viewportHeight * 0.45); // "dead zone" before transition starts
      const transitionDistance = viewportHeight; // how long the fade takes after hold
      const total = hold + transitionDistance;

      // Only drive progress while the sticky section is in its first "total" scroll range
      if (rect.top <= 0 && rect.top > -total) {
        const scrollDistance = Math.abs(rect.top);

        // ✅ NEW: progress stays 0 until you've scrolled past the hold
        const afterHold = Math.max(scrollDistance - hold, 0);
        const newProgress = Math.min(
          Math.max(afterHold / transitionDistance, 0),
          1,
        );

        setPersonaLearnedProgress(newProgress);

        if (newProgress > 0.5) setLearnedContentVisible(true);
        else setLearnedContentVisible(false);
      } else if (rect.top > 0) {
        setPersonaLearnedProgress(0);
        setLearnedContentVisible(false);
      } else if (rect.top <= -total) {
        setPersonaLearnedProgress(1);
        setLearnedContentVisible(true);
      }
    };

    window.addEventListener("scroll", handleLearnedScroll, {
      passive: true,
    });
    handleLearnedScroll();

    return () =>
      window.removeEventListener("scroll", handleLearnedScroll);
  }, []);

  // Handle Problem → Success crossfade
  useEffect(() => {
    const handleProblemScroll = () => {
      if (!problemSuccessRef.current) return;

      const rect =
        problemSuccessRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ✅ NEW: require some scrolling before the fade begins
      const hold = Math.min(450, viewportHeight * 0.45); // "dead zone" before transition starts
      const transitionDistance = viewportHeight; // how long the fade takes after hold
      const total = hold + transitionDistance;

      // Only drive progress while the sticky section is in its first "total" scroll range
      if (rect.top <= 0 && rect.top > -total) {
        const scrollDistance = Math.abs(rect.top);

        // ✅ NEW: progress stays 0 until you've scrolled past the hold
        const afterHold = Math.max(scrollDistance - hold, 0);
        const newProgress = Math.min(
          Math.max(afterHold / transitionDistance, 0),
          1,
        );

        setProblemSuccessProgress(newProgress);
      } else if (rect.top > 0) {
        setProblemSuccessProgress(0);
      } else if (rect.top <= -total) {
        setProblemSuccessProgress(1);
      }
    };

    window.addEventListener("scroll", handleProblemScroll, {
      passive: true,
    });
    handleProblemScroll();

    return () =>
      window.removeEventListener("scroll", handleProblemScroll);
  }, []);

  // Handle Proposed → Proved crossfade
  useEffect(() => {
    const handleProposedProvedScroll = () => {
      if (!proposedProvedRef.current) return;

      const rect =
        proposedProvedRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ✅ NEW: require some scrolling before the fade begins
      const hold = Math.min(450, viewportHeight * 0.45); // "dead zone" before transition starts
      const transitionDistance = viewportHeight; // how long the fade takes after hold
      const total = hold + transitionDistance;

      // Only drive progress while the sticky section is in its first "total" scroll range
      if (rect.top <= 0 && rect.top > -total) {
        const scrollDistance = Math.abs(rect.top);

        // ✅ NEW: progress stays 0 until you've scrolled past the hold
        const afterHold = Math.max(scrollDistance - hold, 0);
        const newProgress = Math.min(
          Math.max(afterHold / transitionDistance, 0),
          1,
        );

        setProposedProvedProgress(newProgress);
      } else if (rect.top > 0) {
        setProposedProvedProgress(0);
      } else if (rect.top <= -total) {
        setProposedProvedProgress(1);
      }
    };

    window.addEventListener(
      "scroll",
      handleProposedProvedScroll,
      {
        passive: true,
      },
    );
    handleProposedProvedScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleProposedProvedScroll,
      );
  }, []);

  // Track when Define section becomes active
  useEffect(() => {
    const handleDefineScroll = () => {
      if (!defineStartRef.current) return;

      const defineRect =
        defineStartRef.current.getBoundingClientRect();

      // Switch to Define when it reaches the top
      if (defineRect.top <= 100) {
        setCurrentSection("define");
      } else {
        setCurrentSection("discover");
      }
    };

    window.addEventListener("scroll", handleDefineScroll, {
      passive: true,
    });
    handleDefineScroll();

    return () =>
      window.removeEventListener("scroll", handleDefineScroll);
  }, []);

  // Handle video time updates for process steps
  useEffect(() => {
    const video = processVideoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      // Find which step should be active based on current time
      const step = processSteps.find(
        (s) =>
          currentTime >= s.startTime && currentTime < s.endTime,
      );

      if (step) {
        setActiveStep(step.id);

        // Calculate progress within this step (0 to 1)
        const stepDuration = step.endTime - step.startTime;
        const timeIntoStep = currentTime - step.startTime;
        const progress = Math.min(
          Math.max(timeIntoStep / stepDuration, 0),
          1,
        );
        setStepProgress(progress);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // Handle clicking on a step to jump to that timestamp
  const handleStepClick = (stepId: number) => {
    const video = processVideoRef.current;
    if (!video) return;

    const step = processSteps.find((s) => s.id === stepId);
    if (step) {
      video.currentTime = step.startTime;
      setActiveStep(stepId);
    }
  };

  // Handle carousel video hover - pause other videos when one is hovered
  useEffect(() => {
    if (hoveredCarouselVideo === null) {
      // No video is hovered, resume all videos
      carouselVideoRefs.current.forEach((video) => {
        if (video) {
          video.play().catch(() => {
            // Ignore play errors (e.g., if video hasn't loaded yet)
          });
        }
      });
    } else {
      // A video is hovered, pause all OTHER videos
      carouselVideoRefs.current.forEach((video, index) => {
        if (video && index !== hoveredCarouselVideo) {
          video.pause();
        }
      });
    }
  }, [hoveredCarouselVideo]);

  return (
    <section className="bishop-discover" ref={sectionRef}>
      {/* Sticky Header */}
      <div
        ref={headerRef}
        className={`bishop-discover-header ${isHeaderSticky ? "sticky" : ""} ${showCentered ? "centered" : ""}`}
      >
        <div className="bishop-discover-header-content">
          <h2 className="bishop-discover-title">
            {currentSection === "discover"
              ? "01 | Discover"
              : "02 | Define"}
          </h2>
          <p className="bishop-discover-subtitle">
            {currentSection === "discover"
              ? "Understand the context, painpoints, and user insights"
              : "Frame the MVP"}
          </p>
        </div>
      </div>

      {/* Context Research Section */}
      <div
        className="bishop-context-research-wrapper"
        ref={contextResearchRef}
      >
        <div className="bishop-context-research-content">
          {/* Context Panel (Why this started text) */}
          <div
            className="bishop-context-panel"
            style={{ opacity: 1 - contextResearchProgress }}
          >
            <h3 className="bishop-context-title-text">
              Why this started
            </h3>
            <p className="bishop-context-text">
              We started this after the{" "}
              <strong>2024 Southeast Coastal hurricanes</strong>
              , when SAR teams{" "}
              <strong>struggled to find survivors</strong>{" "}
              quickly across flooded zones.
            </p>
          </div>

          {/* User Research Panel */}
          <div
            className="bishop-research-panel"
            style={{ opacity: contextResearchProgress }}
          >
            <h2 className="bishop-research-title">
              Discovery interviews & workshops
            </h2>
          </div>

          {/* Infinite Carousel */}
          {carouselVisible && (
            <div className="bishop-carousel-container">
              <div className="bishop-carousel-track">
                {/* Render images twice for seamless loop */}
                {[
                  ...carouselImages,
                  ...carouselImages,
                  ...carouselImages,
                ].map((img, index) => (
                  <div
                    key={index}
                    className={`bishop-carousel-image ${img.className}`}
                  >
                    {img.isVideo ? (
                      <video
                        ref={(el) => {
                          if (el) {
                            carouselVideoRefs.current[index] = el;
                          }
                        }}
                        src={img.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        onMouseEnter={() => setHoveredCarouselVideo(index)}
                        onMouseLeave={() => setHoveredCarouselVideo(null)}
                      />
                    ) : (
                      <img src={img.src} alt="" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Persona Mapping → What We Learned Section */}
      <div
        className="bishop-persona-learned-wrapper"
        ref={personaLearnedRef}
      >
        <div className="bishop-persona-learned-content">
          {/* Persona Mapping Panel */}
          <div
            className="bishop-persona-panel"
            style={{ opacity: 1 - personaLearnedProgress }}
          >
            <h2 className="bishop-persona-section-title">
              Persona Mapping
            </h2>

            {/* Persona Carousel */}
            <div className="bishop-persona-carousel-wrapper">
              <div
                className={`bishop-persona-carousel-track ${isPersonaHovering ? "paused" : ""}`}
              >
                {/* 4x duplication for seamless loop */}
                {[
                  ...personaCarouselImages,
                  ...personaCarouselImages,
                  ...personaCarouselImages,
                  ...personaCarouselImages,
                ].map((persona, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <img
                      key={`persona-${index}`}
                      src={persona.src}
                      alt={`Persona ${(index % personaCarouselImages.length) + 1}`}
                      className={`bishop-persona-carousel-card ${isEven ? "offset-top" : "offset-bottom"}`}
                      onMouseEnter={() =>
                        setIsPersonaHovering(true)
                      }
                      onMouseLeave={() =>
                        setIsPersonaHovering(false)
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* What We Learned Panel */}
          <div
            className="bishop-learned-main-panel"
            style={{ opacity: personaLearnedProgress }}
          >
            <h2 className="bishop-learned-title">
              What We Learned
            </h2>

            {learnedContentVisible && (
              <div className="bishop-learned-cards">
                {/* Card 1: Simplicity is Key */}
                <div className="bishop-learned-card">
                  <svg
                    className="bishop-learned-icon"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 58.5896 58.5896"
                  >
                    <path
                      d={svgPaths.p2eb51780}
                      stroke="#191F3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.88247"
                    />
                    <path
                      d={svgPaths.p3653f0c0}
                      stroke="#191F3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.88247"
                    />
                  </svg>
                  <h3 className="bishop-learned-card-title">
                    Simplicity is Key
                  </h3>
                  <p className="bishop-learned-card-text">
                    Operators need clear ways to{" "}
                    <strong>link each detection</strong> to{" "}
                    <strong>time stamps</strong>
                  </p>
                </div>

                {/* Card 2: Time is Crucial */}
                <div className="bishop-learned-card">
                  <svg
                    className="bishop-learned-icon"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 55.1055 55.1055"
                  >
                    <path
                      d={svgPaths.p24af0f80}
                      stroke="#191F3C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4.59212"
                    />
                  </svg>
                  <h3 className="bishop-learned-card-title">
                    Time is Crucial
                  </h3>
                  <p className="bishop-learned-card-text">
                    Data needs to be{" "}
                    <strong>quickly delivered</strong> and{" "}
                    <strong>easy to understand</strong>
                  </p>
                </div>

                {/* Card 3: Operators Irreplaceable */}
                <div className="bishop-learned-card">
                  <svg
                    className="bishop-learned-icon"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 43.875 43.875"
                  >
                    <g clipPath="url(#clip0_175_67)">
                      <path
                        d={svgPaths.p2bce9480}
                        stroke="#191F3C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3.05217"
                      />
                      <path
                        d={svgPaths.p3c0a0b00}
                        stroke="#191F3C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3.05217"
                      />
                      <path
                        d={svgPaths.p7f4d600}
                        stroke="#191F3C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3.05217"
                      />
                      <path
                        d="M42.8941 40.8939L39 37"
                        stroke="#191F3C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3.05217"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_175_67">
                        <rect
                          fill="white"
                          height="43.875"
                          width="43.875"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <h3 className="bishop-learned-card-title">
                    Operators Irreplaceable
                  </h3>
                  <p className="bishop-learned-card-text">
                    The <strong>human element</strong> is key.
                    No software can replace the{" "}
                    <strong>Operators</strong>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* The Reality Today Section */}
      <div className="bishop-reality-section">
        <div className="bishop-reality-content">
          <div className="bishop-reality-header">
            <div className="bishop-reality-icon">😔</div>
            <h2 className="bishop-reality-title">
              The Reality Today
            </h2>
          </div>
          <p className="bishop-reality-text">
            In SAR, the first <strong>~72 hours</strong> are the
            most critical, but{" "}
            <strong>manual video review</strong> is{" "}
            <strong>fatiguing and error prone</strong>, and even reviewed footage can hide{" "}
            <strong>missed detections</strong>. Bishop runs a{" "}
            <strong>rapid second pass</strong> to surface missed human leads faster.
          </p>
        </div>
      </div>

      {/* Problem → Success crossfade */}
      <div
        className="bishop-problem-success-wrapper"
        ref={problemSuccessRef}
      >
        <div
          className="bishop-problem-success-content"
          ref={defineStartRef}
        >
          {/* Problem Panel (fades out) */}
          <div
            className="bishop-problem-fade-panel"
            style={{ opacity: 1 - problemSuccessProgress }}
          >
            <div className="bishop-problem-content">
              <div className="bishop-problem-header">
                <div className="bishop-problem-icon">
                  <FileText size={28} />
                </div>
                <h2 className="bishop-problem-title">
                  What's Holding Teams Back
                </h2>
              </div>

              <p className="bishop-problem-text">
                In SAR operations, responders have{" "}
                <strong>~72 hours</strong> to find subjects, but{" "}
                <strong>manual video review</strong> creates{" "}
                <strong>cognitive fatigue</strong> that
                increases <strong>missed detections</strong> and
                delays time-to-discovery.
              </p>
            </div>
          </div>

          {/* Success Panel (fades in) */}
          <div
            className="bishop-success-panel"
            style={{ opacity: problemSuccessProgress }}
          >
            <h2 className="bishop-success-main-title">
              What Success Looks Like
            </h2>

            <div className="bishop-success-metrics">
              {/* Metric 1: Speed */}
              <div className="bishop-metric-card">
                <div className="bishop-metric-icon-wrapper">
                  <Zap
                    className="bishop-metric-icon"
                    size={16}
                  />
                </div>
                <div className="bishop-metric-label">SPEED</div>
                <div className="bishop-metric-value">
                  Hours to Minutes
                </div>
                <div className="bishop-metric-description">
                  quicker detection
                </div>
              </div>

              {/* Metric 2: Accuracy */}
              <div className="bishop-metric-card">
                <div className="bishop-metric-icon-wrapper">
                  <TrendingUp
                    className="bishop-metric-icon"
                    size={16}
                  />
                </div>
                <div className="bishop-metric-label">
                  ACCURACY
                </div>
                <div className="bishop-metric-value">90%+</div>
                <div className="bishop-metric-description">
                  detection rate
                </div>
              </div>

              {/* Metric 3: Training */}
              <div className="bishop-metric-card">
                <div className="bishop-metric-icon-wrapper">
                  <Clock
                    className="bishop-metric-icon"
                    size={16}
                  />
                </div>
                <div className="bishop-metric-label">
                  TRAINING
                </div>
                <div className="bishop-metric-value">
                  &lt;15 min
                </div>
                <div className="bishop-metric-description">
                  to get started
                </div>
              </div>

              {/* Metric 4: Hardware */}
              <div className="bishop-metric-card">
                <div className="bishop-metric-icon-wrapper">
                  <Cpu
                    className="bishop-metric-icon"
                    size={16}
                  />
                </div>
                <div className="bishop-metric-label">
                  HARDWARE
                </div>
                <div className="bishop-metric-value">
                  Real-time
                </div>
                <div className="bishop-metric-description">
                  on standard CPU
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Proposed Process Section */}

      {/* Proposed → Proved crossfade */}
      <div
        className="bishop-proposed-proved-wrapper"
        ref={proposedProvedRef}
      >
        <div className="bishop-proposed-proved-content">
          {/* Proposed Process Panel (fades out) */}
          <div
            className="bishop-proposed-fade-panel"
            style={{ opacity: 1 - proposedProvedProgress }}
          >
            <div className="bishop-proposed-process">
              <div
                className="bishop-proposed-content"
                style={{ transform: "translateY(60px)" }}
              >
                <h2 className="bishop-proposed-title">
                  Our proposed process
                </h2>

                <div
                  className="bishop-proposed-layout"
                  style={{ transform: "translateY(-30px)" }}
                >
                  {/* Left Side: State Tracker */}
                  <div className="bishop-process-tracker">
                    {processSteps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`bishop-process-step ${
                          activeStep === step.id ? "active" : ""
                        } ${activeStep > step.id ? "completed" : ""}`}
                        onClick={() => handleStepClick(step.id)}
                      >
                        <div className="bishop-step-icon-wrapper">
                          <div className="bishop-step-icon">
                            {step.icon}
                          </div>
                          {index < processSteps.length - 1 && (
                            <div
                              className={`bishop-step-connector ${
                                activeStep > step.id
                                  ? "filled"
                                  : ""
                              } ${activeStep === step.id ? "active" : ""}`}
                              style={
                                {
                                  "--progress":
                                    activeStep === step.id
                                      ? stepProgress
                                      : activeStep > step.id
                                        ? 1
                                        : 0,
                                } as React.CSSProperties
                              }
                            />
                          )}
                        </div>
                        <div className="bishop-step-label">
                          {step.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Side: Video */}
                  <div className="bishop-process-video-container">
                    <div className="bishop-process-ipad-screen">
                      <video
                        ref={processVideoRef}
                        className="bishop-process-video"
                        src="/assets/videos/bishop_demo_slowed.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                    <img
                      src={pageAssets.devices.ipad}
                      alt="iPad frame"
                      className="bishop-process-ipad-frame"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We Proved Panel (fades in) */}
          <div
            className="bishop-proved-panel"
            style={{ 
              opacity: proposedProvedProgress,
              pointerEvents: proposedProvedProgress > 0.5 ? 'auto' : 'none'
            }}
          >
            <h2 className="bishop-proved-main-title">
              What we proved
            </h2>

            <div className="bishop-proved-cards">
              {/* Card 1: Accuracy */}
              <div className="bishop-proved-card">
                <div className="bishop-proved-card-top">
                  Validate aerial person-detection accuracy
                </div>
                <div className="bishop-proved-arrow">↓</div>
                <div className="bishop-proved-card-bottom">
                  We saw 94% Recall on footage
                </div>
              </div>

              {/* Card 2: Throughput */}
              <div className="bishop-proved-card">
                <div className="bishop-proved-card-top">
                  Benchmark CPU-only video processing throughput
                </div>
                <div className="bishop-proved-arrow">↓</div>
                <div className="bishop-proved-card-bottom">
                  We processed 3,700 frames per minute
                </div>
              </div>

              {/* Card 3: Playback */}
              <div className="bishop-proved-card">
                <div className="bishop-proved-card-top">
                  Prove smooth playback of annotated timelines
                </div>
                <div className="bishop-proved-arrow">↓</div>
                <div className="bishop-proved-card-bottom">
                  Roughly 60 FPS during video playback
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
