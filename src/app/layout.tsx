"use client";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SideEmailLink } from "@/components/SideEmailLink";
import { SideSocialLinks } from "@/components/SideSocialLinks";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="min-h-screen">
          <Navbar />

          {children}
        </div>
        <SideSocialLinks />

        <SideEmailLink />
        <Footer />
      </body>
    </html>
  );
}
