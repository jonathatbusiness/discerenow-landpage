import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Privacy.css";

export default function Privacy() {
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
          <span className="privacy-kicker">Privacy Policy</span>
          <h1>Privacy Policy for DiscereNow</h1>
          <p className="privacy-updated">Last updated: April 2026</p>

          <p>
            DiscereNow is designed to help users structure learning content in
            Microsoft Word and transform that content into web-based or
            SCORM-ready learning experiences using DiscereNow Studio.
          </p>

          <h2>DiscereNow Template Builder Add-in</h2>
          <p>
            DiscereNow Template Builder does not collect, store, sell, or
            transmit personal data. The add-in operates inside Microsoft Word
            and is used to apply structured formatting to course documents
            according to predefined authoring rules.
          </p>

          <h2>Document content</h2>
          <p>
            The add-in does not send document content to external servers. Any
            document created or edited by the user remains under the user's
            control within their Microsoft Word environment.
          </p>

          <h2>DiscereNow Studio Beta</h2>
          <p>
            DiscereNow Studio may process files selected by the user in order to
            generate course outputs such as web packages or SCORM packages.
            During the beta stage, processing is intended to happen as part of
            the user's local or explicitly initiated workflow.
          </p>

          <h2>Analytics and tracking</h2>
          <p>
            DiscereNow Template Builder does not include analytics, advertising
            trackers, or third-party tracking integrations.
          </p>

          <h2>Third-party services</h2>
          <p>
            The Microsoft Word add-in runs within the Microsoft Office
            environment. Use of Microsoft products and services may be subject
            to Microsoft's own terms and privacy policies.
          </p>

          <h2>Data sharing</h2>
          <p>
            We do not sell, rent, or share user personal information with
            advertisers or data brokers.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, support requests, or product inquiries,
            contact us at:
            <a href="mailto:your@email.com"> your@email.com</a>.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
