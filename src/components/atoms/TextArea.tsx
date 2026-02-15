import React from "react";
import { cn } from "@/lib/utils";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "default" | "minimal";
  error?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, variant = "default", error, ...props }, ref) => {
    
    const variants = {
      default: "min-h-[120px] px-4 py-3 bg-transparent border-2 border-primary rounded-lg focus:ring-0 focus:border-black placeholder:text-neutral-400 text-base resize-none",
      minimal: "border-b-2 border-primary bg-transparent py-4 px-0 rounded-none focus:ring-0 focus:border-neutral-400 placeholder:text-neutral-300 text-lg resize-none",
    };

    return (
      <textarea
        className={cn(
          "flex w-full transition-colors focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
TextArea.displayName = "TextArea";
