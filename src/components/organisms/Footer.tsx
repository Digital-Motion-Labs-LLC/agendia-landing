import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Icon } from "@/components/atoms/Icon";
import { Typography } from "@/components/atoms/Typography";

import { useTranslations } from "next-intl";

// ... inside component ...

export const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
               <Image 
                    src="/agendia-logo-blanco.svg" 
                    alt="Agendia.do" 
                    width={140} 
                    height={32} 
                    className="h-6 w-auto object-contain"
                />
            </Link>
            <p className="text-neutral-500 max-w-sm mb-6 leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-400">
              <span>{t("madeWith")}</span>
              <span className="text-red-500">♥</span>
              <span>{t("inRD")}</span>
            </div>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t("product")}</h5>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link className="hover:text-white transition-colors" href="/#features">{useTranslations("Navigation")("features")}</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/#lite">{useTranslations("AgendiaLite")("badge")}</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6">{t("company")}</h5>
             <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link className="hover:text-white transition-colors" href="/sobre-nosotros">{t("about")}</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/contacto">{t("contact")}</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/privacidad">{t("privacy")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-border-dark mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between gap-6 text-[10px] font-bold text-neutral-600 tracking-widest uppercase">
          <p>{t("rights").replace("2024", currentYear.toString())}</p>
          <div className="flex gap-8">
            <a className="hover:text-neutral-400 transition-colors" href="#">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
