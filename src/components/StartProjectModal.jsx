import React, { useState } from 'react';

export default function StartProjectModal({ isOpen, onClose, initialCategory, onQuoteSubmitted }) {
  const [category, setCategory] = useState(initialCategory || 'Custom Boxes');
  const [finishes, setFinishes] = useState(['Soft-Touch Matte']);
  const [volume, setVolume] = useState('1000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const toggleFinish = (finish) => {
    if (finishes.includes(finish)) {
      setFinishes(finishes.filter((f) => f !== finish));
    } else {
      setFinishes([...finishes, finish]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onQuoteSubmitted({
        category,
        finishes,
        volume,
        name,
        email,
        notes,
        fileName,
      });
      onClose();
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface-charcoal border-2 border-border-strong rounded-3xl p-6 md:p-8 my-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-border-subtle mb-6">
          <div>
            <div className="inline-flex items-center gap-2 font-label-uppercase text-xs text-primary-container tracking-widest uppercase mb-1 px-3 py-1 rounded-full bg-surface-card border border-border-strong">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              HIGH-PRIORITY ATELIER INTAKE
            </div>
            <h2 className="font-headline-md text-2xl text-pure-white uppercase mt-1">
              START YOUR PROJECT // FAST ESTIMATE
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-text-muted hover:text-pure-white border border-border-strong hover:border-primary-container hover:bg-surface-card transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 font-body-sm">
          {/* Format Selection */}
          <div>
            <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-2">
              1. Select Production Format
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Custom Boxes',
                'Premium Labels',
                'Branded Bags',
                'Promotional Print',
                'Corporate Gifting',
                'Custom Hardware Merch',
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`p-3 text-xs uppercase font-button-text rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    category === item
                      ? 'border-primary-container bg-primary-container/20 text-pure-white shadow-sm'
                      : 'border-border-subtle bg-surface-black text-text-muted hover:border-border-strong hover:text-pure-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Luxury Finishes */}
          <div>
            <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-2">
              2. Required Finishes (Select all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                'Soft-Touch Matte',
                'Gold Foil Stamping',
                'Raised Spot UV',
                'Deboss / Emboss',
                'Holographic Stamping',
                'FSC Eco Kraft',
                'Magnetic Closure',
                'Custom Foam Cutout',
              ].map((finish) => {
                const selected = finishes.includes(finish);
                return (
                  <button
                    type="button"
                    key={finish}
                    onClick={() => toggleFinish(finish)}
                    className={`p-2.5 text-xs rounded-xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      selected
                        ? 'border-gold-badge bg-gold-badge/15 text-pure-white shadow-sm'
                        : 'border-border-subtle bg-surface-black text-text-muted hover:border-border-strong hover:text-pure-white'
                    }`}
                  >
                    <span>{finish}</span>
                    <span className="text-xs">{selected ? '✓' : '+'}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Volume Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1">
                Estimated Volume
              </label>
              <select
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full h-11 bg-surface-container-lowest border border-border-strong rounded-xl px-3 text-pure-white focus:outline-none focus:border-primary-container text-xs cursor-pointer"
              >
                <option value="250">Sample Run (250 units)</option>
                <option value="500">Pilot (500 units)</option>
                <option value="1000">Standard (1,000 units)</option>
                <option value="5000">High Volume (5,000 units)</option>
                <option value="10000">Enterprise (10,000+ units)</option>
              </select>
            </div>
            <div>
              <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1">
                Target Turnaround
              </label>
              <div className="h-11 bg-surface-black border border-border-strong rounded-xl px-3 flex items-center justify-between text-xs text-text-muted">
                <span>Standard Atelier:</span>
                <span className="text-primary-container font-bold">5 - 7 Business Days</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1">
                Your Name / Brand Name *
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Rostova // Kestrel Co."
                className="w-full h-11 bg-surface-container-lowest border border-border-strong rounded-xl px-3 text-pure-white placeholder-text-muted/50 focus:outline-none focus:border-primary-container text-xs"
              />
            </div>
            <div>
              <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1">
                Company Email *
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="founder@brand.com"
                className="w-full h-11 bg-surface-container-lowest border border-border-strong rounded-xl px-3 text-pure-white placeholder-text-muted/50 focus:outline-none focus:border-primary-container text-xs"
              />
            </div>
          </div>

          {/* File Upload Simulation */}
          <div>
            <label className="block font-label-uppercase text-xs text-text-muted uppercase mb-1">
              Die-line / Artwork / Reference Specs (Optional)
            </label>
            <div className="border border-dashed border-border-strong rounded-2xl p-4 text-center bg-surface-black hover:border-primary-container transition-colors relative cursor-pointer">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <span className="material-symbols-outlined text-2xl text-text-muted block mb-1">
                upload_file
              </span>
              <p className="text-xs text-pure-white font-medium">
                {fileName ? `Attached: ${fileName}` : 'Drop PDF, AI, or Dieline Package or click to browse'}
              </p>
              <p className="text-[10px] text-text-muted mt-0.5">Max size 50MB. Vector .AI / .PDF preferred</p>
            </div>
          </div>

          {/* Submit */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-text-muted font-label-uppercase">
              NO OBLIGATION • 24H SLA ON TECHNICAL REVIEW
            </span>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full sm:w-auto px-8 h-12 rounded-full bg-primary-container text-pure-white font-button-text uppercase tracking-widest text-xs transition-all duration-300 ease-out hover:translate-x-1.5 hover:bg-pure-white hover:text-surface-black flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-primary-container/20 group"
            >
              <span>{isSubmitting ? 'GENERATING QUOTE...' : 'SUBMIT BRIEF'}</span>
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
