import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import { SideSocialLinks } from "@/components/SideSocialLinks";
import { SideEmailLink } from "@/components/SideEmailLink";

export const metadata: Metadata = {
  title: "İclal Akpınar",
  description: "İclal Akpınar's Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`$ antialiased`}>
        <Navbar />
        {children}
        <SideSocialLinks />
        <SideEmailLink />
      </body>
    </html>
  );
}
