import { FC } from "react";
import Menu from "./Menu";
import { NavigationLink } from "@/utils/interface/ILayout";

interface navigationProps {
  NavigationData: Array<NavigationLink>;
}

const navigation: FC<navigationProps> = ({ NavigationData }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative flex">
        <div className="px-8 flex ">
          {NavigationData.map((item) => (
            <Menu item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default navigation;
