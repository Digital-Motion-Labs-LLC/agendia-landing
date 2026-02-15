"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { WaitingListModal } from "@/components/molecules/WaitingListModal";

export default function AboutUsPage() {
    const t = useTranslations("AboutUs");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar />
            <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <main>
                {/* Hero / Mission Section */}
                <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 hero-gradient dot-grid-dark overflow-hidden bg-black">
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 max-w-4xl mx-auto py-24">
                        <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/10 text-white rounded-full border border-white/20">
                            {t("hero.visionBadge")}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[0.9] mb-8" dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                             {t("hero.subtitle")}
                        </p>
                        <div className="mt-12 flex justify-center">
                            <div className="h-16 w-px bg-gradient-to-b from-white to-transparent"></div>
                        </div>
                    </div>
                </section>
                {/* Values Grid */}
                <section className="py-24 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            <div className="flex flex-col gap-6">
                                <span className="material-symbols-outlined text-4xl font-light">grid_view</span>
                                <h3 className="text-2xl font-bold tracking-tight">{t("values.structure")}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{t("values.structureDesc")}</p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <span className="material-symbols-outlined text-4xl font-light">speed</span>
                                <h3 className="text-2xl font-bold tracking-tight">{t("values.speed")}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{t("values.speedDesc")}</p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <span className="material-symbols-outlined text-4xl font-light">token</span>
                                <h3 className="text-2xl font-bold tracking-tight">{t("values.essence")}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{t("values.essenceDesc")}</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Story Section */}
                {/* <section className="relative py-32 bg-background-light dark:bg-background-dark dot-grid-light dark:dot-grid-dark overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row gap-20 items-start">
                            <div className="w-full md:w-1/2">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-none" dangerouslySetInnerHTML={{ __html: t.raw("story.title") }}>
                                </h2>
                                <div className="space-y-8 text-lg text-neutral-700 dark:text-neutral-300">
                                    <p>{t("story.p1")}</p>
                                    <p>{t("story.p2")}</p>
                                    <p>{t("story.p3")}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 relative">
                                <div className="aspect-square bg-black dark:bg-white rounded-2xl flex items-center justify-center p-12 overflow-hidden group">
                                    <div className="relative w-full h-full border border-neutral-700 dark:border-neutral-200 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-32 h-32 border-4 border-neutral-500 dark:border-neutral-400 rotate-45"></div>
                                            <div className="absolute w-64 h-64 border border-neutral-500/50 dark:border-neutral-400/50 rounded-full"></div>
                                        </div>
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-500 dark:bg-neutral-400"></div>
                                        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 border border-neutral-500 dark:border-neutral-400"></div>
                                    </div>
                                    <div className="absolute bottom-8 left-8">
                                        <span className="text-white dark:text-black text-xs font-bold tracking-widest uppercase opacity-60">{t("story.location")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* Team Section */}
                {/* <section className="py-32 bg-white dark:bg-black">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{t("team.title")}</h2>
                            <p className="text-neutral-500 max-w-xl mx-auto">{t("team.subtitle")}</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                    <span className="text-2xl font-black">CP</span>
                                </div>
                                <h4 className="font-bold text-lg">Carlos Pérez</h4>
                                <p className="text-sm text-neutral-500 uppercase tracking-widest">{t("team.carlos.role")}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                    <span className="text-2xl font-black">MA</span>
                                </div>
                                <h4 className="font-bold text-lg">María Arias</h4>
                                <p className="text-sm text-neutral-500 uppercase tracking-widest">{t("team.maria.role")}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                    <span className="text-2xl font-black">RD</span>
                                </div>
                                <h4 className="font-bold text-lg">Rafael Díaz</h4>
                                <p className="text-sm text-neutral-500 uppercase tracking-widest">{t("team.rafael.role")}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                                    <span className="text-2xl font-black">LV</span>
                                </div>
                                <h4 className="font-bold text-lg">Laura Vargas</h4>
                                <p className="text-sm text-neutral-500 uppercase tracking-widest">{t("team.laura.role")}</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* Final CTA */}
                <section className="py-24 bg-black dot-grid-dark text-white text-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t.raw("cta.title") }}>
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="bg-white text-black px-10 py-4 rounded-lg font-bold text-base hover:bg-neutral-200 transition-colors uppercase tracking-widest" onClick={() => setIsModalOpen(true)}>
                                {t("cta.start")}
                            </button>
                            <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-white/10 transition-colors uppercase tracking-widest" onClick={() => setIsModalOpen(true)}>
                                {t("cta.demo")}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
           <Footer />
        </>
    );
}
