import { useEffect, useRef, useCallback } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  color?: string;
  size?: number;
  speed?: number;
  vx?: number;
  vy?: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  targetAlpha: number;
}

export default function Particles({
  className = "",
  quantity = 80,
  color = "255, 255, 255",
  size = 1.2,
  speed = 0.3,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrame = useRef<number>(0);
  const mouse = useRef({ x: -1000, y: -1000 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = useRef(1);

  const createParticle = useCallback((): Particle => {
    const w = canvasSize.current.w;
    const h = canvasSize.current.h;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * size + 0.5,
      alpha: 0,
      targetAlpha: Math.random() * 0.6 + 0.1,
    };
  }, [size, speed]);

  const initParticles = useCallback(() => {
    particles.current = Array.from({ length: quantity }, () => createParticle());
  }, [quantity, createParticle]);

  const drawParticle = useCallback(
    (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
      ctx.fill();
    },
    [color],
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    for (const p of particles.current) {
      // Fade in
      p.alpha += (p.targetAlpha - p.alpha) * 0.02;

      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Mouse repulsion
      const dx = p.x - mouse.current.x;
      const dy = p.y - mouse.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.x += (dx / dist) * force * 1.5;
        p.y += (dy / dist) * force * 1.5;
      }

      // Wrap around edges
      const w = canvasSize.current.w;
      const h = canvasSize.current.h;
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      drawParticle(ctx, p);
    }

    // Draw connections
    const connectionDist = 100;
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const a = particles.current[i];
        const b = particles.current[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist) {
          const opacity = (1 - dist / connectionDist) * 0.15 * Math.min(a.alpha, b.alpha);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${color}, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animationFrame.current = requestAnimationFrame(animate);
  }, [color, drawParticle]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    dpr.current = Math.min(window.devicePixelRatio || 1, 2);
    canvasSize.current.w = parent.offsetWidth;
    canvasSize.current.h = parent.offsetHeight;
    canvas.width = canvasSize.current.w * dpr.current;
    canvas.height = canvasSize.current.h * dpr.current;
    canvas.style.width = `${canvasSize.current.w}px`;
    canvas.style.height = `${canvasSize.current.h}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr.current, dpr.current);

    initParticles();
  }, [initParticles]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouse.current.x = -1000;
    mouse.current.y = -1000;
  }, []);

  useEffect(() => {
    handleResize();
    animationFrame.current = requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);

    const canvas = canvasRef.current;
    canvas?.addEventListener("mousemove", handleMouseMove);
    canvas?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame.current);
      window.removeEventListener("resize", handleResize);
      canvas?.removeEventListener("mousemove", handleMouseMove);
      canvas?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleResize, animate, handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto absolute inset-0 ${className}`}
    />
  );
}
