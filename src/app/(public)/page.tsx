"use client";
import { Banner } from "@/components";
import { FC } from "react";
import { BookFrame } from "@/components";

interface homeProps {}

const home: FC<homeProps> = ({}) => {
  return (
    <>
      <Banner />
      <div className="w-main mx-auto">
        <BookFrame />
      </div>
    </>
  );
};

export default home;
