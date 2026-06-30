import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "full" | "mark";
  crosshairClass?: string;
};

function TargetO({
  cx,
  cy,
  r,
  crosshairClass = "fill-background",
}: {
  cx: number;
  cy: number;
  r: number;
  crosshairClass?: string;
}) {
  return (
    <g>
      <path
        d={`M ${cx} ${cy - r} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        className="stroke-valgor-500"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx + r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy + r}`}
        fill="none"
        className="stroke-foreground"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx} ${cy + r} A ${r} ${r} 0 0 1 ${cx - r} ${cy}`}
        fill="none"
        className="stroke-foreground"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx} ${cy - r}`}
        fill="none"
        className="stroke-foreground"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={r - 8} fill="none" className="stroke-foreground" strokeWidth="2.5" />
      <rect x={cx - 1.25} y={cy - r + 2} width={2.5} height={(r - 2) * 2} className={crosshairClass} />
      <rect x={cx - r + 2} y={cy - 1.25} width={(r - 2) * 2} height={2.5} className={crosshairClass} />
      <circle cx={cx} cy={cy} r={5.25} className="fill-valgor-500" />
    </g>
  );
}

/** Tipografia VALGOR desenhada — bold, arredondada, mira no O. */
export function ValgorLogotype({ className, variant = "full", crosshairClass }: Props) {
  if (variant === "mark") {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={cn("shrink-0", className)} aria-hidden>
        <TargetO cx={24} cy={24} r={20} crosshairClass={crosshairClass} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 262 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      {/* V custom — peso extra, base arredondada */}
      <path
        d="M1 12Q1 6 7 6h4q3 0 4.5 3.5L22.5 44q1.5 3 4 3h2q2.5 0 4-3L38.5 9.5Q40 6 43 6h4q6 0 6 6 0 1.5-.5 3L26 47q-2 4-6 4s-4-0-6-4L1.5 15Q1 13.5 1 12Z"
        className="fill-foreground"
      />

      {/* A custom — ápice suave */}
      <path
        d="M48 46q-2 0-3-2L42 35H33l-3 9q-1 2-3 2-3 0-2.5-4l10-36q1-3 4-3t4 3l10 36q.5 4-2.5 4Zm2-16-4-13-4 13h8Z"
        className="fill-foreground"
      />

      {/* L custom */}
      <path
        d="M74 8q0-4 4-4h4q4 0 4 4v32h20v6H74V8Z"
        className="fill-foreground"
      />

      {/* G custom — curva fechada + barra */}
      <path
        d="M114 26q0-11 9.5-19.5T152 6q11 0 19.5 8.5T180 26t-8.5 19.5T152 46q-7 0-13-4v-8h12v6q3.5 3 8 3 7.5 0 12.5-5T182 26t-5-12.5T152 6.5q-5 0-8.5 3V26h-14Z"
        className="fill-foreground"
      />
      <path d="M152 22h18v8h-18v-8Z" className="fill-foreground" />

      <TargetO cx={206} cy={26} r={21} crosshairClass={crosshairClass} />

      {/* R custom */}
      <path
        d="M234 8q0-4 4-4h14q10 0 16 6t6 14-6 14-16 6h-10v10q0 4-4 4h-4q-4 0-4-4V8Zm8 8v16h10q6 0 10-4t4-10-4-10-10-4h-10Zm6 26 14 12h-10l-12-12h8Z"
        className="fill-foreground"
      />
    </svg>
  );
}
