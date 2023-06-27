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
            className="mx-4"
          />
          <div className="flex flex-col justify-center mx-4">
            <p className="text-[1.6rem]">
              <h1 className="text-darkPurple font-bold">
                Bookshop.org works to connect readers with independent
                booksellers all over the world.
              </h1>
              <span>
                ‍We believe local bookstores are essential community hubs that
                foster culture, curiosity, and a love of reading, and we're
                committed to helping them thrive.
              </span>
            </p>
            <p className="text-[1.6rem]">
              <span className="font-bold">
                Every purchase on the site financially supports independent
                bookstores.
              </span>
              <span>
                Our platform gives independent bookstores tools to compete
                online and financial support to help them maintain their
                presence in local communities.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-nude">
        <div className="w-main mx-auto my-[5rem]">
          <h1 className="leading-[3.3rem] h-[8rem] text-[2rem] justify-center items-center flex">
            Since 2020, we've raised more than{" "}
            <span className="text-[5rem] font-read mx-4">$25 million</span> for
            independent bookstores.
          </h1>
        </div>
      </div>
      <div className="w-main mx-auto flex justify-center">
        <div className="flex flex-col font-semibold font-read">
          <h1 className="text-[5rem] text-center">How It Works</h1>
          <p className="text-[2.4rem]">
            (and how your purchases help bookstores)
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
