"use client";

import { FC } from "react";
import Menu from "./Menu";

export interface MenuData {
  id: number;
  value: string;
  path: string;
  subMenu?: Array<MenuData>;
}

interface navigationProps {
  NavigationData: Array<MenuData>;
}

const navigation: FC<navigationProps> = ({ NavigationData }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex">
        <div className=" px-8 flex " style={{ marginRight: "-14rem" }}>
          {NavigationData.map((item) => (
            <Menu item={item} elementId={item.id} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default navigation;
