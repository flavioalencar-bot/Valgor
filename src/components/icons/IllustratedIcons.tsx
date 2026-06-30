type IconProps = { className?: string };

export function IconTrophy({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
      <path
        d="M16 14h16v4c0 4.4-3.6 8-8 8s-8-3.6-8-8v-4z"
        fill="#F59E0B"
      />
      <path d="M14 14h4v2c0 2.2-1.8 4-4 4v-2zM34 14h-4v2c0 2.2 1.8 4 4 4v-2z" fill="#D97706" />
      <rect x="20" y="26" width="8" height="4" rx="1" fill="#B45309" />
      <rect x="17" y="30" width="14" height="4" rx="2" fill="#F59E0B" />
      <path d="M22 34h4v4h-4z" fill="#92400E" />
    </svg>
  );
}

export function IconRocket({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#EDE9FE" />
      <path
        d="M24 10c-6 8-8 14-8 20 0 2.2 3.6 4 8 4s8-1.8 8-4c0-6-2-12-8-20z"
        fill="#8B5CF6"
      />
      <circle cx="24" cy="22" r="3" fill="#C4B5FD" />
      <path d="M16 32l4 6M32 32l-4 6" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 38c0 2 1.8 4 4 4s4-2 4-4" fill="#F97316" />
      <path d="M22 38h4v3h-4z" fill="#FB923C" />
    </svg>
  );
}

export function IconUsers({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#DBEAFE" />
      <circle cx="18" cy="20" r="5" fill="#3B82F6" />
      <circle cx="30" cy="20" r="5" fill="#60A5FA" />
      <path
        d="M10 36c0-5 4-8 8-8s8 3 8 8M22 36c0-4.5 3.5-7 8-7s8 2.5 8 7"
        stroke="#2563EB"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMapPin({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#D1FAE5" />
      <path
        d="M24 10c-5.5 0-10 4.5-10 10 0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z"
        fill="#10B981"
      />
      <circle cx="24" cy="20" r="4" fill="#ECFDF5" />
    </svg>
  );
}

export function IconShield({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#FCE7F3" />
      <path
        d="M24 10l12 5v9c0 8-5.2 14.5-12 16-6.8-1.5-12-8-12-16v-9l12-5z"
        fill="#D6125C"
      />
      <path
        d="M18 23l4 4 8-8"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBuilding({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#E0E7FF" />
      <rect x="14" y="14" width="20" height="22" rx="2" fill="#6366F1" />
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#C7D2FE" />
      <rect x="26" y="18" width="4" height="4" rx="1" fill="#C7D2FE" />
      <rect x="18" y="26" width="4" height="4" rx="1" fill="#C7D2FE" />
      <rect x="26" y="26" width="4" height="4" rx="1" fill="#C7D2FE" />
      <rect x="20" y="32" width="8" height="4" fill="#4338CA" />
    </svg>
  );
}

export function IconLayout({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="12" fill="#FFF1F2" />
      <rect x="10" y="12" width="28" height="24" rx="3" fill="#D6125C" />
      <rect x="13" y="15" width="10" height="3" rx="1" fill="#FDA4AF" />
      <rect x="13" y="21" width="22" height="2" rx="1" fill="#FECDD3" />
      <rect x="13" y="26" width="16" height="2" rx="1" fill="#FECDD3" />
      <rect x="13" y="31" width="8" height="2" rx="1" fill="#FECDD3" />
    </svg>
  );
}

export function IconCart({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="12" fill="#F5F3FF" />
      <path
        d="M12 14h4l3 14h14l3-10H18"
        stroke="#7C3AED"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="33" r="2.5" fill="#8B5CF6" />
      <circle cx="31" cy="33" r="2.5" fill="#8B5CF6" />
      <rect x="26" y="10" width="10" height="6" rx="2" fill="#A78BFA" />
    </svg>
  );
}

export function IconChart({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="12" fill="#ECFEFF" />
      <rect x="12" y="28" width="5" height="10" rx="1.5" fill="#06B6D4" />
      <rect x="21" y="20" width="5" height="18" rx="1.5" fill="#22D3EE" />
      <rect x="30" y="14" width="5" height="24" rx="1.5" fill="#0891B2" />
      <path d="M11 38h27" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconGrid({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="12" fill="#FFF7ED" />
      <rect x="12" y="12" width="10" height="10" rx="2" fill="#F97316" />
      <rect x="26" y="12" width="10" height="10" rx="2" fill="#FB923C" />
      <rect x="12" y="26" width="10" height="10" rx="2" fill="#FB923C" />
      <rect x="26" y="26" width="10" height="10" rx="2" fill="#EA580C" />
    </svg>
  );
}

export function IconSearch({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#FEF9C3" />
      <circle cx="22" cy="22" r="8" stroke="#EAB308" strokeWidth="3" fill="#FEF08A" />
      <path d="M28 28l8 8" stroke="#CA8A04" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function IconPalette({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#FDF2F8" />
      <path
        d="M24 12c-8 0-12 5-12 10 0 4 3 6 6 6 2 0 3-1 4-3 1-2 2-3 5-3 5 0 9-4 9-9 0-6-5-11-12-11z"
        fill="#EC4899"
      />
      <circle cx="18" cy="20" r="2" fill="#F472B6" />
      <circle cx="24" cy="17" r="2" fill="#A78BFA" />
      <circle cx="30" cy="20" r="2" fill="#38BDF8" />
    </svg>
  );
}

export function IconCode({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
      <path
        d="M16 24l-6 6 6 6M32 24l6 6-6 6"
        stroke="#0284C7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26 14l-6 22" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconLaunch({ className = "h-10 w-10" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="22" fill="#DCFCE7" />
      <path d="M14 30l8-16 16-4-4 16-16 8z" fill="#22C55E" />
      <path d="M22 22l8 8" stroke="#86EFAC" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="16" r="2" fill="#FDE047" />
    </svg>
  );
}

/** Ícones por segmento de mercado */
export const segmentIcons = {
  advogados: IconShield,
  medicos: IconUsers,
  restaurantes: IconCart,
  contadores: IconChart,
  imobiliarias: IconBuilding,
  escolas: IconLayout,
  academias: IconRocket,
  comercio: IconGrid,
} as const;
