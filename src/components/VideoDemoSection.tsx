import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import socialTroveVideo from '../video/socialtrove video (1).mp4';

export const VideoDemoSection: React.FC = () => {
  const scrollToPricing = () => {
    const el = document.getElementById('planes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 text-center">
      {/* Decorative ambient lights behind the player */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-600/30 text-purple-200 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>Demostración en vivo</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto mb-3">
          Mira cómo funciona la{' '}
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            automatización de WhatsApp con IA
          </span>
        </h2>
        <p className="text-sm sm:text-base text-purple-200/80 max-w-2xl mx-auto leading-relaxed">
          Descubre cómo un asistente inteligente puede atender consultas, interpretar audios e imágenes, apoyar tus ventas y dar seguimiento a tus clientes.
        </p>
      </div>

      {/* Vertical 9:16 Video Player Container */}
      <div className="relative max-w-[320px] sm:max-w-[350px] mx-auto mb-8">
        {/* Smartphone-style framing */}
        <div className="relative rounded-[32px] sm:rounded-[36px] p-2 bg-[#0d0822] border-2 border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.35)] overflow-hidden">
          {/* Top Notch indicator */}
          <div className="w-20 h-4 bg-black/80 rounded-full mx-auto mb-2 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-purple-950" />
          </div>

          {/* 9:16 Real HTML5 Video Screen */}
          <div className="relative w-full aspect-[9/16] bg-black rounded-[24px] sm:rounded-[28px] overflow-hidden flex items-center justify-center">
            <video
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-contain bg-black"
            >
              <source src={socialTroveVideo} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>
      </div>

      {/* Conversion CTA Button connected to pricing flow */}
      <div>
        <button
          type="button"
          onClick={scrollToPricing}
          className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:brightness-115 active:scale-[0.98] text-white font-extrabold text-sm sm:text-base shadow-[0_0_30px_rgba(217,70,239,0.45)] transition-all cursor-pointer"
        >
          <span>Quiero automatizar mi WhatsApp</span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
