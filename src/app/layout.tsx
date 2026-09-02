import type { Metadata } from "next";
import { Figtree, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Refund Authority – Comprehensive Solutions for Cryptocurrency Fraud",
  description: "Helping victims of investment and cryptocurrency scams with transparency, legal compliance, and blockchain forensics.",
  icons: {
    icon: "/leaflogo.webp",
    shortcut: "/leaflogo.webp",
    apple: "/leaflogo.webp"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${figtree.variable} ${poppins.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="font-sans antialiased text-[#101828] bg-[#F9FAFB] selection:bg-[#00509E] selection:text-white">
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
