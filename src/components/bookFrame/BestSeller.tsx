import { BookApi } from "@/api/";
import { FC, useEffect, useState } from "react";
import { Book, ListBook } from "@/components/";
import Loading from "../Loading";
import { BookData } from "./IBook";

interface BestSellerProps {}

const BestSeller: FC<BestSellerProps> = ({}) => {
  const [bestSeller, setBestSeller] = useState<BookData | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<Boolean>(false);
  const limit = 20;
  const fetchData = async () => {
    setPending(true);
    await BookApi.apiGetBooks({ sort: "-sold", limit })
      .then((rs) => {
        setBestSeller(rs.data);
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
        <Book book={bestSeller?.book} />
      )}
    </>
  );
};

export default BestSeller;
