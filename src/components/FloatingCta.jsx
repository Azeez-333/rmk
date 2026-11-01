import React from 'react';

export default function FloatingCta({ onClick }) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-space-md py-space-sm bg-surface-card border border-primary-container text-pure-white font-button-text text-button-text uppercase tracking-wider shadow-2xl hover:bg-primary-container hover:text-pure-white transition-all duration-200 cursor-pointer active:scale-95 group"
      >
        <span className="w-2 h-2 rounded-full bg-primary-container group-hover:bg-pure-white animate-ping"></span>
        <span>START PROJECT</span>
        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>
    </div>
  );
}

