"use client";
import { IBook } from "@/utils/IBook";
import { FC, useEffect, useState } from "react";
import { apiGetBookById } from "@/api";

interface pageProps {
  params: { queries: [slug: string, bid: string] };
}

const Page: FC<pageProps> = ({ params }) => {
  // const [books, setBooks] = useState<IBook | null>(null);
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

export default Page;
