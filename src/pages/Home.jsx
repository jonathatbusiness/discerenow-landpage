import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";
import AddinSection from "../sections/AddinSection";
import StudioSection from "../sections/StudioSection";
import DownloadSection from "../sections/DownloadSection";
import "./Home.css";

export default function Home() {
  return (
    <>
      <title>DiscereNow | Word-to-SCORM Learning Content Pipeline</title>
      <meta
        name="description"
        content="DiscereNow helps instructional designers structure learning content in Microsoft Word and transform it into SCORM-ready web courses through DiscereNow Studio."
      />
      <meta
        name="keywords"
        content="DiscereNow, SCORM, e-learning authoring tool, instructional design, Microsoft Word add-in, learning design, course creation, LXD"
      />

      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AddinSection />
        <StudioSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
