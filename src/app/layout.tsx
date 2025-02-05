import type { Metadata } from "next";
import "./globals.css";
import { Press_Start_2P, VT323 } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "My personal portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} ${vt323.variable}`}>
        <div className="scanlines" />
        <div className="vignette" />
        <main>
          <header>
          </header>
          {children}
          <footer>
          </footer>
        </main>
      </body>
    </html>
  );
}
