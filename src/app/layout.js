import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin's Portfolio",
  description: "Kevin Uduji's Career Portfolio",
  icons: {
    icon: "/kevin.jpg",
    apple: "/kevin.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://kevinuduji-github-io.vercel.app/",
    title: "Kevin's Portfolio",
    description: "Kevin Uduji's Career Portfolio",
    images: [
      {
        url: "/metadata_icon.png",
        width: 1200,
        height: 630,
        alt: "Kevin Uduji's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitter",
    title: "Kevin's Portfolio",
    description: "Kevin Uduji's Career Portfolio",
    images: ["/metadata_icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <Head>
        <link rel="icon" href="/kevin.jpg" />
        <link rel="apple-touch-icon" href="/kevin.jpg" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kevinuduji-github-io.vercel.app/"
        />
        <meta property="og:title" content="Kevin's Portfolio" />
        <meta
          property="og:description"
          content="Kevin Uduji's Career Portfolio"
        />
        <meta property="og:image" content="/metadata_icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kevin's Portfolio" />
        <meta
          name="twitter:description"
          content="Kevin Uduji's Career Portfolio"
        />
        <meta name="twitter:image" content="/metadata_icon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
