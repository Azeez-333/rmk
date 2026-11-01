import React from 'react';
import { METRICS } from '../constants/data';

export default function Metrics() {
  return (
    <section className="w-full bg-surface-black py-space-2xl px-margin-mobile lg:px-margin border-b border-border-subtle">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-space-lg rounded-2xl bg-surface-charcoal border border-border-subtle hover:border-primary-container transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-md hover:shadow-primary-container/5"
          >
            <div className="flex items-baseline justify-between mb-space-sm gap-1">
              <span className="font-metric-num text-3xl sm:text-4xl lg:text-metric-num text-pure-white flex items-baseline tracking-tight">
                {metric.value}
                <span
                  className={`${metric.color} ${
                    metric.isTextSuffix ? 'text-lg sm:text-headline-md font-bold' : ''
                  }`}
                >
                  {metric.suffix}
                </span>
              </span>
              <span className={`font-label-uppercase text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-surface-black border border-border-subtle ${metric.color} shrink-0`}>
                {metric.code}
              </span>
            </div>
            <p className="font-label-uppercase text-[10px] sm:text-xs text-text-muted uppercase tracking-widest group-hover:text-pure-white transition-colors">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
