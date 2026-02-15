import React from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export interface NavItemProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  href,
  active,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-semibold transition-opacity duration-200 hover:opacity-60",
        active ? "border-b-2 border-black pb-1" : "text-primary",
        className
      )}
    >
      {children}
    </Link>
  );
};
