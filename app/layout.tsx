import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "القطعة الفريدة - معرض الفنون",
  description: "The Unique Piece Art Gallery"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      style={{
        ["--font-heading" as string]: "'Amiri', 'Times New Roman', serif",
        ["--font-body" as string]: "'Cairo', 'Tahoma', Arial, sans-serif",
        ["--font-accent" as string]: "'Cormorant Garamond', Georgia, serif"
      }}
    >
      <body>{children}</body>
    </html>
  );
}
