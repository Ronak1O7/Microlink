import { useState, useEffect } from "react";

import { motion, AnimatePresence } from 'framer-motion';
import Crossfader from './components/Crossfader';
import MicrolinkSide from './components/MicrolinkSide';
import WeddingSide from './components/WeddingSide';
import { audioEngine } from './utils/audio';


function App() {
  // faderValue ranges from -1 (Wedding) to 1 (EDM)
  const [faderValue, setFaderValue] = useState(0);
  const [isInteracted, setIsInteracted] = useState(false);

  useEffect(() => {
    if (isInteracted) {
      audioEngine.updateFader(faderValue);
    }
  }, [faderValue, isInteracted]);

  const handleInteract = () => {
    if (!isInteracted) {
      setIsInteracted(true);
      audioEngine.unlockAndPlay();
    }
  };

  // Determine overall theme based on fader position for body background
  // When close to center, keep it neutral/black.
  // Fades from black to warm white when going left (-1)
  const bgColor = faderValue < -0.2
    ? `rgba(250, 249, 246, ${Math.abs(faderValue)})` // Warm White
    : 'rgba(0, 0, 0, 1)'; // Black

  return (
    <div
      className="relative w-screen h-screen overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* Container for the two sides */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none">

        {/* Wedding Side (Left) */}
        <div
          className="absolute inset-0 origin-left"
          style={{
            opacity: faderValue < 0 ? Math.abs(faderValue) : 0,
            pointerEvents: faderValue < -0.5 ? 'auto' : 'none',
            zIndex: faderValue < 0 ? 10 : 0
          }}
        >
          <WeddingSide faderValue={faderValue} />
        </div>

        {/* EDM Side (Right) */}
        <div
          className="absolute inset-0 origin-right"
          style={{
            opacity: faderValue > 0 ? faderValue : 0,
            pointerEvents: faderValue > 0.5 ? 'auto' : 'none',
            zIndex: faderValue > 0 ? 10 : 0
          }}
        >
          <MicrolinkSide faderValue={faderValue} />
        </div>

      </div>

      {/* Crossfader UI Overlay */}
      <motion.div
        className="absolute w-full flex justify-center z-50 pointer-events-none"
        initial={{ top: '50%', y: '-50%' }}
        animate={{
          top: isInteracted && Math.abs(faderValue) > 0.2 ? '90%' : '50%',
          y: isInteracted && Math.abs(faderValue) > 0.2 ? 0 : '-50%'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      >
        <div className="pointer-events-auto w-full max-w-xl px-4">
          <Crossfader
            value={faderValue}
            onChange={(val) => {
              handleInteract();
              setFaderValue(val);
            }}
            isInteracted={isInteracted}
          />
        </div>
      </motion.div>

      {/* Initial Center Message */}
      <AnimatePresence>
        {!isInteracted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-40"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] uppercase animate-pulse">
              Drag to Explore
            </h1>
            <p className="mt-4 text-gray-300 tracking-widest text-sm uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              Sound Reactive Experience
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
