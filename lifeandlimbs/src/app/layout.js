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
  title: "Life and Limb - Restoring Independence, Free of Charge",
  description: "A nonprofit organization dedicated to providing free prosthetic limbs to amputees across India. Since 2013, Life and Limb has helped hundreds regain mobility and confidence.",
  keywords: "prosthetic limbs, nonprofit, amputees, India, free prosthetics, mobility, independence",
  authors: [{ name: "Life and Limb" }],
  openGraph: {
    title: "Life and Limb - Restoring Independence, Free of Charge",
    description: "A nonprofit organization dedicated to providing free prosthetic limbs to amputees across India.",
    url: "https://lifeandlimbs.org",
    siteName: "Life and Limb",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Life and Limb Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life and Limb - Restoring Independence, Free of Charge",
    description: "A nonprofit organization dedicated to providing free prosthetic limbs to amputees across India.",
    images: ["/images/logo.svg"],
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
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://lifeandlimbs.org" />
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
