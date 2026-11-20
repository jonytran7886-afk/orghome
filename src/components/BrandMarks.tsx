import React from 'react';

export function OrganicVietnamLogo({
  className = 'h-10 w-auto',
  variant = 'default',
  layout = 'horizontal',
}: {
  className?: string;
  variant?: 'default' | 'badge';
  layout?: 'horizontal' | 'stacked';
}) {
  if (layout === 'stacked') {
    return (
      <div className="inline-flex flex-col items-center text-center select-none">
        <img
          src="/assets/aistudio/OrganicVN_Symbol_Color_6f549aad.png"
          alt="Organic Việt Nam"
          referrerPolicy="no-referrer"
          className={`${className} object-contain`}
        />
        <span className="mt-1.5 text-base sm:text-lg font-bold tracking-[0.08em] text-[#14331E] leading-none">
          ORGANIC
        </span>
        <span className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] text-[#3F8429] leading-none">
          VIỆT NAM
        </span>
      </div>
    );
  }

  const innerContent = (
    <div className="inline-flex items-center gap-2.5 select-none">
      <img
        src="/assets/aistudio/OrganicVN_Symbol_Color_6f549aad.png"
        alt="Organic Việt Nam"
        referrerPolicy="no-referrer"
        className={`${className} object-contain shrink-0`}
      />
      <div className="flex flex-col leading-none">
        <span className="text-sm sm:text-base font-bold tracking-[0.06em] text-[#14331E]">
          ORGANIC
        </span>
        <span className="mt-0.5 text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-[#3F8429]">
          VIỆT NAM
        </span>
      </div>
    </div>
  );

  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center bg-white rounded-xl px-3.5 py-2 shadow-sm">
        {innerContent}
      </div>
    );
  }

  return innerContent;
}

export function AdigoFullLogo({
  className = 'h-10 w-auto',
  layout = 'stacked',
  inverse = false,
}: {
  className?: string;
  layout?: 'horizontal' | 'stacked';
  inverse?: boolean;
}) {
  if (layout === 'horizontal') {
    return (
      <span className="inline-flex items-center gap-2 select-none">
        <img
          src="/images/adigo-symbol-hq.png"
          alt="ADIGO"
          referrerPolicy="no-referrer"
          className={`${className} object-contain shrink-0`}
        />
        <span
          className={`font-extrabold tracking-tight leading-none ${
            inverse ? 'text-white' : 'text-[#0E599F]'
          }`}
          style={{ fontSize: '1.15em' }}
        >
          ADIGO
        </span>
      </span>
    );
  }

  return (
    <img
      src="/assets/aistudio/adigo_logo_7f7bf7f5.png"
      alt="ADIGO"
      referrerPolicy="no-referrer"
      className={`${className} object-contain`}
    />
  );
}
