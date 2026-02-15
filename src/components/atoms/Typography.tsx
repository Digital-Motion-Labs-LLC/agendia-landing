import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "small"
  | "xs"
  | "micro"
  | "nav"
  | "label";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  component?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  component,
  className,
  children,
  ...props
}) => {
  const styles = {
    hero: "text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]", // 80-96px
    h1: "text-5xl md:text-[56px] font-extrabold tracking-tighter leading-none", // 48-56px
    h2: "text-4xl md:text-5xl font-extrabold tracking-tighter", // 36-48px (Section)
    h3: "text-2xl md:text-3xl font-bold tracking-tight", // 24-32px (Subsections)
    h4: "text-xl font-bold", // 20px (Card titles)
    "body-lg": "text-lg md:text-xl font-medium leading-relaxed", // 18-20px
    body: "text-base font-medium leading-relaxed text-neutral-600", // 14-16px
    small: "text-sm font-semibold", // 12-14px
    xs: "text-xs font-bold uppercase tracking-widest", // 10-12px
    micro: "text-[10px] font-bold uppercase tracking-[0.2em]", // 10px
    nav: "text-sm font-semibold",
    label: "text-[10px] font-bold uppercase tracking-widest text-neutral-400",
  };

  const Component = component || (
    variant.startsWith("h") ? variant as React.ElementType : 
    variant === "hero" ? "h1" : 
    "p"
  );

  return (
    <Component className={cn(styles[variant], className)} {...props}>
      {children}
    </Component>
  );
};
