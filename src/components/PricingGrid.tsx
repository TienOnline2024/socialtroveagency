import React from 'react';
import { Plan } from '../types';
import { Send, BarChart2, Crown, Check, ChevronRight } from 'lucide-react';
import { GiftIllustration } from './GiftIllustration';

interface PricingGridProps {
  onSelectPlan: (plan: Plan) => void;
}

export const PLANS_DATA: Plan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    subtitle: 'Emprendedores y pequeños negocios',
    originalPrice: 'US$29/mes',
    regularPrice: 'Precio habitual: US$29/mes',
    discountedPrice: 10,
    discountLabel: '66% OFF',
    description: 'Ideal para comenzar a automatizar tu atención por WhatsApp.',
    features: [
      '1 asistente de IA para WhatsApp',
      'Entrenamiento con información de tu negocio',
      'Respuestas automáticas a preguntas frecuentes',
      'Configuración básica de productos y servicios',
      'Personalización del tono de comunicación',
      'Implementación y soporte básico',
    ],
    bonus: {
      title: '1 SET DE 5 PLANTILLAS DE ANUNCIOS CON IA',
      description: '(imágenes + copies listos para usar)',
      value: 'US$50',
      giftType: 'single',
    },
  },
  {
    id: 'growth',
    name: 'GROWTH',
    badge: 'MÁS RECOMENDADO',
    isPopular: true,
    subtitle: 'Negocios en crecimiento',
    originalPrice: 'US$69/mes',
    regularPrice: 'Precio habitual: US$69/mes',
    discountedPrice: 15,
    discountLabel: '78% OFF',
    description: 'Para negocios que reciben muchas consultas y quieren vender más con WhatsApp.',
    features: [
      'Todo lo incluido en Starter',
      'Flujos comerciales personalizados',
      'Configuración de ofertas y productos',
      'Seguimiento automatizado de prospectos',
      'Funciones de voz e interpretación de imágenes',
      'Optimización periódica del asistente',
      'Soporte prioritario',
    ],
    bonus: {
      title: '1 VIDEO COMERCIAL CON IA (hasta 30 segundos)',
      description: 'para tu negocio o producto',
      value: 'US$100',
      giftType: 'triple',
    },
  },
  {
    id: 'business_pro',
    name: 'BUSINESS PRO',
    subtitle: 'Empresas y operaciones avanzadas',
    originalPrice: 'US$199/mes',
    regularPrice: 'Precio habitual: US$199/mes',
    discountedPrice: 149,
    discountLabel: '25% OFF',
    description: 'Para empresas con procesos más complejos y mayores necesidades de automatización.',
    features: [
      'Todo lo incluido en Growth',
      'Flujos avanzados de atención y ventas',
      'Automatización de seguimiento y posventa',
      'Integraciones adicionales (según disponibilidad)',
      'Apoyo para agendamiento y confirmaciones',
      'Revisión estratégica mensual',
      'Acompañamiento prioritario',
    ],
    bonus: {
      title: '1 ESTRATEGIA DIGITAL PERSONALIZADA',
      description: 'para aumentar tus ventas',
      value: 'US$200',
      giftType: 'pro',
    },
  },
];

