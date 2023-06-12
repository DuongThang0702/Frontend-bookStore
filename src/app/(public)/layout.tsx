"use client";

import { Header, Navigation } from "@/components/";
import { navigationLink } from "@/utils/contants";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="border-b">
        <Header />
        <Navigation NavigationData={navigationLink} />
      </div>
      {children}
    </div>
  );
}
