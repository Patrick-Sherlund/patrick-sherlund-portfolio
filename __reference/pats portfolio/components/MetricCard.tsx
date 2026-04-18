import { useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface MetricCardProps {
  number: string;
  label: string;
  subtitle: string;
  measurement: string;
  delay?: number;
}

export function MetricCard({ number, label, subtitle, measurement, delay = 0 }: MetricCardProps) {
  return (
    <div
      className="group p-8 bg-white/80 border border-[rgba(17,17,17,0.2)] rounded-[20px] shadow-soft bubble-up transition-all duration-300 hover:shadow-lg hover:border-[rgba(17,17,17,0.25)]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="space-y-6">
        <div>
          <div className="text-5xl lg:text-6xl mb-2">{number}</div>
          <h3 className="text-[#111111]">{label}</h3>
          <p className="text-sm text-[#4b5563]">{subtitle}</p>
        </div>

        <div className="pt-4 border-t border-[rgba(17,17,17,0.08)]">
          <small className="text-[#4b5563]/70 leading-relaxed block">{measurement}</small>
        </div>
      </div>
    </div>
  );
}