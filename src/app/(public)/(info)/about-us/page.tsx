import { FC } from "react";
import Image from "next/image";
const Page: FC = () => {
  return (
    <>
      <div className="w-main mx-auto">
        <div className="flex">
          <Image
            src={"/imageInAboutUs.png"}
            width={424}
            height={328}
            alt="image"
          />
          <div className="text-[1.6rem]">
            <h1 className="text-darkPurple">
              Bookshop.org works to connect readers with independent booksellers
              all over the world.
            </h1>
            <span>
              ‍We believe local bookstores are essential community hubs that
              foster culture, curiosity, and a love of reading, and we're
              committed to helping them thrive.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
