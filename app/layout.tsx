import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UpShoot Marketing - Modern B2B Marketing That Builds Trust and Drives Revenue",
  description: "We help companies build trust and convert high-value customers through strategic content, creative storytelling, and high-quality visuals.",
  icons: {
    icon: '/assets/icons/metadata/favicon.ico',
    shortcut: '/assets/icons/metadata/favicon.ico',
    apple: '/assets/icons/metadata/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${geistMono.variable}`}>
      <body className="antialiased">

        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
