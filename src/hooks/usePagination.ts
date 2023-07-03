import { useMemo } from "react";

const generateRange = (start: number, end: number) => {
  const length: number = end + 1 - start;
  return Array.from({ length }, (_, index: number) => start + index);
};

const usePagination = (
  totalBooksCount: number,
  currentPage: number,
  siblingCount: number = 1
) => {
  const paginationArray = useMemo(() => {
    const pageSize: number =
      parseInt(process.env.NEXT_PUBLIC_LIMIT as string) || 12;
    const paginationCount: number = Math.ceil(totalBooksCount / pageSize);
    // first, last, current, 2*dots = 5
    // totalpage = 5 + siblingCount
    const totalPaginationItem: number = siblingCount + 5;

    if (paginationCount <= totalPaginationItem)
      return generateRange(1, paginationCount);

    const isShowLeft: boolean = currentPage - siblingCount > 2;
    const isShowRight: boolean =
      currentPage + siblingCount < paginationCount - 1;
    if (isShowLeft && !isShowRight) {
      const rightStart = paginationCount - 4;
      const rightRange = generateRange(rightStart, paginationCount);
      return [1, "...", ...rightRange];
    }

    if (!isShowLeft && isShowRight) {
      const leftEnd = generateRange(1, 6);
      return [...leftEnd, "...", paginationCount];
    }
    const siblingLeft: number = Math.max(currentPage - siblingCount, 1);
    const siblingRight: number = Math.min(
      currentPage + siblingCount,
      paginationCount
    );

    if (isShowLeft && isShowRight) {
      const middleRange = generateRange(siblingLeft, siblingRight);
      return [1, "...", ...middleRange, "...", paginationCount];
    }
  }, [totalBooksCount, currentPage, siblingCount]);

  return paginationArray;
};

export default usePagination;

/*
    case 1: [1,2,3,4,5,6]
    case 2: [1,..., 6, 7, 8, 9, 10]
    case 3: [1, 2, 3, 4, 5, ..., 10]
    case 4 : [1, ... , 5, 6, 7 ... ,10]
*/
