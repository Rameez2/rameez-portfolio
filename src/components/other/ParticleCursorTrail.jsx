import { useEffect, useRef } from 'react';

export default function ParticleCursorTrail() {
  const containerRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const size = 8 + Math.random() * 8;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.8 + 0.6})`;
      particle.style.opacity = '1';

      // Emoji alternative
      particle.innerHTML = '💜';

      container.appendChild(particle);

      particles.current.push({ el: particle, life: 1 });
    };

    const updateParticles = () => {
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life -= 0.02;
        if (p.life <= 0) {
          p.el.remove();
          particles.current.splice(i, 1);
        } else {
          p.el.style.opacity = p.life;
          p.el.style.transform = `translate(-50%, -50%) scale(${p.life})`;
        }
      }
      requestAnimationFrame(updateParticles);
    };

    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < 20) return;
      lastTime = now;
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateParticles);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particles.current.forEach((p) => p.el.remove());
      particles.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50"
    />
  );
}

