import React from 'react';
import { GIFTING_TIERS } from '../constants/data';

export default function Gifting({ onSelectTier }) {
  return (
    <section
      id="gifting"
      className="w-full bg-gradient-to-b from-[#181510] via-surface-black to-surface-black py-space-3xl px-margin-mobile lg:px-margin border-b border-border-subtle scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-space-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/30 border border-gold-badge/40 text-gold-badge font-label-uppercase text-xs tracking-widest uppercase mb-space-sm">
            GIFTING BY RMK
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white uppercase tracking-tight">
            CORPORATE GIFTS, <br />
            <span className="text-secondary">YOUR BRAND EVERYWHERE.</span>
          </h2>
          <p className="font-body-md text-sm sm:text-base text-text-muted mt-space-sm max-w-xl mx-auto">
            Curated gift sets with your logo on every item inside — boxes, labels, ribbon, notecards.
            Six tiers, starting from 25 units.
          </p>
        </div>

        {/* 3 Luxury Gifting Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter w-full mb-space-2xl">
          {GIFTING_TIERS.map((tier) => {
            const isPopular = tier.isPopular;
            return (
              <div
                key={tier.id}
                className={`p-space-lg rounded-2xl flex flex-col justify-between relative group transition-all duration-300 ${
                  isPopular
                    ? 'bg-surface-card border-2 border-gold-badge shadow-xl shadow-secondary/10'
                    : 'bg-surface-charcoal border border-border-subtle hover:border-gold-badge'
                }`}
              >
                {/* Floating Tags */}
                {isPopular && (
                  <div className="absolute -top-3 right-6 bg-gold-badge text-surface-black font-label-uppercase text-[11px] px-3 py-1 rounded-full font-extrabold uppercase tracking-widest shadow-md">
                    {tier.tag}
                  </div>
                )}
                {tier.tag && !isPopular && (
                  <div className="absolute -top-3 right-6 bg-surface-card border border-border-strong text-pure-white font-label-uppercase text-[11px] px-3 py-1 rounded-full uppercase tracking-widest">
                    {tier.tag}
                  </div>
                )}

                <div>
                  <div
                    className={`relative w-full h-52 rounded-xl overflow-hidden mb-space-md border ${
                      isPopular ? 'border-gold-badge/40' : 'border-border-strong'
                    }`}
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={tier.title}
                      src={tier.image}
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`font-label-uppercase text-xs uppercase mb-1 ${
                      isPopular ? 'text-gold-badge' : 'text-text-muted'
                    }`}
                  >
                    {tier.badge}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-pure-white uppercase mb-space-xs">
                    {tier.title}
                  </h3>
                  <p className="font-body-sm text-sm text-text-muted mb-space-md">
                    {tier.description}
                  </p>

                  {/* Included features preview */}
                  <div className="space-y-1.5 mb-4">
                    {tier.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-badge shrink-0"></span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-space-md border-t border-border-subtle flex items-center justify-between">
                  <div>
                    <span
                      className={`font-headline-md text-headline-md ${
                        isPopular ? 'text-gold-badge' : 'text-pure-white'
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="font-body-sm text-xs text-text-muted">{tier.unit}</span>
                  </div>
                  <button
                    onClick={() => onSelectTier(tier)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border-strong bg-surface-black/60 text-xs font-semibold uppercase tracking-wider text-pure-white hover:bg-gold-badge hover:text-black hover:border-gold-badge transition-all duration-300 ease-out hover:translate-x-1.5 cursor-pointer shadow-sm"
                  >
                    <span>{tier.minUnits}</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button with Rounded Radius & Left-to-Right Hover Animation */}
        <button
          onClick={() => onSelectTier(GIFTING_TIERS[1])}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold-badge text-surface-black font-button-text text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ease-out hover:translate-x-2 hover:bg-pure-white hover:text-surface-black shadow-lg shadow-gold-badge/20 cursor-pointer active:scale-95 group"
        >
          <span>EXPLORE ALL GIFT SETS</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </section>
  );
}
