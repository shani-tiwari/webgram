import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeProcess from "@/components/home/HomeProcess";
import HomeTemplates from "@/components/home/HomeTemplates";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeCTA from "@/components/home/HomeCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
          <HomeHero />
          <HomeProcess />
        <HomeTemplates />
        <HomeFeatures />
        <HomeCTA />
      </main>

      <Footer />
    </>
  );
}
