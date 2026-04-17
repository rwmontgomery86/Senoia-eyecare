"use client";

/**
 * Hand-traced gold glasses crest, modeled on the SENOIA logo motif:
 * two round lenses + bridge + temple bars + ornamental flourishes on either side.
 * Strokes are dashed for a draw-on entrance via the .draw-path keyframe.
 */
export default function GlassesMotif({
  className = "",
  animated = true,
  color = "#A8884D",
  strokeWidth = 1.4,
}: {
  className?: string;
  animated?: boolean;
  color?: string;
  strokeWidth?: number;
}) {
  const pathClass = animated ? "draw-path" : "";
  return (
    <svg
      viewBox="0 0 320 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Left flourish */}
        <path
          className={pathClass}
          d="M10 44 C 30 30, 60 30, 90 42 C 80 50, 70 55, 60 50 C 55 47, 55 40, 60 38 C 64 36, 68 39, 67 43"
          style={{ animationDelay: "0s" }}
        />
        {/* Right flourish (mirror) */}
        <path
          className={pathClass}
          d="M310 44 C 290 30, 260 30, 230 42 C 240 50, 250 55, 260 50 C 265 47, 265 40, 260 38 C 256 36, 252 39, 253 43"
          style={{ animationDelay: "0.1s" }}
        />
        {/* Left lens */}
        <circle
          className={pathClass}
          cx="130"
          cy="44"
          r="22"
          style={{ animationDelay: "0.5s" }}
        />
        {/* Right lens */}
        <circle
          className={pathClass}
          cx="190"
          cy="44"
          r="22"
          style={{ animationDelay: "0.6s" }}
        />
        {/* Bridge */}
        <path
          className={pathClass}
          d="M152 42 C 158 38, 162 38, 168 42"
          style={{ animationDelay: "0.9s" }}
        />
        {/* Temple stems hanging down */}
        <path
          className={pathClass}
          d="M118 64 L 122 76"
          style={{ animationDelay: "1.0s" }}
        />
        <path
          className={pathClass}
          d="M202 64 L 198 76"
          style={{ animationDelay: "1.0s" }}
        />
      </g>
    </svg>
  );
}
