import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "success" | "neutral" | "info" | "hero";
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  className,
  children,
  ...props
}) => {
  const variants = {
    success: "bg-success-bg text-success-text border-transparent", // Active/Connected
    neutral: "bg-black/5 text-black/40 border-transparent", // Not Installed/Beta
    info: "bg-primary/5 text-primary border-transparent", // Legal/Category
    hero: "bg-white/10 text-white border border-white/20 tracking-[0.2em]", // Hero Badge
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-default",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
