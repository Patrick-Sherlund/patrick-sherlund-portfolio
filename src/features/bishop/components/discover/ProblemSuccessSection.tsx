import { CircleAlert, Clock, Cpu, TrendingUp, Zap } from "lucide-react";
import { useRef } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce";

type ProblemSuccessSectionProps = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  defineStartRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
  problemTitle: string;
  problemText: React.ReactNode;
  successTitle: string;
  metrics: {
    label: string;
    value: string;
    description: string;
    icon: string;
  }[];
};

function getMetricIcon(icon: string) {
  if (icon === "zap") {
    return <Zap className="bishop-metric-icon" size={16} />;
  }

  if (icon === "trending-up") {
    return <TrendingUp className="bishop-metric-icon" size={16} />;
  }

  if (icon === "clock") {
    return <Clock className="bishop-metric-icon" size={16} />;
  }

  return <Cpu className="bishop-metric-icon" size={16} />;
}

export function ProblemSuccessSection({
  wrapperRef,
  defineStartRef,
  isInteractive,
  isMobilePinned,
  progress,
  problemTitle,
  problemText,
  successTitle,
  metrics,
}: ProblemSuccessSectionProps) {
  const successPanelRef = useRef<HTMLDivElement>(null);
  const normalSuccessVisible = useInViewOnce(successPanelRef, !isInteractive);

  return (
    <div className={`bishop-problem-success-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={wrapperRef}>
      <div className="bishop-problem-success-content" ref={defineStartRef}>
        <div
          className="bishop-problem-fade-panel"
          style={isInteractive ? { opacity: 1 - progress } : undefined}
        >
          <div className="bishop-problem-content">
            <div className="bishop-problem-header">
              <div className="bishop-problem-icon">
                <CircleAlert size={28} />
              </div>
              <h2 className="bishop-problem-title">{problemTitle}</h2>
            </div>

            <p className="bishop-problem-text">{problemText}</p>
          </div>
        </div>

        <div
          ref={successPanelRef}
          className="bishop-success-panel"
          style={isInteractive ? { opacity: progress } : undefined}
        >
          <h2 className="bishop-success-main-title">{successTitle}</h2>
          <div className={`bishop-success-metrics ${!isInteractive && normalSuccessVisible ? "normal-bubble-visible" : ""}`}>
            {metrics.map((metric) => (
              <div className="bishop-metric-card" key={metric.label}>
                <div className="bishop-metric-icon-wrapper">{getMetricIcon(metric.icon)}</div>
                <div className="bishop-metric-label">{metric.label}</div>
                <div className="bishop-metric-value">{metric.value}</div>
                <div className="bishop-metric-description">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
