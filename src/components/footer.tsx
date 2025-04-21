import logo from "../assets/images/Moviy travel.svg";
import logos from "../assets/images/moviytravel without text.svg";
import logo4 from "../assets/images/logo4.png";
import payme from "../assets/images/payme.png";
import Image from "next/image";
import click from "../assets/images/cilik.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative  rounded-full p-2">
                <Image width={170} height={40} src={logo4} alt="logo0" />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Moviy Travel sizning sayohat tajribangizni unutilmas qilish uchun
              premium sayohat xizmatlarini taqdim etadi.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/moviy_travel/"
                target="_blank"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://t.me/moviytravel"
                target="_blank"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  viewBox="0 0 240 240"
                  fill="currentColor"
                >
                  <path d="M120,0C53.73,0,0,53.73,0,120s53.73,120,120,120s120-53.73,120-120S186.27,0,120,0z M178.75,75.33l-24.36,114.74   c-1.83,8.56-6.66,10.65-13.51,6.64l-37.28-27.52l-17.98,17.3c-1.99,1.99-3.65,3.65-7.48,3.65l2.69-38.22l69.59-62.83   c3.02-2.69-0.66-4.18-4.66-1.49l-85.98,54.1l-37.02-11.57c-8.05-2.52-8.2-8.05,1.66-11.92l144.79-55.92   C174.36,62.59,181.67,66.04,178.75,75.33z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("header.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("header.about")}
                </a>
              </li>
              <li>
                <a
                  href="#card"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("header.packages")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("header.faq")}
                </a>
              </li>
              <li>
                <a
                  href="#cantact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("header.contact")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.popularDestinations")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Dubai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Thailand
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Indonesia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Turkey
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Egypt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">
              {t("footer.localDestinations")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Zomin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Nefrit ko'li
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ko’ksu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Namangan chodak
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kara Koy, Qirg’iziston
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">{t("footer.address")}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <h4 className="font-medium flex flex-col">
                    {t("footer.phone")}
                  </h4>
                  <a href="tel:+998991244214" className="text-gray-400">
                    +998 (99) 124-42-14
                  </a>
                  <br />
                  <a href="tel:+998991234214" className="text-gray-400">
                    +998 (99) 123-42-14
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="https://travelilyostravel@gmail.com"
                  className="text-gray-400"
                >
                  travelilyostravel@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">{t("footer.paymentMethods")}</h4>
              <div className="flex gap-3">
                <div className="bg-white p-1 rounded">
                  <Image width={40} src={click} alt="click" />
                </div>
                <div className="bg-white p-1 rounded">
                  <Image width={40} src={payme} alt="payme" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} {t("footer.footerText")}
          </p>
        </div>
      </div>
    </footer>
  );
}
