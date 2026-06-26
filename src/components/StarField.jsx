import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 5000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.2 + 0.2,
          alpha: Math.random() * 0.7 + 0.1,
          drift: (Math.random() - 0.5) * 0.06,
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          twinkleDir: Math.random() > 0.5 ? 1 : -1,
          isGold: Math.random() < 0.05,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha >= 0.85 || s.alpha <= 0.05) s.twinkleDir *= -1;
        s.x += s.drift;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.isGold ? s.r * 1.5 : s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.isGold
          ? `rgba(201,169,110,${s.alpha * 0.9})`
          : `rgba(232,224,208,${s.alpha})`;
        ctx.fill();

        if (s.isGold && s.alpha > 0.5) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          grd.addColorStop(0, `rgba(201,169,110,${s.alpha * 0.15})`);
          grd.addColorStop(1, 'rgba(201,169,110,0)');
          ctx.fillStyle = grd;
          ctx.fill();
        }
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0, pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  );
}
