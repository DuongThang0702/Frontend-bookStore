"use client";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import path from "@/utils/path";
import { InputField } from "@/components/";
import Button from "@/components/form/button";
import { IUser } from "@/utils/interface/IUser";
import { useRouter } from "next/navigation";
import { apiLogin } from "@/api";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "@/redux/user/user";

const PageLogin: FC = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [payload, setPayload] = useState<IUser>({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (payload !== null) {
      setIsValid(Object.values(payload).every((value) => value !== ""));
    }
  }, [payload]);

  const handleSubmit = useCallback(async () => {
    const response = await apiLogin(payload);
    if (response.data.error === 0) {
      dispatch(
        login({
          isLoggedIn: true,
          access_token: response.data.access_token,
        })
      );
      await Swal.fire("Congration", response.data.mes, "success").then(() => {
        router.push(`/${path.HOME}`);
      });
    } else Swal.fire("Oops!", response.data.mes, "error");
  }, [payload]);

  return (
    <>
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
            <Button name="Login" hanleOnClick={handleSubmit} status={isValid} />
            <p className="text-[1.6rem] mb-12">
              or{" "}
              <Link className="text-red" href={`/${path.SIGNUP}`}>
                {" "}
                Create a new account{" "}
              </Link>{" "}
              |{" "}
              <Link className="text-red" href={`/${path.FORGOT_PASSWORD}`}>
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLogin;
