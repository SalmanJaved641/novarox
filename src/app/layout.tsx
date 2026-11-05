import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
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
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader color="#FF5A1F" />
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
