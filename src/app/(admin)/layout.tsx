"use client";

import { RootState } from "@/redux/store";
import path from "@/utils/path";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { SidebarAdmin } from "@/components";
import { ToastContainer } from "react-toastify";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn, current } = useSelector((state: RootState) => state.user);
  if (!isLoggedIn || !current || current.role !== "admin")
    return router.push(`/${path.LOGIN}`);

  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="flex-auto ml-8">{children}</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
