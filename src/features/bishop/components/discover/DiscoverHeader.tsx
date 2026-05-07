type DiscoverHeaderProps = {
  headerRef: React.RefObject<HTMLDivElement | null>;
  isHeaderSticky: boolean;
  showCentered: boolean;
  currentSection: "discover" | "define";
  onSectionSelect: (section: "discover" | "define") => void;
  discoverTitle: string;
  discoverSubtitle: string;
  defineTitle: string;
  defineSubtitle: string;
};

const headerSections = [
  {
    id: "discover",
    titleKey: "discoverTitle",
    subtitleKey: "discoverSubtitle",
  },
  {
    id: "define",
    titleKey: "defineTitle",
    subtitleKey: "defineSubtitle",
  },
] as const;

export function DiscoverHeader({
  headerRef,
  isHeaderSticky,
  showCentered,
  currentSection,
  onSectionSelect,
  discoverTitle,
  discoverSubtitle,
  defineTitle,
  defineSubtitle,
}: DiscoverHeaderProps) {
  const labels = {
    discoverTitle,
    discoverSubtitle,
    defineTitle,
    defineSubtitle,
  };
  const currentIndex = headerSections.findIndex((section) => section.id === currentSection);

  return (
    <div
      ref={headerRef}
      className={`bishop-discover-header ${isHeaderSticky ? "sticky" : ""} ${showCentered ? "centered" : ""}`}
    >
      {isHeaderSticky ? (
        <div className="bishop-discover-header-nav" aria-label="Case study sections">
          {headerSections.map((section, index) => {
            const position = index - currentIndex;
            const positionClass =
              position === 0 ? "active" : position === -1 ? "previous" : position === 1 ? "next" : "hidden";

            return (
              <button
                key={section.id}
                type="button"
                className={`bishop-discover-header-nav-item ${positionClass}`}
                aria-current={position === 0 ? "step" : undefined}
                onClick={() => onSectionSelect(section.id)}
              >
                <span className="bishop-discover-nav-title">{labels[section.titleKey]}</span>
                <span className="bishop-discover-nav-subtitle">{labels[section.subtitleKey]}</span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="bishop-discover-header-content">
          <h2 className="bishop-discover-title">
            {currentSection === "discover" ? discoverTitle : defineTitle}
          </h2>
          <p className="bishop-discover-subtitle">
            {currentSection === "discover" ? discoverSubtitle : defineSubtitle}
          </p>
        </div>
      )}
    </div>
  );
}
