"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import { WaitingListModal } from "@/components/molecules/WaitingListModal";
import { Button } from "@/components/atoms/Button";

import { useTranslations } from "next-intl";

// ... inside component ...

export const Navbar = () => {
    const t = useTranslations("Navigation");
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <>
            <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b bg-black border-border-dark">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image 
                            src="/agendia-logo-blanco.svg" 
                            alt="Agendia.do" 
                            width={140} 
                            height={32} 
                            className="h-8 w-auto object-contain"
                            priority
                        />
                    </Link>
                    <div className="hidden md:flex items-center gap-10">
                        <Link className="text-sm font-semibold transition-colors text-white hover:text-neutral-400" href="/#features">{t("features")}</Link>
                        <Link className="text-sm font-semibold transition-colors text-white hover:text-neutral-400" href="/#use-cases">{t("useCases")}</Link>
                        <Link className="text-sm font-semibold transition-colors text-white hover:text-neutral-400" href="/#pricing">{t("pricing")}</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <Button variant="cta-dark-primary" onClick={() => setIsModalOpen(true)}>{t("startFree")}</Button>
                    </div>
                </div>
            </nav>
            <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
