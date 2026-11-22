import React from 'react';

export const Logo = ({
  className = "",
  imgClassName = "w-10 h-10 md:w-12 md:h-12",
}: {
  className?: string;
  imgClassName?: string;
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src="/images/freshNdry.png"
        alt="Fresh N Dry Products Logo"
        className={`${imgClassName} object-cover rounded-full`}
      />
    </div>
  );
};
