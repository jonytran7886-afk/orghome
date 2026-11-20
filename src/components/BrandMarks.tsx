import React from 'react';

export function OrganicVietnamLogo({
  className = 'h-10 w-auto',
  variant = 'default',
}: {
  className?: string;
  variant?: 'default' | 'badge';
}) {
  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-sm">
        <img
          src="/assets/aistudio/organic_logo_f2852233.png"
          alt="Organic Việt Nam"
          referrerPolicy="no-referrer"
          className={`${className} object-contain`}
        />
      </div>
    );
  }

  return (
    <img
      src="/assets/aistudio/organic_logo_f2852233.png"
      alt="Organic Việt Nam"
      referrerPolicy="no-referrer"
      className={`${className} object-contain`}
    />
  );
}

export function AdigoFullLogo({ className = 'h-10 w-auto' }: { className?: string }) {
  return (
    <img
      src="/assets/aistudio/adigo_logo_7f7bf7f5.png"
      alt="ADIGO"
      referrerPolicy="no-referrer"
      className={`${className} object-contain`}
    />
  );
}
