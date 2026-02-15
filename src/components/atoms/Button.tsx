import React from "react";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "cta-dark-primary" | "cta-dark-secondary";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon, iconPosition = "right", fullWidth = false, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-black text-white rounded-lg hover:bg-neutral-800 active:scale-[0.98]",
      secondary: "bg-white border border-primary text-primary rounded-lg hover:bg-primary hover:text-white",
      tertiary: "text-sm border-b-2 border-primary rounded-none px-0 hover:pb-1",
      "cta-dark-primary": "bg-white text-black rounded-lg uppercase tracking-widest hover:bg-neutral-200",
      "cta-dark-secondary": "bg-transparent border border-white/30 text-white rounded-lg uppercase tracking-widest hover:border-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-sm",
      lg: "px-10 py-4 text-base",
    };

    // Tertiary buttons don't really have standard padding sizes like buttons
    const appliedSize = variant === "tertiary" ? "" : sizes[size];

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          appliedSize,
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
        {variant === "primary" && !icon && <MoveRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
      </button>
    );
  }
);

Button.displayName = "Button";
