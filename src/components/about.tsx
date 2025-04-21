"use client";

import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/Moviy travel.svg";
import nefrit from "../assets/images/nefritthum.jpg";

type TestimonialVideo = {
  id: string;
  thumbnail: string;
  title: string;
  customer: string;
  location: string;
  videourl: string;
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialVideos: TestimonialVideo[] = [
    {
      id: "video1",
      videourl: "/video/videos.mp4",
      thumbnail: "/images/tovoqsoy.jpg",
      title: "Dubai sayohati haqida",
      customer: "Aziz Karimov",
      location: "Toshkent",
    },
    {
      id: "video2",
      videourl: "/video/moviy.mp4",
      thumbnail: "/images/toq.jpg",
      title: "Tha/video/videos.mp4iland tajribasi",
      customer: "Nilufar Sobirova",
      location: "Samarqand",
    },
    {
      id: "video3",
      videourl: "/video/lolazor.mp4",

      thumbnail: "/images/lola.jpg",
      title: "Turkiya ta'tili",
      customer: "Jahongir Aliyev",
      location: "Buxoro",
    },
    {
      id: "video4",
      videourl: "/video/nefrit.mp4",

      thumbnail: "/images/nefrits.jpg",
      title: "Samarqand sayohati",
      customer: "Dilnoza Rahimova",
      location: "Toshkent",
    },
    {
      id: "video5",
      videourl: "/video/oyin.mp4",

      thumbnail: "/images/toqq.jpg",
      title: "Misr sarguzashti",
      customer: "Bobur Mahmudov",
      location: "Farg'ona",
    },
  ];

  const visibleVideos = () => {
    const videos = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonialVideos.length;
      videos.push(testimonialVideos[index]);
    }
    return videos;
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialVideos.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialVideos.length) % testimonialVideos.length
    );
  };

  return (
    <div id="about" className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Biz haqimizda</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          2024 - yilda aprel oyida ochilgan Bir yildan beri ichki turizm va
          tashqi turizm bo’yicha ishlab kelamiz Ichki turizm bo’yicha 3000 dan
          ortiq mijozlarga hizmat ko’rsatdik ayni paytda ham haftasiga 100- 200
          lab mijozlarga hizmat ko’rsatib ishinchlarini oqlab kelamiz Shu mamnun
          mijozlar talabidan kelib chiqib tashqi turizm faoliyatiga urg’u
          qaratishga qaror qildik Va biz dunyo bo’ylab sayohatlarga start berdik
          Mijozlarimiz fikrlari bilan ham tanishishingiz mumkin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">Bizning qadriyatlarimiz</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Sifat</h4>
                <p className="text-gray-600">
                  Biz har bir mijozimizga eng yuqori sifatli xizmatlarni taqdim
                  etishga intilamiz.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Ishonchlilik</h4>
                <p className="text-gray-600">
                  Mijozlarimiz bizga ishonib topshirgan har bir sayohat uchun
                  mas'uliyat bilan yondashamiz.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Innovatsiya</h4>
                <p className="text-gray-600">
                  Biz doimo yangi yo'nalishlar va xizmatlarni taklif qilish
                  uchun izlanishdamiz.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Bizning tajribamiz</h3>
          <p className="text-gray-600 mb-4">
            1 yillik faoliyatimiz davomida biz 3,000 dan ortiq mijozlarga xizmat
            ko'rsatdik va 10 dan ortiq mamlakatga sayohatlarni tashkil etdik.
            Bizning jamoamiz tajribali mutaxassislardan iborat bo'lib, ular har
            bir mijozga individual yondashuvni ta'minlaydi.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-green-600">3,000+</h4>
              <p className="text-gray-600">Mamnun mijozlar</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-green-600">10+</h4>
              <p className="text-gray-600">Sayohat yo'nalishlari</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-green-600">1+</h4>
              <p className="text-gray-600">Yillik tajriba</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="text-3xl font-bold text-green-600">24/7</h4>
              <p className="text-gray-600">Mijozlarni qo'llab-quvvatlash</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="mt-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 bg-white p-6 rounded-lg shadow-md">
            <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Mijozlar va hamkorlar</h3>
            <p className="text-gray-600 mb-6">
              2024 - yilda aprel oyida ochilgan Bir yildan beri ichki turizm va
              tashqi turizm bo’yicha ishlab kelamiz Ichki turizm bo’yicha 3000
              dan ortiq mijozlarga hizmat ko’rsatdik ayni paytda ham haftasiga
              100- 200 lab mijozlarga hizmat ko’rsatib ishinchlarini oqlab
              kelamiz Shu mamnun mijozlar talabidan kelib chiqib tashqi turizm
              faoliyatiga urg’u qaratishga qaror qildik Va biz dunyo bo’ylab
              sayohatlarga start berdik Mijozlarimiz fikrlari bilan ham
              tanishishingiz mumkin
            </p>
            {/* <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div> */}
          </div>

          {/* Testimonial Videos Section */}
          <div className="md:w-3/4 overflow-x-auto scrollbar-hide">
            <div
              className="flex gap-6 snap-x snap-mandatory overflow-x-auto scrollbar-hide px-1"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {testimonialVideos.map((video) => (
                <div
                  key={video.id}
                  className="flex-none w-80 snap-center rounded-lg overflow-hidden shadow-md group"
                >
                  <div className="relative w-full h-48 md:h-120">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      poster={video.thumbnail}
                    >
                      <source src={video.videourl} type="video/mp4" />
                    </video>
                    <div className="absolute top-2 right-2">
                      <Image
                        src={logo}
                        alt="Moviy Travel Logo"
                        width={80}
                        height={40}
                        className="rounded"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
