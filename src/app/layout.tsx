import type { Metadata } from "next";

import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "غازي الفصيبي",
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
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
