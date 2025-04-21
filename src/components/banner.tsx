"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import bg from "../assets/images/bannerbgd.jpg";

const BOT_TOKEN = "7424974828:AAEOy8CEJwLaJ3XQYxYtLk9UXmVHbvpwZhg";
const CHAT_ID = "-4267196528";

export default function Banner() {
  const [tourType, setTourType] = useState("1");

  const foreignCountries = [
    { value: "dubai", label: "Dubay" },
    { value: "thailand", label: "Thailand" },
    { value: "bali", label: "Bali, Indonesia" },
    { value: "turkey", label: "Turkey" },
  ];

  const localPlaces = [
    { value: "tashkent", label: "Toshkent" },
    { value: "samarkand", label: "Samarqand" },
    { value: "bukhara", label: "Buxoro" },
    { value: "khiva", label: "Xiva" },
  ];

  const [form, setForm] = useState({
    destination: "",
    people: "1",
    country: "",
    phone: "",
    type: "1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTourTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTourType(e.target.value);
    setForm({ ...form, type: e.target.value });
  };

  const handleSubmit = async () => {
    const message = `
🌍 Yangi sayohat so'rovi:\n
📍 Yo'nalish: ${form.destination}\n
📍 Tur: ${form.type === "2" ? "Xorijiy" : "Mahalliy"}\n
👥 Odam soni: ${form.people}\n
🗺️ ${form.type === "2" ? "Mamlakat" : "Viloyat"}: ${form.country}\n
📞 Telefon: ${form.phone}
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      if (res.ok) {
        window.alert("✅ So‘rovingiz muvaffaqiyatli yuborildi!");
        setForm({
          destination: "",
          people: "1",
          country: "",
          phone: "",
          type: "1",
        });
        setTourType("1");
      } else {
        window.alert("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
      }
    } catch (error) {
      window.alert("📡 Internet aloqasida muammo bor.");
    }
  };

  return (
    <div className="relative h-[860px] md:h-[620px]">
      <Image
        src={bg}
        alt="Beautiful beach destination"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30">
        <div className="container mx-auto px-4 py-20 h-full flex flex-col justify-between">
          <div>
            <div className="inline-block rounded-md bg-green-500 text-white px-4 py-2 mb-4">
              Moviy Travel
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl mb-4">
              Yaxshi dam olish joyingizni kashf qiling!
            </h1>
            <p className="text-white max-w-xl">
              Qulayli, hashamat va unutilmas sarguzashtlarni bizning premium
              sayohat paketlarimiz bilan his eting
            </p>
          </div>

          <div className="relative bottom-0 md:bottom-12 left-0 right-0 mx-auto w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg z-20 md:absolute">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ismingiz
                </label>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={form.destination}
                  name="destination"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Odamlar soni
                </label>
                <select
                  value={form.people}
                  onChange={handleChange}
                  name="people"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Sayohat turini tanlang
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={tourType}
                  onChange={handleTourTypeChange}
                >
                  <option value="1">Mahalliy sayohat</option>
                  <option value="2">Xorijiy sayohat</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {tourType === "2" ? "Mamlakat" : "Viloyat"}
                </label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {(tourType === "2" ? foreignCountries : localPlaces).map(
                    (item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Telefon raqam
                </label>
                <input
                  value={form.phone}
                  name="phone"
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="+998990000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSubmit}
                  className="mt-4 flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Paketlarni qidirish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
