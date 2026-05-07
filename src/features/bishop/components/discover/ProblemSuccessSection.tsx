import { Clock, Cpu, FileText, TrendingUp, Zap } from "lucide-react";

type ProblemSuccessSectionProps = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  defineStartRef: React.RefObject<HTMLDivElement | null>;
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
  progress,
  problemTitle,
  problemText,
  successTitle,
  metrics,
}: ProblemSuccessSectionProps) {
  return (
    <div className="bishop-problem-success-wrapper" ref={wrapperRef}>
      <div className="bishop-problem-success-content" ref={defineStartRef}>
        <div className="bishop-problem-fade-panel" style={{ opacity: 1 - progress }}>
          <div className="bishop-problem-content">
            <div className="bishop-problem-header">
              <div className="bishop-problem-icon">
                <FileText size={28} />
              </div>
              <h2 className="bishop-problem-title">{problemTitle}</h2>
            </div>

            <p className="bishop-problem-text">{problemText}</p>
          </div>
        </div>

        <div className="bishop-success-panel" style={{ opacity: progress }}>
          <h2 className="bishop-success-main-title">{successTitle}</h2>
          <div className="bishop-success-metrics">
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
