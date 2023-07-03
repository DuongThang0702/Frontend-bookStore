"use client";
import { FC, useEffect, useState } from "react";
import ListBook from "./ListBook";
import { IBook } from "../../utils/IBook";
import { apiGetBooks } from "@/api";
import Loading from "../effect/Loading";
import Book from "./Book";
import BooksCard from "./BooksCard";

interface BooksRandomProps {
  limit: number;
  style: number;
  title: string;
}

const BooksRandom: FC<BooksRandomProps> = ({ limit, style, title }) => {
  const [randomBook, setRandomBook] = useState<IBook[] | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const fetchData = async () => {
    setPending(true);
    await apiGetBooks({
      page: Math.round(Math.random() * 19),
      limit,
    })
      .then((response) => {
        setRandomBook(response?.data?.books);
        setPending(false);
      })
      .catch((err) => setError(true));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ListBook title={title} />
      {pending ? (
        <Loading />
      ) : error ? (
        <p>Something went wrong !</p>
      ) : style === 1 ? (
        <Book book={randomBook} />
      ) : (
        <BooksCard book={randomBook} />
      )}
    </>
  );
};

export default BooksRandom;
