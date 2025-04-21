"use client";

import "./globals.css";
// import type { Metadata } from "next";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import Header from "@/components/header";
import Footer from "@/components/footer";

// export const metadata: Metadata = {
//   title: "Sahifa nomi",
//   description: "Sayt haqida qisqacha",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body>
        <I18nextProvider i18n={i18n}>
          <Header />
          {children}
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  );
}
