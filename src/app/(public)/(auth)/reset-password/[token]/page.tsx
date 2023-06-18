"use client";
import { apiResetPassword } from "@/api";
import { InputField } from "@/components";
import Button from "@/components/button";
import { ResetPassword } from "@/utils/IUser";
import path from "@/utils/path";
import { useRouter } from "next/navigation";
import { FC, useCallback, useState } from "react";
import { toast } from "react-toastify";
interface PageProps {
  params: { token: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const [payload, setPayload] = useState<ResetPassword>({
    password: "",
  });
  const handleSubmit = useCallback(async () => {
    const response = await apiResetPassword({
      ...payload,
      token: params.token,
    });
    if (response?.data?.error === 0) {
      toast.success(response.data.mes);
      router.push(`/${path.LOGIN}`);
    } else toast.error(response.data.mes);
  }, [payload]);
  return (
    <>
      <div className="w-1/2 mx-auto p-[2.12rem]">
        <h1 className="text-[3.4rem] font-read font-bold">Reset Password</h1>
        <p className="text-[1.6rem]">
          Please enter your new password on the form below
        </p>
        <InputField
          nameKey="password"
          value={payload.password}
          setValue={setPayload}
        />
        <Button name="Reset Password" hanleOnClick={handleSubmit} />
      </div>
    </>
  );
};

export default Page;
