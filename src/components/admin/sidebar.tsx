"use client";
import path from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import { FC, memo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";
import { NavigationLink } from "@/utils/ILayout";
import sidebar from "@/style/admin/sidebar.module.css";

export const adminSidebar: Array<NavigationLink> = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={icon.faGauge} />,
    value: "Dashboard",
    type: "single",
    path: path.ADMIN + "/" + path.DASHBOARD,
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={icon.faCartShopping} />,
    value: "Manage Order",
    type: "single",
    path: path.ADMIN + "/" + path.MANAGE_ORDER,
  },
  {
    id: 3,
    value: "Manage User",
    type: "single",
    path: path.ADMIN + "/" + path.MANAGE_USER + "?page=1",
    icon: <FontAwesomeIcon icon={icon.faBookBookmark} />,
  },
  {
    id: 4,
    value: "Manage Products",
    type: "parent",
    icon: <FontAwesomeIcon icon={icon.faBook} />,
    subMenu: [
      {
        id: 1,
        type: "single",
        value: "Create Product",
        path: path.ADMIN + "/" + path.CREATE_BOOK,
        icon: <FontAwesomeIcon icon={icon.faFolderPlus} />,
      },
      {
        id: 2,
        type: "single",
        value: "Manage Product",
        path: path.ADMIN + "/" + path.MANAGE_BOOKS,
        icon: <FontAwesomeIcon icon={icon.faBookAtlas} />,
      },
    ],
  },
];

const style = "p-4 hover:bg-gray text-[1.4rem] font-semibold rounded-md mb-1";

const Page: FC = ({}) => {
  const { current, isLoggedIn } = useSelector((state: RootState) => state.user);
  const [isShowSubMenu, setIsShowSubMenu] = useState<Array<number>>([]);
  const [isActiveTabParent, setIsActiveTabParent] = useState<boolean>(false);
  const pathName = usePathname();
  const hanleShowMenuUser = (tabId: number) => {
    if (isShowSubMenu.some((el: number) => el === tabId))
      setIsShowSubMenu((prev: Array<number>) => {
        setIsActiveTabParent(false);
        return prev.filter((el: number) => el !== tabId);
      });
    else
      setIsShowSubMenu((prev: Array<number>) => {
        setIsActiveTabParent(true);
        return [...prev, tabId];
      });
  };
  return (
    <div className="w-[30rem] flex-none shadow-boxShadowRight h-screen">
      <Link href={`${path.HOME}`} className="border-b block">
        <Image
          src={"/logowhite.png"}
          height={150}
          width={150}
          alt="image"
          className="p-12"
        />
      </Link>
      {isLoggedIn && current && (
        <div className="border-b">
          <div className="my-6 text-[1.6rem] px-6">
            {current?.firstName} {current?.lastName}
          </div>
        </div>
      )}
      <div className="mt-4">
        {adminSidebar.map((el) => {
          const isActive: boolean = pathName.startsWith(`/${el.path}`);
          return (
            <div key={el.id}>
              {el.type === "single" && (
                <>
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
                </>
              )}
              {el.type === "parent" && (
                <>
                  <div
                    className={`${style} flex justify-between cursor-pointer mx-4 ${
                      sidebar.tab
                    } ${isActiveTabParent ? "bg-gray" : ""}`}
                    onClick={() => hanleShowMenuUser(el.id)}
                  >
                    <div>
                      <span className={`mr-4 text-gray-500`}>{el?.icon}</span>
                      {el.value}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={icon.faCaretRight}
                        className={`text-[1.4rem] px-4 duration-300 ${
                          isShowSubMenu.some((id: number) => id === el.id)
                            ? "rotate-90"
                            : ""
                        }`}
                      />
                    </div>
                  </div>

                  {isShowSubMenu.some((id: number) => id === el.id) && (
                    <div className="mx-4 flex flex-col duration-200">
                      {el.subMenu?.map((el) => {
                        const isActive: boolean = pathName.startsWith(
                          `/${el.path}`
                        );

                        return (
                          <Link
                            href={el.path}
                            key={el.id}
                            className={`${style} ${
                              isActive ? "bg-[#EBEBEB]" : ""
                            } mb-1 ml-6`}
                          >
                            <span className="mr-4 text-gray-500">
                              {el?.icon}
                            </span>
                            {el.value}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(Page);
