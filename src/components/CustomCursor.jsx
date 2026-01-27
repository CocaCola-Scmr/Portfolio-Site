import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check for hoverable elements
    const handleElementHover = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      if (hoveredElement) {
        const isClickable =
          hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.closest('a') ||
          hoveredElement.closest('button') ||
          hoveredElement.getAttribute('role') === 'button' ||
          hoveredElement.classList.contains('cursor-pointer') ||
          window.getComputedStyle(hoveredElement).cursor === 'pointer';
        setIsHovering(isClickable);
      }
    };

    const onMouseMove = (e) => {
      updatePosition(e);
      handleElementHover();
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.5 : 1,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
        scale: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
      style={{
        translateX: '-50%',
        translateY: '-50%',
        mixBlendMode: 'difference',
      }}
    >
      {/* Outer glow/blur ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          filter: 'blur(6px)',
        }}
      />
      {/* Main cursor circle */}
      <div
        className="rounded-full"
        style={{
          width: '20px',
          height: '20px',
          background: 'rgba(255, 255, 255, 0.7)',
          filter: 'blur(1px)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      />
    </motion.div>
  );
}

export default CustomCursor;
