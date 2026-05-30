// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AD17 | Aditya Chouksey Portfolio",
  description: "High-performance full-stack developer and AI systems application space portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;900&family=Fira+Code:wght@400;500&family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#0d0d0d", margin: 0, overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}