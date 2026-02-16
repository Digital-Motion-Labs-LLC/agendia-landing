"use client";

import React from "react";

import { useTranslations } from "next-intl";

import { ScrollAnimation } from "@/components/molecules/ScrollAnimation";

// ... inside component ...

export const Features = () => {
    const t = useTranslations("Features");

    return (
        <section className="bg-black text-white py-32 dot-grid-dark relative" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark rounded-xl overflow-hidden">
                    {/* Feature 1 */}
                    <ScrollAnimation variant="fadeUp" delay={0.1} className="h-full">
                        <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group h-full">
                            <span className="material-symbols-outlined text-4xl mb-6 text-white">sync</span>
                            <h3 className="text-xl font-bold mb-4">{t("syncTitle")}</h3>
                            <p className="text-neutral-400 leading-relaxed">{t("syncDesc")}</p>
                        </div>
                    </ScrollAnimation>
                    {/* Feature 2 */}
                    <ScrollAnimation variant="fadeUp" delay={0.2} className="h-full">
                        <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group h-full">
                            <span className="material-symbols-outlined text-4xl mb-6 text-white">payments</span>
                            <h3 className="text-xl font-bold mb-4">{t("paymentsTitle")}</h3>
                            <p className="text-neutral-400 leading-relaxed">{t("paymentsDesc")}</p>
                        </div>
                    </ScrollAnimation>
                    {/* Feature 3 */}
                    <ScrollAnimation variant="fadeUp" delay={0.3} className="h-full">
                        <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group h-full">
                            <span className="material-symbols-outlined text-4xl mb-6 text-white">sms</span>
                            <h3 className="text-xl font-bold mb-4">{t("smsTitle")}</h3>
                            <p className="text-neutral-400 leading-relaxed">{t("smsDesc")}</p>
                        </div>
                    </ScrollAnimation>
                    {/* Feature 4 */}
                    <ScrollAnimation variant="fadeUp" delay={0.4} className="h-full">
                        <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group h-full">
                            <span className="material-symbols-outlined text-4xl mb-6 text-white">group</span>
                            <h3 className="text-xl font-bold mb-4">{t("clientsTitle")}</h3>
                            <p className="text-neutral-400 leading-relaxed">{t("clientsDesc")}</p>
                        </div>
                    </ScrollAnimation>
                    {/* Feature 5 */}
                    <ScrollAnimation variant="fadeUp" delay={0.5} className="h-full">
                        <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group h-full">
                            <span className="material-symbols-outlined text-4xl mb-6 text-white">query_stats</span>
                            <h3 className="text-xl font-bold mb-4">{t("reportsTitle")}</h3>
                            <p className="text-neutral-400 leading-relaxed">{t("reportsDesc")}</p>
                        </div>
                    </ScrollAnimation>
                    {/* Feature 6 */}
                    <ScrollAnimation variant="fadeUp" delay={0.6} className="h-full">
                        <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group h-full">
                            <span className="material-symbols-outlined text-4xl mb-6 text-white">support_agent</span>
                            <h3 className="text-xl font-bold mb-4">{t("supportTitle")}</h3>
                            <p className="text-neutral-400 leading-relaxed">{t("supportDesc")}</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    );
};
