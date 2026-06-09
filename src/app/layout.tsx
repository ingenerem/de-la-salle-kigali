import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "De La Salle Kigali",
    template: "%s | De La Salle Kigali",
  },
  description:
    "Official website of De La Salle Kigali. Learn about our programmes, admissions process, school life, and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={nunito.className}>
        <Header />

 
        
        {children}
        <Footer />
      </body>
    </html>
  );
}



