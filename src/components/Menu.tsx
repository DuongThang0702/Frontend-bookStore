import { FC, useState, useEffect } from "react";
import { MenuData } from "./navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SubMenu from "./SubMenu";

interface MenuProps {
  item: MenuData;
  elementId: number;
}

const Menu: FC<MenuProps> = ({ item }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${item.path}`);
  const [Show, setShow] = useState<boolean>(false);

  return item.subMenu && item.subMenu.length > 0 ? (
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
      <Link
        href={`/${item.path}`}
        className={
          isActive
            ? `text-2xl block font-header font-light opacity-1 tracking-wider text-purple p-8 mr-6 border-b-4 border-[#6B0DDE]`
            : "text-2xl block font-header font-light opacity-80 tracking-wider p-8 mr-6 hover:text-purple "
        }
      >
        {item.value}
      </Link>
      {Show && <SubMenu item={item.subMenu} />}
    </div>
  ) : (
    <div key={item.id}>
      <Link
        href={`/${item.path}`}
        className={
          isActive
            ? `text-2xl block font-header font-light opacity-1 tracking-wider text-purple p-8 mr-2 border-b-4 border-[#6B0DDE]`
            : "text-2xl block font-header font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple "
        }
      >
        {item.value}
      </Link>
    </div>
  );
};
export default Menu;
