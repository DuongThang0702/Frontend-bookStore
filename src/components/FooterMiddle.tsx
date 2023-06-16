import path from "@/utils/path";
import Link from "next/link";
import { FC } from "react";

interface FooterMiddleProps {}

const FooterMiddle: FC<FooterMiddleProps> = ({}) => {
  return (
    <>
      <div className="w-full bg-[#FFEEE6] mt-40">
        <div className="w-main mx-auto py-20 ">
          <div className="w-2/3 flex justify-between mx-auto ">
            <div className="flex justify-center flex-col">
              <h1
                className=" text-[3.4rem] text-darkPurple font-semibold font-header 
            tracking-[-0.04rem]"
              >
                Sign up for our Newsletter
              </h1>
              <p className="text-3xl text-start text-darkPurple">
                Tell us what books you love.
              </p>
            </div>
            <div className="flex items-center">
              <Link
                href={path.SIGNUP}
                className="rounded-full flex justify-center text-[1.6rem] 
            text-header font-semibold uppercase font-header text-white 
             bg-purple px-12 w-[20rem] h-[3rem] py-2"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMiddle;
