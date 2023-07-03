"use client";
import { apiGetBooks } from "@/api/";
import { AxiosError, AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { Book, ListBook } from "@/components/";
import Loading from "../effect/Loading";
import { IBook } from "@/utils/IBook";

const BestSeller: FC = ({}) => {
  const [bestSeller, setBestSeller] = useState<IBook[] | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Boolean>(false);
  const limit = 20;
  const fetchData = async () => {
    setPending(true);
    await apiGetBooks({
      sort: "-sold",
      limit,
    })
      .then((rs) => {
        setBestSeller(rs?.data?.books);
        setPending(false);
      })
      .catch((error: AxiosError<string>) => setError(true));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ListBook title={"Best Seller"} />
      {pending ? (
        <Loading />
      ) : error ? (
        <p>Something went wrong !</p>
      ) : (
        <Book book={bestSeller} />
      )}
    </>
  );
};

export default BestSeller;
