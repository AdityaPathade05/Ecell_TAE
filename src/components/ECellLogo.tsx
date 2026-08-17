import React from 'react';
import ecellLogoAsset from '../assets/ecell_circle_only (1).png';

interface ECellLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const ECellLogo: React.FC<ECellLogoProps> = ({ 
  className = "w-10 h-10", 
  size = 48,
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={ecellLogoAsset}
        alt="E-Cell TAE Official Logo"
        referrerPolicy="no-referrer"
        onError={(e) => {
          e.currentTarget.src = ecellLogoAsset;
        }}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
};
