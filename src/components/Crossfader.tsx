import { motion, useMotionValue } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CrossfaderProps {
  value: number;
  onChange: (val: number) => void;
  isInteracted: boolean;
}

export default function Crossfader({ value, onChange, isInteracted }: CrossfaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0); // Native pixels

  // To avoid unneeded re-renders when it's not being dragged directly.
  useEffect(() => {
    if (containerRef.current && handleRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const handleWidth = handleRef.current.offsetWidth;
      const maxDrag = (containerWidth - handleWidth) / 2;
      // Convert normalized (-1 to 1) back to pixels
      dragX.set(value * maxDrag);
    }
  }, [value, dragX]);

  const handleDrag = () => {
    if (containerRef.current && handleRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const handleWidth = handleRef.current.offsetWidth;
      const maxDrag = (containerWidth - handleWidth) / 2;

      const normalizedValue = dragX.get() / maxDrag;
      // Clamp between -1 and 1 just in case
      const clamped = Math.max(-1, Math.min(1, normalizedValue));
      onChange(clamped);
    }
  };

  // Convert fader [-1, 1] to opacity for labels [1, 0, 1]


  return (
    <div className="relative w-full py-8 flex flex-col items-center select-none group">

      {/* Background Track */}
      <div
        ref={containerRef}
        className={cn(
          "relative h-16 w-full max-w-2xl rounded-full overflow-hidden transition-all duration-500",
          isInteracted
            ? "glass border-gray-600 bg-gray-900/50"
            : "glass border-gray-500 bg-gray-800/80 shadow-[0_0_20px_rgba(0,255,255,0.2)]"
        )}
      >
        {/* Glow effect on the track based on position */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-champagne-gold/20 via-transparent to-cyan-glow/20 pointer-events-none"
          style={{
            opacity: isInteracted ? 1 : 0.5
          }}
        />

        {/* Labels Inside Track */}
        <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none w-full">
          <motion.span
            className="text-champagne-gold font-serif tracking-widest text-sm font-semibold whitespace-nowrap hidden sm:block"
            animate={{ opacity: value < -0.1 ? 1 : 0.4 }}
          >
            WEDDINGS ←
          </motion.span>
          <motion.span
            className="text-cyan-glow font-mono tracking-widest text-sm font-bold whitespace-nowrap hidden sm:block"
            animate={{ opacity: value > 0.1 ? 1 : 0.4 }}
          >
            M!CROL!NK →
          </motion.span>
        </div>

        {/* Center line */}
        <div className="absolute left-1/2 top-1/4 bottom-1/4 w-[2px] bg-white/20 -translate-x-1/2 rounded-full pointer-events-none" />

        {/* Draggable Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full py-1">
          <motion.div
            ref={handleRef}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
            style={{ x: dragX }}
            className={cn(
              "h-full aspect-square rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-xl transition-colors duration-300",
              value < -0.2 ? "bg-champagne-gold shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                : value > 0.2 ? "bg-cyan-glow shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                : "bg-gray-300 shadow-md"
            )}
          >
            <div className="w-1/3 h-1/2 flex justify-between">
              <div className="w-[2px] h-full bg-black/30 rounded-full" />
              <div className="w-[2px] h-full bg-black/30 rounded-full" />
              <div className="w-[2px] h-full bg-black/30 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}