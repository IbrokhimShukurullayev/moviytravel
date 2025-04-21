"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t } = useTranslation("global");
  const content = {
    questions: [
      {
        question: t("faq.questions.q1"),
        answer: t("faq.answers.a1"),
      },
      {
        question: t("faq.questions.q2"),
        answer: t("faq.answers.a2"),
      },
      {
        question: t("faq.questions.q3"),
        answer: t("faq.answers.a3"),
      },
      {
        question: t("faq.questions.q4"),
        answer: t("faq.answers.a4"),
      },
      {
        question: t("faq.questions.q5"),
        answer: t("faq.answers.a5"),
      },
      {
        question: t("faq.questions.q6"),
        answer: t("faq.answers.a6"),
      },
      {
        question: t("faq.questions.q7"),
        answer: t("faq.answers.a7"),
      },
      {
        question: t("faq.questions.q8"),
        answer: t("faq.answers.a8"),
      },
      {
        question: t("faq.questions.q9"),
        answer: t("faq.answers.a9"),
      },
      {
        question: t("faq.questions.q10"),
        answer: t("faq.answers.a10"),
      },
    ],
  };

  return (
    <section
      id="faq"
      className="w-full py-12 md:py-24 border-gray-300 bg-white"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-green-500 px-3 py-1 text-sm text-white">
            {t("faq.faqLabel")} {/* Savolga javob bo'limi */}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {t("faq.faqTitle")}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            {t("faq.faqSubtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {content.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">{t("faq.contact.questions")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
            >
              {t("faq.contact.contact_us")}
            </a>
            <a
              href="tel:+998991234214"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {t("faq.contact.call_button")} +998 (99) 123-42-14
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
