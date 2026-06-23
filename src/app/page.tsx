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

      <main className="bg-[radial-gradient(circle_at_0%_14%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_100%_14%,rgba(236,72,153,0.2),transparent_36%),radial-gradient(circle_at_0%_72%,rgba(14,165,233,0.14),transparent_32%),radial-gradient(circle_at_100%_78%,rgba(236,72,153,0.14),transparent_34%),linear-gradient(180deg,#e0f7ff_0%,#ffffff_42%,#fff3fa_100%)]">
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
