import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import AboutSection from "@/sections/AboutSection";
import AddinSection from "@/sections/AddinSection";
import StudioSection from "@/sections/StudioSection";
import DownloadSection from "@/sections/DownloadSection";
import InstallAddinSection from "@/sections/InstallAddinSection";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutSection />
        <AddinSection />
        <StudioSection />
        <DownloadSection />
        <InstallAddinSection />
      </main>

      <Footer />
    </>
  );
}
