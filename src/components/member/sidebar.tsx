"use client";
import { NavigationLink } from "@/utils/interface";
import path from "@/utils/path";
import Link from "next/link";
import { FC, memo } from "react";
import icon from "@/utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { usePathname } from "next/navigation";
import sidebar from "@/style/admin/sidebar.module.css";

const memberSidebar: Array<NavigationLink> = [
  {
    id: 1,
    value: "Personal",
    type: "single",
    path: `/${path.MEMBER}/${path.PERSONAL}`,
    icon: <FontAwesomeIcon icon={icon.faUserLarge} />,
  },

  {
    id: 2,
    value: "My Cart",
    type: "single",
    path: `/${path.MEMBER}/${path.MY_CART}`,
    icon: <FontAwesomeIcon icon={icon.faCartShopping} />,
  },

  {
    id: 3,
    value: "Buy Histories",
    type: "single",
    path: `/${path.MEMBER}/${path.BUY_HISTORIES}`,
    icon: <FontAwesomeIcon icon={icon.faClockRotateLeft} />,
  },

  {
    id: 4,
    value: "Wishlist",
    type: "single",
    path: `/${path.MEMBER}/${path.WISHLISH}`,
    icon: <FontAwesomeIcon icon={icon.faFileLines} />,
  },
];
const style = "p-4 hover:bg-gray text-[1.4rem] font-semibold rounded-md mb-1";

const Page: FC = ({}) => {
  const { current, isLoggedIn } = useSelector((state: RootState) => state.user);
  const pathName = usePathname();

  return (
    <>
      <div className="w-[30rem] shadow-boxShadowRight h-full">
        <Link
          href={`${path.HOME}`}
          className="border-b flex flex-col justify-center items-center"
        >
          <div className="w-[10rem] h-[10rem]">
            <Image
              src={current.avatar ? current.avatar : "/avatarDefault.png"}
              height={150}
              width={150}
              alt="image"
            />
          </div>
          {isLoggedIn && current && (
            <div className="border-b">
              <div className="my-6 text-[1.6rem] px-6">
                {current?.firstName} {current?.lastName}
              </div>
            </div>
          )}
        </Link>
        <div className="mt-4">
          {memberSidebar.map((el) => {
            const isActive: boolean = pathName.startsWith(`${el.path}`);

            return (
              <div key={el.id}>
                <Link
                  className={`${style} block mx-4 ${
                    isActive ? "bg-[#EBEBEB]" : ""
                  } ${sidebar.tab}`}
                  key={el.id}
                  href={el.path ? el.path : ""}
                >
                  <div>
                    <span className="mr-4 text-gray-500">{el?.icon}</span>
                    {el.value}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(Page);
