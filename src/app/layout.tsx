import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";
import WhatsAppFab from "@/components/WhatsAppFab";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "novarox | Strategic Digital Marketing Agency",
    template: "%s | novarox",
  },
  description:
    "novarox provides high-ROI digital solutions including Meta Ads, Google Ads, UI/UX design, and conversion-focused funnels.",
  keywords: [
    "Digital Marketing",
    "Meta Ads",
    "Google Ads",
    "UI/UX Design",
    "Email Marketing",
    "novarox",
  ],
  authors: [{ name: "novarox Team" }],
  creator: "novarox",
  publisher: "novarox",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#FF5A1F" />
        <Aoscompo>
          <Header />
          {children}
          <Footer />
        </Aoscompo>
        <WhatsAppFab />
      </body>
    </html>
  );
}
