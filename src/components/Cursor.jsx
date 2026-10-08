import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const trailRefs = useRef([]);
  const trailIndex = useRef(0);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const speed = 0.15; // Lower = faster follow

  useEffect(() => {
    const updateCursor = () => {
      // Dot cursor - instant position (no delay)
      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
      }

      // Outline cursor - smooth follow with lerp
      if (outlineRef.current) {
        pos.current.x += (mouse.current.x - pos.current.x) * speed;
        pos.current.y += (mouse.current.y - pos.current.y) * speed;

        outlineRef.current.style.left = `${pos.current.x}px`;
        outlineRef.current.style.top = `${pos.current.y}px`;
      }

      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Create trail effect
      createTrail(e.clientX, e.clientY);
    };

    const createTrail = (x, y) => {
      if (trailIndex.current % 2 === 0) { // Reduce trail frequency for performance
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        document.body.appendChild(trail);

        trailRefs.current.push(trail);

        // Remove trail after animation
        setTimeout(() => {
          if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
          }
          trailRefs.current = trailRefs.current.filter(t => t !== trail);
        }, 400);
      }
      trailIndex.current++;
    };

    const handleMouseDown = () => {
      if (dotRef.current) dotRef.current.classList.add('click');
      if (outlineRef.current) outlineRef.current.classList.add('click');
    };

    const handleMouseUp = () => {
      if (dotRef.current) dotRef.current.classList.remove('click');
      if (outlineRef.current) outlineRef.current.classList.remove('click');
    };

    const handleMouseEnter = (e) => {
      if (e.target.matches('a, button, [role="button"], .clickable')) {
        if (dotRef.current) dotRef.current.classList.add('hover');
        if (outlineRef.current) outlineRef.current.classList.add('hover');
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.matches('a, button, [role="button"], .clickable')) {
        if (dotRef.current) dotRef.current.classList.remove('hover');
        if (outlineRef.current) outlineRef.current.classList.remove('hover');
      }
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Start animation loop
    updateCursor();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);

      // Clean up trails
      trailRefs.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot cursor-optimized" />
      <div ref={outlineRef} className="cursor-outline cursor-optimized" />
    </>
  );
};

export default Cursor;
