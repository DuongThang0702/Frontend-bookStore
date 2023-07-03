"use client";
import { Banner } from "@/components";
import { FC } from "react";
import { BookFrame } from "@/components";
import FooterMiddle from "@/components/layout/FooterMiddle";

const Home: FC = ({}) => {
  return (
    <>
      <Banner />
      <div className="w-main mx-auto">
        <BookFrame />
      </div>
      <FooterMiddle />
    </>
  );
};

export default Home;
