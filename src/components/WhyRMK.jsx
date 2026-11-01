import React from 'react';
import { WHY_CHOOSE_US } from '../constants/data';

export default function WhyRMK() {
  const { featured, subFeatures } = WHY_CHOOSE_US;

  return (
    <section id="why-rmk" className="w-full bg-surface-black py-space-3xl px-margin-mobile lg:px-margin border-b border-border-subtle scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-space-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-card border border-border-strong text-primary-container font-label-uppercase text-xs tracking-widest uppercase mb-space-sm">
            {WHY_CHOOSE_US.badge}
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white uppercase tracking-tight">
            WHY <span className="text-primary-container">RMK</span> OVER TRADITIONAL BRANDS?
          </h2>
          <div className="w-16 h-1 rounded-full bg-primary-container mx-auto mt-space-sm"></div>
        </div>

        {/* Bento Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter w-full">
          {/* Feature 01 Standout Hero Box */}
          <div className="lg:col-span-6 bg-surface-charcoal border border-border-subtle rounded-2xl p-space-xl flex flex-col justify-between hover:border-primary-container transition-colors group">
            <div>
              <div className="flex items-center gap-space-sm mb-space-md">
                <span className="w-3 h-3 rounded-full bg-primary-container inline-block"></span>
                <span className="font-headline-md text-headline-md text-primary-container font-black">
                  {featured.number}
                </span>
                <h3 className="font-headline-md text-headline-md text-pure-white uppercase">
                  {featured.title}
                </h3>
              </div>
              <p className="font-body-md text-sm sm:text-base text-text-muted mb-space-lg leading-relaxed">
                {featured.description}
              </p>

              {/* Research Comparison Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm mb-space-lg">
                <div className="bg-primary-container/20 border border-primary-container/40 rounded-xl p-space-md">
                  <span className="font-label-uppercase text-xs text-primary-container uppercase block mb-1">
                    {featured.researchTag}
                  </span>
                  <p className="font-body-md text-sm sm:text-base font-bold text-pure-white">
                    {featured.researchText}
                  </p>
                </div>
                <div className="bg-surface-card border border-border-strong rounded-xl p-space-md">
                  <span className="font-label-uppercase text-xs text-text-muted uppercase block mb-1">
                    {featured.solutionTag}
                  </span>
                  <p className="font-body-md text-sm sm:text-base font-bold text-pure-white">
                    {featured.solutionText}
                  </p>
                </div>
              </div>
            </div>

            {/* Product Shelf Graphic */}
            <div className="relative w-full h-64 overflow-hidden rounded-xl border border-border-subtle mt-space-md">
              <img
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                alt="Standout packaging showcase"
                src={featured.image}
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-primary-container text-pure-white font-label-uppercase text-xs px-3 py-1 rounded-full shadow-md">
                {featured.badgeLabel}
              </div>
            </div>
          </div>

          {/* 4 Grid Sub-Features (02, 03, 04, 05) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {subFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-charcoal border border-border-subtle rounded-2xl p-space-lg flex flex-col justify-between hover:border-primary-container transition-colors group"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl bg-surface-card border border-border-strong flex items-center justify-center ${item.color} mb-space-md group-hover:border-primary-container/50 transition-colors`}
                  >
                    <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                  </div>
                  <div className="flex items-center gap-space-xs mb-space-xs">
                    <span className={`font-headline-md text-headline-md ${item.color} font-black`}>
                      {item.number}
                    </span>
                    <h4 className="font-headline-md text-headline-md text-pure-white text-[18px] uppercase">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-body-sm text-xs sm:text-sm text-text-muted mt-space-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-space-md border-t border-border-subtle mt-space-md flex items-center justify-between text-text-muted font-label-uppercase text-xs">
                  <span>{item.footerLeft}</span>
                  <span className={item.footerRightColor}>{item.footerRight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
