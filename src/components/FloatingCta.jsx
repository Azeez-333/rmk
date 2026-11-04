import React from 'react';

export default function FloatingCta({ onClick }) {
  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-surface-card/95 backdrop-blur-md border border-primary-container text-pure-white font-button-text text-[11px] sm:text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 ease-out hover:translate-x-1.5 hover:bg-primary-container hover:text-pure-white cursor-pointer active:scale-95 group"
      >
        <span className="w-2 h-2 rounded-full bg-primary-container group-hover:bg-pure-white animate-ping"></span>
        <span>START PROJECT</span>
        <span className="material-symbols-outlined text-[14px] sm:text-[16px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
