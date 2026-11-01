import React from 'react';
import { CAPABILITIES } from '../constants/data';

export default function WhatWeDo({ onSelectCapability }) {
  return (
    <section
      id="what-we-do"
      className="w-full bg-surface-black py-space-3xl px-margin-mobile lg:px-margin border-b border-border-subtle scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl gap-space-md">
          <div>
            <span className="font-label-uppercase text-label-uppercase tracking-widest text-primary-container uppercase">
              CORE CAPABILITIES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white uppercase tracking-tight mt-1">
              WHAT WE DO
            </h2>
          </div>
          <p className="font-body-md text-body-md text-text-muted max-w-md">
            Industrial machinery combined with haute-couture packaging execution across five core product formats.
          </p>
        </div>

        {/* 5 Vertical Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
          {CAPABILITIES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCapability && onSelectCapability(item)}
              className="relative h-[420px] bg-surface-charcoal border border-border-subtle overflow-hidden group hover:border-primary-container transition-all duration-300 flex flex-col justify-end p-space-md cursor-pointer"
            >
              {/* Background Photography with Gradient */}
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-75"
                  alt={item.title}
                  src={item.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-black via-surface-black/60 to-transparent"></div>
              </div>

              {/* Content overlay */}
              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-8 h-8 bg-surface-black/80 border border-border-strong flex items-center justify-center text-pure-white mb-space-sm group-hover:border-primary-container group-hover:text-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-[18px] text-pure-white uppercase mb-1">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-text-muted group-hover:text-pure-white/90 transition-colors">
                  {item.description}
                </p>
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity font-label-uppercase text-xs text-primary-container flex items-center gap-1">
                  <span>DISCOVER FORMAT</span>
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

