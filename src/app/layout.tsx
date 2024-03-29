import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Layout/Nav";
import { cn } from "@/libs/utils";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page Template",
  description: "Create engaging landing pages in record time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-[#F8F9FF]")}>
        <Nav />
        <main className="pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
