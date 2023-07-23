"use client";
import { FC, useState } from "react";
import Link from "next/link";
import SubMenu from "./SubMenu";
import { NavigationLink } from "@/utils/interface/ILayout";

interface MenuProps {
  item: NavigationLink;
}

const Menu: FC<MenuProps> = ({ item }) => {
  const [Show, setShow] = useState<boolean>(false);

  return (
    <>
      {item.type === "parent" ? (
        <div
          key={item.id}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setShow(true);
          }}
          onMouseLeave={(e) => {
            e.stopPropagation();
            setShow(false);
          }}
        >
          <div className="text-2xl cursor-pointer block font-header font-light opacity-80 tracking-wider p-8 mr-6 hover:text-purple ">
            {item.value}
          </div>
          {Show && <SubMenu item={item?.subMenu} />}
        </div>
      ) : (
        <div key={item.id}>
          <Link
            href={`/${item.path}`}
            className="text-2xl block font-header font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple "
          >
            {item.value}
          </Link>
        </div>
      )}
    </>
  );
};
export default Menu;
