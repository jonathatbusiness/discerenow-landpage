import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyContent from "@/sections/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | DiscereNow",
  description:
    "Privacy Policy for DiscereNow Template Builder and DiscereNow Studio beta.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="bg-dn-surface text-dn-text">
        <PrivacyContent />
      </main>

      <Footer />
    </>
  );
}
