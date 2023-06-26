import path from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import { FC, useState, MouseEvent } from "react";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "@/redux/store";
import { getUserCurrent } from "@/redux/user/asyncAction";
import { logout } from "@/redux/user/user";
import { clearMes } from "@/redux/user/user";
import { apiLogout } from "@/api";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Header: FC = ({}) => {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, current, mes } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) dispatch(getUserCurrent());
    }, 300);
  }, [isLoggedIn, dispatch]);
  const hanleShowMenuUser = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsShow((prev) => !prev);
  };

  const handleLogout = async () => {
    const response = await apiLogout();
    if (response.data.error === 0) dispatch(logout());
  };
  useEffect(() => {
    if (mes)
      Swal.fire("Oops!", mes, "info").then(() => {
        dispatch(clearMes());
        router.push("/login");
      });
  }, [mes]);
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
          className="w-[80rem] h-[5rem] rounded-full text-main text-normal border-none bg-[#F6F5F7] p-6 focus:outline-[#6B0DDE] focus:outline-6"
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
        {isLoggedIn && current ? (
          <div className="flex mx-[2rem]">
            <span className="mr-12 text-2xl font-header ">
              Welcome, {current?.lastName} {current?.firstName}
            </span>
            <span
              onClick={hanleShowMenuUser}
              className="flex items-center justify-center cursor-pointer relative"
            >
              <FontAwesomeIcon
                icon={icon.faCircleUser}
                className="text-4xl text-black"
              />

              {isShow && (
                <div className="absolute top-[3rem] right-[-7rem] z-10 bg-[white] shadow-menu">
                  <Link
                    href={"#"}
                    className="text-2xl min-w-[20rem] block font-header 
                    font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-2xl text-start min-w-[20rem] block font-header 
                    font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple"
                  >
                    Logout
                  </button>
                </div>
              )}
            </span>
          </div>
        ) : (
          <Link
            href={`${path.LOGIN}`}
            className="mr-12 text-2xl font-header hover:text-purple"
          >
            Sign in
          </Link>
        )}
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
