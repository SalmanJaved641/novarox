import React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const Sparkles = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="m12 3 1.7 4.8 4.8 1.7-4.8 1.7L12 16l-1.7-4.8L5.5 9.5l4.8-1.7L12 3Z" />
    <path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  </svg>
);

export const Cpu = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
  </svg>
);

export const TrendingUp = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="m3 17 6-6 4 4 7-7" />
    <path d="M15 8h5v5" />
  </svg>
);

export const Lightbulb = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2Z" />
    <path d="M9 21h6" />
  </svg>
);

export const Code = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="m8 9-3 3 3 3" />
    <path d="m16 9 3 3-3 3" />
    <path d="m14 5-4 14" />
  </svg>
);

export const Target = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const Search = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

export const Compass = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);

export const PenTool = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="m12 19 7-7-4-4-7 7v4h4Z" />
    <path d="m15 5 4 4" />
    <path d="M5 21h4" />
  </svg>
);

export const Refresh = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="M20 7v5h-5" />
    <path d="M4 17v-5h5" />
    <path d="M6.1 9a7 7 0 0 1 11.2-2L20 12" />
    <path d="M17.9 15a7 7 0 0 1-11.2 2L4 12" />
  </svg>
);

export const Layers = (props: IconProps) => (
  <svg {...iconProps} {...props}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);