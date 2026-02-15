import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "minimal";
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", type, error, ...props }, ref) => {
    
    const variants = {
      default: "h-14 px-4 bg-transparent border-2 border-primary rounded-lg focus:ring-0 focus:border-black placeholder:text-neutral-400 text-base",
      minimal: "border-b-2 border-primary bg-transparent py-4 px-0 rounded-none focus:ring-0 focus:border-neutral-400 placeholder:text-neutral-300 text-lg",
    };

    return (
      <input
        type={type}
        className={cn(
          "flex w-full transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          error && "border-red-500 focus:border-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
