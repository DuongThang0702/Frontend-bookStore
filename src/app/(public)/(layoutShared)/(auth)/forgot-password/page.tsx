"use client";
import { apiForgotPassword } from "@/api";
import { InputField } from "@/components";
import Button from "@/components/form/button";
import { ForgotPassword } from "@/utils/IUser";
import { FC, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Page: FC = ({}) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [payload, setPayload] = useState<ForgotPassword>({ email: "" });
  const handleSubmit = useCallback(async () => {
    const response = await apiForgotPassword(payload);
    if (response.data.error === 0) toast.success(response.data.mes);
    else toast.error(response.data.mes);
  }, [payload]);
  useEffect(() => {
    if (payload !== null) {
      setIsValid(Object.values(payload).every((value) => value !== ""));
    }
  }, [payload]);
  return (
    <>
      <div className="w-1/2 mx-auto p-[2.12rem]">
        <h1 className=" text-[3.4rem] font-read font-bold">Forgot Password?</h1>
        <p className="text-[1.6rem]">
          Please enter your email on the form below
        </p>
        <InputField
          nameKey="email"
          value={payload.email}
          setValue={setPayload}
        />
        <Button
          name="Forgot Password"
          hanleOnClick={handleSubmit}
          status={isValid}
        />
      </div>
    </>
  );
};

export default Page;
