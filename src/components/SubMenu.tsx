import { FC } from "react";
import { MenuData } from "./navigation";
import Link from "next/link";
interface SubMenuProps {
  item: Array<MenuData>;
}

const SubMenu: FC<SubMenuProps> = ({ item }) => {
  return (
    <div className="absolute z-10 bg-[white]">
      {item.map((el) => {
        return (
          <Link
            key={el.id}
            href={`/${el.path}`}
            className="text-2xl block font-header font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple "
          >
            {el.value}
          </Link>
        );
      })}
    </div>
  );
};

export default SubMenu;
