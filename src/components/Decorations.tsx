interface DotGridProps {
  className?: string;
  cols?: number;
  rows?: number;
  dotColor?: string;
}

export function DotGrid({ className = "", cols = 3, rows = 5, dotColor = "bg-[#B2EDD4]" }: DotGridProps) {
  const total = cols * rows;
  return (
    <div
      className={`grid gap-2.5 pointer-events-none select-none ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className={`w-2.5 h-2.5 rounded-full ${dotColor}`} />
      ))}
    </div>
  );
}

interface ArcRingProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
  sizeClassName?: string;
  strokeWidth?: number;
  ringColor?: string;
}

export function ArcRing({
  position = 'top-right',
  className = '',
  sizeClassName = 'w-[320px] h-[320px] sm:w-[480px] sm:h-[480px]',
  strokeWidth = 36,
  ringColor = 'text-[#DDF3EA]',
}: ArcRingProps) {
  let posClasses = '-top-12 -right-12 sm:-top-20 sm:-right-20';
  let cx = 200;
  let cy = 0;

  if (position === 'bottom-left') {
    posClasses = '-bottom-12 -left-12 sm:-bottom-20 sm:-left-20';
    cx = 0;
    cy = 200;
  } else if (position === 'top-left') {
    posClasses = '-top-12 -left-12 sm:-top-20 sm:-left-20';
    cx = 0;
    cy = 0;
  } else if (position === 'bottom-right') {
    posClasses = '-bottom-12 -right-12 sm:-bottom-20 sm:-right-20';
    cx = 200;
    cy = 200;
  }

  return (
    <svg
      className={`absolute ${posClasses} ${sizeClassName} ${ringColor} pointer-events-none z-0 ${className}`}
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle cx={cx} cy={cy} r="140" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

interface GreenCircuitBackgroundProps {
  className?: string;
  opacity?: number;
}

export function GreenCircuitBackground({
  className = "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
  opacity = 0.22,
}: GreenCircuitBackgroundProps) {
  return (
    <div className={className}>
      <svg
        className="w-full h-full text-[#2CD97B]"
        style={{ opacity }}
        viewBox="0 0 650 350"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Circuit Track 1 */}
          <path d="M-20,40 L160,40 L200,80 L350,80 L390,120 L580,120" />
          <circle cx="580" cy="120" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 2 */}
          <path d="M-20,70 L140,70 L180,110 L330,110 L370,150 L540,150" />
          <circle cx="540" cy="150" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 3 */}
          <path d="M-20,130 L100,130 L140,170 L260,170 L300,210 L480,210" />
          <circle cx="480" cy="210" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 4 */}
          <path d="M-20,160 L80,160 L120,200 L240,200 L280,240 L450,240" />
          <circle cx="450" cy="240" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 5 */}
          <path d="M-20,220 L180,220 L220,180 L380,180 L410,210" />
          <circle cx="410" cy="210" r="6.5" fill="currentColor" />

          {/* Circuit Track 6 */}
          <path d="M-20,280 L120,280 L160,320 L320,320 L350,350 L520,350" />
          <circle cx="520" cy="350" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}
