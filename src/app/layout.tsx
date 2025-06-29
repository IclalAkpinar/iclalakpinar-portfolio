import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SideEmailLink } from "@/components/SideEmailLink";
import { SideSocialLinks } from "@/components/SideSocialLinks";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "İclal Akpınar",
  description: "İclal Akpınar's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-screen font-sans bg-black text-white">
        <Navbar />
        {children}
        <SideSocialLinks />
        <SideEmailLink />
        <Footer />
      </body>
    </html>
  );
}
