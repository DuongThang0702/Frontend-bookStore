"use client";
import { Banner } from "@/components";
import { FC } from "react";
import { BookFrame } from "@/components";
import Link from "next/link";
import Image from "next/image";

interface homeProps {}

const home: FC<homeProps> = ({}) => {
  return (
    <>
      <Banner />
      <div className="w-main mx-auto">
        <BookFrame />
        <Link href={"#"} className="flex items-center justify-center pt-20">
          <Image
            src={"/advertisement.png"}
            height={90}
            width={700}
            alt="books"
          />
        </Link>
      </div>
    </>
  );
};

export default home;
