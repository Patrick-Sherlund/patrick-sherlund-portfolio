type SvgPaths = Record<string, string>;

type LearnedCardIconProps = {
  icon: "simplicity" | "time" | "operators";
  svgPaths: SvgPaths;
};

export function LearnedCardIcon({ icon, svgPaths }: LearnedCardIconProps) {
  if (icon === "simplicity") {
    return (
      <svg className="bishop-learned-icon" fill="none" preserveAspectRatio="none" viewBox="0 0 58.5896 58.5896">
        <path
          d={svgPaths.p2eb51780}
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.88247"
        />
        <path
          d={svgPaths.p3653f0c0}
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.88247"
        />
      </svg>
    );
  }

  if (icon === "time") {
    return (
      <svg className="bishop-learned-icon" fill="none" preserveAspectRatio="none" viewBox="0 0 55.1055 55.1055">
        <path
          d={svgPaths.p24af0f80}
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.59212"
        />
      </svg>
    );
  }

  return (
    <svg className="bishop-learned-icon" fill="none" preserveAspectRatio="none" viewBox="0 0 43.875 43.875">
      <g clipPath="url(#clip0_175_67)">
        <path
          d={svgPaths.p2bce9480}
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.05217"
        />
        <path
          d={svgPaths.p3c0a0b00}
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.05217"
        />
        <path
          d={svgPaths.p7f4d600}
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.05217"
        />
        <path
          d="M42.8941 40.8939L39 37"
          stroke="#191F3C"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.05217"
        />
      </g>
      <defs>
        <clipPath id="clip0_175_67">
          <rect fill="white" height="43.875" width="43.875" />
        </clipPath>
      </defs>
    </svg>
  );
}
