"use client";
import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import path from "@/utils/path";
interface pageProps {
  params: { status: string };
}

const Page: FC<pageProps> = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    if (params.status === "success") {
      router.push(`/${path.LOGIN}`);
    } else {
      Swal.fire("Oops!", "Register failed", "error").then(() =>
        router.push(`/${path.SIGNUP}`)
      );
    }
  }, []);

  return <div className="h-screen w-screen bg-gray-100"></div>;
};

export default Page;
