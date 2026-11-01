import React from 'react';

export default function CaseStudyModal({ caseStudy, onClose, onStartProjectForStudy }) {
  if (!caseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-surface-charcoal border-2 border-border-strong rounded-3xl p-6 md:p-8 my-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-text-muted hover:text-pure-white border border-border-strong hover:border-primary-container hover:bg-surface-card transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 font-label-uppercase text-xs text-primary-container tracking-widest uppercase mb-1 px-3 py-1 rounded-full bg-surface-card border border-border-strong">
            <span>{caseStudy.number}</span>
            <span>//</span>
            <span>{caseStudy.sector}</span>
          </div>
          <h2 className="font-headline-lg text-2xl md:text-3xl text-pure-white uppercase mt-1">
            {caseStudy.title}
          </h2>
          <p className="font-body-md text-sm text-text-muted mt-1">{caseStudy.category}</p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-2xl border border-border-strong mb-6">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Case Study Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-surface-black border border-border-subtle mb-6">
          <div>
            <span className="font-label-uppercase text-[11px] text-text-muted uppercase block">
              Client
            </span>
            <span className="font-body-sm text-sm text-pure-white font-semibold">
              {caseStudy.client}
            </span>
          </div>
          <div>
            <span className="font-label-uppercase text-[11px] text-text-muted uppercase block">
              Turnaround
            </span>
            <span className="font-body-sm text-sm text-secondary font-semibold">
              {caseStudy.turnaround}
            </span>
          </div>
          <div>
            <span className="font-label-uppercase text-[11px] text-text-muted uppercase block">
              Volume
            </span>
            <span className="font-body-sm text-sm text-primary-container font-semibold">
              {caseStudy.volume}
            </span>
          </div>
          <div>
            <span className="font-label-uppercase text-[11px] text-text-muted uppercase block">
              Quality Grade
            </span>
            <span className="font-body-sm text-sm text-pure-white font-semibold">
              2400 DPI Atelier
            </span>
          </div>
        </div>

        {/* Description & Specs */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-label-uppercase text-xs text-text-muted uppercase mb-1">
              Production Execution &amp; Engineering
            </h4>
            <p className="font-body-sm text-sm text-pure-white leading-relaxed">
              {caseStudy.details}
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-surface-card border-l-2 border-primary-container">
            <span className="font-label-uppercase text-[11px] text-primary-container uppercase block mb-0.5">
              Material &amp; Finishing Stack
            </span>
            <p className="text-xs text-text-muted">{caseStudy.specs}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border-subtle">
          <span className="text-xs text-text-muted font-label-uppercase">
            PHYSICAL DIE-LINE SAMPLES AVAILABLE ON REQUEST
          </span>
          <button
            onClick={() => {
              onClose();
              onStartProjectForStudy(caseStudy.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary-container text-pure-white font-button-text uppercase tracking-widest text-xs transition-all duration-300 ease-out hover:translate-x-1.5 hover:bg-pure-white hover:text-surface-black shadow-lg shadow-primary-container/20 cursor-pointer group"
          >
            <span>ORDER SIMILAR RUN</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
