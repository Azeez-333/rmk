import React, { useState } from 'react';
import { PROCESS_STEPS } from '../constants/data';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);

  // Active limit: if hovered, use hoveredStep; else if selected, use selectedStep; otherwise null (all active)
  const activeLimit = hoveredStep !== null ? hoveredStep : selectedStep;

  return (
    <section
      id="process"
      className="w-full bg-surface-charcoal py-space-3xl px-margin-mobile lg:px-margin border-b border-border-subtle scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-space-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-card border border-border-strong text-primary-container font-label-uppercase text-xs tracking-widest uppercase mb-1">
            PRODUCTION LIFECYCLE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-pure-white uppercase tracking-tight mt-1">
            OUR PROCESS
          </h2>
          <p className="font-body-md text-sm sm:text-base text-text-muted mt-2">
            Streamlined from concept to delivery with strict quality gates at each milestone.
          </p>
        </div>

        {/* Process 5-Step Connected Timeline with Interactive Progression */}
        <div
          className="relative w-full"
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Connecting 4 Line Segments on Desktop */}
          <div className="hidden md:flex absolute top-7 left-0 right-0 w-full px-[10%] z-0 items-center">
            {[1, 2, 3, 4].map((connectorIdx) => {
              const isConnectorActive =
                activeLimit === null || connectorIdx < activeLimit;

              return (
                <div
                  key={connectorIdx}
                  className="flex-1 h-[2px] bg-border-strong rounded-full relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-primary-container rounded-full transition-all duration-300 ease-out"
                    style={{
                      width: isConnectorActive ? '100%' : '0%',
                      opacity: isConnectorActive ? 1 : 0.2,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* 5 Step Blocks */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-space-lg">
            {PROCESS_STEPS.map((stepItem) => {
              const stepNum = stepItem.step;
              const isActive = activeLimit === null || stepNum <= activeLimit;
              const isFocal = activeLimit !== null && stepNum === activeLimit;

              return (
                <div
                  key={stepNum}
                  onClick={() => setSelectedStep(stepNum === selectedStep ? null : stepNum)}
                  onMouseEnter={() => setHoveredStep(stepNum)}
                  className="process-step group flex flex-col items-center text-center cursor-pointer select-none transition-transform duration-200 hover:-translate-y-1"
                >
                  {/* Step Circle */}
                  <div
                    className={`step-circle w-14 h-14 rounded-full border-2 flex items-center justify-center font-headline-md text-headline-md mb-space-md transition-all duration-300 ease-out ${
                      isActive
                        ? 'bg-primary-container text-pure-white border-pure-white shadow-[0_0_20px_rgba(255,84,78,0.4)] scale-100'
                        : 'bg-surface-card border-border-strong text-text-muted/60 shadow-none scale-95'
                    } ${isFocal ? 'scale-110 ring-4 ring-primary-container/30' : ''}`}
                  >
                    0{stepNum}
                  </div>

                  {/* Step Title */}
                  <h3
                    className={`step-title font-headline-md text-headline-md text-[18px] uppercase mb-1 transition-colors duration-300 ${
                      isActive ? 'text-pure-white' : 'text-text-muted/60'
                    }`}
                  >
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    className={`step-desc font-body-sm text-xs sm:text-sm transition-colors duration-300 max-w-xs ${
                      isActive ? 'text-text-muted' : 'text-text-muted/40'
                    }`}
                  >
                    {stepItem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestone Indicator Helper */}
        <div className="mt-8 font-label-uppercase text-xs text-text-muted tracking-widest flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-black border border-border-subtle">
          <span className="w-2 h-2 rounded-full bg-primary-container"></span>
          <span>CLICK OR HOVER ANY PHASE TO INSPECT PRODUCTION GATEWAYS</span>
        </div>
      </div>
    </section>
  );
}
