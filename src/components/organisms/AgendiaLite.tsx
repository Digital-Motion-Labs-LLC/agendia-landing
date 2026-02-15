"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { WaitingListModal } from "@/components/molecules/WaitingListModal";
import { Button } from "@/components/atoms/Button";

export const AgendiaLite = () => {
    const t = useTranslations("AgendiaLite");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-white border-y border-border-light">
             <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-neutral-50 rounded-3xl p-8 md:p-16 border border-border-light flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                    
                    <div className="md:w-1/2 relative z-10">
                         <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                            {t("badge")}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
                            {t("title")}
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            {t("description")}
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="size-10 bg-white border border-border-light rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined">bolt</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t("setup")}</h4>
                                    <p className="text-sm text-neutral-500">{t("setupDesc")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="size-10 bg-white border border-border-light rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                    <span className="material-symbols-outlined">link</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{t("link")}</h4>
                                    <p className="text-sm text-neutral-500">{t("linkDesc")}</p>
                                </div>
                            </div>
                        </div>

                        <Button className="text-lg px-8 py-4 hover:scale-105 transition-transform" onClick={() => setIsModalOpen(true)}>
                            {t("cta")}
                        </Button>
                    </div>

                    <div className="md:w-1/2 relative w-full">
                         <div className="relative z-10 bg-white border border-border-light rounded-2xl shadow-2xl p-6 md:p-8 max-w-sm mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
                             <div className="flex items-center justify-between mb-8">
                                <span className="font-bold text-lg">Agendia Lite</span>
                                <div className="size-8 bg-neutral-100 rounded-full"></div>
                             </div>
                             <div className="space-y-4">
                                <div className="h-12 bg-neutral-50 rounded-lg w-full flex items-center px-4 gap-3 text-neutral-400 text-sm">
                                    <span className="material-symbols-outlined text-lg">payments</span>
                                    {t("sidebar.payments")}
                                </div>
                                <div className="h-12 bg-black text-white rounded-lg w-full flex items-center px-4 gap-3 text-sm shadow-lg">
                                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                                    {t("sidebar.appointments")}
                                </div>
                                <div className="h-12 bg-neutral-50 rounded-lg w-full flex items-center px-4 gap-3 text-neutral-400 text-sm">
                                    <span className="material-symbols-outlined text-lg">settings</span>
                                    {t("sidebar.settings")}
                                </div>
                             </div>
                             <div className="mt-8 pt-8 border-t border-dashed border-neutral-200">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-neutral-400 uppercase font-bold">Total Hoy</p>
                                        <p className="text-2xl font-black">RD$ 8,450</p>
                                    </div>
                                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <span className="material-symbols-outlined text-sm">arrow_upward</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                         {/* Circle decoration */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-neutral-200/50 to-transparent rounded-full blur-3xl -z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
