import { GitBranch, TrendingUp, Zap } from "lucide-react";

const learningCards = [
  {
    icon: TrendingUp,
    title: "Speeds beats Perfection",
    text: (
      <>
        Operators valued <strong>fast, "good enough"</strong> detections over <strong>slower</strong>, marginally more <strong>accurate</strong> ones
      </>
    ),
  },
  {
    icon: Zap,
    title: "Transparency builds trust",
    text: (
      <>
        Showing <strong>ML</strong> confidence scores helped <strong>operators</strong> calibrate <strong>trust</strong> and make <strong>better decisions</strong>
      </>
    ),
  },
  {
    icon: GitBranch,
    title: "Resilience in the field",
    text: (
      <>
        <strong>Offline</strong> capability and a <strong>simple</strong> UI is critical for use in remote environments
      </>
    ),
  },
];

export function KeyLearningsSection() {
  return (
    <section className="bishop-key-learnings-section">
      <div className="bishop-key-learnings-content">
        <h2 className="bishop-key-learnings-title">Key Learnings</h2>
        <div className="bishop-key-learnings-grid">
          {learningCards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="bishop-key-learning-card" key={card.title}>
                <Icon className="bishop-key-learning-icon" aria-hidden="true" strokeWidth={2} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
