"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Register } from "@/utils/interface/IUser";
import { InputField } from "@/components";
import { apiFinalRegister, apiRegister } from "@/api";
import { Button } from "@/components";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import path from "@/utils/path";
interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [payload, setPayload] = useState<Register>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isShowModel, setIsShowModel] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    if (payload !== null) {
      setIsValid(Object.values(payload).every((value) => value !== ""));
    }
  }, [payload]);
  const handleSubmit = useCallback(async () => {
    const response = await apiRegister(payload);
    if (response.data.error === 0) {
      Swal.fire("Congralution", response.data.mes, "success").then(() => {
        setIsShowModel(true);
      });
    } else {
      Swal.fire("Oops!", response.data.mes, "error");
    }
  }, [payload]);

  const handleSendToken = useCallback(async () => {
    const response = await apiFinalRegister(token);
    if (response.data.error === 0) {
      Swal.fire("Congralution", "successful authentication", "success").then(
        () => {
          router.push(`/${path.LOGIN}`);
          setIsShowModel(false);
        }
      );
    } else Swal.fire("Oops!", "Invalid Token, please try again", "error");
  }, [token]);

  return (
    <>
      <div className="w-full bg-[#ccc] p-20 relative">
        {isShowModel && (
          <>
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-overLay flex items-center justify-center">
              <div className="relative">
                <div
                  className="text-[1.6rem] top-0 right-0 z-10 absolute font-bold bg-red text-white duration-300 px-4 py-2 m-2 cursor-pointer rounded-md"
                  onClick={() => setIsShowModel(false)}
                >
                  X
                </div>
                <div className="bg-white p-20 rounded-md">
                  <h1 className="text-[1.6rem]">
                    We sent a code your email, please check your mail and enter
                  </h1>
                  <div className="flex flex-col relative mt-8 group">
                    {token.trim() !== "" && (
                      <label
                        htmlFor="Token-register"
                        className="text-[1.2rem] absolute left-[1.7rem] z-10 animate-slideTop  top-[-1rem] bg-white select-none pointer-events-none"
                      >
                        Token
                      </label>
                    )}
                    <input
                      type="text"
                      onChange={(e) => setToken(e.target.value)}
                      id="Token-register"
                      placeholder="Token"
                      className="text-[1.6rem] rounded-md border-2 outline-none p-6 ease-in duration-300 focus:border-purple"
                    />
                    <Button
                      hanleOnClick={handleSendToken}
                      status={true}
                      name="Submit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="w-3/5 mx-auto">
          <div className="w-1/2 mx-auto bg-white p-20 flex-col">
            <div className="flex justify-center flex-col">
              <Image
                src={"/banner-signup.png"}
                width={200}
                height={125}
                alt="logo"
                className=" mb-8"
              />
              <h1 className="text-center text-5xl font-bold">
                Bookshop.org US Subscribe
              </h1>
            </div>

            <p className="text-[1.3rem] pt-[4rem] pb-[2rem]">
              Your privacy is important. We will never share your email or
              information with anyone.
            </p>
            <InputField
              styleLabel="text-[1.6rem] mb-4 text-start font-bold"
              nameKey="email"
              setValue={setPayload}
              value={payload.email}
            />
            <InputField
              styleLabel="text-[1.6rem] mb-4 text-start font-bold"
              nameKey="password"
              setValue={setPayload}
              value={payload.password}
              type="password"
            />
            <InputField
              styleLabel="text-[1.6rem] mb-4 text-start font-bold"
              nameKey="firstName"
              setValue={setPayload}
              value={payload.firstName}
            />
            <InputField
              styleLabel="text-[1.6rem] mb-4 text-start font-bold"
              nameKey="lastName"
              setValue={setPayload}
              value={payload.lastName}
            />
            <Button
              name="Subscribe"
              hanleOnClick={handleSubmit}
              status={isValid}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
