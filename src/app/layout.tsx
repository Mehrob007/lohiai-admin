import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/globalStyle.css";
import LeftMenu from "@/components/LeftMenu";
import Conteiner from "@/components/Conteiner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Админи Коллеҷи милитсияи",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="layout">
          <LeftMenu />
          <Conteiner>{children}</Conteiner>
        </main>
      </body>
    </html>
  );
}
