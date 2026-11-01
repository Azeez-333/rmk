import React from 'react';

export default function LegalModal({ topic, onClose }) {
  if (!topic) return null;

  const contentMap = {
    privacy: {
      title: 'PRIVACY POLICY // RMK STUDIO',
      text: 'RMK Studio is committed to protecting all proprietary artwork, confidential dielines, vector schematics, and customer contact data. We do not license, share, or sell customer print specifications to any third-party entities. All high-res engineering assets are stored on encrypted cold-storage press queues.',
    },
    terms: {
      title: 'TERMS OF SERVICE // ATELIER SPECIFICATION',
      text: 'All custom production runs are manufactured against digital or physical proofs signed off by client brand teams. Due to high-precision customized runs with bespoke tooling and dies, production commences immediately upon press sign-off. Color matching tolerances are maintained within Delta E < 1.5 across all certified pantone runs.',
    },
    dieline: {
      title: 'DIE-LINE GUIDELINES // TECHNICAL MANUAL',
      text: 'Download vector dielines with a mandatory 3mm safety margin and 5mm exterior bleed. Fold lines must be indicated in magenta dashed spot colors (0.5pt), cut lines in 100% cyan solid (0.5pt), and embossed areas in yellow spot channel. Vector files should be exported in PDF/X-1a or Illustrator .AI format.',
    },
    sustainability: {
      title: 'SUSTAINABLE INKS & BOARDS // ECO STANDARD',
      text: '100% of our paper stocks are certified under FSC (Forest Stewardship Council) chain-of-custody protocols. Inks utilized in our atelier are plant-based, low-VOC soy formulas compliant with REACH and ISO 14001 environmental production guidelines. Custom molded fiber inserts replace PET vacuum trays on request.',
    },
    turnaround: {
      title: 'TURNAROUND SCHEDULES // RAPID DISPATCH',
      text: 'Standard production cycles require 5 to 7 business days following final digital dieline approval. Express fast-track runs (48-72 hours) are available for urgent product launches, retail drops, and media gifting events upon scheduling confirmation with your dedicated production manager.',
    },
  };

  const current = contentMap[topic] || contentMap.privacy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-surface-charcoal border-2 border-primary-container p-6 md:p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-text-muted hover:text-pure-white border border-border-strong hover:border-primary-container transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 font-label-uppercase text-xs text-primary-container tracking-widest uppercase mb-2">
          <span className="w-2 h-2 bg-primary-container"></span>
          ATELIER DOCUMENTATION
        </div>
        <h3 className="font-headline-md text-xl text-pure-white uppercase mb-4">
          {current.title}
        </h3>

        <p className="font-body-sm text-sm text-on-surface leading-relaxed mb-6">
          {current.text}
        </p>

        <div className="pt-4 border-t border-border-subtle flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary-container text-pure-white font-button-text uppercase text-xs hover:bg-pure-white hover:text-surface-black transition-colors"
          >
            ACKNOWLEDGE
          </button>
        </div>
      </div>
    </div>
  );
}
