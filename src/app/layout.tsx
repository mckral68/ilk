import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModelProvider } from "@/context/modelContext";
import Header from "./ui/header";
import GoogleAnalytics from "./GoogleAnalytics";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Declaration of love",
  description: "Generated by Love Man",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <GoogleAnalytics />
      <body className={`${inter.className} min-h-screen bg-yellow-300`}>
        <Header />
        <ModelProvider>{children}</ModelProvider>
      </body>
    </html>
  );
}
