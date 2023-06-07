import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { navigationLink } from "@/utils/contants";
interface navigationProps {}

const navigation: FC<navigationProps> = ({}) => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center">
      <div className="relative flex">
        <div className=" px-8 flex " style={{ marginRight: "-14rem" }}>
          {navigationLink.map((el) => {
            const isActive = pathname.startsWith(`/${el.path}`);
            return (
              <Link
                href={`/${el.path}`}
                key={el.id}
                className={
                  isActive
                    ? `text-2xl block font-header font-light opacity-1 tracking-wider text-purple p-8 mr-2 border-b-4 border-[#6B0DDE]`
                    : "text-2xl block font-header font-light opacity-80 tracking-wider p-8 mr-2 hover:text-purple "
                }
              >
                {el.value}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default navigation;
