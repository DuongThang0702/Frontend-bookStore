import path from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header: FC = ({}) => {
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

      <div className="relative">
        <input
          type="text"
          placeholder="Search books"
          className="w-[70rem] h-[5rem] rounded-full text-main text-normal border-none bg-[#F6F5F7] p-6 focus:outline-[#6B0DDE] focus:outline-6"
        />
        <span className="absolute bottom-[1.5rem] right-[1.25%]">
          <Link href="#" className="w-[2rem] h-[2rem] mr-4">
            <FontAwesomeIcon
              icon={icon.faMagnifyingGlass}
              className="text-3xl text-purple"
            />
          </Link>
        </span>
      </div>
      <div className=" flex items-center">
        <Link href={`${path.LOGIN}`} className=" mr-12 text-2xl font-H">
          Choose a Bookstore
        </Link>
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

export default Header;
