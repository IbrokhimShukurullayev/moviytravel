import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/Moviy travel.svg";
import logos from "../assets/images/moviytravel without text.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0  z-40 w-full  bg-white py-4 px-6 border-b border-gray-300">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex  items-center gap-2">
          <div className="relative">
            <Image width={100} height={40} src={logos} alt="logo" />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:text-green-600">
            Bosh sahifa
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-green-600"
          >
            Biz haqimizda
          </Link>
          <Link
            href="#card"
            className="text-sm font-medium hover:text-green-600"
          >
            Paketlar
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium hover:text-green-600"
          >
            Savollar
          </Link>
          <Link
            href="#cantact"
            className="text-sm font-medium hover:text-green-600"
          >
            Aloqa
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center  gap-1 border border-gray-300  rounded-md px-2 py-1">
            <Globe className="h-4 w-4" />
            <select className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none">
              <option>O'zbek</option>
              <option>English</option>
              <option>Русский</option>
            </select>
          </div>
          <button className="bg-black hidden md:flex text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Hozir band qiling
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
                  Bosh sahifa
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-green-600"
                >
                  Biz haqimizda
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-green-600"
                >
                  Paketlar
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-green-600"
                >
                  Savollar
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:text-green-600"
                >
                  Aloqa
                </Link>
                <button className="bg-black hidden md:flex text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Hozir band qiling
                </button>
                <div className="flex items-center  gap-1 border border-gray-300  rounded-md px-2 py-1">
                  <Globe className="h-4 w-4" />
                  <select className="text-sm bg-transparent border-none focus:ring-0 focus:outline-none">
                    <option>O'zbek</option>
                    <option>English</option>
                    <option>Русский</option>
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
