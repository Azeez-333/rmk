import React from 'react';
import { TRUSTED_BRANDS } from '../constants/data';

export default function TrustedBy() {
  return (
    <section className="w-full bg-surface-charcoal border-y border-border-subtle py-4 sm:py-space-lg px-4 sm:px-margin-mobile lg:px-margin">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-space-lg">
        <div className="font-label-uppercase text-[11px] sm:text-label-uppercase tracking-widest text-text-muted whitespace-nowrap uppercase">
          TRUSTED BY MARKET LEADERS
        </div>

        {/* Brand Logos - Guaranteed to fit on all mobile screen widths without clipping */}
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-2.5 sm:gap-6 lg:gap-space-xl w-full md:w-auto opacity-80 hover:opacity-100 transition-opacity">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="w-full sm:w-auto px-2 py-2 sm:p-0 rounded-xl bg-surface-card/40 sm:bg-transparent border border-border-subtle/40 sm:border-transparent flex items-center justify-center gap-1.5 sm:gap-2 font-headline-md text-xs sm:text-base md:text-xl text-pure-white tracking-wider sm:tracking-widest font-black uppercase group cursor-default"
            >
              <span
                className={`material-symbols-outlined text-[18px] sm:text-[22px] md:text-[26px] ${brand.color} group-hover:scale-110 transition-transform shrink-0`}
              >
                {brand.icon}
              </span>
              <span className="group-hover:text-pure-white transition-colors truncate">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
