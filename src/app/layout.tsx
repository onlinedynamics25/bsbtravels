import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

//Playfair Display
const playfair = localFont({
  src: [
    {
      path: "../../public/fonts/PlayfairDisplay-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-playfair",
});

//Baskervvile SC
const baskervvilleSC = localFont({
  src: [
    {
      path: "../../public/fonts/BaskervvilleSC-VariableFont_wght.ttf",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-baskervvilleSC",
});

//Baskervvile
const baskervvile = localFont({
  src: [
    {
      path: "../../public/fonts/Baskervville-VariableFont_wght.ttf",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Baskervville-Italic-VariableFont_wght.ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-baskervville",
});

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
    <html lang="en">
      <body
        className={`${playfair.variable} ${baskervvilleSC.variable} ${baskervvile.variable} font-baskervville antialiased`}
      >
        <NavBar />
        <main className=" ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
