"use client";

import "./globals.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body suppressHydrationWarning={true}>
        <div className="border-b">
          <Header />
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}
