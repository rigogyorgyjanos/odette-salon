import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Odette Menyasszonyi Szalon",
  metadataBase: new URL('https://www.odette.hu/'),

  description:
    "Minőségi menyasszonyi ruhák elérhető áron. Találd meg álmaid ruháját Budapest szívében az Odette Menyasszonyi Szalonban.",
  keywords: [
    "menyasszonyi ruha",
    "esküvői ruha Budapest",
    "ruhaszalon",
    "Odette Szalon"
  ],
  openGraph: {
    title: "Odette Menyasszonyi Szalon",
    description:
      "Fedezd fel kollekciónkat és találd meg a tökéletes menyasszonyi ruhát.",
    url: "https://www.odette.hu/",
    siteName: "Odette Menyasszonyi Szalon",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hu_HU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Odette Szalon",
    description: "Menyasszonyi ruhák Budapest",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },

};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/android-144.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="Odette Szalon" />
        <meta name="application-name" content="Odette Szalon" />
        <meta name="theme-color" content="#fff" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} bg-background text-gray-800`}>
        {children}
      </body>
    </html>
  );
}