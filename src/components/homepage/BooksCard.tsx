import { FC } from "react";
import { BookProps } from "@/utils/interface/IBook";
import Image from "next/image";
import Link from "next/link";
import path from "@/utils/path";

const BooksCard: FC<BookProps> = ({ books }) => {
  return (
    <div className="w-main grid grid-cols-4 gap-[2rem]">
      {books?.map((el) => (
        <Link
          key={el._id}
          href={`/${path.DETAIL_BOOK}/${el.slug}/${el._id}/${el.category[0]}`}
          className="flex"
        >
          <Image
            src={el.image.path}
            width={100}
            height={123}
            alt="image book"
          />
          <div className="pl-4 flex flex-col pt-8">
            <span className="text-xl font-bold h-[8rem] font-header">
              {el.title}
            </span>
            <span className="text-2xl mt-8 font-semibold">${el.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BooksCard;
