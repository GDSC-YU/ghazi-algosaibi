import type { Metadata } from "next";

import localFont from "next/font/local";

import "./globals.css";

const sfArabicRounded = localFont({
  src: "fonts/SF-Arabic-Rounded.ttf",
});

export const metadata: Metadata = {
  title: "غازي القصيبي",
  description:
    "غازي القصيبي: رجل دولة، دبلوماسي، تقنوقراط، أكاديمي، شاعر، وروائي، جزء لا يتجزأ من نسيج المجتمع السعودي المعاصر.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={sfArabicRounded.className}>{children}</body>
    </html>
  );
}
