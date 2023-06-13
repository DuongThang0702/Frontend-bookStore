import { FC, useEffect, useState } from "react";
import ListBook from "../ListBook";
import { BookData } from "./IBook";
import { BookApi } from "@/api";
import Loading from "../Loading";
import Book from "./Book";
import BooksCard from "./BooksCard";

interface BooksRandomProps {
  limit: number;
  style: number;
  title: string;
}

const BooksRandom: FC<BooksRandomProps> = ({ limit, style, title }) => {
  const [randomBook, setRandomBook] = useState<BookData | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setPending(true);
    await BookApi.apiGetBooks({
      page: Math.round(Math.random() * 8),
      limit,
    })
      .then((response) => {
        setRandomBook(response.data);
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
        <Book book={randomBook?.book} />
      ) : (
        <BooksCard book={randomBook?.book} />
      )}
    </>
  );
};

export default BooksRandom;
