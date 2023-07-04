"use client";
import { Banner, Loading } from "@/components";
import { FC, useEffect, useState } from "react";
import { FooterMiddle, TitleBook, CustomSlider } from "@/components";
import { BookProps } from "@/utils/IBook";
import { apiGetBooks } from "@/api";

const Home: FC = ({}) => {
  const [newBook, setNewBook] = useState<BookProps | null>(null);
  const [bestSeller, setBestSeller] = useState<BookProps | null>(null);
  const [fictionBooks, setFictionBooks] = useState<BookProps | null>(null);
  const [travelBooks, setTravelBooks] = useState<BookProps | null>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const limit = 10;
  const fetchData = async () => {
    setPending(true);
    const NewBooksData = await apiGetBooks({ sort: "-createdAt", limit });
    const BestSellerBooksData = await apiGetBooks({ sort: "-sold", limit });
    const FictionBooksData = await apiGetBooks({
      category: "fiction",
      limit,
      page: 1,
    });
    const TravelBooksData = await apiGetBooks({
      category: "travel",
      limit,
      page: 1,
    });

    Promise.all([
      NewBooksData,
      BestSellerBooksData,
      FictionBooksData,
      TravelBooksData,
    ]).then((rs) => {
      if (rs[0].data.error === 0) {
        setPending(false);
        setNewBook(rs[0].data);
      } else setError(true);
      if (rs[1].data.error === 0) {
        setPending(false);
        setBestSeller(rs[1].data);
      } else setError(true);
      if (rs[2].data.error === 0) {
        setPending(false);
        setFictionBooks(rs[2].data);
      } else setError(true);
      if (rs[3].data.error === 0) {
        setPending(false);
        setTravelBooks(rs[3].data);
      } else setError(true);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <div className="w-main mx-auto">
        <TitleBook title="NewBooks" />
        {pending ? (
          <div className="">
            <Loading />
          </div>
        ) : error ? (
          <p>Something went wrong !</p>
        ) : (
          <>
            <CustomSlider books={newBook?.books} />
          </>
        )}
        <TitleBook title="BestSeller" />
        {pending ? (
          <Loading />
        ) : error ? (
          <p>Something went wrong !</p>
        ) : (
          <>
            <CustomSlider books={bestSeller?.books} />
          </>
        )}
        <TitleBook title="Fiction" />
        {pending ? (
          <Loading />
        ) : error ? (
          <p>Something went wrong !</p>
        ) : (
          <>
            <CustomSlider books={fictionBooks?.books} />
          </>
        )}
        <TitleBook title="Travel" />
        {pending ? (
          <Loading />
        ) : error ? (
          <p>Something went wrong !</p>
        ) : (
          <>
            <CustomSlider books={travelBooks?.books} />
          </>
        )}
      </div>
      <FooterMiddle />
    </>
  );
};

export default Home;
