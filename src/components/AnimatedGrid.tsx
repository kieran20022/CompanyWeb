import { useEffect, useRef, useCallback } from "react";

interface AnimatedGridProps {
  className?: string;
  cellSize?: number;
  /** Base color for lit cells as [r, g, b] */
  color?: [number, number, number];
}

interface Cell {
  x: number;
  y: number;
  alpha: number;
  targetAlpha: number;
  delay: number;
  speed: number;
}

export default function AnimatedGrid({
  className = "",
  cellSize = 80,
  color = [245, 158, 11],
}: AnimatedGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cells = useRef<Cell[]>([]);
  const frame = useRef(0);
  const time = useRef(0);
  const size = useRef({ w: 0, h: 0 });
  const dpr = useRef(1);

  const initCells = useCallback(() => {
    const cols = Math.ceil(size.current.w / cellSize) + 1;
    const rows = Math.ceil(size.current.h / cellSize) + 1;
    const newCells: Cell[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Only ~8% of cells will ever light up — keeps it sparse and elegant
        if (Math.random() < 0.08) {
          newCells.push({
            x: c * cellSize,
            y: r * cellSize,
            alpha: 0,
            targetAlpha: 0,
            delay: Math.random() * 12,
            speed: 0.3 + Math.random() * 0.5,
          });
        }
      }
    }

    cells.current = newCells;
  }, [cellSize]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    time.current += 0.016; // ~60fps time step
    const t = time.current;

    ctx.clearRect(0, 0, size.current.w, size.current.h);

    // Draw base grid lines (very subtle)
    ctx.strokeStyle = `rgba(148, 163, 184, 0.06)`;
    ctx.lineWidth = 1;
    const cols = Math.ceil(size.current.w / cellSize) + 1;
    const rows = Math.ceil(size.current.h / cellSize) + 1;

    for (let c = 0; c <= cols; c++) {
      const x = c * cellSize;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, size.current.h);
      ctx.stroke();
    }
    for (let r = 0; r <= rows; r++) {
      const y = r * cellSize;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size.current.w, y);
      ctx.stroke();
    }

    // Animate cells
    for (const cell of cells.current) {
      // Each cell uses a sine wave offset by its unique delay to pulse in and out
      const wave = Math.sin((t - cell.delay) * cell.speed);
      cell.targetAlpha = wave > 0.3 ? (wave - 0.3) * 0.7 : 0;
      cell.alpha += (cell.targetAlpha - cell.alpha) * 0.04;

      if (cell.alpha > 0.005) {
        const pad = 2;
        const s = cellSize - pad * 2;

        // Filled square
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${cell.alpha * 0.12})`;
        ctx.fillRect(cell.x + pad, cell.y + pad, s, s);

        // Border glow
        ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${cell.alpha * 0.2})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(cell.x + pad, cell.y + pad, s, s);
      }
    }

    frame.current = requestAnimationFrame(animate);
  }, [cellSize, color]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    dpr.current = Math.min(window.devicePixelRatio || 1, 2);
    size.current.w = parent.offsetWidth;
    size.current.h = parent.offsetHeight;
    canvas.width = size.current.w * dpr.current;
    canvas.height = size.current.h * dpr.current;
    canvas.style.width = `${size.current.w}px`;
    canvas.style.height = `${size.current.h}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr.current, dpr.current);

    initCells();
  }, [initCells]);

  useEffect(() => {
    handleResize();
    frame.current = requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  );
}
