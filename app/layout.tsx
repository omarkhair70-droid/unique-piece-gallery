import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "القطعة الفريدة - معرض الفنون",
  description: "The Unique Piece Art Gallery"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
