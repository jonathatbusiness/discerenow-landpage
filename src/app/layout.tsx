import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://discerenow.vercel.app"),

  title: "DiscereNow | Word to SCORM E-Learning Course Converter",

  description:
    "Convert structured Microsoft Word documents into SCORM-ready e-learning courses with the DiscereNow Word add-in and Studio desktop app.",

  keywords: [
    "DiscereNow",
    "e-learning authoring platform",
    "instructional design",
    "Microsoft Word add-in",
    "learning experience design",
    "course creation",
    "LXD",
    "SCORM",
    "SCORM converter",
    "Word to SCORM converter",
    "Word to e-learning",
    "Word to SCORM",
    "DOCX to SCORM",
    "convert Word to SCORM",
    "convert Word documents to e-learning",
    "digital learning",
    "content creation",
    "training solutions",
    "educational technology",
  ],

  authors: [{ name: "DiscereNow" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title: "DiscereNow | Word to SCORM E-Learning Course Converter",
    description:
      "Convert structured Microsoft Word documents into SCORM-ready e-learning courses with a Word add-in and Studio desktop app.",
    url: "https://discerenow.vercel.app/",
    siteName: "DiscereNow",
    images: [
      {
        url: "https://discerenow.vercel.app/og-discere-now.png",
        width: 1200,
        height: 630,
        alt: "DiscereNow preview image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DiscereNow | Word to SCORM E-Learning Course Converter",
    description:
      "Convert structured Word documents into SCORM-ready e-learning courses with the DiscereNow Word add-in and Studio desktop app.",
    images: ["/og-discere-now.png"],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9BEBDE0DZ2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9BEBDE0DZ2');
      `,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
