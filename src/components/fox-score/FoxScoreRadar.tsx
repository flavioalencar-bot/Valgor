"use client";

import { RADAR_LABELS, type RadarKey } from "@/lib/fox-score/enrich";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  radar: Record<RadarKey, number>;
  className?: string;
};

const AXES = Object.keys(RADAR_LABELS) as RadarKey[];

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function FoxScoreRadar({ radar, className }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 900;
    let frame: number;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - t, 2));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [radar]);

  const cx = 160;
  const cy = 160;
  const maxR = 110;
  const n = AXES.length;
  const gridLevels = [25, 50, 75, 100];

  const dataPoints = AXES.map((key, i) => {
    const angle = (360 / n) * i;
    const r = (radar[key] / 100) * maxR * progress;
    return polar(cx, cy, r, angle);
  });

  const polygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className={cn("mx-auto w-full max-w-sm", className)}>
      <svg viewBox="0 0 320 340" className="h-auto w-full" role="img" aria-label="Gráfico radar Valgor Score">
        {gridLevels.map((level) => {
          const pts = AXES.map((_, i) => {
            const p = polar(cx, cy, (level / 100) * maxR, (360 / n) * i);
            return `${p.x},${p.y}`;
          }).join(" ");
          return (
            <polygon
              key={level}
              points={pts}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.12}
              strokeWidth={1}
            />
          );
        })}

        {AXES.map((key, i) => {
          const outer = polar(cx, cy, maxR, (360 / n) * i);
          const label = polar(cx, cy, maxR + 22, (360 / n) * i);
          return (
            <g key={key}>
              <line x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke="currentColor" strokeOpacity={0.1} />
              <text
                x={label.x}
                y={label.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-muted text-[9px] font-medium"
              >
                {RADAR_LABELS[key]}
              </text>
            </g>
          );
        })}

        <motion.polygon
          points={polygon}
          className="fill-fox-500/25 stroke-fox-500"
          strokeWidth={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {dataPoints.map((p, i) => (
          <circle key={AXES[i]} cx={p.x} cy={p.y} r={3.5} className="fill-fox-500" />
        ))}
      </svg>
    </div>
  );
}
