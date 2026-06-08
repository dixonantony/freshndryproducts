import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src="/images/freshNdry.jpeg"
        alt="Fresh N Dry Products Logo"
        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
      />
    </div>
  );
};

