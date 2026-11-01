import React from 'react';
import { BRAND_INFO } from '../constants/data';

export default function Hero({ onOpenStartProject }) {
  const handleScrollToBrief = (e) => {
    e.preventDefault();
    const briefSection = document.getElementById('brief') || document.getElementById('contact');
    if (briefSection) {
      briefSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-surface-black text-pure-white -mt-[116px] pt-[170px] md:pt-[200px] pb-space-2xl md:pb-space-3xl"
    >
      {/* Atmospheric Ambient Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvf-zC4kv2hFRC6wp3-6yG-hpjgpargMsNmQ95XDcPJeH8lIGilG85mH_RS1yY0glMcMFvmy-BQWtnaN0nI1SYnFxHIsIGnZpLirFd71fkF__Fo7ndIJ8-AfPhTLBu49KJ50An9EsRnBh6Xq2u2BEm4nanSMbHSVW0aDPGUbyD0mzZnWMZvxfCipsFPQkmhmOi1PsAXz0SAJX1ng2kb6gezyWifvrfwW7cpHawUGWf26LFxfiQlNv5hw')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-black/90 via-surface-black/60 to-surface-black"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-surface-black/40 to-surface-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        {/* Main Hero Headline - Fluidly clamped so it NEVER overflows any screen */}
        <h1 className="font-display-xl text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold uppercase tracking-tight text-pure-white mb-space-md max-w-6xl mx-auto leading-[1.08] select-none px-2">
          PACKAGIN<span className="text-primary-container font-black">'R</span>EDEFINED
        </h1>

        {/* Subtitle */}
        <p className="font-body-lg text-body-md md:text-body-lg text-on-surface max-w-2xl mx-auto mb-space-xl text-text-muted px-4 leading-relaxed">
          {BRAND_INFO.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full max-w-md mx-auto px-4">
          <button
            onClick={onOpenStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md bg-primary-container text-pure-white font-button-text text-button-text uppercase tracking-wider hover:bg-pure-white hover:text-surface-black transition-colors duration-100 shadow-xl cursor-pointer active:scale-95"
          >
            START NOW →
          </button>
          <a
            href="#brief"
            onClick={handleScrollToBrief}
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-xl py-space-md bg-surface-card border border-border-strong text-pure-white font-button-text text-button-text uppercase tracking-wider hover:border-primary-container hover:bg-surface-charcoal transition-colors cursor-pointer"
          >
            DISCUSS YOUR BRIEF
          </a>
        </div>

        {/* Industrial Line Indicator Ticker */}
        <div className="mt-space-2xl flex items-center gap-2">
          <span className="w-8 h-1 bg-primary-container inline-block"></span>
          <span className="w-2 h-1 bg-border-strong inline-block"></span>
          <span className="w-2 h-1 bg-border-strong inline-block"></span>
        </div>
      </div>
    </section>
  );
}
