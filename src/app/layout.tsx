import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "BSB Travel Concepts",
  description: "...that all may prosper",
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
    <html lang="en" className="font-baskervville">
      <body>{children}</body>
    </html>
  );
}
