"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.push(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="relative">
      <select
        defaultValue={locale}
        className="bg-transparent text-white text-sm font-bold border border-white/20 rounded-lg py-2 pl-3 pr-8 appearance-none cursor-pointer hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="es" className="text-black">ES</option>
        <option value="en" className="text-black">EN</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </div>
    </div>
  );
}
