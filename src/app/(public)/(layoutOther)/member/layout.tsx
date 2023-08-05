"use client";

import { RootState } from "@/redux/store";
import path from "@/utils/path";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { SidebarMember } from "@/components";
import { ToastContainer } from "react-toastify";
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { isLoggedIn, current } = useSelector((state: RootState) => state.user);
  const { isShowModel, modelChildren } = useSelector(
    (state: RootState) => state.app
  );
  if (!isLoggedIn || !current) {
    router.push(`/${path.LOGIN}`);
  }
  return (
    <>
      <div className="flex relative min-h-screen">
        {isShowModel && (
          <div className="absolute top-0 bottom-0 right-0 left-0 z-50">
            {modelChildren}
          </div>
        )}
        <div className="absolute bottom-0 top-0">
          <SidebarMember />
        </div>
        <div className="w-[30rem]"></div>
        <div className="flex-auto ml-8">{children}</div>
        <div className="z-50">
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
            className={"z-50"}
          />
        </div>
      </div>
    </>
  );
}
