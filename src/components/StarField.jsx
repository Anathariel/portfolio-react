import { useEffect, useRef } from 'react';

/**
 * StarField Component
 * Creates a parallax starfield effect with twinkling stars
 * Multiple layers for depth perception
 */
const StarField = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Get random star color from cosmic palette
    const getStarColor = () => {
      const colors = [
        '#ffffff', // white
        '#86eae7', // cyan
        '#a78bfa', // purple
        '#60a5fa', // blue
        '#fbbf24', // yellow
      ];
      const weights = [0.5, 0.2, 0.15, 0.1, 0.05]; // White is most common

      let random = Math.random();
      let sum = 0;

      for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        if (random <= sum) return colors[i];
      }

      return colors[0];
    };

    // Create stars with different layers for parallax
    const initStars = () => {
      starsRef.current = [];
      const starCount = Math.floor((width * height) / 3000);

      for (let i = 0; i < starCount; i++) {
        const layer = Math.floor(Math.random() * 3); // 3 layers of depth
        const size = layer === 0 ? Math.random() * 1.5 + 0.5 :
                     layer === 1 ? Math.random() * 1 + 0.3 :
                     Math.random() * 0.5 + 0.1;

        starsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          size,
          layer, // 0 = closest, 2 = farthest
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          brightness: Math.random() * 0.5 + 0.5,
          color: getStarColor()
        });
      }
    };

    // Set canvas size
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    // Track mouse for parallax effect
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / width - 0.5) * 2,
        y: (e.clientY / height - 0.5) * 2
      };
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(26, 26, 46, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Draw and update stars
      starsRef.current.forEach(star => {
        // Update twinkle effect
        star.twinkle += star.twinkleSpeed;
        const twinkleAlpha = (Math.sin(star.twinkle) + 1) / 2;

        // Parallax effect based on layer and mouse position
        const parallaxFactor = (3 - star.layer) * 0.02;
        star.x = star.baseX + mousePos.current.x * parallaxFactor * 20;
        star.y = star.baseY + mousePos.current.y * parallaxFactor * 20;

        // Keep stars within bounds (with wrapping)
        if (star.x < 0) star.x += width;
        if (star.x > width) star.x -= width;
        if (star.y < 0) star.y += height;
        if (star.y > height) star.y -= height;

        // Draw star
        ctx.save();

        const alpha = star.brightness * twinkleAlpha * (star.layer === 0 ? 1 : star.layer === 1 ? 0.7 : 0.4);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = star.color;

        // Add glow for brighter stars
        if (star.size > 1 && star.layer === 0) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = star.color;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
        zIndex: 0
      }}
    />
  );
};

export default StarField;
