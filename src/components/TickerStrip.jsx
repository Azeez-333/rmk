import React from 'react';
import { TICKER_ITEMS } from '../constants/data';

export default function TickerStrip({ onActionClick }) {
  // Repeating array for smooth continuous ribbon
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-primary-container text-pure-white py-space-sm overflow-hidden whitespace-nowrap border-y border-border-subtle select-none">
      <div className="inline-flex gap-space-2xl font-button-text text-button-text uppercase tracking-widest font-black animate-marquee">
        {items.map((item, idx) => (
          <React.Fragment key={idx}>
            <span
              onClick={item.includes('→') ? onActionClick : undefined}
              className={`${item.includes('→') ? 'cursor-pointer hover:underline' : ''}`}
            >
              {item}
            </span>
            <span className="opacity-75">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
