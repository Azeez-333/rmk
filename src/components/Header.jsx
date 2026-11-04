import React, { useState, useEffect } from 'react';
import { BRAND_INFO, NAV_LINKS } from '../constants/data';

export default function Header({ onOpenStartProject, onOpenConsultation }) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['why-rmk', 'what-we-do', 'showcase', 'process', 'gifting', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-black/95 backdrop-blur-md border-b border-border-subtle shadow-xl'
            : 'bg-surface-black/85 backdrop-blur-sm border-b border-border-subtle/50'
        }`}
      >
        {/* Main Navbar - Clean h-16 on mobile and h-20 on desktop */}
        <div className="h-16 sm:h-20 w-full px-4 sm:px-margin-mobile lg:px-margin">
          <div className="max-w-7xl h-full mx-auto flex items-center justify-between">
            {/* RMK Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-baseline font-headline-md text-xl sm:text-headline-md tracking-tight text-pure-white uppercase select-none group"
            >
              <span className="font-black text-pure-white group-hover:text-primary-container transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="w-2 h-2 rounded-full bg-primary-container inline-block ml-0.5 group-hover:scale-125 transition-transform"></span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-space-lg font-button-text text-button-text uppercase tracking-wider">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`transition-colors cursor-pointer py-1 ${
                  activeSection === 'home'
                    ? 'text-primary-container border-b-2 border-primary-container font-bold'
                    : 'text-on-surface-variant hover:text-pure-white'
                }`}
              >
                HOME
              </a>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`transition-colors cursor-pointer py-1 ${
                      isActive
                        ? 'text-primary-container border-b-2 border-primary-container font-bold'
                        : 'text-on-surface-variant hover:text-pure-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => {
                  const contactEl = document.getElementById('contact') || document.getElementById('brief');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-border-strong bg-surface-charcoal/80 text-pure-white font-button-text text-xs uppercase tracking-wider hover:border-primary-container hover:bg-primary-container hover:text-pure-white transition-all duration-300 ease-out hover:translate-x-1.5 cursor-pointer shadow-sm"
              >
                GET IN TOUCH
              </button>

              {/* On mobile screens, hide this cramped button to prevent header overflow */}
              <button
                onClick={onOpenStartProject}
                className="hidden sm:inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full bg-primary-container text-pure-white font-button-text text-xs uppercase tracking-wider hover:bg-pure-white hover:text-surface-black transition-all duration-300 ease-out hover:translate-x-1.5 cursor-pointer shadow-lg shadow-primary-container/20 active:scale-95 whitespace-nowrap"
              >
                START PROJECT
              </button>

              {/* User Avatar Button */}
              <button
                onClick={() => setShowProfileModal(!showProfileModal)}
                title="Atelier Account"
                className="w-9 h-9 rounded-full bg-surface-card border border-border-strong flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-pure-white hover:border-primary-container transition-all duration-300 ease-out hover:translate-x-1 cursor-pointer relative"
              >
                <span className="material-symbols-outlined text-[18px]">person</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center text-pure-white hover:text-primary-container hover:bg-surface-card focus:outline-none transition-colors"
                aria-label="Toggle navigation"
              >
                <span className="material-symbols-outlined text-[24px]">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-charcoal/95 backdrop-blur-lg border-b border-border-subtle px-4 sm:px-margin-mobile py-6 shadow-2xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2.5 font-button-text text-button-text uppercase tracking-wider">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`py-2.5 px-4 rounded-xl border-l-2 transition-colors ${
                  activeSection === 'home'
                    ? 'border-primary-container text-primary-container bg-surface-card'
                    : 'border-transparent text-text-muted hover:text-pure-white'
                }`}
              >
                HOME
              </a>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`py-2.5 px-4 rounded-xl border-l-2 transition-colors ${
                    activeSection === link.id
                      ? 'border-primary-container text-primary-container bg-surface-card'
                      : 'border-transparent text-text-muted hover:text-pure-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById('contact') || document.getElementById('brief');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3 rounded-full border border-border-strong text-pure-white font-button-text text-xs uppercase tracking-wider hover:bg-primary-container hover:border-primary-container hover:text-pure-white transition-all duration-300 hover:translate-x-1.5 text-center cursor-pointer"
                >
                  GET IN TOUCH
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStartProject();
                  }}
                  className="w-full py-3 rounded-full bg-primary-container text-pure-white font-button-text text-xs uppercase tracking-wider hover:bg-pure-white hover:text-surface-black transition-all duration-300 hover:translate-x-1.5 text-center cursor-pointer shadow-md"
                >
                  START PROJECT
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* User Quick Info Dropdown */}
      {showProfileModal && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-end pt-20 sm:pt-24 pr-4 sm:pr-12 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowProfileModal(false)}
        >
          <div
            className="w-80 bg-surface-charcoal border border-border-strong rounded-2xl p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-pure-white font-bold text-sm">
                  RM
                </div>
                <div>
                  <h4 className="font-headline-md text-[14px] text-pure-white uppercase">Atelier Client Portal</h4>
                  <p className="text-xs text-text-muted">High-Priority Desk</p>
                </div>
              </div>
              <button
                onClick={() => setShowProfileModal(false)}
                className="w-6 h-6 rounded-full flex items-center justify-center text-text-muted hover:text-pure-white hover:bg-surface-card transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="py-4 space-y-3 font-body-sm text-xs text-text-muted">
              <div className="flex justify-between items-center py-1 border-b border-border-subtle/40">
                <span>Production Line Status:</span>
                <span className="text-emerald-400 font-bold uppercase">Optimal // Ready</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border-subtle/40">
                <span>Dieline Check SLA:</span>
                <span className="text-pure-white">&lt; 24 Hours</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span>Active Print Runs:</span>
                <span className="text-primary-container font-bold">12 Dispatches Today</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowProfileModal(false);
                onOpenStartProject();
              }}
              className="w-full py-2.5 rounded-full bg-primary-container text-pure-white font-button-text text-xs uppercase tracking-wider hover:bg-pure-white hover:text-surface-black transition-all duration-300 hover:translate-x-1.5 cursor-pointer shadow-md"
            >
              Request Fast-Track Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}
