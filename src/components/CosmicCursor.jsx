import { useEffect, useRef } from 'react';

/**
 * Cosmic Cursor Component
 * Creates a trail of star particles that follow the mouse cursor
 */
const CosmicCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      canvas.width = width;
      canvas.height = height;
    };
    resize();

    // Track mouse movement
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Create particle
    const createParticle = (x, y) => {
      const size = Math.random() * 2.5 + 0.5;
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.3 + 0.1;
      const speedX = Math.cos(angle) * speed;
      const speedY = Math.sin(angle) * speed;

      const colors = ['#86eae7', '#7fd3ff', '#a8e6cf', '#ffd3b6', '#ffffff'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        x,
        y,
        size,
        speedX,
        speedY,
        life: 1,
        decay: Math.random() * 0.02 + 0.015,
        color,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      };
    };

    // Animation loop
    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime.current;
      lastTime.current = currentTime;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      if (deltaTime < 50) {
        particles.current.push(createParticle(mousePos.current.x, mousePos.current.y));
      }

      particles.current = particles.current.filter(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.life -= particle.decay;
        particle.rotation += particle.rotationSpeed;

        if (particle.life <= 0) return false;

        ctx.save();
        ctx.globalAlpha = particle.life * 0.7;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;

        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.beginPath();

        const spikes = 5;
        const outerRadius = particle.size;
        const innerRadius = particle.size / 2;

        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (Math.PI / spikes) * i;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.closePath();
        ctx.fill();
        ctx.restore();

        return true;
      });

      if (particles.current.length > 150) {
        particles.current = particles.current.slice(-150);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 100,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default CosmicCursor;