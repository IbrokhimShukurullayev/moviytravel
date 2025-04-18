import Contact from "@/components/cantact";
import FAQSection from "@/components/faqSection";
import About from "@/components/about";
import Image from "next/image";
import Banner from "@/components/banner";
import Card from "@/components/card";

export default function Home() {
  return (
    <main>
      <Banner />
      <Card />
      <About />
      <FAQSection />
      <Contact />
    </main>
  );
}
