import React from 'react';
import headerBanner from '../assets/images/header_banner.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-5 pb-3 sm:pb-5">
      <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-purple-500/30 shadow-[0_0_45px_rgba(168,85,247,0.25)] bg-[#07050f]">
        <img
          src={headerBanner}
          alt="SocialTrove — Automatización de WhatsApp con IA"
          className="block h-auto w-full select-none"
          loading="eager"
        />
      </div>
    </section>
  );
};
