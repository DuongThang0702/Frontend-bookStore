import Link from "next/link";
import { FC } from "react";

interface ListBookProps {
  title: string;
}

const ListBook: FC<ListBookProps> = ({ title }) => {
  return (
    <>
      <div className="pt-20">
        <div className="flex justify-between mb-12">
          <h1 className="text-[2.8rem] font-read font-semibold font-header tracking-wider">
            {title}
          </h1>
          <Link
            href="#"
            className="text-2xl flex items-center text-link border-b border-[#7f48d9]"
          >
            View all (25)
          </Link>
        </div>
      </div>
    </>
  );
};

export default ListBook;
