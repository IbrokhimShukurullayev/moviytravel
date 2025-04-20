import React from "react";
import Image from "next/image";
import { Globe, Search, MapPin } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import card1 from "../assets/images/d65209f1-0218-450f-b28b-3c7c72cee23b.jpeg";
import card2 from "../assets/images/card2.jpg";

const Card = () => {
  return (
    <div id="card" className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Mashhur manzillar</h2>
      <p className="text-center text-gray-600 mb-10">
        Butun dunyo sayohatchilari sevadigan eng ko'p so'raladigan
        manzillarimizni o'rganing
      </p>

      <Tabs defaultValue="international" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="domestic" className="text-base">
              Mahalliy sayohat
            </TabsTrigger>
            <TabsTrigger value="international" className="text-base">
              Xalqaro sayohat
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Domestic Tourism Tab */}
        <TabsContent value="domestic" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Samarkand",
                price: "299,000",
                rating: 4.8,
                image: card1,
              },
              {
                name: "Bukhara",
                price: "349,000",
                rating: 4.7,
                image: card1,
              },
              { name: "Khiva", price: "399,000", rating: 4.9, image: card1 },
              {
                name: "Tashkent",
                price: "199,000",
                rating: 4.5,
                image: card1,
              },
              {
                name: "Fergana Valley",
                price: "279,000",
                rating: 4.6,
                image: card1,
              },
              {
                name: "Aral Sea",
                price: "499,000",
                rating: 4.4,
                image: card1,
              },
              {
                name: "Chimgan Mountains",
                price: "249,000",
                rating: 4.7,
                image: card1,
              },
              {
                name: "Nurata",
                price: "329,000",
                rating: 4.5,
                image: card1,
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-white/80 rounded-full px-2 py-1 flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm font-medium">
                      {destination.rating}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                    Mahalliy
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-green-600 mr-1" />
                    <h3 className="font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    3 kunlik sayohat paketi
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-green-600">
                        {destination.price} UZS
                      </span>
                      <span className="text-xs text-gray-500 block">
                        kishi boshiga
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                      Batafsil
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* International Tourism Tab */}
        <TabsContent value="international" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Dubai", price: "$1,299", rating: 4.8, image: card2 },
              {
                name: "Thailand",
                price: "$1,499",
                rating: 4.7,
                image: card2,
              },
              {
                name: "Indonesia",
                price: "$1,699",
                rating: 4.9,
                image: card2,
              },
              { name: "Turkey", price: "$899", rating: 4.6, image: card2 },
              { name: "Egypt", price: "$1,099", rating: 4.5, image: card2 },
              {
                name: "Malaysia",
                price: "$1,399",
                rating: 4.7,
                image: card2,
              },
              {
                name: "Singapore",
                price: "$1,599",
                rating: 4.8,
                image: card2,
              },
              {
                name: "Maldives",
                price: "$2,299",
                rating: 4.9,
                image: card2,
              },
            ].map((destination) => (
              <div
                key={destination.name}
                className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-white/80 rounded-full px-2 py-1 flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1 text-sm font-medium">
                      {destination.rating}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold">
                    Xalqaro
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 text-green-600 mr-1" />
                    <h3 className="font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    7 kunlik sayohat paketi
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-green-600">
                        {destination.price}
                      </span>
                      <span className="text-xs text-gray-500 block">
                        kishi boshiga
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                      Batafsil
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-10">
        <Button className="bg-green-500 hover:bg-green-600">
          Barcha manzillarni ko'rish
        </Button>
      </div>
    </div>
  );
};

export default Card;
