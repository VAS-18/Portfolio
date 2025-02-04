import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Press_Start_2P } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const pressStart2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
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
      <body className={`${inter.className} ${pressStart2P.className}`}>
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
