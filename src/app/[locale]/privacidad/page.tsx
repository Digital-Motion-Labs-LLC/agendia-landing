import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function PrivacyPage() {
    const t = useTranslations("PrivacyPolicy");

    return (
        <div className="layout-container flex h-full grow flex-col min-h-screen bg-neutral-100 dot-grid-light">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#ededed] bg-white px-6 md:px-20 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <div className="size-6 bg-black flex items-center justify-center rounded">
                        <span className="material-symbols-outlined text-white text-sm">calendar_today</span>
                    </div>
                    <h2 className="text-black text-xl font-bold leading-tight tracking-tight">Agendia.do</h2>
                </Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-black/70 hover:text-black text-sm font-medium transition-colors" href="/">{useTranslations("Navigation")("features")}</Link>
                        <Link className="text-black/70 hover:text-black text-sm font-medium transition-colors" href="/">{useTranslations("Navigation")("pricing")}</Link>
                        <Link className="text-black/70 hover:text-black text-sm font-medium transition-colors" href="#">{useTranslations("Navigation")("startFree")}</Link>
                    </nav>
                    <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                    <Link href="/" className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-black text-white text-sm font-bold transition-transform active:scale-95">
                        <span>{useTranslations("HomePage")("title")}</span>
                    </Link>
                </div>
            </header>

            <main className="flex-1 flex justify-center py-8 md:py-16 px-4">
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-1">
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4 px-3">Contenido</p>
                            <a className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-sm text-black hover:bg-black/5 transition-all font-semibold bg-black/5 border-l-2 border-black" href="#intro">
                                <span className="material-symbols-outlined text-[18px]">info</span>
                                {t("sidebar.intro")}
                            </a>
                            <a className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-sm text-black/70 hover:text-black hover:bg-black/5 transition-all" href="#recopilacion">
                                <span className="material-symbols-outlined text-[18px]">database</span>
                                {t("sidebar.collection")}
                            </a>
                            <a className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-sm text-black/70 hover:text-black hover:bg-black/5 transition-all" href="#uso">
                                <span className="material-symbols-outlined text-[18px]">monitoring</span>
                                {t("sidebar.usage")}
                            </a>
                            <a className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-sm text-black/70 hover:text-black hover:bg-black/5 transition-all" href="#compartir">
                                <span className="material-symbols-outlined text-[18px]">share</span>
                                {t("sidebar.sharing")}
                            </a>
                            <a className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-sm text-black/70 hover:text-black hover:bg-black/5 transition-all" href="#derechos">
                                <span className="material-symbols-outlined text-[18px]">verified_user</span>
                                {t("sidebar.rights")}
                            </a>
                            <a className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-r-lg text-sm text-black/70 hover:text-black hover:bg-black/5 transition-all" href="#cookies">
                                <span className="material-symbols-outlined text-[18px]">cookie</span>
                                {t("sidebar.cookies")}
                            </a>
                            <div className="mt-10 p-4 bg-black/5 rounded-xl border border-black/5">
                                <p className="text-xs font-semibold text-black mb-2">{t("sidebar.questionsTitle")}</p>
                                <p className="text-xs text-black/60 leading-relaxed mb-3">{t("sidebar.questionsBody")}</p>
                                <a className="text-xs font-bold underline hover:text-black/80" href="mailto:privacy@agendia.do">{t("sidebar.contact")}</a>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-16">
                        <div className="max-w-[720px] mx-auto">
                            {/* Header */}
                            <div className="flex flex-col gap-2 mb-12">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-2 py-1 bg-black/5 text-black text-[10px] font-bold rounded uppercase tracking-wider">Legal</span>
                                    <span className="text-gray-300">•</span>
                                    <p className="text-gray-500 text-xs font-medium">{t("lastUpdated")}</p>
                                </div>
                                <h1 className="text-black text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">{t("title")}</h1>
                                <p className="text-gray-500 text-lg leading-relaxed">
                                    {t("description")}
                                </p>
                            </div>

                            {/* Main Policy Text */}
                            <div className="space-y-16">
                                {/* Section 1 */}
                                <section className="scroll-mt-32" id="intro">
                                    <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                        <span className="text-gray-300 font-normal">01</span> {t("intro.title")}
                                    </h2>
                                    <div className="prose prose-sm text-black/80 leading-8 space-y-4">
                                        <p dangerouslySetInnerHTML={{ __html: t.raw("intro.p1") }}></p>
                                        <p dangerouslySetInnerHTML={{ __html: t.raw("intro.p2") }}></p>
                                    </div>
                                </section>

                                {/* Section 2 */}
                                <section className="scroll-mt-32" id="recopilacion">
                                    <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                        <span className="text-gray-300 font-normal">02</span> {t("collection.title")}
                                    </h2>
                                    <div className="prose prose-sm text-black/80 leading-8 space-y-4">
                                        <p>{t("collection.p1")}</p>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li dangerouslySetInnerHTML={{ __html: t.raw("collection.list.account") }}></li>
                                            <li dangerouslySetInnerHTML={{ __html: t.raw("collection.list.schedule") }}></li>
                                            <li dangerouslySetInnerHTML={{ __html: t.raw("collection.list.technical") }}></li>
                                            <li dangerouslySetInnerHTML={{ __html: t.raw("collection.list.payment") }}></li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Section 3 */}
                                <section className="scroll-mt-32" id="uso">
                                    <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                        <span className="text-gray-300 font-normal">03</span> {t("usage.title")}
                                    </h2>
                                    <div className="prose prose-sm text-black/80 leading-8 space-y-4">
                                        <p>{t("usage.p1")}</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                                <span className="material-symbols-outlined text-black mb-2">event_available</span>
                                                <h3 className="font-bold text-sm mb-1">{t("usage.cards.management.title")}</h3>
                                                <p className="text-xs text-gray-500">{t("usage.cards.management.desc")}</p>
                                            </div>
                                            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                                <span className="material-symbols-outlined text-black mb-2">support_agent</span>
                                                <h3 className="font-bold text-sm mb-1">{t("usage.cards.support.title")}</h3>
                                                <p className="text-xs text-gray-500">{t("usage.cards.support.desc")}</p>
                                            </div>
                                            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                                <span className="material-symbols-outlined text-black mb-2">trending_up</span>
                                                <h3 className="font-bold text-sm mb-1">{t("usage.cards.improvement.title")}</h3>
                                                <p className="text-xs text-gray-500">{t("usage.cards.improvement.desc")}</p>
                                            </div>
                                            <div className="p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                                                <span className="material-symbols-outlined text-black mb-2">security</span>
                                                <h3 className="font-bold text-sm mb-1">{t("usage.cards.security.title")}</h3>
                                                <p className="text-xs text-gray-500">{t("usage.cards.security.desc")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Section 4 */}
                                <section className="scroll-mt-32" id="compartir">
                                    <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                        <span className="text-gray-300 font-normal">04</span> {t("sharing.title")}
                                    </h2>
                                    <div className="prose prose-sm text-black/80 leading-8 space-y-4">
                                        <p>{t("sharing.p1")}</p>
                                        <p dangerouslySetInnerHTML={{ __html: t.raw("sharing.p2") }}></p>
                                        <p dangerouslySetInnerHTML={{ __html: t.raw("sharing.p3") }}></p>
                                    </div>
                                </section>

                                {/* Section 5 */}
                                <section className="scroll-mt-32" id="derechos">
                                    <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
                                        <span className="text-gray-300 font-normal">05</span> {t("rights.title")}
                                    </h2>
                                    <div className="prose prose-sm text-black/80 leading-8 space-y-4">
                                        <p>{t("rights.p1")}</p>
                                        <div className="flex flex-col gap-3 mt-4">
                                            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl">
                                                <div className="size-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-black text-sm">visibility</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm">{t("rights.access.title")}</h4>
                                                    <p className="text-xs text-gray-500 leading-relaxed">{t("rights.access.desc")}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl">
                                                <div className="size-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-black text-sm">delete</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm">{t("rights.forget.title")}</h4>
                                                    <p className="text-xs text-gray-500 leading-relaxed">{t("rights.forget.desc")}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl">
                                                <div className="size-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-black text-sm">file_download</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm">{t("rights.portability.title")}</h4>
                                                    <p className="text-xs text-gray-500 leading-relaxed">{t("rights.portability.desc")}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Footer content area */}
                            <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title={t("footer.print")}>
                                        <span className="material-symbols-outlined text-gray-400">print</span>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title={t("footer.download")}>
                                        <span className="material-symbols-outlined text-gray-400">picture_as_pdf</span>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title={t("footer.share")}>
                                        <span className="material-symbols-outlined text-gray-400">share</span>
                                    </button>
                                </div>
                                <p className="text-gray-400 text-xs font-medium italic">{t("footer.useful")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 px-6 md:px-20 py-10 mt-auto">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3 grayscale opacity-60">
                        <div className="size-5 bg-black flex items-center justify-center rounded">
                            <span className="material-symbols-outlined text-white text-[10px]">calendar_today</span>
                        </div>
                        <p className="text-black text-sm font-bold tracking-tight">Agendia.do</p>
                    </div>
                    <div className="flex gap-8 text-xs font-medium text-gray-400">
                        <a className="hover:text-black transition-colors" href="#">{useTranslations("AboutUs")("navigation.contact")}</a>
                        <a className="text-black font-bold" href="#">{t("title")}</a>
                        <a className="hover:text-black transition-colors" href="#">Cookies</a>
                    </div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{useTranslations("AboutUs")("footer.rights")}</p>
                </div>
            </footer>
        </div>
    );
}
