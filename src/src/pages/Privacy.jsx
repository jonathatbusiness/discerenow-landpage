import Header from "../components/Header";
import Footer from "../components/Footer";
import { useI18n } from "../i18n";
import "./Privacy.css";

export default function Privacy() {
  const { t } = useI18n();

  return (
    <>
      <title>Privacy Policy | DiscereNow</title>
      <meta
        name="description"
        content="Privacy Policy for DiscereNow Template Builder and DiscereNow Studio beta."
      />

      <Header />

      <main className="privacy-page">
        <section className="privacy-container">
          <span className="privacy-kicker">{t.privacy.kicker}</span>
          <h1>{t.privacy.title}</h1>
          <p className="privacy-updated">{t.privacy.updated}</p>

          <p>{t.privacy.intro}</p>

          {t.privacy.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}

          <h2>{t.privacy.contactTitle}</h2>
          <p>
            {t.privacy.contactText}
            <a href="mailto:jonaha.teixeira.business@gmail.com">
              {" "}
              jonaha.teixeira.business@gmail.com
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
