"use client";

import React from "react";

import { useTranslations } from "next-intl";

// ... inside component ...

export const Features = () => {
    const t = useTranslations("Features");

    return (
        <section className="bg-black text-white py-32 dot-grid-dark relative" id="features">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-dark border border-border-dark rounded-xl overflow-hidden">
                    {/* Feature 1 */}
                    <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-6 text-white">sync</span>
                        <h3 className="text-xl font-bold mb-4">{t("syncTitle")}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t("syncDesc")}</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-6 text-white">payments</span>
                        <h3 className="text-xl font-bold mb-4">{t("paymentsTitle")}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t("paymentsDesc")}</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-6 text-white">sms</span>
                        <h3 className="text-xl font-bold mb-4">{t("smsTitle")}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t("smsDesc")}</p>
                    </div>
                    {/* Feature 4 */}
                    <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-6 text-white">group</span>
                        <h3 className="text-xl font-bold mb-4">{t("clientsTitle")}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t("clientsDesc")}</p>
                    </div>
                    {/* Feature 5 */}
                    <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-6 text-white">query_stats</span>
                        <h3 className="text-xl font-bold mb-4">{t("reportsTitle")}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t("reportsDesc")}</p>
                    </div>
                    {/* Feature 6 */}
                    <div className="bg-black p-10 hover:bg-neutral-900/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl mb-6 text-white">support_agent</span>
                        <h3 className="text-xl font-bold mb-4">{t("supportTitle")}</h3>
                        <p className="text-neutral-400 leading-relaxed">{t("supportDesc")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
