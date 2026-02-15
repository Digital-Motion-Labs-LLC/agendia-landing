import React from "react";
import { LucideProps } from "lucide-react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define a type for Icon names that includes both Lucide icons and custom assets
export type IconName = 
  | "calendar_today" 
  | "architecture" 
  | "calendar_month" 
  | "chat" 
  | "bolt" 
  | "payments" 
  | "mail" 
  | "video_call" 
  | "notifications" 
  | "search" 
  | "menu" 
  | "close" 
  | "arrow_forward" 
  | "open_in_new" 
  | "event" 
  | "help_outline" 
  | "add" 
  | "check" 
  | "info" 
  | "database" 
  | "monitoring" 
  | "share" 
  | "verified_user" 
  | "cookie" 
  | "visibility" 
  | "delete" 
  | "file_download" 
  | "print" 
  | "picture_as_pdf" 
  | "grid_view" 
  | "speed" 
  | "token" 
  | "groups" 
  | "trending_up" 
  | "security" 
  | "support_agent" 
  | "event_available"
  | "instagram"
  | "logo-mark" // Custom
  | "logo-text"; // Custom

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName | string;
  className?: string;
  size?: number | string;
}

// Map SPECS.md icon names to Lucide equivalents where possible
// Material Symbols -> Lucide React
const iconMap: Record<string, any> = {
  calendar_today: dynamic(() => import("lucide-react").then((mod) => mod.Calendar)),
  architecture: dynamic(() => import("lucide-react").then((mod) => mod.Cuboid)), // Approximation
  calendar_month: dynamic(() => import("lucide-react").then((mod) => mod.CalendarDays)),
  chat: dynamic(() => import("lucide-react").then((mod) => mod.MessageSquare)),
  bolt: dynamic(() => import("lucide-react").then((mod) => mod.Zap)),
  payments: dynamic(() => import("lucide-react").then((mod) => mod.CreditCard)),
  mail: dynamic(() => import("lucide-react").then((mod) => mod.Mail)),
  video_call: dynamic(() => import("lucide-react").then((mod) => mod.Video)),
  notifications: dynamic(() => import("lucide-react").then((mod) => mod.Bell)),
  search: dynamic(() => import("lucide-react").then((mod) => mod.Search)),
  menu: dynamic(() => import("lucide-react").then((mod) => mod.Menu)),
  close: dynamic(() => import("lucide-react").then((mod) => mod.X)),
  arrow_forward: dynamic(() => import("lucide-react").then((mod) => mod.ArrowRight)),
  open_in_new: dynamic(() => import("lucide-react").then((mod) => mod.ExternalLink)),
  event: dynamic(() => import("lucide-react").then((mod) => mod.Calendar)),
  help_outline: dynamic(() => import("lucide-react").then((mod) => mod.HelpCircle)),
  add: dynamic(() => import("lucide-react").then((mod) => mod.Plus)),
  check: dynamic(() => import("lucide-react").then((mod) => mod.Check)),
  info: dynamic(() => import("lucide-react").then((mod) => mod.Info)),
  database: dynamic(() => import("lucide-react").then((mod) => mod.Database)),
  monitoring: dynamic(() => import("lucide-react").then((mod) => mod.Activity)),
  share: dynamic(() => import("lucide-react").then((mod) => mod.Share2)),
  verified_user: dynamic(() => import("lucide-react").then((mod) => mod.ShieldCheck)),
  cookie: dynamic(() => import("lucide-react").then((mod) => mod.Cookie)),
  visibility: dynamic(() => import("lucide-react").then((mod) => mod.Eye)),
  delete: dynamic(() => import("lucide-react").then((mod) => mod.Trash2)),
  file_download: dynamic(() => import("lucide-react").then((mod) => mod.Download)),
  print: dynamic(() => import("lucide-react").then((mod) => mod.Printer)),
  picture_as_pdf: dynamic(() => import("lucide-react").then((mod) => mod.FileText)),
  grid_view: dynamic(() => import("lucide-react").then((mod) => mod.Grid)),
  speed: dynamic(() => import("lucide-react").then((mod) => mod.Gauge)),
  token: dynamic(() => import("lucide-react").then((mod) => mod.Fingerprint)), // Essence -> Unique
  groups: dynamic(() => import("lucide-react").then((mod) => mod.Users)),
  trending_up: dynamic(() => import("lucide-react").then((mod) => mod.TrendingUp)),
  security: dynamic(() => import("lucide-react").then((mod) => mod.Shield)),
  support_agent: dynamic(() => import("lucide-react").then((mod) => mod.Headphones)),
  event_available: dynamic(() => import("lucide-react").then((mod) => mod.CalendarCheck)),
  instagram: dynamic(() => import("lucide-react").then((mod) => mod.Instagram)),
};

export const Icon: React.FC<IconProps> = ({ name, className, size = 24, ...props }) => {
  // Handle custom brand assets if needed, otherwise fallback to Lucide
  // In a real scenario, we might import SVGs directly here
  if (name === "logo-mark") {
     return <Image src="/agendia-icon-black.svg" alt="Agendia Mark" className={cn("object-contain", className)} width={typeof size === 'number' ? size : 24} height={typeof size === 'number' ? size : 24} style={{ width: size, height: size }} />;
  }
  
  const LucideIcon = iconMap[name] || iconMap["help_outline"]; // Fallback

  return <LucideIcon className={className} size={size} {...props} />;
};
