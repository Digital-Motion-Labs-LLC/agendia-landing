"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { TextArea } from "@/components/atoms/TextArea";
import { Typography } from "@/components/atoms/Typography";

interface WaitingListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitingListModal: React.FC<WaitingListModalProps> = ({ isOpen, onClose }) => {
  const t = useTranslations("WaitingList");
  const [state, handleSubmit] = useForm("mykdwdzl");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-md bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-neutral-200 dark:border-neutral-800"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {state.succeeded ? (
            <div className="text-center py-8">
              <div className="size-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{t("successTitle")}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t("successMessage")}</p>
              <Button
                onClick={onClose}
                fullWidth
                variant="primary"
              >
                {t("close")}
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="size-12 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <Typography variant="h3" className="mb-2 text-black dark:text-white">{t("title")}</Typography>
                <Typography variant="body" className="text-sm text-neutral-500">{t("subtitle")}</Typography>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                    {t("emailLabel")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t("emailPlaceholder")}
                    className="bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                
                <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                        {t("messageLabel")}
                    </label>
                    <TextArea
                        id="message"
                        name="message"
                        placeholder={t("messagePlaceholder")}
                        rows={3}
                        className="bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                    />
                     <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <Button
                  type="submit"
                  disabled={state.submitting}
                  fullWidth
                  variant="primary"
                  className="mt-2"
                >
                    {state.submitting ? (
                        <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                         t("submit")
                    )}
                </Button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
