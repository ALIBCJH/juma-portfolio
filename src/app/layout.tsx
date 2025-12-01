import type { Metadata } from "next";
import { Inter, Outfit, Comforter_Brush } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const comforter = Comforter_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-artistic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simon Juma | Software Engineer",
  description: "Portfolio of Simon Juma, a Software Engineer specializing in scalable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${comforter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
