import React from 'react';
import { BRAND_INFO } from '../constants/data';

export default function Footer({ onOpenLegal }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-surface-charcoal border-t border-border-subtle">
      <div className="w-full px-margin-mobile lg:px-margin pt-space-3xl pb-space-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-space-xl">
            <div className="space-y-space-md">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, 'home')}
                className="flex items-baseline font-headline-md text-headline-md tracking-tight text-pure-white uppercase select-none group"
              >
                <span className="font-black text-pure-white group-hover:text-primary-container transition-colors">
                  {BRAND_INFO.name}
                </span>
                <span className="w-1.5 h-1.5 bg-primary-container inline-block ml-0.5"></span>
              </a>
              <p className="font-body-lg text-body-lg text-pure-white max-w-md">
                {BRAND_INFO.tagline}. Your brand's next level printing and packaging partner.
              </p>
              <p className="font-body-sm text-body-sm text-text-muted max-w-sm">
                Engineered in our avant-garde studio for rapid turnaround, bespoke structural integrity,
                tactile paper weights, and flawless execution.
              </p>
            </div>
            <div className="mt-space-xl font-label-uppercase text-label-uppercase text-text-muted flex items-center gap-space-sm">
              <span className="w-2 h-2 bg-primary-container inline-block"></span>
              {BRAND_INFO.resolutionSpec}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-gutter pt-space-md lg:pt-0">
            {/* Services */}
            <div className="space-y-space-md">
              <p className="font-label-uppercase text-label-uppercase text-text-muted uppercase tracking-widest border-b border-border-subtle pb-space-xs">
                Services
              </p>
              <ul className="space-y-space-sm font-body-sm text-body-sm">
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#what-we-do"
                    onClick={(e) => scrollToSection(e, 'what-we-do')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Custom Boxes
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#what-we-do"
                    onClick={(e) => scrollToSection(e, 'what-we-do')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Premium Labels
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#what-we-do"
                    onClick={(e) => scrollToSection(e, 'what-we-do')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Branded Bags
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#what-we-do"
                    onClick={(e) => scrollToSection(e, 'what-we-do')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Rigid Boxes
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#what-we-do"
                    onClick={(e) => scrollToSection(e, 'what-we-do')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Corporate Merch
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-space-md">
              <p className="font-label-uppercase text-label-uppercase text-text-muted uppercase tracking-widest border-b border-border-subtle pb-space-xs">
                Company
              </p>
              <ul className="space-y-space-sm font-body-sm text-body-sm">
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#why-rmk"
                    onClick={(e) => scrollToSection(e, 'why-rmk')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Why RMK
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#process"
                    onClick={(e) => scrollToSection(e, 'process')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Process
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#showcase"
                    onClick={(e) => scrollToSection(e, 'showcase')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Showcase
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#gifting"
                    onClick={(e) => scrollToSection(e, 'gifting')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Corporate Gifting
                  </a>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="text-pure-white hover:text-primary-container transition-colors"
                  >
                    Contact Desk
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-space-md">
              <p className="font-label-uppercase text-label-uppercase text-text-muted uppercase tracking-widest border-b border-border-subtle pb-space-xs">
                Resources
              </p>
              <ul className="space-y-space-sm font-body-sm text-body-sm">
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <button
                    onClick={() => onOpenLegal && onOpenLegal('dieline')}
                    className="text-left text-pure-white hover:text-primary-container transition-colors cursor-pointer"
                  >
                    Die-line Guidelines
                  </button>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <button
                    onClick={() => onOpenLegal && onOpenLegal('sustainability')}
                    className="text-left text-pure-white hover:text-primary-container transition-colors cursor-pointer"
                  >
                    Sustainable Inks &amp; Boards
                  </button>
                </li>
                <li className="border-b border-border-subtle/50 pb-space-xs">
                  <button
                    onClick={() => onOpenLegal && onOpenLegal('turnaround')}
                    className="text-left text-pure-white hover:text-primary-container transition-colors cursor-pointer"
                  >
                    Turnaround Times
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-border-subtle bg-surface-black py-space-lg px-margin-mobile lg:px-margin">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-text-muted">
          <div className="flex items-center gap-space-md flex-wrap">
            <span className="text-pure-white">© 2024 RMK STUDIO INC. ALL RIGHTS RESERVED.</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="hover:text-pure-white transition-colors cursor-pointer"
            >
              PRIVACY POLICY
            </button>
            <span className="text-border-strong">/</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="hover:text-pure-white transition-colors cursor-pointer"
            >
              TERMS OF SERVICE
            </button>
          </div>
          <div className="flex items-center gap-space-md font-label-uppercase text-label-uppercase tracking-widest">
            <a
              className="text-text-muted hover:text-primary-container transition-colors"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
            <a
              className="text-text-muted hover:text-primary-container transition-colors"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
            <a
              className="text-text-muted hover:text-primary-container transition-colors"
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
            >
              DRIBBBLE
            </a>
            <a
              className="text-text-muted hover:text-primary-container transition-colors"
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
            >
              BEHANCE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

