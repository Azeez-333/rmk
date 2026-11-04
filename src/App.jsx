import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Metrics from './components/Metrics';
import WhyRMK from './components/WhyRMK';
import Gifting from './components/Gifting';
import WhatWeDo from './components/WhatWeDo';
import Showcase from './components/Showcase';
import Process from './components/Process';
import TickerStrip from './components/TickerStrip';
import ContactCta from './components/ContactCta';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import StartProjectModal from './components/StartProjectModal';
import CaseStudyModal from './components/CaseStudyModal';
import LegalModal from './components/LegalModal';
import Toast from './components/Toast';

export default function App() {
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);
  const [projectInitialCategory, setProjectInitialCategory] = useState('Custom Boxes');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [legalTopic, setLegalTopic] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenStartProject = (category = 'Custom Boxes') => {
    setProjectInitialCategory(category);
    setIsStartProjectOpen(true);
  };

  const handleSelectTier = (tier) => {
    handleOpenStartProject(`Corporate Gifting (${tier.title} Tier)`);
  };

  const handleSelectCapability = (cap) => {
    handleOpenStartProject(cap.title);
  };

  const handleQuoteSubmitted = (data) => {
    setToastMessage(
      `Brief Received for "${data.category}" (${data.volume} units). Technical review initiated for ${data.email}!`
    );
  };

  return (
    <div className="bg-surface-black min-h-screen text-on-surface antialiased selection:bg-primary-container selection:text-pure-white flex flex-col w-full overflow-x-hidden">
      {/* Fixed Header (Without top free bar) */}
      <Header
        onOpenStartProject={() => handleOpenStartProject('Custom Boxes')}
        onOpenConsultation={() => handleOpenStartProject('Die-Line Audit & Consultation')}
      />

      {/* Main Content */}
      <main className="w-full pt-16 sm:pt-20 bg-surface-black flex-1 overflow-x-hidden">
        <div className="flex flex-col w-full overflow-x-hidden">
          {/* 1. Hero Section */}
          <Hero onOpenStartProject={() => handleOpenStartProject('Custom Boxes')} />

          {/* 2. Trusted By Section */}
          <TrustedBy />

          {/* 3. Key Metrics Bar */}
          <Metrics />

          {/* 4. Why RMK Over Traditional Brands */}
          <WhyRMK />

          {/* 5. Corporate Gifts */}
          <Gifting onSelectTier={handleSelectTier} />

          {/* 6. What We Do */}
          <WhatWeDo onSelectCapability={handleSelectCapability} />

          {/* 7. Brands We Pack For (Showcase) */}
          <Showcase onSelectCaseStudy={(study) => setSelectedCaseStudy(study)} />

          {/* 8. Our Process */}
          <Process />

          {/* Horizontal Ticker Strip */}
          <TickerStrip onActionClick={() => handleOpenStartProject('Custom Boxes')} />

          {/* 9. Contact / Brief / RMK Club CTA */}
          <ContactCta
            onOpenStartProject={() => handleOpenStartProject('Insane Idea Brief')}
            onShowToast={(msg) => setToastMessage(msg)}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(topic) => setLegalTopic(topic)} />

      {/* Floating CTA Button */}
      <FloatingCta onClick={() => handleOpenStartProject('Custom Boxes')} />

      {/* Modals & Overlays */}
      <StartProjectModal
        isOpen={isStartProjectOpen}
        initialCategory={projectInitialCategory}
        onClose={() => setIsStartProjectOpen(false)}
        onQuoteSubmitted={handleQuoteSubmitted}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProjectForStudy={(title) => handleOpenStartProject(`Case Study Reference: ${title}`)}
      />

      <LegalModal topic={legalTopic} onClose={() => setLegalTopic(null)} />

      {/* Notifications */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
