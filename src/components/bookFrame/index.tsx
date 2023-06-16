import { FC } from "react";
import BestSeller from "./BestSeller";
import NewBook from "./NewBook";
import BooksRandom from "./BookRandom";

interface indexProps {}

const index: FC<indexProps> = ({}) => {
  return (
    <>
      <BestSeller />
      <NewBook />
      <BooksRandom
        title="Browse Pride Month Reads from NowThis Media"
        style={2}
        limit={8}
      />
      <BooksRandom
        title="Seeds and Sprouts - Gardening Books for Children"
        style={1}
        limit={10}
      />
    </>
  );
};

export default index;
