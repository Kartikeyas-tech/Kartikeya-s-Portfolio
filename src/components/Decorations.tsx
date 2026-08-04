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
  preserveAspectRatio?: string;
}

export function GreenCircuitBackground({
  className = "absolute inset-0 pointer-events-none overflow-hidden select-none z-0",
  opacity = 0.25,
  preserveAspectRatio = "xMinYMid meet",
}: GreenCircuitBackgroundProps) {
  return (
    <div className={className}>
      <svg
        className="w-full h-full text-[#2CD97B]"
        style={{ opacity }}
        viewBox="0 0 650 480"
        fill="none"
        preserveAspectRatio={preserveAspectRatio}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Top Circuit Track */}
          <path d="M-20,20 L180,20 L220,60 L370,60 L410,100 L590,100" />
          <circle cx="590" cy="100" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 1 */}
          <path d="M-20,70 L160,70 L200,110 L350,110 L390,150 L580,150" />
          <circle cx="580" cy="150" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 2 */}
          <path d="M-20,100 L140,100 L180,140 L330,140 L370,180 L540,180" />
          <circle cx="540" cy="180" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 3 */}
          <path d="M-20,160 L100,160 L140,200 L260,200 L300,240 L480,240" />
          <circle cx="480" cy="240" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 4 */}
          <path d="M-20,190 L80,190 L120,230 L240,230 L280,270 L450,270" />
          <circle cx="450" cy="270" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Circuit Track 5 */}
          <path d="M-20,250 L180,250 L220,210 L380,210 L410,240" />
          <circle cx="410" cy="240" r="6.5" fill="currentColor" />

          {/* Circuit Track 6 */}
          <path d="M-20,310 L120,310 L160,350 L320,350 L350,380 L520,380" />
          <circle cx="520" cy="350" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Bottom Circuit Track 1 */}
          <path d="M-20,370 L140,370 L180,410 L310,410 L350,440 L490,440" />
          <circle cx="490" cy="440" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />

          {/* Bottom Circuit Track 2 */}
          <path d="M-20,430 L100,430 L140,460 L280,460 L310,475 L430,475" />
          <circle cx="430" cy="475" r="7.5" fill="#081220" stroke="currentColor" strokeWidth="3.5" />
        </g>
      </svg>
    </div>
  );
}
