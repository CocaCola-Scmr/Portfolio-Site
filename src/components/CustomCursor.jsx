import { useEffect, useRef, useState } from 'react';

function CustomCursor() {
  const cursorRef = useRef(null);
  const position = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let rafId = null;

    const updateCursor = () => {
      if (cursor) {
        cursor.style.transform = `translate(${position.current.x}px, ${position.current.y}px) translate(-50%, -50%) scale(${isHovering ? 2 : 1})`;
      }
    };

    const onMouseMove = (e) => {
      position.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) setIsVisible(true);

      // Check for hoverable elements
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
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

      // Use RAF for smooth updates
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCursor);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isHovering, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        opacity: isVisible ? 1 : 0,
        mixBlendMode: 'difference',
        willChange: 'transform',
        transition: 'opacity 0.2s ease, transform 0.07s ease-out',
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
    </div>
  );
}

export default CustomCursor;
