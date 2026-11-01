import React from 'react';
import { SHOWCASE_STUDIES } from '../constants/data';

export default function Showcase({ onSelectCaseStudy }) {
  const [feature1, feature2, feature3] = SHOWCASE_STUDIES;

  return (
    <section
      id="showcase"
      className="w-full bg-surface-black py-space-3xl px-margin-mobile lg:px-margin border-b border-border-subtle scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs font-label-uppercase text-label-uppercase text-primary-container tracking-widest uppercase mb-1">
              <span className="w-2 h-2 bg-primary-container inline-block"></span>
              SELECTED WORK
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white uppercase tracking-tight">
              BRANDS WE <span className="text-primary-container">PACK</span> FOR.
            </h2>
            <p className="font-body-md text-body-md text-text-muted mt-2">
              A snapshot of recent runs: luxury rigid boxes, full-bleed cartons, and finishes you can feel.
            </p>
          </div>
          <div className="font-label-uppercase text-label-uppercase text-text-muted">
            <span className="text-primary-container font-black">10</span> / CASE STUDIES
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Feature 1: Tech & Gadgets - EDGE */}
          {feature1 && (
            <div
              onClick={() => onSelectCaseStudy(feature1)}
              className="lg:col-span-6 bg-surface-charcoal border border-border-subtle p-space-md flex flex-col justify-between hover:border-primary-container transition-colors group cursor-pointer"
            >
              <div className="relative w-full h-[380px] overflow-hidden border border-border-strong mb-space-md">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={feature1.title}
                  src={feature1.image}
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-surface-black/90 px-2 py-1 text-pure-white font-label-uppercase text-label-uppercase border border-border-subtle backdrop-blur-sm">
                  {feature1.number} // {feature1.sector}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className={`font-label-uppercase text-label-uppercase ${feature1.color} uppercase block`}>
                    {feature1.category}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-pure-white uppercase">
                    {feature1.title}
                  </h3>
                </div>
                <span className="material-symbols-outlined text-text-muted group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  arrow_outward
                </span>
              </div>
            </div>
          )}

          {/* Right Side: Top & Bottom Cards */}
          <div className="lg:col-span-6 flex flex-col gap-gutter">
            {/* Feature 2: Artisan Tea & Confections - The Packtale Co. */}
            {feature2 && (
              <div
                onClick={() => onSelectCaseStudy(feature2)}
                className="bg-surface-charcoal border border-border-subtle p-space-md hover:border-primary-container transition-colors group cursor-pointer"
              >
                <div className="relative w-full h-44 overflow-hidden border border-border-strong mb-space-md">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={feature2.title}
                    src={feature2.image}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-surface-black/90 px-2 py-1 text-pure-white font-label-uppercase text-label-uppercase border border-border-subtle backdrop-blur-sm">
                    {feature2.number} // {feature2.sector}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`font-label-uppercase text-label-uppercase ${feature2.color} uppercase block`}>
                      {feature2.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-[20px] text-pure-white uppercase">
                      {feature2.title}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-text-muted group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    arrow_outward
                  </span>
                </div>
              </div>
            )}

            {/* Feature 3: Multi-Brand Collage Gallery */}
            {feature3 && (
              <div
                onClick={() => onSelectCaseStudy(feature3)}
                className="bg-surface-charcoal border border-border-subtle p-space-md hover:border-primary-container transition-colors group cursor-pointer"
              >
                <div className="relative w-full h-44 overflow-hidden border border-border-strong mb-space-md">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={feature3.title}
                    src={feature3.image}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-surface-black/90 px-2 py-1 text-pure-white font-label-uppercase text-label-uppercase border border-border-subtle backdrop-blur-sm">
                    {feature3.number} // {feature3.sector}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`font-label-uppercase text-label-uppercase ${feature3.color} uppercase block`}>
                      {feature3.category}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-[20px] text-pure-white uppercase">
                      {feature3.title}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-text-muted group-hover:text-primary-container group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                    arrow_outward
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
