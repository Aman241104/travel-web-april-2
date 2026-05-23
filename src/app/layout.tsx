import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jade Tours & Travels | Your Perfect Travel Partner",
  description: "Domestic & international tours, flight bookings, visa assistance, and complete travel planning — all in one place.",
  keywords: "travel agency, flight booking, visa assistance, international tours, domestic tours, holiday packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
