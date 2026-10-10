import React from 'react';
import { Infinity as InfinityIcon, TrendingUp, ShieldCheck, Cog, Users, Lock } from 'lucide-react';

export const BottomFeatures: React.FC = () => {
  const items = [
    { icon: <InfinityIcon className="w-4 h-4 text-purple-400" />, label: 'Atención 24/7' },
    { icon: <TrendingUp className="w-4 h-4 text-purple-400" />, label: 'Más oportunidades de venta' },
    { icon: <ShieldCheck className="w-4 h-4 text-purple-400" />, label: 'Implementación segura' },
    { icon: <Cog className="w-4 h-4 text-purple-400" />, label: 'Optimización continua' },
    { icon: <Users className="w-4 h-4 text-purple-400" />, label: 'Adaptado a tu negocio' },
    { icon: <Lock className="w-4 h-4 text-purple-400" />, label: 'Soporte prioritario' },
  ];

  return (
    <footer className="w-full border-t border-purple-900/40 bg-[#070414]/90 backdrop-blur-md py-5 px-4 mt-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-purple-200/90 hover:text-white transition-colors"
          >
            <span className="p-1 rounded-md bg-purple-950/60 border border-purple-800/40">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </footer>
  );
};
