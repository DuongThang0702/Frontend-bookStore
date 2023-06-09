"use client";

import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetCategories } from "@/redux/slices";
import { AppDispatch } from "@/redux/store";
import { navigationLink } from "@/utils/contants";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(GetCategories());
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <div className="border-b">
          <Header />
          <Navigation NavigationData={navigationLink} />
        </div>
        {children}
      </body>
    </html>
  );
}
