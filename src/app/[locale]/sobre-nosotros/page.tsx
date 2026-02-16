"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { WaitingListModal } from "@/components/molecules/WaitingListModal";
import { ScrollAnimation } from "@/components/molecules/ScrollAnimation";

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
                        <ScrollAnimation variant="fadeUp">
                            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/10 text-white rounded-full border border-white/20">
                                {t("hero.visionBadge")}
                            </span>
                        </ScrollAnimation>
                        <ScrollAnimation variant="fadeUp" delay={0.1}>
                            <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[0.9] mb-8" dangerouslySetInnerHTML={{ __html: t.raw("hero.title") }}>
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation variant="fadeUp" delay={0.2}>
                            <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                                {t("hero.subtitle")}
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation variant="fadeUp" delay={0.3}>
                            <div className="mt-12 flex justify-center">
                                <div className="h-16 w-px bg-gradient-to-b from-white to-transparent"></div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
                {/* Values Grid */}
                <section className="py-24 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            <ScrollAnimation variant="fadeUp" delay={0.1}>
                                <div className="flex flex-col gap-6">
                                    <span className="material-symbols-outlined text-4xl font-light">grid_view</span>
                                    <h3 className="text-2xl font-bold tracking-tight">{t("values.structure")}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{t("values.structureDesc")}</p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation variant="fadeUp" delay={0.2}>
                                <div className="flex flex-col gap-6">
                                    <span className="material-symbols-outlined text-4xl font-light">speed</span>
                                    <h3 className="text-2xl font-bold tracking-tight">{t("values.speed")}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{t("values.speedDesc")}</p>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation variant="fadeUp" delay={0.3}>
                                <div className="flex flex-col gap-6">
                                    <span className="material-symbols-outlined text-4xl font-light">token</span>
                                    <h3 className="text-2xl font-bold tracking-tight">{t("values.essence")}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{t("values.essenceDesc")}</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                {/* Final CTA */}
                <section className="py-24 bg-black dot-grid-dark text-white text-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <ScrollAnimation variant="fadeUp">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t.raw("cta.title") }}>
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation variant="fadeUp" delay={0.1}>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <button className="bg-white text-black px-10 py-4 rounded-lg font-bold text-base hover:bg-neutral-200 transition-colors uppercase tracking-widest" onClick={() => setIsModalOpen(true)}>
                                    {t("cta.start")}
                                </button>
                                <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-white/10 transition-colors uppercase tracking-widest" onClick={() => setIsModalOpen(true)}>
                                    {t("cta.demo")}
                                </button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
            </main>
           <Footer />
        </>
    );
}
