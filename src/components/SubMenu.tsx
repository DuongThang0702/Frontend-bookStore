import { FC } from "react";
import { MenuData } from "./navigation";
import Link from "next/link";
interface SubMenuProps {
  item: Array<MenuData>;
}

const SubMenu: FC<SubMenuProps> = ({ item }) => {
  return (
    <div className="absolute z-10 bg-[white] shadow-menu">
      {item.map((el) => {
        return (
          <div key={el.id}>
            <Link
              href={`/${el.path}`}
              className="text-2xl min-w-[20rem] block font-header 
              font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple"
            >
              {el.value}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
