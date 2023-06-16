"use client";
import { FC, useCallback, useState } from "react";
import Image from "next/image";
import { Register } from "@/utils/IUser";
import { InputField } from "@/components";
import { apiRegister } from "@/api";
import Button from "@/components/button";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const [payload, setPayload] = useState<Register>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(async () => {
    const response = await apiRegister(payload);
    if (response.data.error === 0) {
      Swal.fire("Congralution", response.data.mes, "success").then(() =>
        router.push("/login")
      );
    } else {
      Swal.fire("Oops!", response.data.mes, "error");
    }
  }, [payload]);

  return (
    <>
      <div className="w-full bg-[#ccc] p-20">
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
            <Button name="Subscribe" hanleOnClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
