import React, { useState, useEffect, useRef } from 'react';
import { BRAND_INFO } from '../constants/data';

const HERO_SLIDES = [
  {
    id: 1,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvf-zC4kv2hFRC6wp3-6yG-hpjgpargMsNmQ95XDcPJeH8lIGilG85mH_RS1yY0glMcMFvmy-BQWtnaN0nI1SYnFxHIsIGnZpLirFd71fkF__Fo7ndIJ8-AfPhTLBu49KJ50An9EsRnBh6Xq2u2BEm4nanSMbHSVW0aDPGUbyD0mzZnWMZvxfCipsFPQkmhmOi1PsAXz0SAJX1ng2kb6gezyWifvrfwW7cpHawUGWf26LFxfiQlNv5hw',
    label: 'AUTOMATED PRESS BED',
  },
  {
    id: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLqx84_ONNU0GdSvMHZCcou3eJezXbw-x7oo9YZ1BlmFSTUq9v12vSYycx0-7hyoZRbDOHBoYpY6AYL2_9qnOVnRi0wAAwKxRZJ3ztbjAncIwc-X8Yc52c2w4OQdRIlpvJLwqSdh-2T6HkqVUE0dhaCbXLU941TEYsQwlFhZ2wbeg_9W8YtMZa-_J3OGSZkCk4zjoe5dL4zyNTqXQajry0tXS1O79tmrFywcILV4lvAD5n10baxc2eqQ',
    label: 'RIGID LUXURY CARTON ATELIER',
  },
  {
    id: 3,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATHmZTxsDfmQ0gFCDbX4Lr1l2Qf1QeU-Pg2ptolodKHKuLqKIc1zqamCYXwcwlaUVDhZkyxoF7CJxut2bvhS2KUKokKSn41MpOPYsAJG2tmOuzg7BIWHOpXqLexb9hIuneW2zsxHpgxNNOvfefZdYOGezNKuO7wV1s_UYwINfVvKex2wmZKWW5OUVm3_EwANhb2SEIYW5PEWJHs0pPpNHqkesGu8980ewALCCpCePpDBRbxZ9LuECMng',
    label: 'SHELF DOMINANCE RETAIL FINISH',
  },
  {
    id: 4,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkBDM__vJ5ihk_vdx5xT1mMTcOV028lZPTHIfL20SJv8um-BkTlGiKVnPOkH_5s0dZ0RnCsjr_FsYDhSqHlT4fxZrw4cy0-H1g5Y1FzA-LTfUUEpOoTAdqA7BCqrHaMggekegnLaHAHYMnrY5yBQbBxXdhkWiHhZlcuuWZvJBG7flbkIbMGLmqtAtPc5OAoe3TqUivB0_iLajd1VNXzLwY5HryllcAF-o9TsH0gQGwm57Gqn1gxRrDpQ',
    label: 'METALLIC GOLD FOIL & EMBOSS',
  },
];

export default function Hero({ onOpenStartProject }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch Swipe Gesture State for Mobile
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-advance Carousel every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch handling for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    // Minimum swipe threshold
    if (diff > 40) {
      // Swiped left -> next slide
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    } else if (diff < -40) {
      // Swiped right -> prev slide
      setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    }
  };

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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full overflow-hidden bg-surface-black text-pure-white -mt-16 sm:-mt-20 pt-24 sm:pt-32 md:pt-40 pb-14 sm:pb-20 select-none"
    >
      {/* Background Carousel Slides with Cross-fade & Ken Burns effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-40 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center transition-transform duration-[5000ms] ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            </div>
          );
        })}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-surface-black/90 via-surface-black/60 to-surface-black pointer-events-none"></div>
        <div className="absolute inset-0 z-20 bg-radial-gradient from-transparent via-surface-black/45 to-surface-black pointer-events-none"></div>
      </div>

      {/* Hero Content Overlay (Always Visible & Prominent) */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-margin-mobile lg:px-margin flex flex-col items-center text-center">
        {/* Main Hero Headline - Guaranteed visible & wraps gracefully on all mobile screens */}
        <h1 className="font-display-xl uppercase tracking-tight text-pure-white mb-3 sm:mb-5 leading-[1.08] max-w-5xl mx-auto px-2">
          <span className="inline-block text-2xl sm:text-5xl md:text-6xl lg:text-[68px]">
            PACKAGIN'
          </span>{' '}
          <span className="inline-block text-2xl sm:text-5xl md:text-6xl lg:text-[68px] text-primary-container font-black">
            REDEFINED
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body-md text-xs sm:text-base md:text-lg text-text-muted max-w-xl mx-auto mb-6 sm:mb-10 px-3 leading-relaxed">
          {BRAND_INFO.subheading}
        </p>

        {/* CTA Buttons - Compact, Beautiful Rounded-Full Radius & Left-to-Right Hover Motion */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto px-4">
          <button
            onClick={onOpenStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-primary-container text-pure-white font-button-text text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-out hover:translate-x-2 hover:bg-pure-white hover:text-surface-black shadow-lg shadow-primary-container/25 cursor-pointer active:scale-95 group"
          >
            <span>START NOW</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          <a
            href="#brief"
            onClick={handleScrollToBrief}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-surface-card border border-border-strong text-pure-white font-button-text text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ease-out hover:translate-x-2 hover:bg-primary-container hover:text-pure-white hover:border-primary-container shadow-md cursor-pointer group"
          >
            <span>DISCUSS YOUR BRIEF</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              chat
            </span>
          </a>
        </div>

        {/* Interactive Carousel Indicator Pills (Click or swipe to switch backgrounds) */}
        <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2.5">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-500 ease-out cursor-pointer rounded-full h-1.5 sm:h-2 ${
                  isActive
                    ? 'w-8 sm:w-10 bg-primary-container shadow-md shadow-primary-container/40'
                    : 'w-2 sm:w-2.5 bg-border-strong hover:bg-pure-white/60'
                }`}
              />
            );
          })}
        </div>

        {/* Live Slide Label */}
        <div className="mt-2 text-[10px] sm:text-xs font-label-uppercase tracking-widest text-text-muted/70 uppercase">
          0{currentSlide + 1} / 0{HERO_SLIDES.length} • {HERO_SLIDES[currentSlide].label}
        </div>
      </div>
    </section>
  );
}
