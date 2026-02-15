"use client";

import React, { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { WaitingListModal } from "@/components/molecules/WaitingListModal";
import { Button } from "@/components/atoms/Button";
import { Typography } from "@/components/atoms/Typography";

export const Hero = () => {
    const t = useTranslations("Hero");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative pt-20 pb-32 overflow-hidden dot-grid-light">
            <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="max-w-7xl mx-auto px-6 text-center">

                <Typography variant="h1" className="mb-8 max-w-4xl mx-auto leading-[1.1]" dangerouslySetInnerHTML={{ __html: t.raw("title") }} />
                
                <Typography variant="body-lg" className="text-neutral-600 mb-12 max-w-2xl mx-auto">
                    {t("subtitle")}
                </Typography>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                    <Button size="lg" onClick={() => setIsModalOpen(true)}>{t("ctaPrimary")}</Button>
                    <Button variant="secondary" size="lg" onClick={() => setIsModalOpen(true)}>{t("ctaSecondary")}</Button>
                </div>
                {/* Phone Mockup Container */}
                <div className="relative max-w-5xl mx-auto mt-20">
                    {/* Decorative background glow */}
                    <div className="absolute -inset-10 bg-gradient-to-b from-transparent via-neutral-100/50 to-neutral-200/50 rounded-full -z-10 blur-3xl"></div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative">
                        {/* 1. WhatsApp Confirmation View (Left, slightly tilted) */}
                        <div className="md:col-span-4 lg:col-span-3 transform md:-rotate-6 md:translate-y-12 z-20">
                            <div className="bg-white border border-neutral-200 rounded-3xl shadow-2xl p-4 w-full max-w-[280px] mx-auto">
                                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-neutral-100">
                                    <div className="size-10 bg-black rounded-full flex items-center justify-center overflow-hidden">
                                        <span className="material-symbols-outlined text-white text-lg">content_cut</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold">Agendia.do</p>
                                        <p className="text-[10px] text-green-500 font-medium">● {t("phoneMockup.online")}</p>
                                    </div>
                                    <span className="material-symbols-outlined text-neutral-400 text-sm">more_vert</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-neutral-100 rounded-2xl rounded-tl-none p-3 shadow-sm">
                                        <p className="text-[11px] leading-relaxed">
                                            <b>{t("phoneMockup.notificationTitle")}</b><br />
                                            <span dangerouslySetInnerHTML={{ __html: t.raw("phoneMockup.notificationBody") }} />
                                        </p>
                                        <div className="mt-2 pt-2 border-t border-neutral-200">
                                            <p className="text-[10px]">📅 {t("phoneMockup.todayAt")} <b>2:00 p.m.</b></p>
                                            <p className="text-[10px]">✂️ {t("phoneMockup.service")}: <b>{t("phoneMockup.cut")}</b></p>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-neutral-200 rounded-2xl p-3">
                                        <button className="w-full flex items-center justify-center gap-2 text-black text-[10px] font-bold">
                                            <span className="material-symbols-outlined text-sm">content_copy</span>
                                            {t("phoneMockup.copyCode")}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2. Barber Calendar View (Center, Main Focus) */}
                        <div className="md:col-span-5 lg:col-span-6 z-30">
                            <div className="bg-black border border-neutral-800 rounded-[2rem] shadow-2xl overflow-hidden">
                                <div className="bg-neutral-900 px-6 py-4 flex justify-between items-center border-b border-neutral-800">
                                    <span className="text-white font-bold text-sm">{t("phoneMockup.serviceCenter")}</span>
                                    <span className="material-symbols-outlined text-white">calendar_month</span>
                                </div>
                                <div className="p-6 space-y-4 bg-black min-h-[400px]">
                                    <div className="flex gap-4">
                                        <span className="text-[10px] text-neutral-500 w-12 pt-1">9:00 AM</span>
                                        <div className="flex-1 bg-neutral-900/50 border border-neutral-800 rounded-lg p-3">
                                            <p className="text-white font-bold text-[11px]">Carlos Ruiz</p>
                                            <p className="text-neutral-500 text-[9px]">Degradado Clásico</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] text-neutral-500 w-12 pt-1">10:30 AM</span>
                                        <div className="flex-1 bg-neutral-900/30 border border-neutral-800 border-dashed rounded-lg p-3 relative">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-neutral-300 font-bold text-[11px]">Miguel Sanchez</p>
                                                    <p className="text-neutral-500 text-[9px]">Barba y Cejas</p>
                                                </div>
                                                <span className="bg-neutral-800 text-neutral-400 text-[8px] px-2 py-0.5 rounded-full uppercase tracking-tighter">{t("phoneMockup.confirmed")}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] text-neutral-500 w-12 pt-1">12:00 PM</span>
                                        <div className="flex-1 bg-neutral-800/40 border border-neutral-800 rounded-lg p-2 flex items-center justify-center">
                                            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{t("phoneMockup.blocked")}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] text-neutral-500 w-12 pt-1">1:00 PM</span>
                                        <div className="flex-1 h-px bg-neutral-800 mt-2"></div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-[10px] text-neutral-500 w-12 pt-1">3:00 PM</span>
                                        <div className="flex-1 bg-white rounded-lg p-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] border-l-4 border-black">
                                            <div className="flex justify-between items-start mb-1">
                                                <p className="text-black font-extrabold text-xs">Josue Grullon</p>
                                                <span className="text-[10px] font-bold text-black">RD$1,200</span>
                                            </div>
                                            <p className="text-neutral-500 text-[10px] flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">verified</span> {t("phoneMockup.professionalService")}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 opacity-20">
                                        <span className="text-[10px] text-neutral-500 w-12">4:30 PM</span>
                                        <div className="flex-1 h-px bg-neutral-800 mt-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3. Medical Clinic View (Right, slightly tilted) */}
                        <div className="md:col-span-3 lg:col-span-3 transform md:rotate-6 md:-translate-y-8 z-20">
                            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl shadow-xl p-5 w-full max-w-[280px] mx-auto">
                                <div className="mb-6">
                                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">{t("phoneMockup.medicalOffice")}</p>
                                    <p className="text-sm font-bold">{t("phoneMockup.todaysPanel")}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white p-3 rounded-xl border border-neutral-200">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="bg-black text-white text-[8px] px-2 py-0.5 rounded-full">10:00 AM</span>
                                            <span className="material-symbols-outlined text-neutral-400 text-sm">more_horiz</span>
                                        </div>
                                        <p className="text-[11px] font-bold">{t("phoneMockup.patient")}: Maria G.</p>
                                        <p className="text-[10px] text-neutral-500">{t("phoneMockup.doctor")}</p>
                                    </div>
                                    <div className="bg-white/50 p-3 rounded-xl border border-dashed border-neutral-300">
                                        <p className="text-[10px] text-neutral-400 text-center">{t("phoneMockup.nextSlot")}: 11:30 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
