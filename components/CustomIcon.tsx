interface CustomIconProps {
  name: 'dev' | 'pmo' | 'target' | 'zap' | 'check' | 'building';
  className?: string;
}

export default function CustomIcon({ name, className = "w-16 h-16" }: CustomIconProps) {
  const icons = {
    dev: (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dev-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#dev-gradient)" opacity="0.2" />
        <path d="M20 28 L28 32 L20 36 M44 28 L36 32 L44 36 M34 24 L30 40" stroke="url(#dev-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    
    pmo: (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pmo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="48" height="48" rx="8" fill="url(#pmo-gradient)" opacity="0.2" />
        <rect x="16" y="36" width="8" height="16" rx="2" fill="url(#pmo-gradient)" />
        <rect x="28" y="28" width="8" height="24" rx="2" fill="url(#pmo-gradient)" />
        <rect x="40" y="20" width="8" height="32" rx="2" fill="url(#pmo-gradient)" />
      </svg>
    ),
    
    target: (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="target-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="24" stroke="url(#target-gradient)" strokeWidth="2" opacity="0.3" />
        <circle cx="32" cy="32" r="16" stroke="url(#target-gradient)" strokeWidth="2" opacity="0.5" />
        <circle cx="32" cy="32" r="8" fill="url(#target-gradient)" />
        <circle cx="32" cy="32" r="3" fill="white" />
      </svg>
    ),
    
    zap: (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="zap-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path d="M36 8 L20 32 L32 32 L28 56 L44 32 L32 32 Z" fill="url(#zap-gradient)" />
      </svg>
    ),
    
    check: (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        <path d="M32 8 L44 14 L52 26 L52 38 L44 50 L32 56 L20 50 L12 38 L12 26 L20 14 Z" fill="url(#check-gradient)" opacity="0.2" stroke="url(#check-gradient)" strokeWidth="2" />
        <path d="M22 32 L28 38 L42 24" stroke="url(#check-gradient)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    
    building: (
      <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="building-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        <rect x="16" y="16" width="32" height="40" rx="2" fill="url(#building-gradient)" opacity="0.2" stroke="url(#building-gradient)" strokeWidth="2" />
        <rect x="22" y="22" width="6" height="6" fill="url(#building-gradient)" />
        <rect x="22" y="32" width="6" height="6" fill="url(#building-gradient)" />
        <rect x="22" y="42" width="6" height="6" fill="url(#building-gradient)" />
        <rect x="36" y="22" width="6" height="6" fill="url(#building-gradient)" />
        <rect x="36" y="32" width="6" height="6" fill="url(#building-gradient)" />
        <rect x="36" y="42" width="6" height="6" fill="url(#building-gradient)" />
      </svg>
    ),
  };

  return icons[name];
}
