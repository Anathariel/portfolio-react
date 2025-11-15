/**
 * ==========================================
 * HOOK PERSONNALISÉ : useAurora
 * ==========================================
 *
 * Ce hook crée un effet d'aurore boréale animée en utilisant Canvas API.
 * C'est un effet visuel complexe qui utilise plusieurs techniques avancées.
 *
 * CONCEPTS AVANCÉS UTILISÉS :
 * - Canvas API : Pour dessiner des graphiques 2D
 * - Double Canvas : Une pour dessiner, une pour appliquer le flou (performances)
 * - SimplexNoise : Algorithme pour générer du bruit naturel (mouvement fluide)
 * - RequestAnimationFrame : Pour des animations fluides (60 FPS)
 * - TypedArray (Float32Array) : Stockage optimisé des données de particules
 *
 * COMMENT ÇA FONCTIONNE :
 * 1. Crée des "rayons" de lumière colorés qui bougent verticalement
 * 2. Utilise le bruit Simplex pour un mouvement naturel et organique
 * 3. Applique un flou gaussien pour l'effet aurore boréale
 * 4. Anime en boucle avec requestAnimationFrame
 *
 * UTILISATION DANS UN COMPOSANT :
 * const containerRef = useAurora();
 * return <div ref={containerRef}>Contenu</div>
 *
 * NOTE POUR LES DÉBUTANTS :
 * Ce code est avancé ! Si vous débutez, concentrez-vous sur :
 * - Comment utiliser le hook (ligne ci-dessus)
 * - Le useEffect pour comprendre le cycle de vie
 * - Le cleanup (return) pour nettoyer les ressources
 */

import { useEffect, useRef } from 'react';

