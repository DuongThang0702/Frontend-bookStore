import { FC, useEffect, useState } from "react";
import { BookData } from "./IBook";
import { BookApi } from "@/api";
import ListBook from "../ListBook";
import Loading from "../Loading";
import Book from "./Book";

interface NewBookProps {}

const NewBook: FC<NewBookProps> = ({}) => {
  const limit = 20;
  const [newBook, setNewBook] = useState<BookData | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setPending(true);
    await BookApi.apiGetBooks({ sort: "-createdAt", limit })
      .then((response) => {
        setNewBook(response.data);
        setPending(false);
      })
      .catch((err) => setError(true));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ListBook title={"Best Seller"} limit={limit} />
      {pending ? (
        <Loading />
      ) : error ? (
        <p>Something went wrong !</p>
      ) : (
        <Book book={newBook?.book} />
      )}
    </>
  );
};

export default NewBook;
