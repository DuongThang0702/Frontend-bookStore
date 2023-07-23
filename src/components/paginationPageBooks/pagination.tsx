"use client";
import { FC, useCallback } from "react";
import usePagination from "@/hooks/usePagination";
import PagiItem from "./pagiItem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface PageProps {
  totalCount: number;
}

const Page: FC<PageProps> = ({ totalCount }) => {
  const router = useRouter();
  const query = useSearchParams();
  const pathname: string = usePathname();
  const currentPage: number = parseInt(query.get("page") as string);
  const pagination = usePagination(totalCount, currentPage);
  const totalPage: number = Math.ceil(
    totalCount / parseInt(process.env.NEXT_PUBLIC_LIMIT as string)
  );
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(query.toString());
      params.set(name, value);
      return params.toString();
    },
    [query]
  );

  return (
    <div className="flex items-center justify-center gap-x-8">
      {currentPage - 1 >= 1 ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("page", (currentPage - 1).toString())
            );
          }}
        >
          <FontAwesomeIcon className="text-base" icon={faChevronLeft} />
        </div>
      ) : (
        ""
      )}
      {pagination?.map((el, index) => (
        <PagiItem key={index}>{el}</PagiItem>
      ))}
      {currentPage + 1 <= totalPage ? (
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push(
              pathname +
                "?" +
                createQueryString("page", (currentPage + 1).toString())
            );
          }}
        >
          <FontAwesomeIcon className="text-base" icon={faChevronRight} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
