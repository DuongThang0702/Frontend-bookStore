"use client";
import { IBook } from "@/utils/IBook";
import { FC, useEffect, useState } from "react";
import { apiGetBookById, apiGetBooks } from "@/api";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from "@/utils/icon";
import Button from "@/components/button";
import { Book, ListBook, SliderCustom } from "@/components";
interface pageProps {
  params: { queries: [slug: string, bid: string] };
}

const Page: FC<pageProps> = ({ params }) => {
  const [book, setBook] = useState<IBook | null>(null);
  const [categories, setCategories] = useState<IBook[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [peding, setPeding] = useState<IBook[] | null>(null);
  let listCategories: string;
  const fetchData = async () => {
    const response = await apiGetBookById("64858a2df3d9b7d3e0d7048d");
    if (response.data.error === 0) setBook(response.data.bookData);
    listCategories = response.data.bookData.category.map(
      (cate: string) => cate
    );
  };

  const fetchBookByCategories = async () => {
    const response = await apiGetBooks({
      limit: 10,
      page: Math.round(Math.random() * 10),
    });

    if (response.data.error === 0) setCategories(response.data.books);
  };

  useEffect(() => {
    fetchData();
    fetchBookByCategories();
  }, []);
  return (
    <>
      <div className="w-main mx-auto p-20">
        {book && (
          <>
            <div className="flex">
              <div className="shadow-menu mr-[10rem] h-[37rem] overflow-y-hidden  ">
                <Image
                  src={book.image.path}
                  alt="image"
                  height={100}
                  width={377}
                />
              </div>
              <div className="basis-8/12">
                <h1 className="text-[3.4rem] font-read font-bold mb-2">
                  {book.title}
                </h1>
                <span className="uppercase text-[1.2rem] font-semibold font-header mb-4">
                  format
                </span>
                <div className="bg-[#F6F5F7] w-[20rem] py-[4rem] px-[1rem] h-[5rem] border-2 border-[#573ba3] justify-center flex items-start flex-col gap-2">
                  <h1 className="text-3xl text-purple">Paperback</h1>
                  <p className="text-[1.6rem] font-semibold font-read">
                    ${book.price}
                  </p>
                </div>
                <div>
                  {book.available >= 1 ? (
                    <div className="mt-8">
                      <FontAwesomeIcon
                        icon={icon.faCircleCheck}
                        className="text-[#1fa5a3] text-[1.5rem] mr-2"
                      />
                      <span className="text-[1.5rem] text-[#1fa5a3] uppercase font-medium">
                        available
                      </span>
                    </div>
                  ) : (
                    <div className="mt-8">
                      <FontAwesomeIcon
                        icon={icon.faCircleXmark}
                        className="text-red text-[1.5rem] mr-2"
                      />
                      <span className="text-[1.5rem] text-red uppercase font-medium">
                        out the stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex">
                  <div className="mr-6">
                    {" "}
                    <Button
                      name="ADD TO CART"
                      status={true}
                      hanleOnClick={() => {}}
                    />
                  </div>
                  <div>
                    <Button
                      name="ADD TO WISHLIST"
                      status={true}
                      hanleOnClick={() => {}}
                      style="bg-white px-10 py-3 text-purple font-main 
                    text-2xl rounded-full my-8 uppercase font-bold border-2 border-[#6B0DDE]"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-[2.8rem] font-serif font-semibold">
                    Description
                  </h1>
                  <p className="text-[1.6rem]">{book.description}</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <ListBook title="Random" />
              <Book book={categories} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
