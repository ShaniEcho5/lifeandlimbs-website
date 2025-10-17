import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MUIThemeProvider from "../lib/MUIThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://lifeandlimbs-website.vercel.app'),
  title: "Life and Limb - Prosthetic Limbs for Those in Need | India",
  description: "Life and Limb is a non-profit organization that provides free, high-quality prosthetic limbs to those in need across India. Empowering mobility, restoring lives since 2013.",
  keywords: "free prosthetic limbs, prosthetics charity, amputee support, mobility restoration, artificial limbs, life and limb, prosthetic donation, disability support India, free artificial limbs",
  authors: [{ name: "Life and Limb" }],
  openGraph: {
    title: "Life and Limb - Prosthetic Limbs for Those in Need | India",
    description: "Life and Limb is a non-profit organization that provides free, high-quality prosthetic limbs to those in need across India.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lifeandlimbs-website.vercel.app',
    siteName: "Life and Limb",
    images: [
      {
        url: "/images/our-mission-img_0Z5ajpX.webp",
        width: 1200,
        height: 630,
        alt: "Life and Limb - Empowering mobility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life and Limb - Prosthetic Limbs for Those in Need | India",
    description: "Life and Limb is a non-profit organization that provides free, high-quality prosthetic limbs to those in need across India.",
    images: ["/images/our-mission-img_0Z5ajpX.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lifeandlimbs-website.vercel.app';
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NonProfit",
    "name": "Life and Limb",
    "description": "Life and Limb is a non-profit organization that provides free, high-quality prosthetic limbs to those in need across India.",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo.svg`,
    "foundingDate": "2013",
    "areaServed": "India",
    "mission": "Empowering mobility, restoring lives through free prosthetic limbs",
    "keywords": "free prosthetic limbs, nonprofit India, prosthetics charity, amputee support",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "IN"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <MUIThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </MUIThemeProvider>
      </body>
    </html>
  );
}
