import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dice Art Films | Production • VFX • Events",
  description: "A cinematic film production, VFX, and events company.",
  icons: {
    icon: '/Logopart.svg',
    apple: '/Logopart.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
