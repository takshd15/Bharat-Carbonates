import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, Archivo } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Parmeshwar Impex Pvt. Ltd. | Global Export & Import Trading",
  description:
    "Surat-based export and import company trading ENA, empty glass bottles, aluminium ROPP caps, PET preform, and plastic caps across African markets since 2009.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${fraunces.variable} ${archivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
