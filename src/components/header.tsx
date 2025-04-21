"use client";

import { Globe, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logos from "../assets/images/moviytravel without text.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [t, i18n] = useTranslation("global");

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white py-4 px-6 border-b border-gray-300">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image width={100} height={40} src={logos} alt="logo" />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-green-600">
            {t("header.home")}
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-green-600"
          >
            {t("header.about")}
          </Link>
          <Link
            href="#card"
            className="text-sm font-medium hover:text-green-600"
          >
            {t("header.packages")}
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-green-600"
          >
            {t("header.faq")}
          </Link>
          <Link
            href="#cantact"
            className="text-sm font-medium hover:text-green-600"
          >
            {t("header.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1">
            <Globe className="h-4 w-4" />
            <select
              value={i18n.language}
              onChange={handleChangeLanguage}
              className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none"
            >
              <option value="uz">O'zbek</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("cantact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-black hidden md:flex text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {t("header.call")}
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-green-600"
                >
                  {t("header.home")}
                </Link>
                <Link
                  href="#about"
                  className="text-sm font-medium hover:text-green-600"
                >
                  {t("header.about")}
                </Link>
                <Link
                  href="#card"
                  className="text-sm font-medium hover:text-green-600"
                >
                  {t("header.packages")}
                </Link>
                <Link
                  href="#faq"
                  className="text-sm font-medium hover:text-green-600"
                >
                  {t("header.faq")}
                </Link>
                <Link
                  href="#cantact"
                  className="text-sm font-medium hover:text-green-600"
                >
                  {t("header.contact")}
                </Link>
                <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  {t("header.call")}
                </button>
                <div className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1">
                  <Globe className="h-4 w-4" />
                  <select
                    onChange={handleChangeLanguage}
                    className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none"
                    defaultValue={i18n.language}
                  >
                    <option value="uz">O'zbek</option>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                  </select>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
