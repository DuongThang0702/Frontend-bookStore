"use client";
import { IBook } from "@/utils/IBook";
import { FC, useEffect, useState } from "react";

interface pageProps {
  params: { book: [title: string, bid: string] };
}

const page: FC<pageProps> = ({ params }) => {
  console.log(params.book);

  // const [books, setBooks] = useState<BookData | null>(null);
  // const [error, setError] = useState<boolean>(false);
  // const fetchData = async () => {
  //   await BookApi.apiGetBookById({
  //     bid: params.bid,
  //   })
  //     .then((response) => setBooks(response.data))
  //     .catch(() => setError(true));
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return <>{/* <h1>{books?.bookData?._id}</h1> */}</>;
};

export default page;
