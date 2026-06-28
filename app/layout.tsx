import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiyo Projects | Web Service Portfolio",
  description: "Kiyoが制作したWebサービスをまとめたポートフォリオサイトです。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: "Kiyo Projects | Web Service Portfolio",
    description: "Kiyoが制作したWebサービスをまとめたポートフォリオサイトです。",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#101515" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
