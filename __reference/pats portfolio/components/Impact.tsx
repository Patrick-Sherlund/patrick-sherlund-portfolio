import { MetricCard } from './MetricCard';

export function Impact() {
  const metrics = [
    {
      number: '3,700×',
      label: 'Faster human detection',
      subtitle: 'vs manual scanning',
      measurement: 'Measured by comparing AI detection rate (3,700 frames/min) against single-operator manual review baseline (1 frame/min sustained attention)'
    },
    {
      number: '[FILL] 92%',
      label: 'Time-to-first-find reduction',
      subtitle: 'in simulated scenarios',
      measurement: '[FILL] Average time from mission start to first person detected, comparing Bishop-assisted vs traditional grid search methods across 50 simulated missions'
    },
    {
      number: '[FILL] 480hrs',
      label: 'Review hours saved',
      subtitle: 'per major mission',
      measurement: '[FILL] Estimated operator time saved by automated detection flagging vs frame-by-frame manual review for typical 8-hour drone mission'
    },
    {
      number: '[FILL] 12',
      label: 'Operators supported',
      subtitle: 'across 3 SAR teams',
      measurement: '[FILL] Number of certified SAR drone operators trained and actively using Bishop in field deployments during beta period'
    }
  ];

  return (
    <section id="impact-section" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-2 py-16 lg:py-24 border-t border-[rgba(17,17,17,0.1)]">
      <div className="mb-12">
        <h2>Impact</h2>
        <p className="text-[#4b5563] mt-2">Measurable outcomes from MVP deployment</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            {...metric}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}