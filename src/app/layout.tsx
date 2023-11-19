import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
