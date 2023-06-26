import { FC } from "react";
import usePagination from "@/hooks/usePagination";
import PagiItem from "./pagiItem";

interface PageProps {
  totalCount: number;
}

const Page: FC<PageProps> = ({ totalCount }) => {
  const pagination = usePagination(totalCount, 1);

  return (
    <div className="flex items-center justify-center gap-x-8">
      {pagination?.map((el) => (
        <PagiItem key={el}>{el}</PagiItem>
      ))}
    </div>
  );
};

export default Page;
