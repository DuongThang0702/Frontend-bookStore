"use client";
import { FC, useEffect, useState } from "react";
import { apiGetBooks } from "@/api";
import { BookProps } from "@/utils/IBook";
import { Book, BookCard, Button, ListBook, Loading } from "@/components";
import Image from "next/image";
import Link from "next/link";
import path from "@/utils/path";
import { Pagination } from "@/components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

interface PageProps {
  params: { category: string };
  searchParams: { page: string };
}

const Page: FC<PageProps> = ({ params, searchParams }) => {
  const [bestseller, setBestSeller] = useState<BookProps | null>(null);
  const [newBooks, setNewBooks] = useState<BookProps | null>(null);
  const [books, setBooks] = useState<BookProps | null>(null);
  const [isShowSlider, setIsShowSlider] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const page: string = searchParams.page || "1";

  const fetchBookByCategory = async () => {
    setPending(true);
    const getBooksByCategory = await apiGetBooks({
      category: params.category,
      limit: 12,
      page,
    });
    const getBooksByCategoryAndBestSeller = await apiGetBooks({
      category: params.category,
      sort: "-sold",
      limit: 8,
    });
    const getNewBooksByCategory = await apiGetBooks({
      category: params.category,
      sort: "createdAt",
    });
    Promise.all([
      getBooksByCategory,
      getBooksByCategoryAndBestSeller,
      getNewBooksByCategory,
    ]).then((rs) => {
      setPending(false);
      setBooks(rs[0].data);
      setBestSeller(rs[1].data);
      setNewBooks(rs[2].data);
    });
  };

  useEffect(() => {
    fetchBookByCategory();
    if (searchParams.page === "1") setIsShowSlider(true);
    else setIsShowSlider(false);
  }, [searchParams.page]);

  const handleAddToCart = () => {};

  return (
    <>
      <div className="w-main mx-auto my-[10rem] flex flex-col gap-[8rem]">
        {isShowSlider ? (
          <>
            <div>
              <ListBook title="Best Seller" />
              {pending ? <Loading /> : <BookCard book={bestseller?.books} />}
            </div>
            <div>
              <ListBook title="New Books" />
              {pending ? <Loading /> : <Book book={newBooks?.books} />}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="grid grid-cols-4 gap-20 mt-20">
          {pending ? (
            <Loading />
          ) : (
            books?.books?.map((el) => (
              <div key={el._id}>
                <Link
                  href={`/${path.DETAIL_BOOK}/${el.slug}/${el._id}/${el.category[0]}`}
                >
                  <Image
                    src={el.image.path}
                    width={200}
                    height={90}
                    alt="image"
                    className="w-[22rem] h-[33rem] overflow-hidden"
                  />
                </Link>
                <div className="grid mt-8 grid-rows-1">
                  <div className="h-[12rem]">
                    <h1 className="text-[1.6rem] font-read font-semibold">
                      {el.title}
                    </h1>
                    <p className="text-[1.4rem] font-read font-semibold mt-4">
                      ${el.price}
                    </p>
                  </div>
                  <Button
                    name="Add To Cart"
                    status={true}
                    hanleOnClick={handleAddToCart}
                    icon={<FontAwesomeIcon icon={faCartPlus} />}
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center">
          {books && books.count > 12 && <Pagination totalCount={books.count} />}
        </div>
      </div>
    </>
  );
};

export default Page;
