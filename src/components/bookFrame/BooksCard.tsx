import { FC } from "react";
import { IBook } from "../../utils/IBook";
import Image from "next/image";
import Link from "next/link";
import path from "@/utils/path";
interface BooksCardProps {
  book: Array<IBook> | null;
}

const BooksCard: FC<BooksCardProps> = ({ book }) => {
  return (
    <div className="w-main grid grid-cols-4 gap-4">
      {book?.map((el) => (
        <Link
          key={el._id}
          href={`/${path.DETAIL_BOOK}/${el._id}`}
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
