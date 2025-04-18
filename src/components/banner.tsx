import Image from "next/image";
import { Search } from "lucide-react";
import bg from "../assets/images/bgd.jpg";

export default function Banner() {
  return (
    <div className="relative h-[860px]  md:h-[620px]">
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

          {/* <div className="bg-white p-6 mx-auto rounded-lg max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ismingiz
                </label>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Sayohatni tanlang
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="1">Mahhaliy sayohat</option>
                  <option value="2">Xorijiy sayohat</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Odamlar soni
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mamlakat
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="dubai">Dubai</option>
                  <option value="thailand">Thailand</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="turkey">Turkey</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Telefon raqami
                </label>
                <input
                  type="tel"
                  placeholder="+998990000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="mt-4 flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <Search className="h-4 w-4 mr-2" />
              Paketlarni qidirish
            </button>
          </div> */}
          <div className="relative bottom-0 md:bottom-12 left-0 right-0 mx-auto w-full max-w-6xl bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg z-20  md:absolute">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Ismingiz
                </label>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Ismingiz Odamlar soni
                </label>
                <select
                  name="people"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                  Sayohatni tanlang
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="1">Mahhaliy sayohat</option>
                  <option value="2">Xorijiy sayohat</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Mamlakat
                </label>
                <select
                  name="country"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="maldives">Dubay</option>
                  <option value="thailand">Thailand</option>
                  <option value="bali">Bali, Indonesia</option>
                  <option value="turkey">Turkey</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  placeholder="+998990000000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-end">
                <button className="mt-4 flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
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
