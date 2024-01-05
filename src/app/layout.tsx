import type { Metadata } from "next";

import "./globals.css";

import { sfArabicRounded } from "@lib/utils";

export const metadata: Metadata = {
  title: "غازي القصيبي",
  description:
    "غازي القصيبي: رجل دولة، دبلوماسي، تكنوقراطي، أكاديمي، شاعر، وروائي، جزء لا يتجزأ من نسيج المجتمع السعودي المعاصر.",
  metadataBase: new URL("https://ghazi-algosaibi.netlify.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={sfArabicRounded.className}>{children}</body>
    </html>
  );
}
