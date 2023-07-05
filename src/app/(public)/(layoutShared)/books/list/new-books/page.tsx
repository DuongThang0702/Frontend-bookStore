"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookProps } from "@/utils/IBook";
import { apiGetBooks } from "@/api";
import { Button, Loading } from "@/components";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import path from "@/utils/path";

const Page: FC = () => {
  const [newBooks, setNewBooks] = useState<BookProps | null>(null);
  const [peding, setPeding] = useState<Boolean>(false);

  const fetchData = async () => {
    setPeding(true);
    await apiGetBooks({
      sort: "createdAt",
      limit: 9,
      page: Math.round(Math.random() * 22),
    }).then((rs) => {
      setPeding(false);
      setNewBooks(rs.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = () => {};
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-darkPurple">
          <div className="w-main mx-auto flex justify-between">
            <Image
              src={"/banner-newbooks.png"}
              width={512}
              height={400}
              alt="image"
            />
            <div className="flex items-center">
              <div className="flex flex-col">
                <h1 className="text-white text-[3.4rem] font-read font-semibold">
                  New Releases This Week
                </h1>
                <Link href={"#"} className="flex">
                  <Image src={`/icon.png`} width={64} height={64} alt="logo" />
                  <span className="text-white flex items-center text-[1.6rem]">
                    By Bookshop.org
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="my-[8rem]">
          <div className="w-main mx-auto">
            <>
              <h1 className="text-[1.8rem] font-semibold">
                Last Week of June!?
              </h1>
              <p className="my-[3.2rem] text-[1.8rem]">
                If you haven't been able to travel yet, these books will help
                take you to another place! This memoir exploring motherhood will
                transport you to the coast of Maine or you could follow a
                volunteer teacher as he examines the relationship between
                culture and cuisine across Northwest Africa or join a girl
                coming of age in a much too small apartment in Rome. Where to
                next?
              </p>
            </>
            <div>
              {peding ? (
                <Loading />
              ) : (
                newBooks?.books?.map((el) => (
                  <div className="p-[3.2rem] border-b flex" key={el._id}>
                    <Link href={`book/${el.slug}/${el._id}/${el.title}`}>
                      <Image
                        src={el.image.path}
                        width={128}
                        height={190}
                        alt="image"
                        className="shadow-menu"
                      />
                    </Link>
                    <div className="pl-[3.2rem] basis-8/12">
                      <h1 className="text-[2rem] font-read font-semibold">
                        {el.title}
                      </h1>
                      <p className="text-[1.6rem] my-[1.6rem]">
                        {el.description}
                      </p>
                      <Button
                        name="PRE-ORDER"
                        hanleOnClick={handleAddToCart}
                        status={true}
                        icon={<FontAwesomeIcon icon={faCartPlus} />}
                        w60={true}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="my-[6rem]">
              <h1 className="text-[1.8rem]">
                <Link
                  href={path.SIGNUP}
                  className="text-purple hover:border-b hover:border-[#6B0DDE]"
                >
                  Subscribe to our newsletter
                </Link>{" "}
                to get more reading recs straight to your inbox!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
