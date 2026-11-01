import React from 'react';
import { TRUSTED_BRANDS } from '../constants/data';

export default function TrustedBy() {
  return (
    <section className="w-full bg-surface-charcoal border-y border-border-subtle py-space-lg px-margin-mobile lg:px-margin">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-lg">
        <div className="font-label-uppercase text-label-uppercase tracking-widest text-text-muted whitespace-nowrap uppercase">
          TRUSTED BY MARKET LEADERS
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-space-xl w-full md:w-auto opacity-75 hover:opacity-100 transition-opacity">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 font-headline-md text-headline-md text-pure-white tracking-widest font-black uppercase group cursor-default"
            >
              <span
                className={`material-symbols-outlined text-[26px] ${brand.color} group-hover:scale-110 transition-transform`}
              >
                {brand.icon}
              </span>
              <span className="group-hover:text-pure-white transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

