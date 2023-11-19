import type { Metadata } from "next";

import { Rubik } from "next/font/google";

import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghazi Al Gosaibi",
  description:
    "Ghazi Al Gosaibi: a statesman, diplomat, technocrat, academic, poet, and novelist, integral to the fabric of contemporary Saudi society.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
