import type { Metadata } from "next";
import { Bricolage_Grotesque, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/lib/app-context";
import SkipLink from "@/components/SkipLink";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Hind_Siliguri({ subsets: ["latin", "bengali"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "ShareKori | Share, borrow and reuse in your community",
  description: "A community-sharing site for Bangladesh. Demo version with sample listings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <AppProvider>
          <SkipLink />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
