import type { Metadata } from "next";
import { Amiri, Cairo, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-heading"
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-accent"
});

export const metadata: Metadata = {
  title: "القطعة الفريدة - معرض الفنون",
  description: "The Unique Piece Art Gallery"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${amiri.variable} ${cairo.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
