import { motion } from 'framer-motion';
import { useMemo } from 'react';

/**
 * Generates random particles for the floating effect
 */
function generateParticles(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    startY: Math.random() * 110, // Random starting position across the viewport
    size: Math.random() * 2.5 + 1.5,
    duration: Math.random() * 20 + 25,
    opacity: Math.random() * 0.4 + 0.3,
  }));
}

/**
 * Reusable animated background component for non-landing pages.
 * Features floating gradient blobs, optional grid overlay, and floating particles.
 */
function PageBackground({ showGrid = true, showParticles = true, particleCount = 30 }) {
  const particles = useMemo(() => generateParticles(particleCount), [particleCount]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Floating particles */}
      {showParticles && (
        <div className="absolute inset-0">
          {particles.map((particle) => {
            // Calculate how long it takes to go from startY to -10vh
            const remainingDistance = particle.startY + 10;
            const fullDistance = 120; // 110vh to -10vh
            const initialDuration = (remainingDistance / fullDistance) * particle.duration;

            return (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${particle.x}%`,
                  width: particle.size,
                  height: particle.size,
                  opacity: particle.opacity,
                }}
                initial={{ y: `${particle.startY}vh` }}
                animate={{ y: [null, '-10vh', '110vh', '-10vh'] }}
                transition={{
                  duration: particle.duration,
                  times: [
                    0,
                    initialDuration / particle.duration,
                    initialDuration / particle.duration,
                    1,
                  ],
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                }}
              />
            );
          })}
        </div>
      )}

      {/* Subtle grid overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      )}

      {/* Cyan gradient blob - top left */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] min-w-[800px] bg-[#04CFED]/7 rounded-full blur-[140px]"
      />

      {/* Magenta gradient blob - bottom right */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] min-w-[800px] bg-[#E503E8]/7 rounded-full blur-[140px]"
      />

      {/* Optional center accent glow */}
      <motion.div
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-gradient-to-br from-[#04CFED]/3 to-[#E503E8]/3 rounded-full blur-[100px]"
      />
    </div>
  );
}

export default PageBackground;
