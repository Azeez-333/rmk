import React from 'react';

export default function FloatingCta({ onClick }) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface-card/90 backdrop-blur-md border border-primary-container text-pure-white font-button-text text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 ease-out hover:translate-x-1.5 hover:bg-primary-container hover:text-pure-white cursor-pointer active:scale-95 group"
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
