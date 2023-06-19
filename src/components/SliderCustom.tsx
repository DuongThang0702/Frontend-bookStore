import { BookProps } from "@/utils/IBook";
import path from "@/utils/path";
import Link from "next/link";
import { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Page: FC<BookProps> = ({ book }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div className="text-center relative">
      <Slider {...settings}>
        {book?.map((el) => {
          return (
            <div key={el._id}>
              <Link href={`/${path.DETAIL_BOOK}/${el.slug}/${el._id}`}>
                <Image
                  src={el.image.path}
                  width={140}
                  height={123}
                  alt="image book"
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Page;
