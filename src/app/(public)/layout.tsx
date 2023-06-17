"use client";

import { Footer, Header, Navigation } from "@/components/";
import { navigationLink } from "@/utils/contants";
import { Metadata } from "next";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b fixed bg-white z-30 w-full">
        <Header />
        <Navigation NavigationData={navigationLink} />
      </div>
      <div className="pt-[17.1rem]">
        {children}
        <Footer />
      </div>
    </>
  );
}
