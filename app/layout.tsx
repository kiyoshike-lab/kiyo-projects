import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiyo Projects | Web Service Portfolio",
  description:
    "Kiyo Projects is a curated portal of digital services created to solve everyday problems.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  openGraph: {
    title: "Kiyo Projects",
    description:
      "Creating digital services that solve everyday problems.",
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
