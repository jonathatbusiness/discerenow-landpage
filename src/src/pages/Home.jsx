import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";
import AddinSection from "../sections/AddinSection";
import StudioSection from "../sections/StudioSection";
import GallerySection from "../sections/GallerySection";
import DownloadSection from "../sections/DownloadSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <title>
        DiscereNow | Transform Word Documents into Dynamic E-learning Courses
      </title>

      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AddinSection />
        <StudioSection />
        {/*<GallerySection />  New section */}
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
