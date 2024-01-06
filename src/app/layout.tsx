import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Header from "../components/ui/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${inter.className} min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500`}
        >
          <Header />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
