import React from 'react';
import { Gem, Crown, Sparkles, Heart } from 'lucide-react';
import { useTheme } from "next-themes";

const PatternBackground = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const iconPattern = [
    [Gem, Crown, Sparkles, Heart],
    [Heart, Gem, Crown, Sparkles],
    [Sparkles, Heart, Gem, Crown],
    [Crown, Sparkles, Heart, Gem]
  ];

  return (
    <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
      <svg width="100%" height="100%" className="opacity-30">
        <pattern
          id="beauty-pattern"
          x="0"
          y="0"
          width="160"
          height="160"
          patternUnits="userSpaceOnUse"
        >
          {iconPattern.map((row, rowIndex) => (
            <g key={rowIndex}>
              {row.map((Icon, colIndex) => (
                <g
                  key={`${rowIndex}-${colIndex}`}
                  transform={`translate(${colIndex * 40} ${rowIndex * 40})`}
                >
                  <Icon
                    size={16}
                    className={isDark ? "text-neutral-500" : "text-neutral-400"}
                  />
                </g>
              ))}
            </g>
          ))}
        </pattern>
        <rect width="100%" height="100%" fill="url(#beauty-pattern)" />
      </svg>
    </div>
  );
};

export default PatternBackground;