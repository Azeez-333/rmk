import React, { useState } from 'react';

export default function ContactCta({ onOpenStartProject, onShowToast }) {
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('pilot');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Subscribed! Welcome to RMK CLUB (${email}). Die-line checklist sent.`);
      }
      setEmail('');
    }, 600);
  };

  return (
    <section
      id="contact"
      className="w-full bg-surface-black py-space-3xl px-margin-mobile lg:px-margin scroll-mt-24"
    >
      <div id="brief" className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Insane Idea Callout */}
        <div className="lg:col-span-7 bg-primary-container p-5 sm:p-8 lg:p-space-xl text-pure-white flex flex-col justify-between shadow-2xl relative overflow-hidden rounded-3xl">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-pure-white/15 text-pure-white font-label-uppercase text-xs tracking-widest uppercase mb-space-sm">
              GOT SOMETHING WILD?
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-black uppercase tracking-tight leading-none mb-space-md">
              HAVE AN INSANE IDEA?
              <br />
              HIT US UP.
            </h2>
            <p className="font-body-md text-sm sm:text-base text-pure-white/90 max-w-lg mb-space-xl leading-relaxed">
              Custom shapes, impossible deadlines, wild materials? We live for this stuff. Share
              your brief and our packaging engineers will assess feasibility and quote in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-surface-black text-pure-white font-button-text text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ease-out hover:translate-x-2 hover:bg-pure-white hover:text-surface-black cursor-pointer active:scale-95 shadow-xl group"
              >
                <span>START A PROJECT</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <a
                href="mailto:atelier@rmkstudio.com?subject=Brief%20Consultation%20Request"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-pure-white/15 border border-pure-white/30 text-pure-white font-button-text text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ease-out hover:translate-x-2 hover:bg-pure-white hover:text-surface-black cursor-pointer group"
              >
                <span>SCHEDULE A CALL</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  calendar_today
                </span>
              </a>
            </div>
          </div>
          <div className="mt-space-2xl pt-space-md border-t border-pure-white/20 flex items-center justify-between text-pure-white/80 font-label-uppercase text-xs">
            <span>HIGH-PRIORITY DESK</span>
            <span>ESTIMATES IN &lt;24 HOURS</span>
          </div>
        </div>

        {/* Right: RMK CLUB Newsletter Block */}
        <div
          id="quote"
          className="lg:col-span-5 bg-surface-charcoal border border-border-subtle p-5 sm:p-8 lg:p-space-xl flex flex-col justify-between rounded-3xl"
        >
          <div>
            <div className="flex items-center gap-space-xs mb-space-md">
              <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-pure-white">
                <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
              </div>
              <span className="font-label-uppercase text-xs text-text-muted uppercase">
                NEWSLETTER
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-pure-white uppercase mb-space-xs">
              JOIN THE <span className="text-primary-container font-black">RMK CLUB</span>
            </h3>
            <p className="font-body-sm text-sm text-text-muted mb-space-xl">
              Drops, behind-the-scenes engineering builds, materials guides, and limited factory slot announcements.
            </p>

            {/* Email Input & Submit Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1.5">
                  Company Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[50px] bg-surface-container-lowest border border-border-strong rounded-xl px-4 text-pure-white placeholder-text-muted/60 focus:outline-none focus:border-primary-container text-sm transition-colors"
                  placeholder="founder@yourbrand.com"
                  required
                  type="email"
                />
              </div>

              <div>
                <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1.5">
                  Estimated Run Volume
                </label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full h-[50px] bg-surface-container-lowest border border-border-strong rounded-xl px-4 text-pure-white focus:outline-none focus:border-primary-container text-sm transition-colors cursor-pointer"
                >
                  <option value="pilot">Pilot Run (&lt;500 units)</option>
                  <option value="growth">Growth Stage (500 - 5,000 units)</option>
                  <option value="enterprise">Enterprise (5,000+ units)</option>
                  <option value="gifting">Corporate Gifting (25 - 500 sets)</option>
                </select>
              </div>

              <button
                disabled={isSubmitting}
                className="w-full h-[50px] rounded-full bg-primary-container text-pure-white font-button-text text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ease-out hover:translate-x-1.5 hover:bg-pure-white hover:text-surface-black flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50 shadow-lg shadow-primary-container/20 group"
                type="submit"
              >
                <span>{isSubmitting ? 'TRANSMITTING...' : 'GET IN TOUCH'}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>

            {submitted && (
              <div className="mt-3 p-3 bg-primary-container/20 border border-primary-container rounded-xl text-xs text-pure-white font-mono animate-fadeIn">
                ✓ SUBMISSION CONFIRMED // High-priority dieline guide dispatched.
              </div>
            )}
          </div>

          <div className="mt-space-lg text-text-muted font-label-uppercase text-xs">
            NO SPAM • DIE-LINE CHECKLIST INCLUDED
          </div>
        </div>
      </div>
    </section>
  );
}
