import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed top-24 right-6 z-50 max-w-md bg-surface-card border-2 border-primary-container p-4 shadow-2xl flex items-center justify-between gap-4 animate-in slide-in-from-right duration-300">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-primary-container animate-ping"></span>
        <span className="font-body-sm text-sm text-pure-white font-medium">
          {message}
        </span>
      </div>
      <button
        onClick={onClose}
        className="text-text-muted hover:text-pure-white transition-colors text-sm font-bold ml-2 cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}
