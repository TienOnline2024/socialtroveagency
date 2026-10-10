import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { VideoDemoSection } from './components/VideoDemoSection';
import { PricingGrid } from './components/PricingGrid';
import { BottomFeatures } from './components/BottomFeatures';
import { WhatsAppModal } from './components/WhatsAppModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Plan } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07050f] text-white flex flex-col justify-between overflow-x-hidden relative selection:bg-purple-600 selection:text-white">
      {/* Ambient Cosmic Background Lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Center Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]" />
        {/* Left Robot Ambient Glow */}
        <div className="absolute top-48 -left-32 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px]" />
        {/* Right Phone Ambient Glow */}
        <div className="absolute top-48 -right-32 w-[550px] h-[550px] bg-fuchsia-600/15 rounded-full blur-[140px]" />
        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-900/10 rounded-full blur-[150px]" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 flex flex-col justify-start">
        {/* Hero Section with Logo, Flanked Robot & Phone, and Headline */}
        <HeroSection />

        {/* Video Demo Section */}
        <VideoDemoSection />

        {/* Pricing Cards Grid */}
        <PricingGrid onSelectPlan={handleSelectPlan} />
      </main>

      {/* Bottom Features Ribbon */}
      <div className="relative z-10">
        <BottomFeatures />
      </div>

      {/* WhatsApp Modal with Mandatory Validation Form and Official Link */}
      <WhatsAppModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Persistent Floating WhatsApp Button for general inquiries */}
      <FloatingWhatsApp />
    </div>
  );
}
