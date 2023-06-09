import path from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface headerProps {}

const header: FC<headerProps> = ({}) => {
  return (
    <div className="flex justify-between p-12 items-center">
      <Link href={path.HOME}>
        <Image
          src="/logo.png"
          width={222}
          height={34}
          alt="logo"
          className=""
        />
      </Link>

      <div className="flex items-center relative border p-4 rounded-full w-[60rem] h-[5rem]">
        <input
          type="text"
          placeholder="Search books"
          className="border-none w-full h-full text-main text-normal outline-0"
        />
        <Link href="#" className="w-[2rem] h-[2rem] mr-4">
          <FontAwesomeIcon icon={icon.faMagnifyingGlass} className="text-3xl" />
        </Link>
      </div>
      <div className=" flex items-center">
        <Link href={`${path.LOGIN}`} className=" mr-12 text-2xl font-header">
          Sign in
        </Link>
        <Link href="#" className="w-[2rem] h-[2rem] ">
          <FontAwesomeIcon
            icon={icon.faCartShopping}
            className="text-[#000] text-3xl"
          />
        </Link>
      </div>
    </div>
  );
};

export default header;
