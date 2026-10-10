import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Lion Emblem with Crown & Arrow */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs for gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="purpleArrow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
          </defs>

          {/* Royal Crown */}
          <path
            d="M28 26 L36 34 L50 20 L64 34 L72 26 L68 40 L32 40 Z"
            fill="url(#goldGradient)"
            stroke="#FEF08A"
            strokeWidth="1.5"
          />
          {/* Crown Jewels */}
          <circle cx="28" cy="24" r="2.5" fill="#FDE047" />
          <circle cx="50" cy="18" r="3" fill="#FDE047" />
          <circle cx="72" cy="24" r="2.5" fill="#FDE047" />

          {/* Majestic Lion Face & Mane */}
          <path
            d="M50 40 C34 40 24 50 24 64 C24 78 35 88 50 88 C65 88 76 78 76 64 C76 50 66 40 50 40 Z"
            fill="url(#goldGradient)"
          />

          {/* Mane spikes / styling */}
          <path
            d="M20 54 L27 58 L19 66 L28 68 L22 78 L33 76 L31 85 L42 81 L46 88 L50 82 L54 88 L58 81 L69 85 L67 76 L78 78 L72 68 L81 66 L73 58 L80 54 L69 50 L50 42 L31 50 Z"
            fill="url(#goldGradient)"
            opacity="0.9"
          />

          {/* Lion Face Features */}
          {/* Eyes */}
          <path d="M40 58 Q43 54 46 58 Q43 60 40 58 Z" fill="#451A03" />
          <path d="M60 58 Q57 54 54 58 Q57 60 60 58 Z" fill="#451A03" />
          {/* Nose & Muzzle */}
          <polygon points="50,65 46,62 54,62" fill="#451A03" />
          <path
            d="M50 65 L50 71 M50 71 Q44 73 40 70 M50 71 Q56 73 60 70"
            stroke="#451A03"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Upward Growth Arrow */}
          <path
            d="M68 62 L85 45 M85 45 L76 44 M85 45 L86 54"
            stroke="url(#purpleArrow)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-black tracking-wider text-white uppercase drop-shadow-sm font-sans">
          SOCIAL<span className="text-purple-400">TROVE</span>
        </span>
      </div>
    </div>
  );
};
