import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
