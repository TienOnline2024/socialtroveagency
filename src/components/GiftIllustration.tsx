import React from 'react';

interface GiftProps {
  type: 'single' | 'triple' | 'pro';
  className?: string;
}

export const GiftIllustration: React.FC<GiftProps> = ({ type, className = '' }) => {
  if (type === 'triple') {
    // 3 Gift boxes (Growth bonus)
    return (
      <div className={`relative w-16 h-16 shrink-0 flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(239,68,68,0.4)]" fill="none">
          <defs>
            <linearGradient id="redGift" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
          </defs>

          {/* Left smaller gift */}
          <g transform="translate(5, 30) scale(0.65)">
            <rect x="10" y="25" width="40" height="40" rx="3" fill="url(#redGift)" />
            <rect x="6" y="16" width="48" height="12" rx="2" fill="#DC2626" />
            <rect x="26" y="16" width="8" height="49" fill="url(#goldRibbon)" />
            <rect x="6" y="32" width="48" height="8" fill="url(#goldRibbon)" />
            {/* Bow */}
            <path d="M22 16 C15 5 30 5 30 16 Z" fill="url(#goldRibbon)" />
            <path d="M38 16 C45 5 30 5 30 16 Z" fill="url(#goldRibbon)" />
          </g>

          {/* Right smaller gift */}
          <g transform="translate(45, 32) scale(0.6)">
            <rect x="10" y="25" width="40" height="40" rx="3" fill="url(#redGift)" />
            <rect x="6" y="16" width="48" height="12" rx="2" fill="#DC2626" />
            <rect x="26" y="16" width="8" height="49" fill="url(#goldRibbon)" />
            <rect x="6" y="32" width="48" height="8" fill="url(#goldRibbon)" />
            <path d="M22 16 C15 5 30 5 30 16 Z" fill="url(#goldRibbon)" />
            <path d="M38 16 C45 5 30 5 30 16 Z" fill="url(#goldRibbon)" />
          </g>

          {/* Center main gift */}
          <g transform="translate(22, 22)">
            <rect x="8" y="26" width="46" height="42" rx="4" fill="url(#redGift)" stroke="#B91C1C" strokeWidth="1" />
            <rect x="4" y="16" width="54" height="13" rx="3" fill="#EF4444" />
            <rect x="26" y="16" width="10" height="52" fill="url(#goldRibbon)" />
            <rect x="4" y="34" width="54" height="10" fill="url(#goldRibbon)" />
            {/* Main Bow */}
            <path d="M20 16 C10 2 31 2 31 16 Z" fill="url(#goldRibbon)" />
            <path d="M42 16 C52 2 31 2 31 16 Z" fill="url(#goldRibbon)" />
            <circle cx="31" cy="16" r="3.5" fill="#FEF08A" />
          </g>
        </svg>
      </div>
    );
  }

  // Single Gift (Starter: purple box with gold ribbon)
  return (
    <div className={`relative w-14 h-14 shrink-0 flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_4px_12px_rgba(168,85,247,0.4)]" fill="none">
        <defs>
          <linearGradient id={type === 'pro' ? 'goldBox' : 'purpleGift'} x1="0%" y1="0%" x2="100%" y2="100%">
            {type === 'pro' ? (
              <>
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#4338CA" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#581C87" />
              </>
            )}
          </linearGradient>
          <linearGradient id="singleRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
        </defs>

        {/* Box Body */}
        <rect x="20" y="38" width="60" height="48" rx="5" fill={`url(#${type === 'pro' ? 'goldBox' : 'purpleGift'})`} stroke="#A855F7" strokeWidth="1" />
        {/* Box Lid */}
        <rect x="15" y="26" width="70" height="16" rx="4" fill={type === 'pro' ? '#4F46E5' : '#7C3AED'} />
        {/* Vertical Ribbon */}
        <rect x="44" y="26" width="12" height="60" fill="url(#singleRibbon)" />
        {/* Horizontal Ribbon */}
        <rect x="15" y="48" width="70" height="12" fill="url(#singleRibbon)" />
        {/* Big Bow on Top */}
        <path d="M35 26 C15 8 50 8 50 26 Z" fill="url(#singleRibbon)" />
        <path d="M65 26 C85 8 50 8 50 26 Z" fill="url(#singleRibbon)" />
        <circle cx="50" cy="26" r="4.5" fill="#FEF08A" />
      </svg>
    </div>
  );
};
