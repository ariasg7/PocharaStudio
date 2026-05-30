import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

// Premium editorial serif font for headings and brand elements
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Clean, high-legibility sans-serif for body copy and CTA elements
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pochara Studio | Wedding & Engagement Photography",
  description:
    "Cinematic and editorial wedding photography based in NY, available for travel nationwide. Documenting luxury love stories with a timeless, candid approach.",
  keywords: [
    "Pochara Studio",
    "Wedding Photographer New York",
    "Destination Wedding Photography",
    "Engagement Photographer NY",
    "Editorial Wedding Photographer",
  ],
  openGraph: {
    title: "Pochara Studio | Wedding & Engagement Photography",
    description: "Documenting cinematic love stories nationwide. Based in NY.",
    url: "https://pocharastudio.com",
    siteName: "Pochara Studio",
    locale: "en_US",
    type: "website",
    // 👇 Points directly to your new frame image in the public directory
    images: [
      {
        url: "https://pocharastudio.com/img/logo/PocharaStudioFrame.webp", 
        width: 1200,
        height: 630,
        alt: "Pochara Studio | Luxury Editorial Wedding Photography Portfolio",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      {/* Set the signature boutique cream background (#FDF5E6) as the baseline global layout */}
      <body className="min-h-full flex flex-col bg-[#FDF5E6] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-[#FDF5E6]">
        {children}
      </body>
    </html>
  );
}