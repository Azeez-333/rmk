import React from 'react';
import { METRICS } from '../constants/data';

export default function Metrics() {
  return (
    <section className="w-full bg-surface-black py-space-2xl px-margin-mobile lg:px-margin border-b border-border-subtle">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-gutter">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="p-space-lg bg-surface-charcoal border border-border-subtle hover:border-primary-container transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5"
          >
            <div className="flex items-baseline justify-between mb-space-sm">
              <span className="font-metric-num text-metric-num text-pure-white flex items-baseline">
                {metric.value}
                <span
                  className={`${metric.color} ${
                    metric.isTextSuffix ? 'text-headline-md font-bold' : ''
                  }`}
                >
                  {metric.suffix}
                </span>
              </span>
              <span className={`font-label-uppercase text-label-uppercase ${metric.color}`}>
                {metric.code}
              </span>
            </div>
            <p className="font-label-uppercase text-label-uppercase text-text-muted uppercase tracking-widest group-hover:text-pure-white transition-colors">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
