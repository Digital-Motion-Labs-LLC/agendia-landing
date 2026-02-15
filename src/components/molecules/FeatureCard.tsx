import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/atoms/Typography";
import { Icon, IconName } from "@/components/atoms/Icon";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  title: string;
  description: string;
  variant?: "default" | "coming-soon";
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant = "default",
  className,
  ...props
}) => {
  const isComingSoon = variant === "coming-soon";

  return (
    <div
      className={cn(
        "group relative flex flex-col p-6 rounded-xl transition-all duration-200",
        isComingSoon
          ? "border border-dashed border-black/20 bg-white/40 opacity-60"
          : "bg-white border border-black/10 hover:border-black hover:-translate-y-0.5 shadow-sm",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-lg border transition-colors",
          isComingSoon
            ? "border-black/10 text-black/30"
            : "border-black text-black group-hover:bg-black group-hover:text-white"
        )}
      >
        <Icon name={icon} size={24} />
      </div>
      
      <Typography variant="h4" className={cn("mb-2", isComingSoon && "text-black/80")}>
        {title}
      </Typography>
      
      <Typography variant="body" className={cn("text-neutral-500", isComingSoon && "text-black/40")}>
        {description}
      </Typography>

      {isComingSoon && (
         <div className="mt-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-black/40 border border-black/10 px-2 py-1 rounded">
              Coming Soon
            </span>
         </div>
      )}
    </div>
  );
};
