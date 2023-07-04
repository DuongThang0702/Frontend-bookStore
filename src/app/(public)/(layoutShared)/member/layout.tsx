"use client";

import { RootState } from "@/redux/store";
import path from "@/utils/path";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn, current } = useSelector((state: RootState) => state.user);
  if (!isLoggedIn || !current) {
    router.push(`/${path.LOGIN}`);
  }
  return <>{children}</>;
}
