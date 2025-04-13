import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor: any = document.querySelector('.cursor');
    const ring: any = document.querySelector('.cursor-ring');

    let ringX = 0, ringY = 0;
    let targetX = 0, targetY = 0;
    const speed = 0.1;

    const handleMouseMove = (e:any) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
      targetX = x;
      targetY = y;
    };

    const animateRing = () => {
      ringX += (targetX - ringX) * speed;
      ringY += (targetY - ringY) * speed;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animateRing);
    };

    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    animateRing();

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor fixed w-3 h-3 bg-gradient-radial from-cyan-400 to-blue-700 rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(0,204,255,0.8)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      />
      <div
        className="cursor-ring fixed w-7 h-7 border border-cyan-400/60 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
