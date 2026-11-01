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
      className="relative w-full overflow-hidden bg-surface-black text-pure-white -mt-20 pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24"
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

      <div className="relative z-10 max-w-6xl mx-auto px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        {/* Main Hero Headline - Formatted so "REDEFINED" is 100% visible on every screen */}
        <h1 className="font-display-xl uppercase tracking-tight text-pure-white mb-4 sm:mb-5 select-none leading-[1.1] max-w-5xl mx-auto px-2">
          <span className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-[68px]">
            PACKAGIN'
          </span>{' '}
          <span className="inline-block text-3xl sm:text-5xl md:text-6xl lg:text-[68px] text-primary-container font-black">
            REDEFINED
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body-md text-sm sm:text-base md:text-lg text-text-muted max-w-xl mx-auto mb-8 sm:mb-10 px-4 leading-relaxed">
          {BRAND_INFO.subheading}
        </p>

        {/* CTA Buttons - Compact, Beautiful Rounded-Full Radius & Left-to-Right Hover */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
          <button
            onClick={onOpenStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-primary-container text-pure-white font-button-text text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-out hover:translate-x-2 hover:bg-pure-white hover:text-surface-black shadow-lg shadow-primary-container/25 cursor-pointer active:scale-95 group"
          >
            <span>START NOW</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          <a
            href="#brief"
            onClick={handleScrollToBrief}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-surface-card border border-border-strong text-pure-white font-button-text text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-out hover:translate-x-2 hover:bg-primary-container hover:text-pure-white hover:border-primary-container shadow-md cursor-pointer group"
          >
            <span>DISCUSS YOUR BRIEF</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              chat
            </span>
          </a>
        </div>

        {/* Industrial Line Indicator Ticker */}
        <div className="mt-10 sm:mt-14 flex items-center gap-2">
          <span className="w-8 h-1 rounded-full bg-primary-container inline-block"></span>
          <span className="w-2 h-1 rounded-full bg-border-strong inline-block"></span>
          <span className="w-2 h-1 rounded-full bg-border-strong inline-block"></span>
        </div>
      </div>
    </section>
  );
}
