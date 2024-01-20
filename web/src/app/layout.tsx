import type { Metadata } from "next";
import { Noto_Sans_Gurmukhi, Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const notoSans = Noto_Sans_Gurmukhi({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Login - ZapBot",
  description: "Login to ZapBot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full w-full">
      <body className={`${notoSans.variable} ${kanit.variable} font-sans bg-green-verydark w-full h-full`}>
        <Header />
        {children}
      </body>
    </html>
  );



}
