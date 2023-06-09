"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";

export default function Home() {
  const { categories } = useSelector((state: RootState) => state.app);
  useEffect(() => {}, []);
  console.log(categories);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
