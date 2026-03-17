import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/app/components/providers/ThemeProvider";
import { Navbar } from '@/app/components/layout/Navbar';
import { Footer } from '@/app/components/layout/Footer';
import { siteUrl, siteName } from '@/lib/seo';
import { cn } from '@/lib/utils';
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
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Modern B2B Marketing That Builds Trust and Drives Revenue',
    template: `%s | ${siteName}`,
  },
  description: "We help companies build trust and convert high-value customers through strategic content, creative storytelling, and high-quality visuals.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName,
    title: 'Modern B2B Marketing That Builds Trust and Drives Revenue',
    description:
      'We help companies build trust and convert high-value customers through strategic content, creative storytelling, and high-quality visuals.',
    url: '/',
    images: [
      {
        url: '/assets/images/pages/about/stats-pic-1.jpg',
        width: 1200,
        height: 630,
        alt: 'UpShoot Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern B2B Marketing That Builds Trust and Drives Revenue',
    description:
      'We help companies build trust and convert high-value customers through strategic content, creative storytelling, and high-quality visuals.',
    images: ['/assets/images/pages/about/stats-pic-1.jpg'],
  },
  icons: {
    icon: '/assets/logos/upshoot/upshoot.logo.darkmode.text.svg',
    shortcut: '/assets/logos/upshoot/upshoot.logo.darkmode.text.svg',
    apple: '/assets/logos/upshoot/upshoot.logo.darkmode.text.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(outfit.variable, geistMono.variable)}>
      <body className={cn('antialiased')}>

        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
