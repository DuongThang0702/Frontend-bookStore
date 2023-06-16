"use client";
import Link from "next/link";
import { FC, useCallback, useState } from "react";
import path from "@/utils/path";
import { InputField } from "@/components/";
import Button from "@/components/button";
import { IUser } from "@/utils/IUser";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [payload, setPayload] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleOnClick = useCallback(() => {}, [payload]);

  return (
    <div className="w-full bg-[#F6F5F7] py-40 flex justify-center">
      <div className="w-main mx-auto">
        <div className="w-1/2 mx-auto">
          <h1 className="text-[3.4rem] font-read font-bold  pb-8 text-start ">
            Login as Existing Customer
          </h1>
        </div>
        <div className="w-1/2 mx-auto bg-[white] py-8 px-16">
          <div className="flex flex-col">
            <InputField
              value={payload.email}
              setValue={setPayload}
              nameKey="email"
            />
            <InputField
              value={payload.password}
              setValue={setPayload}
              nameKey="password"
              type="password"
            />
          </div>
          <div className="tracking-wider text-start text-[1.6rem] mt-8">
            By creating an account, you agree to Bookshop’s
            <span>
              <Link className="text-red px-2" href={path.PRIVATE_NOTICE}>
                Privacy Notice
              </Link>
            </span>
            and
            <span>
              <Link className="text-red px-2" href={path.TERMS_OF_USE}>
                Terms of Use
              </Link>
            </span>
            .
          </div>
          <Button name="Login" hanleOnClick={handleOnClick} />
          <p className="text-[1.6rem] mb-12">
            or{" "}
            <Link className="text-red" href={"/sign-up"}>
              {" "}
              Create a new account{" "}
            </Link>{" "}
            |{" "}
            <Link className="text-red" href={"/forgot-password"}>
              Forgot Password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