const useAurora = () => {
  // Refs pour stocker des valeurs qui persistent entre les rendus sans déclencher de re-render
  const containerRef = useRef(null); // Référence au conteneur DOM où l'aurore sera affichée
  const animationRef = useRef(null); // Référence à l'ID de l'animation (pour pouvoir l'annuler)

  useEffect(() => {
    // Récupère l'élément DOM du conteneur
    const container = containerRef.current;

    // Si le conteneur n'existe pas encore, on attend
    if (!container) {
      return;
    }

    // Variables pour l'effet aurore (déclarées avec let pour pouvoir être réinitialisées)
    let canvas;     // Objet contenant 2 canvas (a: pour dessiner, b: pour afficher avec flou)
    let ctx;        // Contextes 2D des deux canvas
    let center;     // Point central du canvas [x, y]
    let tick;       // Compteur de frames pour l'animation
    let simplex;    // Générateur de bruit Simplex (pour mouvement naturel)
    let rayProps;   // Tableau de propriétés de tous les rayons (Float32Array pour performance)
    let isInitialized = false; // Flag pour éviter la double initialisation

    /**
     * Initialise l'effet aurore
     * Attend que la bibliothèque SimplexNoise soit chargée (via script externe)
     */
    const initAurora = () => {
      // Vérifie si SimplexNoise est disponible (chargé via script dans index.html)
      if (!window.SimplexNoise) {
        // Si pas encore chargé, réessayer dans 100ms
        setTimeout(initAurora, 100);
        return;
      }

      // Évite d'initialiser deux fois
      if (isInitialized) return;
      isInitialized = true;

      // Original configuration (adjusted for subtlety)
      const rayPropCount = 8;
      const baseLength = 200;
      const rangeLength = 200;
      const baseSpeed = 0.05;
      const rangeSpeed = 0.1;
      const baseWidth = 6;    // Reduced from 10 to 6
      const rangeWidth = 12;  // Reduced from 20 to 12
      const baseHue = 120;
      const rangeHue = 60;
      const baseTTL = 50;
      const rangeTTL = 100;
      const noiseStrength = 100;
      const xOff = 0.0015;
      const yOff = 0.0015;
      const zOff = 0.0015;
      const backgroundColor = '#292727';

      // Dynamic ray count based on canvas area
      // 1 ray per 3000 pixels² for consistent density
      let rayCount = 500;
      let rayPropsLength = rayCount * rayPropCount;

      const rand = (n) => n * Math.random();
      const round = (n) => Math.round(n);
      const fadeInOut = (t, m) => {
        let hm = 0.5 * m;
        return Math.abs((t + hm) % m - hm) / hm;
      };

      const createCanvas = () => {
        canvas = {
          a: document.createElement('canvas'),
          b: document.createElement('canvas')
        };
        canvas.b.style = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        `;
        container.appendChild(canvas.b);
        ctx = {
          a: canvas.a.getContext('2d'),
          b: canvas.b.getContext('2d')
        };
        center = [];
      };

      const resize = () => {
        const { offsetWidth, offsetHeight } = container;

        // Set new dimensions (this automatically clears the canvas)
        canvas.a.width = offsetWidth;
        canvas.a.height = offsetHeight;

        canvas.b.width = offsetWidth;
        canvas.b.height = offsetHeight;

        // Update center point
        center[0] = 0.5 * canvas.a.width;
        center[1] = 0.5 * canvas.a.height;

        // Recalculate ray count based on new canvas area
        const area = offsetWidth * offsetHeight;
        rayCount = Math.floor(area / 8000); // 1 ray per 8000 pixels² (reduced for subtlety)
        rayCount = Math.max(50, Math.min(rayCount, 250)); // Clamp between 50-250
        rayPropsLength = rayCount * rayPropCount;

        // Reinitialize rays with new count
        initRays();

        // Clear both canvases completely to avoid accumulation
        ctx.a.clearRect(0, 0, offsetWidth, offsetHeight);
        ctx.b.fillStyle = backgroundColor;
        ctx.b.fillRect(0, 0, offsetWidth, offsetHeight);
      };

      const initRays = () => {
        // Only create SimplexNoise once
        if (!simplex) {
          simplex = new window.SimplexNoise();
          tick = 0;
        }

        // Create new array with current ray count
        rayProps = new Float32Array(rayPropsLength);

        // Initialize all rays
        for (let i = 0; i < rayPropsLength; i += rayPropCount) {
          initRay(i);
        }
      };

      const initRay = (i) => {
        let length, x, y1, y2, n, life, ttl, width, speed, hue;

        length = baseLength + rand(rangeLength);
        x = rand(canvas.a.width);
        y1 = center[1] + noiseStrength;
        y2 = center[1] + noiseStrength - length;
        n = simplex.noise3D(x * xOff, y1 * yOff, tick * zOff) * noiseStrength;
        y1 += n;
        y2 += n;
        life = 0;
        ttl = baseTTL + rand(rangeTTL);
        width = baseWidth + rand(rangeWidth);
        speed = baseSpeed + rand(rangeSpeed) * (round(rand(1)) ? 1 : -1);
        hue = baseHue + rand(rangeHue);

        rayProps.set([x, y1, y2, life, ttl, width, speed, hue], i);
      };

      const drawRays = () => {
        for (let i = 0; i < rayPropsLength; i += rayPropCount) {
          updateRay(i);
        }
      };

      const updateRay = (i) => {
        let i2 = 1 + i, i3 = 2 + i, i4 = 3 + i, i5 = 4 + i, i6 = 5 + i, i7 = 6 + i, i8 = 7 + i;
        let x, y1, y2, life, ttl, width, speed, hue;

        x = rayProps[i];
        y1 = rayProps[i2];
        y2 = rayProps[i3];
        life = rayProps[i4];
        ttl = rayProps[i5];
        width = rayProps[i6];
        speed = rayProps[i7];
        hue = rayProps[i8];

        drawRay(x, y1, y2, life, ttl, width, hue);

        x += speed;
        life++;

        rayProps[i] = x;
        rayProps[i4] = life;

        (checkBounds(x) || life > ttl) && initRay(i);
      };

      const drawRay = (x, y1, y2, life, ttl, width, hue) => {
        let gradient;

        // Reduced opacity (0.3 max instead of 1.0) and lightness (50% instead of 65%) for subtlety
        const opacity = fadeInOut(life, ttl) * 0.3;

        gradient = ctx.a.createLinearGradient(x, y1, x, y2);
        gradient.addColorStop(0, `hsla(${hue},100%,50%,0)`);
        gradient.addColorStop(0.5, `hsla(${hue},100%,50%,${opacity})`);
        gradient.addColorStop(1, `hsla(${hue},100%,50%,0)`);

        ctx.a.save();
        ctx.a.beginPath();
        ctx.a.strokeStyle = gradient;
        ctx.a.lineWidth = width;
        ctx.a.moveTo(x, y1);
        ctx.a.lineTo(x, y2);
        ctx.a.stroke();
        ctx.a.closePath();
        ctx.a.restore();
      };

      const checkBounds = (x) => {
        return x < 0 || x > canvas.a.width;
      };

      const render = () => {
        ctx.b.save();
        ctx.b.filter = 'blur(8px)';  // Reduced from 12px to 8px for less glow
        ctx.a.globalCompositeOperation = 'lighter';
        ctx.b.drawImage(canvas.a, 0, 0);
        ctx.b.restore();
      };

      const draw = () => {
        tick++;
        ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
        ctx.b.fillStyle = backgroundColor;
        ctx.b.fillRect(0, 0, canvas.b.width, canvas.a.height);
        drawRays();
        render();

        animationRef.current = requestAnimationFrame(draw);
      };

      const setup = () => {
        createCanvas();
        resize(); // This will also call initRays() with the correct ray count
        draw();
      };

      setup();
      window.addEventListener('resize', resize);
    };

    // Start initialization
    initAurora();

    return () => {
      window.removeEventListener('resize', () => {});
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (canvas && canvas.b && canvas.b.parentNode) {
        canvas.b.parentNode.removeChild(canvas.b);
      }
    };
  }, []);

  return containerRef;
};

export default useAurora;
