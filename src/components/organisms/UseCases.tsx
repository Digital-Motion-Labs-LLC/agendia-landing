"use client";

import React from "react";

import { useTranslations } from "next-intl";

// ... inside component ...

export const UseCases = () => {
  const t = useTranslations("UseCases");

  return (
    <section className="py-32 bg-white border-y border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-16 text-center">{t("title")}</h2>
        <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar">
          <div className="min-w-[280px] bg-neutral-gray p-8 rounded-lg border border-border-light group cursor-pointer hover:border-black transition-colors">
            <span className="material-symbols-outlined text-3xl mb-4">content_cut</span>
            <h4 className="font-bold mb-2">{t("salons")}</h4>
            <p className="text-sm text-neutral-500">{t("salonsDesc")}</p>
          </div>
          <div className="min-w-[280px] bg-neutral-gray p-8 rounded-lg border border-border-light group cursor-pointer hover:border-black transition-colors">
            <span className="material-symbols-outlined text-3xl mb-4">spa</span>
            <h4 className="font-bold mb-2">{t("spas")}</h4>
            <p className="text-sm text-neutral-500">{t("spasDesc")}</p>
          </div>
          <div className="min-w-[280px] bg-neutral-gray p-8 rounded-lg border border-border-light group cursor-pointer hover:border-black transition-colors">
            <span className="material-symbols-outlined text-3xl mb-4">medical_services</span>
            <h4 className="font-bold mb-2">{t("medical")}</h4>
            <p className="text-sm text-neutral-500">{t("medicalDesc")}</p>
          </div>
          <div className="min-w-[280px] bg-neutral-gray p-8 rounded-lg border border-border-light group cursor-pointer hover:border-black transition-colors">
            <span className="material-symbols-outlined text-3xl mb-4">fitness_center</span>
            <h4 className="font-bold mb-2">{t("fitness")}</h4>
            <p className="text-sm text-neutral-500">{t("fitnessDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
