"use client";

import React from "react";

import { useTranslations } from "next-intl";

// ... inside component ...

import { Button } from "@/components/atoms/Button";
import { WaitingListModal } from "@/components/molecules/WaitingListModal";
import { useState } from "react";

export const Pricing = () => {
  const t = useTranslations("Pricing");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" id="pricing">
      <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-4">{t("title")}</h2>
          <p className="text-neutral-400">{t("subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Free */}
          <div className="bg-dark-gray border border-border-dark p-10 rounded-xl hover:border-neutral-500 transition-colors">
            <h3 className="text-lg font-bold mb-2">{t("lite.title")}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">{t("lite.price")}</span>
              <span className="text-neutral-500">{t("lite.period")}</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check</span> {t("lite.feature1")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check</span> {t("lite.feature2")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check</span> {t("lite.feature3")}</li>
            </ul>
            <Button variant="cta-dark-secondary" fullWidth onClick={() => setIsModalOpen(true)} className="border-border-dark hover:bg-neutral-800">{t("lite.cta")}</Button>
          </div>
          {/* Pro */}
          <div className="bg-dark-gray border-2 p-10 rounded-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">{t("pro.badge")}</div>
            <h3 className="text-lg font-bold mb-2">{t("pro.title")}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">{t("pro.price")}</span>
              <span className="text-neutral-500">{t("pro.period")}</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified</span> {t("pro.feature1")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified</span> {t("pro.feature2")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified</span> {t("pro.feature3")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">verified</span> {t("pro.feature4")}</li>
            </ul>
            <Button variant="cta-dark-primary" fullWidth onClick={() => setIsModalOpen(true)}>{t("pro.cta")}</Button>
          </div>
          {/* Agency */}
          <div className="bg-dark-gray border border-border-dark p-10 rounded-xl hover:border-neutral-500 transition-colors">
            <h3 className="text-lg font-bold mb-2">{t("enterprise.title")}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold">{t("enterprise.price")}</span>
              <span className="text-neutral-500">{t("enterprise.period")}</span>
            </div>
            <ul className="space-y-4 mb-10 text-sm text-neutral-300">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check</span> {t("enterprise.feature1")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check</span> {t("enterprise.feature2")}</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">check</span> {t("enterprise.feature3")}</li>
            </ul>
             <Button variant="cta-dark-secondary" fullWidth onClick={() => setIsModalOpen(true)} className="border-border-dark hover:bg-neutral-800">{t("enterprise.cta")}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
