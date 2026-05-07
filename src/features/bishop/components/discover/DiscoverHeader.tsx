type DiscoverHeaderProps = {
  headerRef: React.RefObject<HTMLDivElement | null>;
  isHeaderSticky: boolean;
  showCentered: boolean;
  currentSection: "discover" | "define";
  discoverTitle: string;
  discoverSubtitle: string;
  defineTitle: string;
  defineSubtitle: string;
};

export function DiscoverHeader({
  headerRef,
  isHeaderSticky,
  showCentered,
  currentSection,
  discoverTitle,
  discoverSubtitle,
  defineTitle,
  defineSubtitle,
}: DiscoverHeaderProps) {
  return (
    <div
      ref={headerRef}
      className={`bishop-discover-header ${isHeaderSticky ? "sticky" : ""} ${showCentered ? "centered" : ""}`}
    >
      <div className="bishop-discover-header-content">
        <h2 className="bishop-discover-title">
          {currentSection === "discover" ? discoverTitle : defineTitle}
        </h2>
        <p className="bishop-discover-subtitle">
          {currentSection === "discover" ? discoverSubtitle : defineSubtitle}
        </p>
      </div>
    </div>
  );
}
