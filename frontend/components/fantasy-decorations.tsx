"use client";

// Fantasy decorative SVG icons and dividers
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 40"
        className="w-full max-w-md h-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left flourish */}
        <path
          d="M0 20 Q30 20 50 15 Q70 10 90 15 Q110 20 130 18"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M50 15 Q60 5 70 15"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Center ornament */}
        <g transform="translate(200, 20)">
          <path
            d="M-30 0 L-15 -10 L0 -15 L15 -10 L30 0 L15 10 L0 15 L-15 10 Z"
            fill="url(#goldGradient)"
            opacity="0.3"
          />
          <path
            d="M-20 0 L-10 -7 L0 -10 L10 -7 L20 0 L10 7 L0 10 L-10 7 Z"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="0" cy="0" r="3" fill="url(#goldGradient)" />
        </g>
        
        {/* Right flourish */}
        <path
          d="M400 20 Q370 20 350 15 Q330 10 310 15 Q290 20 270 18"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M350 15 Q340 5 330 15"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          fill="none"
        />
        
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(0.75 0.15 80 / 0.3)" />
            <stop offset="50%" stopColor="oklch(0.75 0.15 80 / 1)" />
            <stop offset="100%" stopColor="oklch(0.75 0.15 80 / 0.3)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative py-8 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-border/30" />
      </div>
      <div className="relative flex justify-center">
        <div className="flex items-center gap-4 px-8 bg-background">
          <svg viewBox="0 0 20 20" className="w-3 h-3 text-primary/50" fill="currentColor">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
          </svg>
          <svg viewBox="0 0 20 20" className="w-4 h-4 text-primary" fill="currentColor">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
          </svg>
          <svg viewBox="0 0 20 20" className="w-3 h-3 text-primary/50" fill="currentColor">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CornerOrnament({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };
  
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  return (
    <svg
      viewBox="0 0 60 60"
      className={`absolute w-12 h-12 text-primary/30 ${positions[position]} ${rotations[position]}`}
      fill="none"
      stroke="currentColor"
    >
      <path d="M5 55 L5 30 Q5 15 20 10 L55 10" strokeWidth="1" />
      <path d="M5 45 L5 25 Q5 10 25 10 L45 10" strokeWidth="1" opacity="0.5" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

export function MagicBorderCard({ children, className = "", glowColor = "primary" }: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: "primary" | "legendary" | "epic" | "rare" | "accent";
}) {
  const glowColors = {
    primary: "from-primary/40 via-accent/20 to-primary/40",
    legendary: "from-rarity-legendary/50 via-rarity-legendary/20 to-rarity-legendary/50",
    epic: "from-rarity-epic/50 via-rarity-epic/20 to-rarity-epic/50",
    rare: "from-rarity-rare/50 via-rarity-rare/20 to-rarity-rare/50",
    accent: "from-accent/40 via-primary/20 to-accent/40",
  };

  return (
    <div className={`group relative ${className}`}>
      {/* Animated glow border */}
      <div 
        className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${glowColors[glowColor]} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}
        style={{
          animation: "borderGlow 3s ease-in-out infinite",
        }}
      />
      
      {/* Inner glow */}
      <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${glowColors[glowColor]} opacity-0 group-hover:opacity-60 transition-all duration-500`} />
      
      {/* Content */}
      <div className="relative bg-card rounded-xl border border-border/50 overflow-hidden">
        {/* Corner ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />
        
        {children}
      </div>
    </div>
  );
}

export function RuneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" strokeDasharray="2 2" />
      <path d="M12 2 L12 22 M2 12 L22 12" opacity="0.3" />
      <path d="M12 6 L16 12 L12 18 L8 12 Z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function CompassIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`w-10 h-10 ${className}`}
      fill="none"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
      
      {/* Cardinal points */}
      <path d="M20 5 L22 12 L20 10 L18 12 Z" fill="currentColor" />
      <path d="M20 35 L22 28 L20 30 L18 28 Z" fill="currentColor" opacity="0.5" />
      <path d="M5 20 L12 22 L10 20 L12 18 Z" fill="currentColor" opacity="0.5" />
      <path d="M35 20 L28 22 L30 20 L28 18 Z" fill="currentColor" opacity="0.5" />
      
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  );
}

export function ScrollBanner({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Left scroll end */}
      <svg viewBox="0 0 30 60" className="w-6 h-12 text-primary/20" fill="currentColor">
        <path d="M30 0 Q0 15 0 30 Q0 45 30 60 L30 55 Q5 42 5 30 Q5 18 30 5 Z" />
      </svg>
      
      {/* Center banner */}
      <div className="px-6 py-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20">
        {children}
      </div>
      
      {/* Right scroll end */}
      <svg viewBox="0 0 30 60" className="w-6 h-12 text-primary/20 rotate-180" fill="currentColor">
        <path d="M30 0 Q0 15 0 30 Q0 45 30 60 L30 55 Q5 42 5 30 Q5 18 30 5 Z" />
      </svg>
    </div>
  );
}

export function GlowingOrb({ color = "primary", size = "md" }: { color?: "primary" | "accent" | "legendary"; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };
  
  const colors = {
    primary: "bg-primary shadow-[0_0_10px_oklch(0.75_0.15_80),0_0_20px_oklch(0.75_0.15_80_/_0.5)]",
    accent: "bg-accent shadow-[0_0_10px_oklch(0.55_0.12_240),0_0_20px_oklch(0.55_0.12_240_/_0.5)]",
    legendary: "bg-rarity-legendary shadow-[0_0_10px_oklch(0.75_0.18_55),0_0_20px_oklch(0.75_0.18_55_/_0.5)]",
  };

  return (
    <div className={`${sizes[size]} rounded-full ${colors[color]} animate-pulse`} />
  );
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export function AncientSymbol({ type = "sword" }: { type?: "sword" | "shield" | "scroll" | "potion" | "skull" }) {
  const symbols = {
    sword: (
      <path d="M12 2 L14 8 L13 9 L13 18 L15 20 L15 22 L12 21 L9 22 L9 20 L11 18 L11 9 L10 8 Z" />
    ),
    shield: (
      <path d="M12 2 L20 5 L20 12 Q20 18 12 22 Q4 18 4 12 L4 5 Z M12 4 L18 6.5 L18 12 Q18 16.5 12 20 Q6 16.5 6 12 L6 6.5 Z" />
    ),
    scroll: (
      <path d="M6 4 Q4 4 4 6 L4 18 Q4 20 6 20 L16 20 Q20 20 20 16 L20 8 Q20 4 16 4 L6 4 M8 8 L16 8 M8 12 L16 12 M8 16 L12 16" />
    ),
    potion: (
      <path d="M9 2 L15 2 L15 4 L14 5 L14 8 L18 14 Q19 17 17 19 Q15 21 12 21 Q9 21 7 19 Q5 17 6 14 L10 8 L10 5 L9 4 Z M9 14 Q9 16 12 16 Q15 16 15 14 Z" />
    ),
    skull: (
      <path d="M12 2 Q6 2 4 8 Q3 12 4 15 L4 18 L8 18 L8 16 L10 16 L10 18 L14 18 L14 16 L16 16 L16 18 L20 18 L20 15 Q21 12 20 8 Q18 2 12 2 M9 10 Q10 10 10 11 Q10 12 9 12 Q8 12 8 11 Q8 10 9 10 M15 10 Q16 10 16 11 Q16 12 15 12 Q14 12 14 11 Q14 10 15 10" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="currentColor"
    >
      {symbols[type]}
    </svg>
  );
}
