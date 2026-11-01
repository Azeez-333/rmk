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
      const scrollPos = window.scrollY + 180;

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
      const headerOffset = 110;
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-black/95 backdrop-blur-md border-b border-border-subtle transition-all duration-200">
        {/* Top Announcement Bar */}
        <div className="w-full bg-surface-container-lowest border-b border-border-subtle py-2 px-margin-mobile lg:px-margin">
          <div className="max-w-7xl mx-auto flex items-center justify-between font-label-uppercase text-label-uppercase text-text-muted">
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-pure-white tracking-widest">
                {BRAND_INFO.announcement.status}
              </span>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-space-xs text-pure-white hover:text-primary-container transition-colors tracking-widest cursor-pointer text-left uppercase"
            >
              <span>{BRAND_INFO.announcement.actionText}</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="h-20 w-full px-margin-mobile lg:px-margin">
          <div className="max-w-7xl h-full mx-auto flex items-center justify-between">
            {/* RMK Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-baseline font-headline-md text-headline-md tracking-tight text-pure-white uppercase select-none group"
            >
              <span className="font-black text-pure-white group-hover:text-primary-container transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 bg-primary-container inline-block ml-0.5 group-hover:scale-125 transition-transform"></span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-space-lg font-button-text text-button-text uppercase tracking-wider">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`transition-colors cursor-pointer ${
                  activeSection === 'home'
                    ? 'text-primary-container border-b-2 border-primary-container pb-1 font-bold'
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
                    className={`transition-colors cursor-pointer ${
                      isActive
                        ? 'text-primary-container border-b-2 border-primary-container pb-1 font-bold'
                        : 'text-on-surface-variant hover:text-pure-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-space-md">
              <button
                onClick={() => {
                  const contactEl = document.getElementById('contact') || document.getElementById('brief');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden sm:inline-flex items-center justify-center h-[46px] px-space-md border border-border-strong bg-surface-black text-pure-white font-button-text text-button-text uppercase tracking-wider hover:border-primary-container hover:bg-surface-card transition-colors cursor-pointer"
              >
                GET IN TOUCH
              </button>

              <button
                onClick={onOpenStartProject}
                className="inline-flex items-center justify-center h-[46px] px-space-lg bg-primary-container text-pure-white font-button-text text-button-text uppercase tracking-wider hover:bg-pure-white hover:text-surface-black transition-colors duration-100 cursor-pointer shadow-lg active:scale-95"
              >
                START PROJECT
              </button>

              {/* User Avatar Button */}
              <button
                onClick={() => setShowProfileModal(!showProfileModal)}
                title="Atelier Account"
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs hover:ring-2 hover:ring-primary-container transition-all cursor-pointer relative"
              >
                <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center text-pure-white hover:text-primary-container focus:outline-none ml-1"
                aria-label="Toggle navigation"
              >
                <span className="material-symbols-outlined text-[28px]">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-charcoal border-b border-border-subtle px-margin-mobile py-6 shadow-2xl animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-4 font-button-text text-button-text uppercase tracking-wider">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className={`py-2 px-3 border-l-2 transition-colors ${
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
                  className={`py-2 px-3 border-l-2 transition-colors ${
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
                  className="w-full py-3 border border-border-strong text-pure-white font-button-text text-button-text uppercase tracking-wider text-center"
                >
                  GET IN TOUCH
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenStartProject();
                  }}
                  className="w-full py-3 bg-primary-container text-pure-white font-button-text text-button-text uppercase tracking-wider text-center"
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
          className="fixed inset-0 z-50 flex items-start justify-end pt-24 pr-4 sm:pr-12 bg-black/50"
          onClick={() => setShowProfileModal(false)}
        >
          <div
            className="w-80 bg-surface-charcoal border border-border-strong p-5 shadow-2xl"
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
                className="text-text-muted hover:text-pure-white"
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
              className="w-full py-2 bg-primary-container text-pure-white font-button-text text-xs uppercase tracking-wider hover:bg-pure-white hover:text-surface-black transition-colors"
            >
              Request Fast-Track Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}

