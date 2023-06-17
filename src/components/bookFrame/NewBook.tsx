import { FC, useEffect, useState } from "react";
import { IBook } from "../../utils/IBook";
import { apiGetBooks } from "@/api";
import ListBook from "../ListBook";
import Loading from "../Loading";
import Book from "./Book";

const NewBook: FC = ({}) => {
  const limit = 20;
  const [newBook, setNewBook] = useState<IBook[] | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setPending(true);
    await apiGetBooks({ sort: "-createdAt", limit })
      .then((response) => {
        setNewBook(response?.data?.books);
        setPending(false);
      })
      .catch((err) => setError(true));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ListBook title={"New Books"} limit={limit} />
      {pending ? (
        <Loading />
      ) : error ? (
        <p>Something went wrong !</p>
      ) : (
        <Book book={newBook} />
      )}
    </>
  );
};

export default NewBook;
