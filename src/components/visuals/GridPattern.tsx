type Props = {
  className?: string;
};

export function GridPattern({ className = "" }: Props) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <pattern id="fox-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M32 0H0V32"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-border-subtle"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#fox-grid)" />
    </svg>
  );
}
