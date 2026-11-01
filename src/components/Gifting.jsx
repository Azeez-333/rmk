import React, { useState } from 'react';
import { GIFTING_TIERS } from '../constants/data';

export default function Gifting({ onSelectTier }) {
  const [selectedTierDetail, setSelectedTierDetail] = useState(null);

  return (
    <section
      id="gifting"
      className="w-full bg-gradient-to-b from-[#181510] via-surface-black to-surface-black py-space-3xl px-margin-mobile lg:px-margin border-b border-border-subtle scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-space-2xl">
          <span className="inline-block px-space-sm py-1 bg-secondary-container/30 border border-gold-badge/40 text-gold-badge font-label-uppercase text-label-uppercase tracking-widest uppercase mb-space-sm">
            GIFTING BY RMK
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white uppercase tracking-tight">
            CORPORATE GIFTS, <br />
            <span className="text-secondary">YOUR BRAND EVERYWHERE.</span>
          </h2>
          <p className="font-body-md text-body-md text-text-muted mt-space-sm max-w-xl mx-auto">
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
                className={`p-space-lg flex flex-col justify-between relative group transition-all duration-300 ${
                  isPopular
                    ? 'bg-surface-card border-2 border-gold-badge shadow-lg shadow-secondary/10'
                    : 'bg-surface-charcoal border border-border-subtle hover:border-gold-badge'
                }`}
              >
                {/* Floating Tags */}
                {isPopular && (
                  <div className="absolute -top-3 right-6 bg-gold-badge text-surface-black font-label-uppercase text-label-uppercase px-space-sm py-1 font-extrabold uppercase tracking-widest shadow-md">
                    {tier.tag}
                  </div>
                )}
                {tier.tag && !isPopular && (
                  <div className="absolute -top-3 right-6 bg-surface-card border border-border-strong text-pure-white font-label-uppercase text-label-uppercase px-space-sm py-1 uppercase tracking-widest">
                    {tier.tag}
                  </div>
                )}

                <div>
                  <div
                    className={`relative w-full h-52 overflow-hidden mb-space-md border ${
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
                    className={`font-label-uppercase text-label-uppercase uppercase mb-1 ${
                      isPopular ? 'text-gold-badge' : 'text-text-muted'
                    }`}
                  >
                    {tier.badge}
                  </div>
                  <h3 className="font-headline-md text-headline-md text-pure-white uppercase mb-space-xs">
                    {tier.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-text-muted mb-space-md">
                    {tier.description}
                  </p>

                  {/* Included features pill preview */}
                  <div className="space-y-1 mb-4">
                    {tier.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-xs text-text-muted">
                        <span className="w-1 h-1 bg-gold-badge"></span>
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-space-md border-t border-border-subtle flex items-baseline justify-between">
                  <div>
                    <span
                      className={`font-headline-md text-headline-md ${
                        isPopular ? 'text-gold-badge' : 'text-pure-white'
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span className="font-body-sm text-body-sm text-text-muted">{tier.unit}</span>
                  </div>
                  <button
                    onClick={() => onSelectTier(tier)}
                    className={`font-label-uppercase text-label-uppercase hover:underline cursor-pointer ${
                      isPopular ? 'text-gold-badge' : 'text-text-muted'
                    }`}
                  >
                    {tier.minUnits} →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onSelectTier(GIFTING_TIERS[1])}
          className="inline-flex items-center justify-center px-space-2xl py-space-md bg-gold-badge text-surface-black font-button-text text-button-text uppercase tracking-widest font-bold hover:bg-pure-white transition-colors duration-100 shadow-md cursor-pointer active:scale-95"
        >
          EXPLORE ALL GIFT SETS →
        </button>
      </div>
    </section>
  );
}