export const PricingGrid: React.FC<PricingGridProps> = ({ onSelectPlan }) => {
  return (
    <section id="planes" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-7 items-stretch">
        {PLANS_DATA.map((plan) => {
          const isGrowth = plan.isPopular;

          return (
            <div
              key={plan.id}
              className={`relative rounded-[32px] flex flex-col justify-between transition-all duration-300 ${
                isGrowth
                  ? 'bg-gradient-to-b from-[#180b38] to-[#0e0724] border-2 border-fuchsia-500 shadow-[0_0_40px_rgba(217,70,239,0.35)] lg:-translate-y-2'
                  : 'bg-gradient-to-b from-[#110a26]/90 to-[#0a051a]/95 border border-purple-800/40 shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:border-purple-600/50'
              } p-6 sm:p-7`}
            >
              {/* "MÁS RECOMENDADO" Crown Badge floating above Growth card */}
              {isGrowth && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-pink-500/40 border border-fuchsia-300/40 whitespace-nowrap">
                    <Crown className="w-3.5 h-3.5 fill-white text-white" />
                    <span>MÁS RECOMENDADO</span>
                  </div>
                </div>
              )}

              <div>
                {/* Top Row: Icon, Title & OFERTA LIMITADA */}
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-purple-900/50 shrink-0">
                      {plan.id === 'starter' && <Send className="w-5 h-5 text-white" />}
                      {plan.id === 'growth' && <BarChart2 className="w-5 h-5 text-white" />}
                      {plan.id === 'business_pro' && <Crown className="w-5 h-5 text-white" />}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white tracking-wide">
                      {plan.name}
                    </h2>
                  </div>

                  <span className="bg-[#f59e0b] text-[#1c0d00] font-black text-[10px] sm:text-[11px] px-2.5 sm:px-3 py-1 rounded-full uppercase tracking-wider shrink-0 shadow-sm whitespace-nowrap">
                    OFERTA LIMITADA
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-purple-200/70 font-medium mb-4">
                  {plan.subtitle}
                </p>

                {/* Price Box */}
                <div className="mb-4">
                  <div className="text-xs sm:text-sm text-neutral-300 font-medium mb-1.5 flex items-center gap-1.5">
                    <span className="text-neutral-400">Precio original:</span>
                    <del className="line-through decoration-red-400/90 decoration-2 text-neutral-300 font-bold">
                      {plan.originalPrice || (plan.id === 'starter' ? 'US$29/mes' : plan.id === 'growth' ? 'US$69/mes' : 'US$199/mes')}
                    </del>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-baseline">
                      <span className="text-lg sm:text-xl font-bold text-white mr-1.5">US$</span>
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                        {plan.discountedPrice}
                      </span>
                      <span className="text-base sm:text-lg text-purple-300 font-medium ml-1.5">
                        /mes
                      </span>
                    </div>

                    <span className="bg-[#facc15] text-[#171000] font-black text-xs sm:text-sm px-2.5 py-1 rounded-full uppercase tracking-tight shadow-sm whitespace-nowrap">
                      {plan.discountLabel}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed mb-5">
                  {plan.description}
                </p>

                {/* Checklist with Purple Circles */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-purple-100/95 leading-snug">
                      <div className="w-4 h-4 rounded-full bg-purple-700/80 border border-purple-500/60 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Portion: Bonus Box + CTA Button */}
              <div className="space-y-4 pt-2">
                {/* BONUS BOX - No text clipping */}
                <div
                  className={`rounded-2xl p-3.5 flex items-center gap-3 border ${
                    plan.id === 'starter'
                      ? 'bg-gradient-to-r from-[#0d1e25]/90 to-[#08151c]/90 border-emerald-500/30'
                      : plan.id === 'growth'
                      ? 'bg-gradient-to-r from-[#220d2b]/95 to-[#16061e]/95 border-pink-500/40'
                      : 'bg-gradient-to-r from-[#1f1508]/90 to-[#120d04]/90 border-amber-500/40'
                  }`}
                >
                  <GiftIllustration type={plan.bonus.giftType} />

                  <div className="flex-1 min-w-0">
                    <div className="inline-block bg-amber-400 text-black font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                      BONO ESPECIAL
                    </div>
                    <p className="text-xs font-bold text-white leading-tight">
                      {plan.bonus.title}
                    </p>
                    <p className="text-[11px] text-purple-200/70 leading-tight mt-0.5">
                      {plan.bonus.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0 flex flex-col items-end pl-1">
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap ${
                        plan.id === 'growth'
                          ? 'bg-fuchsia-500 text-white shadow-sm'
                          : 'bg-amber-400 text-black'
                      }`}
                    >
                      GRATIS
                    </span>
                    <span className="text-[10px] text-white/90 font-bold mt-1 whitespace-nowrap">
                      Valor {plan.bonus.value}
                    </span>
                  </div>
                </div>

                {/* CTA BUTTON */}
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 px-5 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                    isGrowth
                      ? 'bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:brightness-115 active:scale-[0.98] text-white shadow-[0_0_30px_rgba(217,70,239,0.5)]'
                      : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 active:scale-[0.98] text-white shadow-lg shadow-indigo-950/60'
                  }`}
                >
                  <span>Quiero este plan ahora</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
